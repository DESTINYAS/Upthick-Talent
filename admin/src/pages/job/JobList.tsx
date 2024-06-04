import React, { useState } from "react";
import { Job, jobs, applicants } from "../../data/jobs";
import Dots from "../../assets/dots.png";
import Plus from "../../assets/plus.png";
import ModalOptions from "./ModalOptions";
import JobCreationForm from "./JobCreationForm";

interface JobApplicantCount {
  [key: number]: number;
}

const TechList: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJobCreationFormOpen, setIsJobCreationFormOpen] = useState(false);

  const handleProgramClick = (jobId: number) => {
    setSelectedProgram(jobId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProgram(null);
    setIsModalOpen(false);
  };

  const handleOpenApplication = () => {
    console.log("Open Application");
    handleCloseModal();
  };

  const handleCloseApplication = () => {
    console.log("Close Application");
    handleCloseModal();
  };

  const handleViewDetails = () => {
    console.log("View Applicant Details");
    handleCloseModal();
  };

  const handleAddNewJob = () => {
    setIsJobCreationFormOpen(true);
  };

  const jobApplicantCount: JobApplicantCount = jobs.reduce(
    (countMap, job) => ({
      ...countMap,
      [job.id]: applicants.filter((applicant) => applicant.jobId === job.id)
        .length,
    }),
    {}
  );

  return (
    <div className="p-8 bg-programbg h-140 overflow-y-auto">
      <div className="flex flex-row justify-between mb-6">
        <h2 className="text-2xl font-bold mb-4">Jobs</h2>
        <button
          className="flex flex-row p-1 justify-end items-end sm:px-3 sm:py-3 mr-4 text-base font-semibold h-12 rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30"
          onClick={handleAddNewJob}
        >
          <img src={Plus} alt="Plus" /> Add New
        </button>
      </div>
      <div className="w-full pr-8">
        <table className="text-left w-full">
          <thead>
            <tr className="text-xl font-medium">
              <th className="pl-4">Role</th>
              <th className="">No. of Applicants</th>
              <th className="">Deadline</th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
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
                <td className="pl-2">
                  <button onClick={() => handleProgramClick(job.id)}>
                    <img src={Dots} alt="Dots" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModalOptions
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onOpenApplication={handleOpenApplication}
        onCloseApplication={handleCloseApplication}
        jobId={selectedProgram}
      />
      <JobCreationForm
        isOpen={isJobCreationFormOpen}
        onClose={() => setIsJobCreationFormOpen(false)}
      />
    </div>
  );
};

export default TechList;
