import { useRef } from "react";
import { MainLogo } from "../../assets/Icons";
import gsap from "gsap";
import MenuButton from "../MenuButton";

const Header: React.FC = () => {
  const logoRef = useRef<HTMLDivElement | null>(null);

  const onLogoEnter = () => {
    if (logoRef.current) {
      const currColor = logoRef.current.getAttribute("data-color");
      const logoSvg = logoRef.current.firstChild?.firstChild;

      const nextColor =
        currColor === "#a6e2e3"
          ? "#8566f6"
          : currColor === "#8566f6"
            ? "#ed7c50"
            : "#a6e2e3";

      logoRef.current.setAttribute("data-color", nextColor);
      if (logoSvg && currColor) {
        gsap.to(logoSvg, {
          fill: currColor,
          duration: 0.2,
          ease: "power1.out",
        });
      }
    }
  };
  const onLogoLeave = () => {
    if (logoRef.current) {
      const logoSvg = logoRef.current.firstChild
        ?.firstChild as SVGElement | null;
      if (logoSvg) {
        gsap.to(logoSvg, {
          fill: "#282829",
          duration: 0.2,
          ease: "power1.out",
        });
      }
    }
  };

  return (
    <div className="header min-w-screen fixed left-0 top-0 z-10 w-screen px-7 backdrop-blur transition-all duration-500 ease-out">
      <div className="overflow-hidden bg-none">
        <div className="header_container flex items-center justify-between transition-all duration-500 ease-out will-change-transform lg:py-8">
          <MenuButton>Menu</MenuButton>
          <div
            className="header_logo pointer-event-auto cursor-pointer leading-none transition-height [&>svg]:h-10 [&>svg]:duration-500 [&>svg]:ease-out lg:[&>svg]:h-16"
            data-color="#a6e2e3"
            ref={logoRef}
            onMouseEnter={onLogoEnter}
            onMouseLeave={onLogoLeave}
          >
            <MainLogo />
          </div>
          <MenuButton>Contact</MenuButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
