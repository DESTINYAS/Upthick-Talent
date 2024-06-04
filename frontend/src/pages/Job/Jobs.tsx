import React from "react";
import { Link } from "react-router-dom";
import jobs from "../../data/jobs";
import Button from "../../components/Button";

const Job: React.FC = () => {
  return (
    <div className="mx-10 my-16  sm:mx-16 sm:my-24">
      <h1 className="text-5xl font-bold">Featured Jobs</h1>
      {jobs.map((job) => (
        <div
          key={job.id}
          className="container flex flex-col justify-center border-2 rounded-lg mt-8 mb-16 p-2 mx-2 sm:py-2 lg:py-2 lg:flex-row lg:justify-between">
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <img src={job.imgurl} alt="JobImage" className="p-4 " />
          </div>
          <div className="flex flex-col justify-center p-4 text-left space-y-4 sm:space-y-7 sm:ml-2 rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left ">
            <h1 className="font-normal text-2xl">Job ID</h1>
            <h2 className="text-3xl font-bold">{job.title}</h2>
            <p className="text-base font-normal">{job.description}</p>
            <p className="text-base font-normal">
              <span className="text-base font-bold mr-3">Deadline:</span>{" "}
              {job.deadline}
            </p>
            <Link to={`/jobs/${job.id}`}>
              <Button title="Apply For This Job" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Job;
