import React from "react";
import { useParams } from "react-router-dom";
import { applicants } from "../../data/programs";

const ProgramDetails: React.FC = () => {
  const { id } = useParams<{ id?: string }>();
  const applicantId = id ? parseInt(id, 10) : undefined; // Handle the possibility of id being undefined
  const applicant = applicantId
    ? applicants.find((j) => j.id === applicantId)
    : undefined;

  if (!applicant) {
    return <div>Applicant not found</div>;
  }

  return (
    <div className="space-y-6 p-10">
      <h1 className="font-bold text-5xl">Applicant Details</h1>
      <ul className="space-y-2 text-lg font-normal">
        <li>
          <strong>Name:</strong> {applicant.name}
        </li>
        <li>
          <strong>Email:</strong> {applicant.email}
        </li>
        <li>
          <strong>Phone:</strong> {applicant.phone}
        </li>
        <li>
          <strong>Status:</strong> {applicant.status}
        </li>
        <li>
          <strong>CV:</strong>{" "}
          <a
            className="text-uptickblue20"
            href={applicant.cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProgramDetails;