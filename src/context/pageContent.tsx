import React, {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Lenis from "@studio-freight/lenis";
import debounce from "@/util/debounce";

interface PageContextType {
  lenis: Lenis | null;
}

const PageContext = createContext<PageContextType>({ lenis: null });

export const PageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reqIdRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    let lastHeight = 0;
    let hideNav = false;
    let isScrolled = false;

    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      debounce(() => (lastHeight = scroll))();

      if (lastHeight < scroll && scroll > 160 && !hideNav) {
        document.body.classList.add("hide_header");
        hideNav = true;
      }
      if (lastHeight >= scroll && scroll > 160 && hideNav) {
        document.body.classList.remove("hide_header");
        hideNav = false;
      }

      if (lastHeight < scroll && scroll > 220 && !isScrolled) {
        document.body.classList.add("scrolled");
        isScrolled = true;
      }

      if (lastHeight >= scroll && scroll < 220 && isScrolled) {
        document.body.classList.remove("scrolled");
        isScrolled = false;
      }
    });

    setLenis(lenis);
    return () => {
      if (lenis) {
        lenis.destroy();
        setLenis(null);
      }
    };
  }, []);

  const memoedValue = useMemo(
    () => ({
      lenis,
    }),
    [],
  );

  useEffect(() => {
    if (!lenis) return;

    const animate = (time: number) => {
      lenis.raf(time);
      reqIdRef.current = requestAnimationFrame(animate);
    };
    reqIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (reqIdRef.current) {
        cancelAnimationFrame(reqIdRef.current);
      }
    };
  }, [lenis]);

  return (
    <PageContext.Provider value={memoedValue}>{children}</PageContext.Provider>
  );
};

export default function usePage() {
  return useContext(PageContext);
}
