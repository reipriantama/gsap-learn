import React, { useEffect, useRef } from "react";
import { FlowerLogo } from "../../assets/Icons";
import gsap, { Power1 } from "gsap";
import { CustomEase } from "gsap/dist/CustomEase";

gsap.registerPlugin(CustomEase);
CustomEase.create("cubic-text", "0.25, 1, 0.5, 1");

export const HomeHero = () => {
  const heroInfiniteRef = useRef(null);
  useEffect(() => {
    const titles = document.querySelectorAll(".h_title");
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    titles.forEach((title, index) => {
      const el = title.querySelectorAll("span span");
      const delay = index * 0.08;

      tl.to(
        el,
        {
          y: 0,
          duration: 4,
          ease: "cubic-text",
        },
        delay,
      );
    });

    tl.to(
      heroInfiniteRef.current,
      {
        marginLeft: 0,
        marginRight: 0,
        opacity: 1,
        ease: Power1.easeOut,
      },
      1.2,
    );

    return () => {};
  }, []);

  return (
    <div className="min-h-screen pb-[90px] pt-[120px] lg:py-[180px]">
      <div className="h_container font_apoc flex flex-col items-center px-2 pb-[20vw] lg:pb-[4vw]">
        <h1 className="h_title relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw]">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
              You&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform [&>svg]:w-[11vw] lg:[&>svg]:w-[6.9vw]">
              <FlowerLogo />
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;Can
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;Only
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
              Build&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
              Brands&nbsp;
            </span>
          </span>
        </h1>
        <h1 className="h_title relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw]">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
              People&nbsp;
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
              Love
            </span>
          </span>
        </h1>
        <h1 className="h_title relative w-full text-center text-[15vw] font-light uppercase leading-[90%] lg:text-[8.7vw]">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="font_aeonik inline-block translate-y-full pb-1.5 pt-6 font-medium leading-[81%] text-orange will-change-transform">
              By Loving
            </span>
          </span>
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
              &nbsp;Your
            </span>
          </span>
        </h1>
        <h1 className="h_title relative flex w-full flex-col items-center justify-center text-center text-[15vw] font-light uppercase leading-[90%] lg:flex-row lg:text-[8.7vw]">
          <span className="-mb-1.5 -mt-6 inline-block overflow-hidden align-bottom">
            <span className="inline-block translate-y-full pb-1.5 pt-6 will-change-transform">
              Audience
            </span>
          </span>
          <div
            ref={heroInfiniteRef}
            className="font_aenoik absolute bottom-[-25vw] left-[35%] -mr-10 ml-10 h-8 w-40 opacity-0 overflow-hidden rounded-full border border-black text-xs font-normal uppercase lg:relative lg:bottom-3 lg:left-8 lg:right-[1vw] lg:h-14 lg:w-[16vw] lg:text-xl lg:leading-10"
          >
            <div className="group flex h-full cursor-pointer items-center whitespace-nowrap">
              <span className="group-hover:pause animate-loopL">
                Show Reel 2023© Show Reel 2023©&nbsp;
              </span>
              <span className="group-hover:pause animate-loopL">
                Show Reel 2023© Show Reel 2023©&nbsp;
              </span>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};
