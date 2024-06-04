
import React, { useState } from "react";
import axios from "axios";

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    requirements: "",
    applicationLink: "",
    companyLogo: "",
    applicationDeadline: "",
    startDate: "",
    endDate: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];

    if (file) {
      setFormData((prevData) => ({ ...prevData, logoFile: file }));

      const reader = new FileReader();
      reader.onload = () => {
        setFormData((prevData) => ({
          ...prevData,
          companyLogo: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Make a POST request using axios
      const response = await axios.post("/api/jobs", formData);

      // Handle the response as needed
      console.log("Job posted successfully:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error posting job:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-center">
        Job Posting Form
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-600"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md resize-none"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="requirements"
            className="block text-sm font-medium text-gray-600"
          >
            Requirements
          </label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md resize-none"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="applicationLink"
            className="block text-sm font-medium text-gray-600"
          >
            Application Link
          </label>
          <input
            type="url"
            id="applicationLink"
            name="applicationLink"
            value={formData.applicationLink}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="companyLogo"
            className="block text-sm font-medium text-gray-600"
          >
            Company Logo
          </label>
          <input
            type="file"
            id="companyLogo"
            name="companyLogo"
            onChange={handleLogoChange}
            className="mt-1 p-2 w-full border rounded-md"
            accept="image/*"
            required
          />
        </div>

        {formData.companyLogo && (
          <img
            src={formData.companyLogo}
            alt="Company Logo Preview"
            className="mb-6 rounded-md max-h-40"
          />
        )}

        <div className="mb-6">
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-600"
          >
            Application Deadline
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.applicationDeadline}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-600"
          >
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-600"
          >
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4 flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-8 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
