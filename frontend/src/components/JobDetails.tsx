// src/components/JobDetails.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobs";
import Button from "./Button";

const JobDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const jobId = id ? parseInt(id, 10) : undefined; // Handle the possibility of id being undefined
  const job = jobId ? jobs.find((j) => j.id === jobId) : undefined;

  if (!job) {
    return (
      <div className="p-96">
        <h1 className="text-7xl font-normal">Job Not Found</h1>
        <Link to="/jobs">
          <Button title="Return To Job Lists" />
        </Link>
      </div>
    );
  }

  return (
    <div className="p-12 sm:p-40 space-y-8">
      <h2 className="text-5xl font-bold">{job.title}</h2>
      <p className="text-base font-normal">
        <span className="text-base font-bold mr-3">Deadline:</span>{" "}
        {job.deadline}
      </p>
      <p className="text-3xl font-medium">{job.subtitle}</p>
      <p className="text-base font-normal">{job.description}</p>
      <p className="text-base font-normal">{job.details}</p>
      <p className="text-base font-normal">{job.requirements}</p>
      <p className="text-base font-normal">{job.aboutus}</p>
      <div>
        <Link to={`/apply/${job.id}`} className="">
          <Button title="Apply For This Job" />
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
