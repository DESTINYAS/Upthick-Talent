import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { FiCalendar } from "react-icons/fi";
import ChartThree from "../../components/ChartThree";
import ChartFour from "../../components/ChartFour";
import Loader from "../../components/Loader";

interface Stats {
  acceptedJobApplications: number;
  acceptedStartupApplications: number;
  acceptedprogramApplications: number;
  jobApplicants: number;
  pendingJobApplications: number;
  pendingStartupApplications: number;
  pendingprogramApplications: number;
  programApplicants: number;
  rejectedJobApplications: number;
  rejectedStartupApplications: number;
  rejectedprogramApplications: number;
  startups: number;
}

interface RecentJobs {
  id: number;
  title: string;
  description: string;
  requirements: string;
  applicationFormLink: string;
  companyLogo: string;
  applicationDeadline: string;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
}

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
  recentApplicants: RecentApplicants[];
  recentJobs: RecentJobs[];
  stats: Stats;
}

const Dashboard: React.FC = () => {
  const [dataFromApi, setDataFromApi] = useState<Data | null>(null);

  useEffect(() => {
    axios
      .get<Data>("https://upthick-talent-teama.onrender.com/admin/home", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        // Set the user data in the state
        setDataFromApi(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function getProgram(id: number) {
    if (id === 4) {
      return "Talent Tech";
    }

    if (id === 5) {
      return "Talent Beginner";
    }

    if (id === 6) {
      return "Talent Business";
    }

    if (id === 7) {
      return "Talent Map";
    }
  }

  return (
    <div className="dashboard relative h-140 overflow-y-auto">
      <div className="welcome-text">
        <h2 className="font-bold text-3xl">Welcome, Admin</h2>
        <p className="text-xs">{moment().format("dddd, Do MMM, YYYY")}</p>
      </div>
      {dataFromApi ? (
        <>
          {" "}
          <div className="boxes flex flex-wrap justify-stretch mt-4">
            <div className="box-1 p-4 mr-2 mb-4 w-full sm:w-auto shadow-md">
              <div className="flex flex-row">
                <div className="flex mb-4 flex-col p-2">
                  <div className="bg-uptickblue20 bg-opacity-40 w-5 h-5 p-4 rounded-2xl mb-2">
                    <FiCalendar className="relative right-2 bottom-2" />
                  </div>
                  <h3 className="font-bold text-md">No of Program Applicant</h3>
                </div>
                <p className="font-extrabold relative left-3 text-4xl w-20 h-12 rounded-md text-uptickpurple60 bg-upticklightp20 px-2 m-2">
                  {dataFromApi.stats.programApplicants}
                </p>
              </div>
              <div className="flex justify-between text-gray-800 mt-2">
                <p className="text-sm mr-2">
                  Accepted{" "}
                  <span className="text-green-600">
                    {dataFromApi.stats.acceptedprogramApplications}
                  </span>
                </p>
                <p className="text-sm mr-2">
                  Rejected{" "}
                  <span className="text-red-600">
                    {dataFromApi.stats.rejectedprogramApplications}
                  </span>
                </p>
                <p className="text-sm">
                  Pending{" "}
                  <span className="text-uptickfaded">
                    {dataFromApi.stats.pendingprogramApplications}
                  </span>
                </p>
              </div>
            </div>
            <div className="box-1 p-4 mr-2 mb-4 w-full sm:w-auto shadow-md">
              <div className="flex flex-row">
                <div className="flex mb-4 flex-col p-2">
                  <div className="bg-uptickblue20 bg-opacity-40 w-5 h-5 p-4 rounded-2xl mb-2">
                    <FiCalendar className="relative right-2 bottom-2" />
                  </div>
                  <h3 className="font-bold text-md">No of Job Applicant</h3>
                </div>
                <p className="font-extrabold relative left-3 text-4xl w-20 h-12 rounded-md text-uptickgreen80 bg-upticklightg20 px-2 m-2">
                  {dataFromApi.stats.jobApplicants}
                </p>
              </div>
              <div className="flex justify-between text-gray-800 mt-2">
                <p className="text-sm mr-2">
                  Accepted{" "}
                  <span className="text-green-600">
                    {dataFromApi.stats.acceptedJobApplications}
                  </span>
                </p>
                <p className="text-sm mr-2">
                  Rejected{" "}
                  <span className="text-red-600">
                    {dataFromApi.stats.rejectedJobApplications}
                  </span>
                </p>
                <p className="text-sm">
                  Pending{" "}
                  <span className="text-uptickfaded">
                    {dataFromApi.stats.pendingJobApplications}
                  </span>
                </p>
              </div>
            </div>
            <div className="box-1 p-4 mr-2 mb-4 w-full sm:w-auto shadow-md">
              <div className="flex flex-row">
                <div className="flex mb-4 flex-col p-2">
                  <div className="bg-uptickblue20 bg-opacity-40 w-5 h-5 p-4 rounded-2xl mb-2">
                    <FiCalendar className="relative right-2 bottom-2" />
                  </div>
                  <h3 className="font-bold text-md">No of Startups</h3>
                </div>
                <p className="font-extrabold relative left-3 text-4xl w-20 h-12 rounded-md text-uptickblu80 bg-upticklightb20 px-7 m-2">
                  {dataFromApi.stats.startups}
                </p>
              </div>
              <div className="flex justify-between text-gray-800 mt-2">
                <p className="text-sm mr-2">
                  Accepted{" "}
                  <span className="text-green-600">
                    {dataFromApi.stats.acceptedStartupApplications}
                  </span>
                </p>
                <p className="text-sm mr-2">
                  Rejected{" "}
                  <span className="text-red-600">
                    {dataFromApi.stats.rejectedStartupApplications}
                  </span>
                </p>
                <p className="text-sm">
                  Pending{" "}
                  <span className="text-uptickfaded">
                    {dataFromApi.stats.pendingStartupApplications}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="recent-applicants my-4">
            <h2 className="font-bold text-uptickblue70 text-lg font-raleway">
              Recent Applicants
            </h2>
            {dataFromApi.recentApplicants.length > 0 ? (
              <table className="table-fixed w-full">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="w-1/4 p-4 pushLeft">Name of Applicants</th>
                    <th className="w-1/4 p-4">Application</th>
                    <th className="w-1/4 p-4">Applied Date</th>
                    <th className="w-1/4 p-4">Status</th>
                    <th className="w-1/4 p-4">View</th>
                  </tr>
                </thead>
                <tbody>
                  {dataFromApi.recentApplicants.map((applicant, index) => (
                    <tr
                      className={`p-4 ${index % 2 === 1 ? "bg-gray-100" : ""}`}
                      key={index}
                    >
                      <td className="p-4 pushLeft">{`${applicant.firstname} ${applicant.lastName}`}</td>
                      <td>{getProgram(applicant.programPreferenceID)}</td>
                      <td>
                        {moment(applicant.applicationDate).format("DD/MM/YYYY")}
                      </td>
                      <td>{applicant.status}</td>
                      <td>Details</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <h5>No recent applicants</h5>
            )}
          </div>
          <section className="flex flex-row">
            <div className="w-1/2">
              <ChartThree />
            </div>
            {/* <div className="w-1/2">
              <ChartFour />
            </div> */}
            <div className="recent-job w-full lg:w-3/5 p-2">
              <h2 className="font-bold text-uptickblue70 text-lg font-raleway">
                Recent Jobs
              </h2>
              {dataFromApi.recentJobs.length > 0 ? (
                <table className="table-fixed w-full">
                  <tbody>
                    {dataFromApi.recentJobs.map((job, index) => (
                      <tr
                        className={`p-4 ${
                          index % 2 === 0 ? "bg-gray-100" : ""
                        }`}
                        key={index}
                      >
                        <td className="td-image">
                          <img src={job.companyLogo} alt="Company's Logo" />
                        </td>
                        <td>Andela</td>
                        <td>{job.title}</td>
                        <td>3</td>
                        <td>Details</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <h5 className="c">No recent jobs</h5>
              )}
            </div>
          </section>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Dashboard;