import React, { ChangeEvent, useState } from "react";

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    file: null as File | null,
    resume: "user request",
    firstname: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    linkedInURL: "",
    twitterURL: "",
    portfolioLink: "",
    githubLink: "",
    city: "",
    additionalMessage: "",
    type: "job",
    careerGoals: "user request",
    availability: "user request",
  });
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;
    if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
      return;
    }

    const file = fileInput.files[0];

    if (file) {
      setFormData((prevData) => ({
        ...prevData,
        file: file,
      }));

      console.log("Selected file:", file);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Successful:");
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("file", formData.file || ""); // append the file to FormData
      formDataToSend.append("resume", formData.resume);
      formDataToSend.append("firstname", formData.firstname);
      formDataToSend.append("lastName", formData.lastName);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("linkedInURL", formData.linkedInURL);
      formDataToSend.append("twitterURL", formData.twitterURL);
      formDataToSend.append("portfolioLink", formData.portfolioLink);
      formDataToSend.append("githubLink", formData.githubLink);
      formDataToSend.append("city", formData.city);
      formDataToSend.append("additionalMessage", formData.additionalMessage);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("careerGoals", formData.careerGoals);
      formDataToSend.append("availability", formData.availability);

      const response = await fetch(
        "https://upthick-talent-teama.onrender.com/applications/job",
        {
          method: "POST",
          body: formDataToSend, // use FormData instead of JSON.stringify
        }
      );

      if (response.ok) {
        alert("Form submitted successfully");

        setFormData({
          file: null as File | null,
          resume: "user request",
          firstname: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          linkedInURL: "",
          twitterURL: "",
          portfolioLink: "",
          githubLink: "",
          city: "",
          additionalMessage: "",
          type: "job",
          careerGoals: "string",
          availability: "string",
        });
      } else {
        const responseData = await response.json();
        console.error(
          "Form submission failed with status:",
          response.status,
          responseData
        );

        console.log("Error messages:", responseData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="container mx-auto space-y-10 p-8 sm:p-28">
      <h2 className="text-5xl font-bold">Software Engineer (Backend)</h2>
      <h2 className="text-2xl font-bold w-1/2">
        GLOBAL REMOTE ENGINEERING / FULL-TIME (REMOTE) / REMOTE
      </h2>
      <p className="text-2xl font-normal ">SUBMIT YOUR APPLICATION</p>
      <form onSubmit={handleSubmit} className="text-2xl font-normal space-y-16">
        <div className="space-y-6">
          <div className="flex items-center">
            <label className="mb-2 w-1/4" htmlFor="file">
              Resume/CV
            </label>
            <input
              type="file"
              id="file"
              name="file"
              className="border rounded-lg bg-gray-200 h-14 py-2 px-3 mt-1 w-1/4"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label className="mb-2 w-1/4" htmlFor="firstname">
              First Name:
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="border rounded-lg bg-gray-200 h-9 py-2 px-3 mt-1 w-3/4"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center">
            <label className="mb-2 w-1/4" htmlFor="lastName ">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="border rounded-lg bg-gray-200 h-9 py-2 px-3 mt-1 w-3/4"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex">
            <label className="flex items-center w-1/4 mb-2" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-lg bg-gray-200 h-9 py-2 px-3 mt-1 w-3/4"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex">
            <label className="flex items-center w-1/4 mb-2" htmlFor="phone">
              Phone number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="border rounded-lg bg-gray-200 h-9 py-2 px-3 mt-1 w-3/4"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex">
            {" "}
            <label className="flex items-center w-1/4  mb-2" htmlFor="address">
              Current company:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="border rounded-lg bg-gray-200 h-9 py-2 px-3 mt-1 w-3/4"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-2xl font-normal my-8">LINKS</h1>
          <div className="flex">
            <label
              className="flex items-center w-1/4 mb-2"
              htmlFor="linkedInURL">
              LinkedIn URL:
            </label>
            <input
              type="text"
              id="linkedInURL"
              name="linkedInURL"
              className="border rounded-lg bg-gray-200 h-9 py-2 px-3 mt-1 w-3/4"
              value={formData.linkedInURL}
              onChange={handleChange}
            />
          </div>
          <div className="flex">
            <label
              className="flex items-center w-1/4  mb-2"
              htmlFor="twitterURL">
              Twitter URL:
            </label>
            <input
              type="text"
              id="twitterURL"
              name="twitterURL"
              className="border rounded-lg bg-gray-200 h-9 py-2 px-3 mt-1 w-3/4"
              value={formData.twitterURL}
              onChange={handleChange}
            />
          </div>

          <div className="flex">
            <label
              className="flex items-center w-1/4  mb-2"
              htmlFor="portfolioLink">
              Portfolio URL:
            </label>
            <input
              type="text"
              id="portfolioLink"
              name="portfolioLink"
              className="border rounded-lg bg-gray-200 h-9 py-2 px-3 mt-1 w-3/4"
              value={formData.portfolioLink}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center">
            <label className="block mb-2 w-1/4" htmlFor="githubLink">
              GitHub URL:
            </label>
            <input
              type="text"
              id="githubLink"
              name="githubLink"
              className="border rounded-lg bg-gray-200 h-9 py-2 px-3 mt-1 w-3/4"
              value={formData.githubLink}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-10">
          <h1 className="text-2xl font-normal my-8">WHERE ARE YOU BASED?</h1>
          <div className="space-y-6">
            <label className="block mb-2" htmlFor="city">
              City/State:
            </label>

            <input
              type="text"
              id="city"
              name="city"
              className="border rounded-lg bg-gray-200 w-full h-9 py-2 px-3 mt-1"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-6">
            <label className="block mb-2" htmlFor="additionalMessage">
              ADDITIONAL INFORMATION:
            </label>
            <textarea
              id="additionalMessage"
              name="additionalMessage"
              className="border border-upticklightb40 rounded-lg bg-gray-200 w-full h-48  py-2 px-3 mt-1"
              value={formData.additionalMessage}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
