import React, { useState } from "react";

interface FormDataState {
  firstname: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  yearsOfExp: string;
  proficient: string;
  feStack: string;
  beStack: string;
  file: string; // Change the type to File | null
  mobileStack: string;
  careerGoals: string;
  otherStack: string;
  portfolioLink: string;
  githubLink: string;
  type: string;
  availability: string;
  fellowshipInfo: string;
  programPreferenceID: number,
}

const UptickTalentMap: React.FC = () => {
  const [formData, setFormData] = useState<FormDataState>({
    firstname: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    yearsOfExp: "",
    proficient: "",
    feStack: "",
    beStack: "",
    file: "",
    mobileStack: "",
    careerGoals: "",
    otherStack: "",
    portfolioLink: "",
    programPreferenceID: 6,
    githubLink: "",
    type: "program",
    availability: "",
    fellowshipInfo: "",
  });

 
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://upthick-talent-teama.onrender.com/applications/program",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully");

        setFormData({
          firstname: "",
          lastName: "",
          email: "",
          phone: "",
          city: "",
          file: "", 
          address: "",
          yearsOfExp: "",
          proficient: "",
          feStack: "",
          beStack: "",
          mobileStack: "",
          careerGoals: "",
          otherStack: "",
          programPreferenceID: 6,
          portfolioLink: "",
          githubLink: "",
          type: "program",
          availability: "",
          fellowshipInfo: "",
        });
      } else {
        const responseData = await response.json();
        console.error(
          "Form submission failed with status:",
          response.status,
          responseData
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="container mx-auto space-y-4  md:space-y-10 p-10 md:p-24">
      <h2 className="text-4xl md:text-5xl font-bold">Uptick Talent Map</h2>
      <p className="text-2xl font-normal ">SUBMIT YOUR APPLICATION</p>
      <form onSubmit={handleSubmit} className="text-2xl font-normal">
        <div>
          <div className="">
            <label className="mb-2 flex flex-col" htmlFor="firstname">
              First Name
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="John"
                className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </label>
            <label className="mb-2 flex flex-col" htmlFor="lastName">
              Last Name
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="John"
                className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label className=" mb-2 flex flex-col" htmlFor="email">
            Email
            <input
              type="email"
              id="lastname"
              placeholder="Doe"
              name="email"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="flex flex-col mb-2" htmlFor="phone">
            Phone number
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+111 222 333 44"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label className="mb-2 flex flex-col" htmlFor="address">
            Name of Company
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Uptick Talent"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>

          <label className="flex flex-col mb-2" htmlFor="logo">
            Upload logo
            <input
              type="file"
              id="logo"
              name="logo"
              placeholder=""
              className="border rounded-lg bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
              value={formData.file}
              onChange={handleChange}
              required
            />
          </label>

  
          <label className="flex flex-col mb-2" htmlFor="city">
            City/Country
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Doha"
              className="border rounded-lg bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label className="flex flex-col mb-2" htmlFor="talent">
            What tech talent role are you looking to fill?
            <select
              id="talent"
              name="talent"
              placeholder="5+ years"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
              required>
              <option value="option1">Frontend Software Engineer</option>
              <option value="option2">Backend Software Engineer</option>
              <option value="option3">Fullstack Software Engineer</option>
              <option value="option4">Product Designer</option>
              <option value="option5">Product Researcher</option>
              <option value="option6">Product Manager</option>
              <option value="option7">Data Scientist</option>
              <option value="option8">Mobile Engineer</option>
              <option value="option9">QA Test Engineer</option>
              <option value="option10">Product Owner</option>
              <option value="option11">Business Development Manager</option>
              <option value="option12">Other...</option>
            </select>
          </label>

          <label className="flex flex-col mb-2" htmlFor="expertise">
            What level of expertise do you wish to fill for these roles
            <select
              id="expertise"
              name="expertise"
              placeholder="5+ years"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
              required>
              <option value="option1">Entry-level</option>
              <option value="option2">Mid-level</option>
              <option value="option3">Senior level</option>
              <option value="option4">
                Manager Level or C-suite for a startup
              </option>
              <option value="option5">Other…</option>
            </select>
          </label>
        </div>

        <div>
          <label className="flex flex-col mb-2" htmlFor="participate">
            Salary Range for Positions
            <select
              id="positions"
              name="positions"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
              required>
              <option value="option1">N100k - 250k</option>
              <option value="option2">N250k - 400K</option>
              <option value="option3">N500k - 1m</option>
              <option value="option4">N1m - 1.5m</option>
              <option value="option5">Other…</option>
            </select>
          </label>

          <label className="flex flex-col mb-2" htmlFor="knowAbout">
            How did hear about us
            <select
              id="knowAbout"
              name="knowAbout"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6">
              <option value="option1">Friends and Families</option>
              <option value="option2">LinkedIn</option>
              <option value="option3">Twitter</option>
              <option value="option4">Instagram </option>
              <option value="option5">Facebook</option>
              <option value="option6">Tech Communities</option>
              <option value="option7">Other...</option>
            </select>
          </label>
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

export default UptickTalentMap;
