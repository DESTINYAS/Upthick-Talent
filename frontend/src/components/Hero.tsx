import { ReactNode } from "react";

interface HeroProps {
  backgroundImage: string;
  heading: string;
  paragraph: string;
  buttonText: string | ReactNode;
}

const Hero = ({
  backgroundImage,
  heading,
  paragraph,
  buttonText,
}: HeroProps) => {
  return (
    <div className="min-h-screen flex relative">
      <div className="w-full flex relative">
        <div
          className="bg-cover  bg-right bg-no-repeat absolute inset-0 z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}></div>
        <div className=""></div>
        <div className=""></div>
      </div>
      <div className="absolute inset-0 z-10 flex flex-col items-center mt-32 space-y-11 sm:mx-auto md:auto lg:w-4/5 text-center">
        <h1 className="text-white text-4xl md:text-7xl font-bold relative">
          {heading}
        </h1>

        <div className="w-full md:w-2/3 text-white md:pl-16 md:pr-16">
          <p className="text-base md:text-lg  font-normal p-4 m-2">
            {paragraph}
          </p>
        </div>
        <div className="mt-4">
          {typeof buttonText === "string" ? (
            <button className="p-2 sm:px-5 sm:py-4  text-lg font-semibold sm:h-14 rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30">
              {buttonText}
            </button>
          ) : (
            <button className=" p-2 sm:px-5 sm:py-4  text-lg font-semibold sm:h-14 rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
