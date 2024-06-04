import React, { useState, useEffect } from "react";
import Dots from "../../../assets/dots.png";
import ErrorPicture from "../../../assets/ErrorPicture.png";
import Plus from "../../../assets/plus.png";
import ModalOptions from "./ModalOptions";
import axios from "axios";
import Loader from "../../../components/Loader";

interface Applicant {
  id: number;
  firstname: string;
  lastName: string;
  email: string;
  phone: string;
  programPreferenceID: number;
}

interface ProgramStats {
  programApplicants: number;
}

interface Data {
  recentApplicants: Applicant[];
  stats: {
    [key: string]: ProgramStats;
  };
}

const MapList: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<number | null>(null);
  const [dataFromApi, setDataFromApi] = useState<Data | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [programStats, setProgramStats] = useState<{
    [key: string]: ProgramStats;
  }>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the token from localStorage
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Token is missing. Redirecting to login page.");
          redirectToLogin();
        }

        const response = await axios.get<Data>(
          "https://upthick-talent-teama.onrender.com/applications",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Response structure:", response.data);

        if (!Array.isArray(response.data)) {
          console.error(
            "Invalid response structure. Check the API response format."
          );
          return;
        }

        setDataFromApi(response.data);

        const statsByProgram: { [key: string]: ProgramStats } = {};

        response.data.forEach((applicant) => {
          const programKey = String(applicant.programPreferenceID);

          // Check if the stats for the program exist
          if (!statsByProgram[programKey]) {
            // Initialize with default values
            statsByProgram[programKey] = { programApplicants: 0 };
          }

          // Increment the count for the program
          statsByProgram[programKey].programApplicants += 1;
        });

        setProgramStats(statsByProgram);
      } catch (error) {
        console.error("Error fetching data:", error);

        if (axios.isAxiosError(error) && error.response?.status === 401) {
          console.error("Token expired. Redirecting to login page.");
          redirectToLogin();
        } else {
          setError("Error fetching data. Please try again.");
          setLoading(false);
        }
      }
    };

    const redirectToLogin = () => {
      setTimeout(() => {
        window.location.href = "/";
      }, 500);
    };

    fetchData();
  }, []);

  const handleProgramClick = (programId: number) => {
    setSelectedProgram(programId);
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

  function getProgram(programPreferenceID: number) {
    if (programPreferenceID === 1) {
      return null;
    }
    if (programPreferenceID === 2) {
      return null;
    }
    if (programPreferenceID === 3) {
      return null;
    }
    if (programPreferenceID === 4) {
      return null;
    }
    if (programPreferenceID === 5) {
      return "Uptick Talent Map";
    }
    if (programPreferenceID === 6) {
      return null;
    }

    return "";
  }

  return (
    <div className="p-8 bg-programbg">
      <div className="flex flex-row justify-between mb-6">
        <h2 className="text-2xl font-bold mb-4">Talent Tech</h2>
        <button className="flex flex-row p-1 justify-end items-end sm:px-3 sm:py-3  text-base font-semibold h-12 rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30">
          <img src={Plus} alt="Plus" /> Add New
        </button>
      </div>
      <div className="w-full pr-8">
        {loading ? (
          <Loader />
        ) : error ? (
          <div>
            <p>{error}</p>
            <button onClick={() => window.location.reload()}>Retry</button>
          </div>
        ) : dataFromApi ? (
          <table className="table-fixed w-full">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="w-1/4 p-4">Programs</th>
                <th className="w-1/4 p-4">No Of Applicants</th>
                <th className="w-1/4 p-4"></th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(programStats).map((programId, index) => (
                <tr
                  key={programId}
                  className={`p-4 ${index % 2 === 1 ? "bg-gray-100" : ""}`}>
                  <td className="p-4">{getProgram(Number(programId))}</td>
                  <td className="pl-10">
                    {programStats[programId].programApplicants}
                  </td>

                  <td className="pl-14">
                    <button
                      onClick={() => handleProgramClick(Number(programId))}>
                      <img src={Dots} alt="Dots" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="justify-center items-center px-40">
            <img src={ErrorPicture} alt="ErrorPicture" />
            <h1 className="text-4xl font-semibold">OOPS! It’s Empty</h1>
            <p className="text-2xl font-normal">
              Looks like you haven’t added any Jobs yet...!!!!
            </p>
          </div>
        )}
      </div>
      <ModalOptions
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onOpenApplication={handleOpenApplication}
        onCloseApplication={handleCloseApplication}
        programId={selectedProgram}
      />
    </div>
  );
};
export default MapList;
