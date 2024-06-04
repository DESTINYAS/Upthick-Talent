import React, { useState } from "react";
import JobCreationFormProps from "./JobCreationFormProps";
import close from "../../assets/close.png";
import axios from "axios";
import JobDetails from "./JobDetails";

const JobCreationForm: React.FC<JobCreationFormProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState(1);
  const [logo, setLogo] = useState<File | null>(null);
  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    requirements: "",
    applicationFormLink: "",
    applicationDeadline: "",
    startDate: "",
    endDate: "",
    file: "",
  });

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleCreateJob = async () => {
    console.log("Form Data:", JobDetails);
    console.log("JSON String:", JSON.stringify(JobDetails));
    try {
      const formData = new FormData();

      formData.append("logo", logo || "");

      formData.append("jobDetails", JSON.stringify(jobDetails));

      const response = await axios.post(

        "https://upthick-talent-teama.onrender.com/jobs",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status !== 200) {
        throw new Error(`Failed to create job: ${response.statusText}`);
      }

      console.log("Job created successfully");
      onClose();
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        console.error("Validation error:", error.response.data);
      } else {
        console.error("Error creating job:", error.message);
      }
    }
  };

  const renderStep = () => {
    const breadcrumbs = ["Add Thumbnail", "Add Title", "Preview"];

    return (
      <div className="text-center p-4 w-full h-128 overflow-y-auto">
        {breadcrumbs.map((breadcrumb, index) => (
          <span
            key={index}
            className={`cursor-pointer ${
              index === step - 1 ? "border-b-2 border-blue-500" : "mx-10"
            }`}
            onClick={() => setStep(index + 1)}>
            {breadcrumb}
          </span>
        ))}
        {step === 1 && (
          <div>
           <div className="flex w-full items-center justify-center">
              <label htmlFor="file-upload" className="blog-file-upload">
                <h2 className="bg-blue-500">Browse</h2>
                <input
                  type="file"
                  accept="image/*"
                  id="file-upload"
                  onChange={(e) => setLogo(e.target.files?.[0] || null)}
                  className="blog-file-input"
                  placeholder="upload file"
                />
              </label>
            </div>
            <div>
              <button
                className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600"
                onClick={handleNextStep}>
                Save
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="text-left">
            <label className="font-medium text-lg" htmlFor="title">
              Title:-
            </label>
            <input
              type="text"
              placeholder=""
              name="title"
              value={jobDetails.title}
              onChange={(e) =>
                setJobDetails({ ...jobDetails, title: e.target.value })
              }
              className=" p-2 mb-4 w-full h-7 transition-all duration-300 hover:border-transparent focus:outline-none focus:border-b focus:border-blue-500"
              style={{ borderBottom: "1px solid #000000" }}
              required
            />
            <div className="flex flex-row space-x-4">
              {" "}
              <label className="font-medium text-lg" htmlFor="description">
                Description:-
              </label>
              <textarea
                placeholder=""
                name="description"
                value={jobDetails.description}
                onChange={(e) =>
                  setJobDetails({ ...jobDetails, description: e.target.value })
                }
                className="p-2 mb-4 w-2/5  transition-all duration-300 hover:border-transparent focus:outline-none focus:border-b focus:border-blue-500"
                style={{ borderBottom: "1px solid #000000" }}
                required
              />
            </div>
            <div className="flex flex-row space-x-4">
              <label className="font-medium text-lg" htmlFor="requirements">
                Requirements:-
              </label>
              <textarea
                placeholder=""
                name="requirements"
                value={jobDetails.requirements}
                onChange={(e) =>
                  setJobDetails({ ...jobDetails, requirements: e.target.value })
                }
                className="font-normal text-lg p-2 mb-4 w-2/5 transition-all duration-300 hover:border-transparent focus:outline-none focus:border-b focus:border-blue-500"
                style={{ borderBottom: "1px solid #000000" }}
                required
              />
            </div>
            <div>
              <label
                className="font-medium text-lg"
                htmlFor="applicationFormLink">
                Application Form URL:-
              </label>
              <input
                type="url"
                placeholder=""
                name="applicationFormLink"
                value={jobDetails.applicationFormLink}
                onChange={(e) =>
                  setJobDetails({
                    ...jobDetails,
                    applicationFormLink: e.target.value,
                  })
                }
                className="font-normal text-sm p-2 mb-4 w-1/2 ml-2 h-7 transition-all duration-300 hover:border-transparent focus:outline-none focus:border-b focus:border-blue-500"
                style={{ borderBottom: "1px solid #000000" }}
                required
              />
            </div>

            <div>
              <label
                className="font-medium text-lg"
                htmlFor="applicationDeadline">
                Application Deadline:-
              </label>
              <input
                type="datetime-local"
                name="applicationDeadline"
                placeholder=""
                value={jobDetails.applicationDeadline}
                onChange={(e) =>
                  setJobDetails({
                    ...jobDetails,
                    applicationDeadline: e.target.value,
                  })
                }
                className="font-normal text-sm p-2 mb-4 w-1/4 h-7 ml-6 transition-all duration-300 hover:border-transparent focus:outline-none focus:border-b focus:border-blue-500"
                style={{ borderBottom: "1px solid #000000" }}
                required
              />
            </div>

            <div>
              <label className="font-medium text-lg" htmlFor="startDate">
                Start Date:-
              </label>
              <input
                type="datetime-local"
                name="startDate"
                placeholder=""
                value={jobDetails.startDate}
                onChange={(e) =>
                  setJobDetails({ ...jobDetails, startDate: e.target.value })
                }
                className="font-normal text-sm p-2 mb-4 w-1/4 h-7 ml-6 transition-all duration-300 hover:border-transparent focus:outline-none focus:border-b focus:border-blue-500"
                style={{ borderBottom: "1px solid #000000" }}
                required
              />
            </div>

            <div>
              <label className="font-medium text-lg" htmlFor="endDate">
                End Date:-
              </label>
              <input
                type="datetime-local"
                name="endDate"
                placeholder=""
                value={jobDetails.endDate}
                onChange={(e) =>
                  setJobDetails({ ...jobDetails, endDate: e.target.value })
                }
                className="font-normal text-sm p-2 mb-4 w-1/4 ml-6 h-7 transition-all duration-300 hover:border-transparent focus:outline-none focus:border-b focus:border-blue-500"
                style={{ borderBottom: "1px solid #000000" }}
                required
              />
            </div>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleNextStep}>
              Save
            </button>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-3">
            {/* Display the uploaded logo */}
            {logo && (
              <img
                src={URL.createObjectURL(logo)}
                alt="Logo Preview"
                className="mb-4 h-48 w-48 items-center ml-20"
                loading="lazy"
              />
            )}
            {/* Display job details */}
            <div className="mb-4 space-y-3">
              <p className="font-bold">Job Title:</p>
              <p className="text-2xl font-bold">{jobDetails.title}</p>
              <p className="text-lg font-medium">{jobDetails.description}</p>
              <p className="font-bold text-sm">{jobDetails.requirements}</p>
              <p>{jobDetails.applicationFormLink}</p>
              <p>{jobDetails.applicationDeadline}</p>
              <p>{jobDetails.startDate}</p>
              <p>{jobDetails.endDate}</p>

              {/* Display other job details */}
            </div>

            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              onClick={handleCreateJob}>
              Create Job
            </button>
          </div>
        )}
      </div>
    );
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed  top-0 left-0 w-full h-full flex  justify-center bg-gray-800 bg-opacity-10">
      <div className="bg-white mt-16 w-2/5 h-fit p-4 shadow-md">
        <button
          className="absolute top-20 right-96 mr-14 text-gray-500"
          onClick={onClose}>
          <img src={close} alt="close" loading="lazy" />
        </button>
        {renderStep()}
      </div>
    </div>
  );
};

export default JobCreationForm;
