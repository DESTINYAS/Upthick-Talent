import { useState } from "react";
import Button from "../../components/Button";
import JobForm from "./JobForm";
import { Link }  from "react-router-dom";

interface Job {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

const JobList = () => {
  const [showJobForm, setShowJobForm] = useState(false);

  const toggleJobForm = () => {
    setShowJobForm(!showJobForm);
  };

  const jobsData: Job[] = [
    {
      id: 1,
      title: "Job 1",
      description: "Description",
      startDate: "2023-01-01",
      endDate: "2023-01-10",
    },
    {
      id: 1,
      title: "Job 1",
      description: "Description",
      startDate: "2023-01-01",
      endDate: "2023-01-10",
    },
    {
      id: 1,
      title: "Job 1",
      description: "Description",
      startDate: "2023-01-01",
      endDate: "2023-01-10",
    },
    {
      id: 1,
      title: "Job 1",
      description: "Description",
      startDate: "2023-01-01",
      endDate: "2023-01-10",
    },
    {
      id: 1,
      title: "Job 1",
      description: "Description",
      startDate: "2023-01-01",
      endDate: "2023-01-10",
    },
  ];
  return (
    <div className="jobs">
      {showJobForm ? (
        <JobForm />
      ) : (
        <>
          <h2 className="text-center mb-4 text-2xl font-bold">Job Lists</h2>
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">ID</th>
                <th className="py-2 px-4 border-b text-left">Title</th>
                <th className="py-2 px-4 border-b text-left">Description</th>
                <th className="py-2 px-4 border-b text-left">Start Date</th>
                <th className="py-2 px-4 border-b text-left">End Date</th>
              </tr>
            </thead>
            <tbody>
              {jobsData.map((job) => (
                <tr key={job.id} className="border-b">
                  <td className="py-2 px-4">{job.id}</td>
                  <td className="py-2 px-4">{job.title}</td>
                  <td className="py-2 px-4">{job.description}</td>
                  <td className="py-2 px-4">{job.startDate}</td>
                  <td className="py-2 px-4">{job.endDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex items-center justify-center mt-8">
            <Link to="/jobform">
              <Button
                title="Create New Job"
                // onClick={toggleJobForm}
              />
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default JobList;