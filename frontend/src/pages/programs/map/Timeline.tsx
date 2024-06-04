import React from "react";
import DigitalCircle from "../../../assets/digital-circle.png";
import Background from "../../../assets/3d-background.png";

const Timeline: React.FC = () => {
  return (
    <div className="my-20">

      <div className="justify-center items-center text-center">
        <h1 className="font-normal text-white text-5xl">Our Process</h1>
      </div>
      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div className="relative flex items-center  md:justify-normal md:odd:flex-row-reverse group is-active"></div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-uptickblue100 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="10">
              <path
                fill-rule="nonzero"
                d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
              />
            </svg>
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4   border-slate-200 shadow">
            <div className="flex items-center justify-between space-x-2 mb-1"></div>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-uptickblue100 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            1
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]  shadow">
            <section className="bg-upticklightb10 rounded-lg border border-slate-200 p-10 ml-16 w-3/5 space-y-6">
              {" "}
              <div className="">
                <img src={DigitalCircle} alt="Digital Circle" />
              </div>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-semibold text-2xl text-black">
                  Talent Evaluation
                </div>
              </div>
              <div className="text-black font-normal text-base">
                We rigorously assess the skills, experience, and cultural fit of
                our candidates
              </div>
            </section>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-uptickblue100 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            2
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4  shadow">
            <section className="bg-upticklightb10 rounded-lg border border-slate-200 p-10 ml-36 w-3/5 space-y-6">
              {" "}
              <div className="">
                <img src={Background} alt="Background Circle" />
              </div>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-semibold text-2xl text-black">
                  Matching
                </div>
              </div>
              <div className="text-black font-normal text-base">
                We work closely with you to understand your needs and match you
                with the right talent.
              </div>
            </section>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-uptickblue100 group-[.is-active]:bg-uptickblue100 text-white group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            3
          </div>

          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 shadow">
            <section className="bg-upticklightb10 rounded-lg border border-slate-200 p-10 ml-16 w-3/5 space-y-6">
              {" "}
              <div className="">
                <img src={Background} alt="Background Circle" />
              </div>
              <div className="flex items-center justify-between space-x-2 mb-1">
                <div className="font-semibold text-2xl text-black">
                  Support
                </div>
              </div>
              <div className="text-black font-normal text-base">
                Our team provides support throughout the onboarding process to
                ensure a smooth integration into your organization.
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
