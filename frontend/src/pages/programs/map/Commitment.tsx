
import React from "react";
import CircleImage from "../../../assets/circle.png";

export const Commitment: React.FC = () => {
  return (
    <div className=" text-white my-20 mx-8">
      <div className="container flex flex-col justify-center bg-uptickbg1 p-2 mx-2 sm:p-12  lg:flex-row md:justify-between">
        <div className="flex flex-col justify-center p-4 text-left space-y-8  sm:ml-2 lg:ml-16 rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left">
          <h1 className="text-4xl font-bold sm:text-6xl">Our Commitment</h1>
          <p className="mt-2 mb-2 font-normal text-lg sm:mb-12">
            Our mission is to bridge the gap between companies and exceptional
            talent. We understand that finding the right professionals for your
            organization can be a challenging endeavor.
          </p>
          <p className="mt-2 mb-2 font-normal text-lg sm:mb-12">
            Uptick Talent Map streamlines this process by connecting you with
            pre-vetted, high-potential talent who have excelled in their
            respective fields.
          </p>
        </div>
        <div className="flex items-center  justify-center p-6 mt-8 lg:mr-4 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={CircleImage}
            alt="Circle"
            className="object-contain rounded-b-[10%] bg-ellipse bg-no-repeat bg-right-top bg-auto object-left-bottom h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
