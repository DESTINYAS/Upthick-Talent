// src/components/ApplicantList.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { applicants } from "../../data/programs";
import ReactPaginate from "react-paginate";

const itemsPerPage = 10;

const ApplicantList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentApplicants = applicants.slice(offset, offset + itemsPerPage);

  return (
    <div className="space-y-4 p-12">
      <h1 className="text-6xl py-6 font-bold">Applicant Lists</h1>
      <table className="table-auto w-full border-collapse border">
        <thead>
          <tr className="text-xl font-medium">
            <th className="mr-4">#</th>
            <th className="border">Name</th>
            <th className="border">Email</th>
            <th className="border">Phone</th>
            <th className="border">Status</th>
            <th className="border">CV</th>
            <th className="border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {applicants.map((applicant, index) => (
            <tr className="text-base font-normal" key={applicant.id}>
              <td className="border pl-2">{index + 1}</td>
              <td className="border pl-2">{applicant.name}</td>
              <td className="border pl-2">{applicant.email}</td>
              <td className="border pl-2">{applicant.phone}</td>
              <td className="border pl-2">{applicant.status}</td>
              <td className="border pl-2">
                <a
                  className="text-uptickblue20 pl-2"
                  href={applicant.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </td>
              <td className="border">
                <Link to={`/applicants/${applicant.id}`}>
                  <button className=" p-2 sm:px-4 sm:py-2 ml-2 my-2  text-md font-medium rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30">
                    Preview
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {applicants.length > itemsPerPage && (
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={Math.ceil(applicants.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      )}
      <button className=" p-2 sm:px-4 sm:py-2 ml-2 my-2  text-md font-medium rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30">
        Create Program
      </button>
    </div>
  );
};

export default ApplicantList;
