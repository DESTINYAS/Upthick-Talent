
import React from "react";
//import Button from "./Button";

const FindYourTalent: React.FC = () => {
  return (
    <section className="py-20 mx-auto items-center justify-center text-deep">
      <div className="w-full mx-auto  flex flex-col items-center bg-white justify-center p-4 space-y-4 md:p-10 md:px-10 xl:px-12">
        <h1 className="text-2xl sm:text-5xl sm:w-3/5 font-bold leadi text-center">
          Ready To Find Your Talent?
        </h1>
        <p className="pt-0 sm:pt-2 pb-2 sm:w-1/2 text-sm sm:text-lg font-medium text-center">
          Ready to discover exceptional non-technical talent for your company?
          We make it easy. Get started by reaching out to us today. We're here
          to facilitate the growth and success of your organization by
          connecting you with the talent you need.
        </p>
        <a href="/contact">
          <button className="px-4 py-2 text-lg font-semibold rounded-lg bg-black text-white hover:bg-uptickblue80">
            Contact Us
          </button>
        </a>
        {/*<Button title={undefined} />*/}
      </div>
    </section>
  );
};

export default FindYourTalent;
