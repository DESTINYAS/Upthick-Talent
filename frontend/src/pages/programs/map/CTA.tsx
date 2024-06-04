import React from "react";
import {Link} from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <div className="bg-center bg-white bg-no-repeat h-full bg-wing">
      <section className="py-20 lg:py-56">
        <div className="px-0 mx-auto max-w-screen-xl text-center py-7 lg:py-5">
          <section className="">
            <div className="container mx-auto  flex flex-col items-center justify-center p-4 space-y-4 md:p-10 md:px-24 xl:px-48">
              <h1 className="text-5xl font-bold sm:w-2/3 leadi text-deep text-center">
                Uptick Talent Map
              </h1>
              <p className="text-sm mx-auto sm:w-5/12 font-normal text-deep text-center">
                Find exceptional technical & non-technical tech talent for your
                company or partner with us to discover the right fit.
              </p>
              <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-8">
                <Link to="/uptick-talent-map">
                  <button className="px-8 py-3 text-lg font-semibold rounded bg-uptickblue100 text-white hover:bg-upticklightb10">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CTA;
