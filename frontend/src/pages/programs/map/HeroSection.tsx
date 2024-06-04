
import React from "react";
import YoungWomen from "../../../assets/young-woman.png";

export const HeroSection: React.FC = () => {
  return (
    <div className="text-deep bg-uptickwhiteshade">
      <div className="container flex flex-col justify-center p-2 mx-2 sm:py-2 lg:py-6 lg:flex-row lg:justify-between">
        <div className="flex items-center  justify-center p-6 mt-2 lg:mr-4 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={YoungWomen}
            alt="Young Women"
            className="object-contain rounded-b-[10%] bg-ellipse bg-no-repeat bg-right-top bg-auto object-left-bottom h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center p-4 text-left space-y-8 sm:mt-6 sm:ml-2 lg:ml-16 rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left">
          <h1 className="text-3xl font-bold sm:text-5xl">Uptick Talent Map</h1>
          <p className="mt-2 mb-2 font-normal text-lg sm:mb-4">
            Uptick Talent, we're more than a talent platform – we're your
            strategic gateway to a future-ready workforce. Welcome to Uptick
            Talent Map, your source for discovering top-tier technical and
            non-technical talent. Whether you need software engineers,
            designers, or specialized roles, we have you covered.
          </p>
          <p className="mt-2 mb-2 font-normal text-lg sm:mb-4">
            In today's dynamic business landscape, short-term hiring is crucial,
            but we take it further. We help your organization anticipate and
            meet immediate to long-term hiring goals aligned with your mission.
          </p>
          <p className="mt-2 mb-2 font-normal text-md sm:mb-4">
            Our B2B service caters to companies of all sizes, offering
            end-to-end solutions for tech-related roles. From entry-level to
            C-Suite, we empower both SMEs and startups with the talent to fuel
            your growth.
          </p>
        </div>
      </div>
    </div>
  );
};
