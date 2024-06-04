import React, { useState } from "react";
import JobCreationFormProps from "./BlogCreationFormProps";
import close from "../../assets/close.png";
import axios from "axios";
import Notification from "../../components/Notification";
import { useNavigate } from "react-router-dom";

const BlogCreationForm: React.FC<JobCreationFormProps> = ({
  isOpen,
  onClose,
}) => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [logo, setLogo] = useState<File | null>(null);
  const [published, setPublished] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    blogTitle: "",
    author: "",
    content: "",
    tags: "",
    publishedDate: "",
  });

  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleBlogPublish = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(!loading);
      axios
        .post(
          "https://upthick-talent-teama.onrender.com/posts",
          {
            jobDetails,
            logo,
            published,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(function (response) {
          setLoading(false);

          setShowNotification(!showNotification);
          setNotificationText("Published");
          setNotificationType("success");
          // Clear form data after successful submission
          setJobDetails({
            blogTitle: "",
            author: "",
            content: "",
            tags: "",
            publishedDate: "",
          });

          {
            setTimeout(() => {
              navigate("/blogs", { replace: true });
            }, 2000);
          }
        })
        .catch(function (error) {
          // Handle error
          console.error("Error:", error.response.data);

          setLoading(false);

          setShowNotification(!showNotification);
          setNotificationText(error.response.data.message);
          setNotificationType("error");
        });
    } catch (error: any) {
      setLoading(false);

      setShowNotification(!setNotificationText);
      setNotificationText(error.message);
      setNotificationType("error");
    }
  };

  const renderStep = () => {
    const breadcrumbs = ["Add Thumbnail", "Add Title", "Preview"];

    return (
      <>
        <div className="text-center p-4 w-full h-full">
          {breadcrumbs.map((breadcrumb, index) => (
            <span
              key={index}
              className={`cursor-pointer ${
                index === step - 1 ? "border-b-2 border-blue-500" : "mx-10"
              }`}
              onClick={() => setStep(index + 1)}
            >
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
                  className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 blog-progress"
                  onClick={handleNextStep}
                >
                  Save
                </button>
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="text-left">
              <label className="font-medium text-lg" htmlFor="blogTitle">
                Blog
              </label>
              <input
                type="text"
                placeholder=""
                value={jobDetails.blogTitle}
                onChange={(e) =>
                  setJobDetails({ ...jobDetails, blogTitle: e.target.value })
                }
                className=" p-2 mb-4 w-full h-7 transition-all duration-300 hover:border-transparent focus:outline-none focus:border-b focus:border-blue-500"
                style={{ borderBottom: "1px solid #000000" }}
              />
              <div className="flex flex-row space-x-4">
                {" "}
                <label className="font-medium text-lg" htmlFor="writter">
                  Author
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={jobDetails.author}
                  onChange={(e) =>
                    setJobDetails({ ...jobDetails, author: e.target.value })
                  }
                  className="p-2 mb-4 w-2/5 h-7 transition-all duration-300 hover:border-transparent focus:outline-none focus:border-b focus:border-blue-500"
                  style={{ borderBottom: "1px solid #000000" }}
                />
              </div>

              <div>
                <label className="font-medium text-lg" htmlFor="">
                  Content
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={jobDetails.content}
                  onChange={(e) =>
                    setJobDetails({ ...jobDetails, content: e.target.value })
                  }
                  className="font-normal text-sm p-2 mb-4 w-full h-7 transition-all duration-300 hover:border-transparent focus:outline-none focus:border-b focus:border-blue-500"
                  style={{ borderBottom: "1px solid #000000" }}
                />
              </div>

              <div className="flex flex-col space-x-4">
                <label className="font-medium text-lg" htmlFor="published">
                  Published
                </label>
                <div className="flex flex-col">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="published"
                      checked={published}
                      value={published ? "true" : "false"}
                      onChange={(e) => setPublished(e.currentTarget.checked)}
                    />
                    <span className="ml-2">Publish</span>
                  </label>

                  {/* Add more radio options as needed */}
                </div>
              </div>

              <div>
                <label className="font-medium text-lg" htmlFor="">
                  Tags
                </label>
                <input
                  type="text"
                  placeholder=""
                  value={jobDetails.tags}
                  onChange={(e) =>
                    setJobDetails({ ...jobDetails, tags: e.target.value })
                  }
                  className="font-normal text-sm p-2 mb-4 w-full h-7 transition-all duration-300 hover:border-transparent focus:outline-none focus:border-b focus:border-blue-500"
                  style={{ borderBottom: "1px solid #000000" }}
                />
              </div>

              {/* Add other form fields */}

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 blog-progress"
                onClick={handleNextStep}
              >
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
                <p className="text-2xl font-bold">{jobDetails.blogTitle}</p>
                <p className="text-lg font-medium">{jobDetails.author}</p>
                <p className="font-bold text-sm">
                  Deadline:
                  <span className="font-normal text-sm ml-2">
                    {/* {jobDetails.subHeading} */}
                  </span>
                </p>
                <p>{jobDetails.content}</p>
                {/* Display other job details */}
              </div>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 blog-progress"
                onClick={handleBlogPublish}
              >
                Publish
              </button>
            </div>
          )}
        </div>
        {showNotification && (
          <Notification text={notificationText} type={notificationType} />
        )}
        {showNotification &&
          setTimeout(() => {
            setShowNotification(false);
          }, 3000)}
      </>
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
          onClick={onClose}
        >
          <img src={close} alt="close" loading="lazy" />
        </button>
        {renderStep()}
      </div>
    </div>
  );
};

export default BlogCreationForm;