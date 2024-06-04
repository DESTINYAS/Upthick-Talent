import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal"; // Import the Modal component
import {
  Program,
  Applicant,
  programs,
  applicants,
} from "../../../data/programs";

const TechDetails: React.FC = () => {
  const { programId } = useParams<{ programId?: string }>();
  const selectedProgramId = programId ? parseInt(programId, 10) : undefined;

  const selectedProgram = selectedProgramId
    ? programs.find((program) => program.id === selectedProgramId)
    : undefined;

  const programApplicants = selectedProgramId
    ? applicants.filter(
        (applicant) => applicant.programId === selectedProgramId
      )
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

  return (
    <div className="p-8">
      {selectedProgram ? (
        <>
          <h2 className="text-xl font-semibold mb-4">{selectedProgram.name}</h2>
          <div>
            <table className="text-left w-full">
              <thead>
                <tr>
                  <th className="pl-12">Name</th>
                  <th>Track</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {programApplicants.map((applicant) => (
                  <tr
                    key={applicant.id}
                    className="mb-4 p-4 text-base font-normal shadow-md h-24 mx-10">
                    <td className="text-lg font-semibold pl-12">
                      {applicant.name}
                    </td>
                    <td>{selectedProgram.name}</td>
                    <td>{applicant.status}</td>
                    <td>{applicant.date}</td>
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
      
                <p>
                  Name: <br />{" "}
                  <span className="text-uptickblue20">
                    {selectedApplicant.name}
                  </span>
                </p>
                <p>
                  Track: <br />
                  <span className="text-uptickblue20">
                    {selectedProgram.name}
                  </span>
                </p>
                <p>
                  Status: <br />{" "}
                  <span className="text-uptickblue20">
                    {selectedApplicant.status}
                  </span>
                </p>
                <p>
                  Date: <br />{" "}
                  <span className="text-uptickblue20">
                    {selectedApplicant.date}
                  </span>
                </p>
                {/* Add more details as needed */}
              </div>
            )}
          </Modal>
        </>
      ) : (
        <p>Program not found</p>
      )}
    </div>
  );
};

export default TechDetails;
