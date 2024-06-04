
import React from "react";
import Button from "../../components/Button";
//import Button from "./Button";

const JoinUs: React.FC = () => {
  return (
    <section className="py-6 w-full  bg-white text-white">
      <div className="py-20 w-full flex flex-col items-center bg-uptickblue100 justify-center space-y-6 sm:space-y-12 ">
        <h1 className="text-2xl  sm:text-6xl font-semibold leadi text-center">
          Join Us in Shaping the Future!
        </h1>
        <p className="pt-0 sm:pt-2 pb-2 text-lg sm:text-lg font-medium sm:w-7/12 text-center">
          Uptick Talent is your gateway to a world of opportunities in
          technology and business. Start your journey with us today!
        </p>
      <Button title="Explore Our Programs" />
        {/*<Button title={undefined} />*/}
      </div>
    </section>
  );
};

export default JoinUs;
