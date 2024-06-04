import React from "react";
import { Job, jobs, applicants } from "../data/jobs";

interface JobApplicantCount {
  [key: number]: number;
}

const ChartFour: React.FC = () => {
  const jobApplicantCount: JobApplicantCount = jobs.reduce(
    (countMap, job) => ({
      ...countMap,
      [job.id]: applicants.filter((applicant) => applicant.jobId === job.id)
        .length,
    }),
    {}
  );

  // Sort the jobs based on the number of applicants in descending order
  const sortedJobs = [...jobs].sort(
    (jobA, jobB) =>
      jobApplicantCount[jobB.id] - jobApplicantCount[jobA.id]
  );

  // Get the top 3 jobs
  const top3Jobs = sortedJobs.slice(0, 3);

  return (
    <div className="p-8 bg-programbg">
      <div className="w-full pr-8">
        <table className="text-left w-full">
          <thead>
            <tr className="text-xl font-medium">
              <th className="pl-4">Company</th>
              <th className="pl-4">Role</th>
              <th className="">No. of Applicants</th>
              <th className="">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {top3Jobs.map((job) => (
              <tr
                className="text-base font-normal shadow-md h-24 mx-10"
                key={job.id}
              >
                <td className="py-2 px-4 mt-6 flex items-center">
                  <img
                    src={job.logo}
                    alt={`${job.name} Logo`}
                    className="h-8 w-8 mr-2"
                  />
                  <span>{job.name}</span>
                </td>
                <td className="font-normal text-base pl-4">{job.role}</td>
                <td className="pl-2 font-semibold text-base">
                  {jobApplicantCount[job.id]}
                </td>
                <td className="font-normal text-base pl-4">{job.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ChartFour;
