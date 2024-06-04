import React from "react";
import { Link } from "react-router-dom";
import LittleBoy from "../../assets/little-boy.png";
import StudyGroup from "../../assets/study-group.png";
import MediumShot from "../../assets/medium-shot.png";
import SoftwareDeveloper from "../../assets/software-developer.png";

const OurPrograms: React.FC = () => {
  return (
    <div className="m-10 sm:m-15 space-y-8 sm:space-y-14 py-10">
      {/* First Section Card*/}
      <h2 className="sm:pl-40 text-white font-medium text-5xl">Our Programs</h2>
      <div>
        <section className="bg-parent py-4">
          <div className="flex flex-col items-center px-10 md:px-36 md:space-x-20 sm:flex-row my-3">
            <div className="flex w-full   sm:px-3 space-y-12  h-full md:w-1/2">
              <div className="p-4 sm:p-8 rounded-xl shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img
                  src={LittleBoy}
                  loading="lazy"
                  alt="Little Boy"
                  className="object-cover object-center  w-full rounded-md h-fit dark:bg-gray-500"
                />
                <div className="mt-6">
                  <h2 className="text-2xl font-bold tracki">
                    Uptick Talent Beginners
                  </h2>
                </div>
                <p className="text-white mt-6 font-normal text-base">
                  Ignite young minds with our technology and business training
                  designed for secondary school students. Empower the leaders of
                  tomorrow!
                </p>
                <div className="flex flex-row  mt-6 space-y-0 space-x-3">
                  <button className=" p-2 sm:px-4 sm:py-2 text-md font-medium rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30">
                    Apply Now
                  </button>
                  <Link to="/programs/beginner">
                    <button className="p-3 sm:px-8 sm:py-2 text-md font-medium border rounded-lg text-white border-gray-300 hover:bg-uptickblue10">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>{" "}
            <div className="flex w-full sm:px-3 mt-8 sm:mt-0 space-y-12  h-full md:w-1/2">
              <div className="p-4 sm:p-8 rounded-xl shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img
                  src={StudyGroup}
                  loading="lazy"
                  alt="Study Group"
                  className="object-cover object-center  w-full rounded-md h-fit dark:bg-gray-500"
                />
                <div className="mt-6">
                  <h2 className="text-2xl font-bold tracki">
                    Uptick Talent Tech
                  </h2>
                </div>
                <p className="text-white mt-6 font-normal text-base">
                  Embark on a journey through technology with our engineering,
                  design and other non-technical programs. Elevate your skills
                  and career.!
                </p>
                <div className="flex flex-row  mt-6 space-y-0 space-x-3">
                  <button className=" p-2 sm:px-4 sm:py-2  text-md font-medium rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30">
                    Apply Now
                  </button>
                  <Link to="/programs/tech">
                    <button className="p-3 sm:px-8 sm:py-2 text-md font-medium border rounded-lg text-white border-gray-300 hover:bg-uptickblue10">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/*Second section Cards*/}
          <div className="flex flex-col items-center md:mt-10 px-10 md:px-36 md:space-x-20 sm:flex-row my-3">
            <div className="flex w-full sm:px-3 space-y-12  h-full md:w-1/2">
              <div className="p-4 sm:p-8 rounded-xl shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img
                  src={MediumShot}
                  alt="Medium Shot"
                  loading="lazy"
                  className="object-cover object-center  w-full rounded-md h-fit dark:bg-gray-500"
                />
                <div className="mt-6">
                  <h2 className="text-2xl font-bold tracki">
                    Uptick Talent Business
                  </h2>
                </div>
                <p className="text-white mt-6 font-normal text-base">
                  Join our thriving startup ecosystem, receive mentorship, and
                  transform your innovative ideas into successful businesses.
                </p>
                <div className="flex flex-row  mt-6 space-y-0 space-x-3">
                  <Link to="/uptick-talent-business">
                    <button className=" p-2 sm:px-4 sm:py-2  text-md font-medium rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30">
                      Apply Now
                    </button>
                  </Link>
                  <Link to="/programs/business">
                    <button className="p-3 sm:px-8 sm:py-2 text-md font-medium border rounded-lg text-white border-gray-300 hover:bg-uptickblue10">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>{" "}
            <div className="flex w-full mt-8 sm:mt-0 sm:px-3 space-y-12  h-full md:w-1/2">
              <div className="p-4 sm:p-8 rounded-xl shadow-md dark:bg-gray-900 dark:text-gray-50">
                <img
                  loading="lazy"
                  src={SoftwareDeveloper}
                  alt="Software Developer"
                  className="object-cover object-center  w-full rounded-md h-fit dark:bg-gray-500"
                />
                <div className="mt-6">
                  <h2 className="text-2xl font-bold tracki">
                    Uptick Talent Map
                  </h2>
                </div>
                <p className="text-white mt-6 font-normal text-base">
                  Find exceptional technical & non-technical tech talent for
                  your company or partner with us to discover the right fit
                </p>
                <div className="flex flex-row  mt-6 space-y-0 space-x-3">
                  <Link to="/uptick-talent-map">
                    <button className=" p-2 sm:px-4 sm:py-2  text-md font-medium rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30">
                      Apply Now
                    </button>
                  </Link>
                  <Link to="/programs/map">
                    <button className="p-3 sm:px-8 sm:py-2 text-md font-medium border rounded-lg text-white border-gray-300 hover:bg-uptickblue10">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurPrograms;
