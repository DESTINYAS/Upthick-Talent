import React from "react";
import HeroImage from "../../assets/HeroImage.png";
import Button from "../../components/Button";

export const HeroSection: React.FC = () => {
  return (
    <div className="text-white bg-hero-background bg-cover">
      <div className="container flex flex-col justify-center p-2 mx-2 py-4  lg:py-12 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-4 text-left sm:space-y-9 sm:ml-2 lg:ml-8 rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left">
          <h1 className="text-4xl tracking-wide font-bold sm:text-6xl">
            Accelerating Technology Progress and Opportunities
          </h1>
          <p className="mt-2 mb-2 font-normal text-lg sm:mb-12">
            Uptick Talent fuels critical technology progress by empowering the
            next generation of tech and business leaders across Africa through
            innovative solutions and strategic partnerships.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Button title="Learn More" />
          </div>
        </div>
        <div className="flex items-center  justify-center p-1 mt-8 lg:mr-2 lg:mt-0 h-72 sm:h-full ">
          <img
            src={HeroImage}
            alt="HeroImage"
            className="object-contain object-left-bottom h-72 sm:h-full "
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
