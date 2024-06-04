import React from "react";
import { Link } from "react-router-dom";

export const Welcome: React.FC = () => {
  return (
    <div className="bg-auto md:py-24 bg-welcome-back">
      <div className="px-0 mx-auto  max-w-screen-xl text-center ">
        <section className="mt--20">
          <div className="container mx-auto flex flex-col space-y-12 items-center justify-center p-4 md:p-10 md:px-24 xl:px-48">
            <h1 className="text-5xl  sm:text-7xl font-bold lg:w-11/12 leading text-white text-center">
              Discover Your Potential with{" "}
              <span className="bg-gradient-to-r from-uptickblue10 to-uptickpurpleg text-transparent bg-clip-text">
                Uptick Talent
              </span>
            </h1>
            <p className="text-xl mx-auto lg:w-2/3 font-normal text-white text-center">
              Uptick Talent incubates and empowers the next generation of great
              technology and business talent through innovative solutions.
            </p>
            <div className="flex flex-row space-y-0 space-x-3">
              <Link to="/programs">
                <button className=" p-1 sm:px-5 sm:py-4   text-sm sm:text-lg font-semibold h-14 rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30">
                  Explore Our Programmes
                </button>
              </Link>
              <Link to="/jobs">
                <button className="p-1 sm:px-5 sm:py-4 text-sm sm:text-lg font-semibold h-14 border rounded-lg text-white border-gray-300 hover:bg-uptickblue10">
                  Apply For Jobs
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
