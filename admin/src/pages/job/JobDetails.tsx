import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import { Job, Applicant, jobs, applicants } from "../../data/jobs";
import clarity from "../../assets/clarity.png";

const JobDetails: React.FC = () => {
  const { jobId } = useParams<{ jobId?: string }>();
  const selectedJobId = jobId ? parseInt(jobId, 10) : undefined;

  const selectedJob = selectedJobId
    ? jobs.find((job) => job.id === selectedJobId)
    : undefined;

  const jobApplicants = selectedJobId
    ? applicants.filter((applicant) => applicant.jobId === selectedJobId)
    : [];

  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (applicant: Applicant) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedApplicant(null);
    setIsModalOpen(false);
  };
  const downloadCSV = () => {
    if (jobApplicants.length > 0) {
      const csvData = `Name,Track,Status,Date\n${jobApplicants
        .map(
          (applicant) =>
            `${applicant.name},${selectedJob?.name},${applicant.status},${applicant.deadline}`
        )
        .join("\n")}`;

      const blob = new Blob([csvData], { type: "text/csv" });
      const csvUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = csvUrl;
      link.style.display = "none";
      link.download = "applicants_details.csv";

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(csvUrl);
    }
  };
  const downloadCv = () => {
    if (selectedApplicant) {
      const cvPath = selectedApplicant.cv;

      const link = document.createElement("a");
      link.href = cvPath;
      link.download = "cv_file"; // You can set a custom filename if needed
      document.body.appendChild(link);

      // Trigger the click event to start the download
      link.click();

      // Remove the link element from the DOM
      document.body.removeChild(link);
    }
  };

  return (
    <div className="p-8">
      {selectedJob ? (
        <>
          <div className="flex flex-row mt-4 justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">{selectedJob.name}</h2>
            <button
              className="flex flex-row bg-upticklightb40 text-black hover:bg-upticklightb30 px-4 py-2 rounded-md"
              onClick={downloadCSV}>
              Download CSV <img src={clarity} alt="" loading="lazy" />
            </button>
          </div>
          <div>
            <table className="text-left w-full">
              <thead>
                <tr>
                  <th className="pl-12">Name</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {jobApplicants.map((applicant) => (
                  <tr
                    key={applicant.id}
                    className="mb-4 p-4 text-base font-normal shadow-md h-24 mx-10">
                    <td className="text-lg font-semibold pl-12">
                      {applicant.name}
                    </td>
                    <td>{applicant.status}</td>
                    <td>{applicant.deadline}</td>
                    <td className="">
                      <button
                        className="flex flex-row p-1 justify-end items-end sm:px-3 sm:py-3  text-base font-normal h-12  bg-upticklightb40 text-black hover:bg-upticklightb30"
                        onClick={() => handleViewDetails(applicant)}>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            {/* Render modal content here */}
            {selectedApplicant && (
              <div className="w-full h-full text-lg font-normal space-y-7">
                 <button
                  className="bg-neutral text-white p-2 rounded-md mt-4"
                  onClick={downloadCv}>
                  Download Resume/CV
                </button>
                <p>
                  Name: <br />{" "}
                  <span className="text-uptickblue20">
                    {selectedApplicant.name}
                  </span>
                </p>
                <p>
                  Track: <br />
                  <span className="text-uptickblue20">{selectedJob.name}</span>
                </p>
                <p>
                  Status: <br />{" "}
                  <span className="text-uptickblue20">
                    {selectedApplicant.status}
                  </span>
                </p>
                <p>
                  Date: <br />
                  <span className="text-uptickblue20">
                    {selectedApplicant.deadline}
                  </span>
                </p>
               
                {/* Add more details as needed */}
              </div>
            )}
          </Modal>
        </>
      ) : (
        <p>Details not found</p>
      )}
    </div>
  );
};

export default JobDetails;
