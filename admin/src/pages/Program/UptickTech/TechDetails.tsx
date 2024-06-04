import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Modal from "./Modal";
import axios from "axios";
import clarity from "../../../assets/clarity.png";
import moment from "moment";

interface RecentApplicants {
  id: number;
  firstname: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  yearsOfExp: string;
  feStack: string;
  beStack: string;
  mobileStack: string;
  otherStack: string;
  githubLink: string;
  careerGoals: string;
  portfolioLink: string;
  availability: string;
  fellowshipInfo: string;
  resume: string;
  type: string;
  programPreferenceID: number;
  jobAppliedForID: number;
  applicationDate: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

interface Data {
  program: RecentApplicants; // Add this line
  applicants: RecentApplicants[];
  recentApplicants: RecentApplicants[];
  recentJobApplicants: string[];
}

const TechDetails: React.FC = () => {
  const { programId } = useParams<{ programId?: string }>();
  const selectedProgramId = programId ? parseInt(programId, 10) : undefined;

  const [selectedProgram, setSelectedProgram] = useState<RecentApplicants | null>(null);
  const [programApplicants, setProgramApplicants] = useState<RecentApplicants[]>([]);
  const [selectedApplicant, setSelectedApplicant] = useState<RecentApplicants | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data>(`https://upthick-talent-teama.onrender.com/programs/${selectedProgramId}`);
        setSelectedProgram(response.data.program);
        setProgramApplicants(response.data.applicants);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (selectedProgramId) {
      fetchData();
    }
  }, [selectedProgramId]);

  

  const handleViewDetails = (applicant: RecentApplicants) => {
    setSelectedApplicant(applicant);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedApplicant(null);
    setIsModalOpen(false);
  };
  const downloadCSV = () => {
    if (programApplicants.length > 0) {
      const csvData = `Name,Track,Status,Date\n${programApplicants
        .map(
          (applicant) =>
            `${`${applicant.firstname} ${applicant.lastName}`},${selectedProgram?.id},${applicant.status},${applicant.email}`
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

  return (
    <div className="p-8">
      {selectedProgram ? (
        <>
          <div className="flex flex-row mt-4 justify-between items-center">
            <h2 className="text-xl font-semibold mb-4">
              {`${selectedProgram.firstname} ${selectedProgram.lastName}`}
            </h2>
            <button
              className="flex flex-row bg-upticklightb40 text-black hover:bg-upticklightb30 px-4 py-2 rounded-md"
              onClick={downloadCSV}>
              Download CSV <img src={clarity} alt="" />
            </button>
          </div>
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
                    {`${applicant.firstname} ${applicant.lastName}`}
                    </td>
                    <td>{selectedProgram.id}</td>
                    <td>{applicant.status}</td>
                    <td> {moment(applicant.applicationDate).format("DD/MM/YYYY")}</td>
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
                  {`${selectedApplicant.firstname} ${selectedApplicant.lastName}`}
                  </span>
                </p>
                <p>
                  Track: <br />
                  <span className="text-uptickblue20">
                    {selectedProgram.phone}
                  </span>
                </p>
                <p>
                  Status: {" "}
                  <span className="text-uptickblue20">
                    {selectedApplicant.status}
                  </span>
                </p>
                <p>
                  Date: <br />{" "}
                  <span className="text-uptickblue20">
                    {selectedApplicant.phone}
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

export default TechDetails;
