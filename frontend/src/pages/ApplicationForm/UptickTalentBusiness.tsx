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
  file: File | null; 
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

const UptickTalentBusiness: React.FC = () => {
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
    file: null,
    mobileStack: "",
    careerGoals: "",
    otherStack: "",
    portfolioLink: "",
    programPreferenceID: 5,
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
          file: null, 
          address: "",
          yearsOfExp: "",
          proficient: "",
          feStack: "",
          beStack: "",
          mobileStack: "",
          careerGoals: "",
          otherStack: "",
          programPreferenceID: 5,
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
    <div className="container mx-auto space-y-4 md:space-y-10 p-10 md:p-24">
      <h2 className="text-5xl font-bold">Startup School</h2>
      <p className="text-base font-normal sm:w-2/3">
        Uptick Talent Startup School Cohort is a 3-month intense program for
        founders supporting them with the needed resources to enable them build
        out their MVP, acquire first-100 paying customers or first-10 paying
        clients, and become investment-ready to attract external funding.
      </p>
      <p className="text-base font-normal">
        Join the list of other ambitious founders to learn from some of the
        world's best entrepreneurs and investors. 
      </p>
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
                className="border rounded-lg  bg-gray-200 w-4/5 md:w-1/2 h-12 py-2 px-3 mb-6"
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
                placeholder="Doe"
                className="border rounded-lg  bg-gray-200 w-4/5 md:w-1/2 h-12 py-2 px-3 mb-6"
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
              id="email"
              placeholder="johndoe@example.com"
              name="email"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-1/2 h-12 py-2 px-3 mb-6"
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
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-1/2 h-12 py-2 px-3 mb-6"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label className="mb-2 flex flex-col" htmlFor="address">
            Name of Startup
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Uptick Talent"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-1/2 h-12 py-2 px-3 mb-6"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>

          <label className="flex flex-col mb-2" htmlFor="portfolioLink">
            Link to your what you are working on?
            <input
              type="url"
              id="portfolioLink"
              name="portfolioLink"
              placeholder="http://localhost:3000"
              className="border rounded-lg bg-gray-200 w-4/5 md:w-1/2 h-12 py-2 px-3 mb-6"
              value={formData.portfolioLink}
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label className="flex flex-col mb-2" htmlFor="proficient">
            Give a short description of what you are working on.
            <input
              type="proficient"
              id="typroficientpe"
              name="proficient"
              className="border rounded-lg bg-gray-200 w-full h-24 py-2 px-3 mb-6"
              value={formData.proficient}
              onChange={handleChange}
              required
            />
          </label>

          <label className="flex flex-col mb-2" htmlFor="knowAbout">
            What are your needs right now?
            <select
              id="knowAbout"
              name="knowAbout"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-1/2 h-12 py-2 px-3 mb-6">
              <option value="option1">Andela Learning Community</option>
              <option value="option2">Google Developer Group Jos</option>
              <option value="option3">Google Developer Group Lagos</option>
              <option value="option4">Google Developer Group Ikorodu</option>
              <option value="option5">GDSC Unilag</option>
              <option value="option6">GDSC Unilorin</option>
              <option value="option7">GDSC FUTA</option>
              <option value="option8">GDSC OAU</option>
              <option value="option9">GDSC UI</option>
            </select>
          </label>

          <label className="flex flex-col mb-2" htmlFor="city">
            City/Country
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Jos, Plateu"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-1/2 h-12 py-2 px-3 mb-6"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </label>

          <label className="flex flex-col mb-2" htmlFor="knowAbout">
            How did hear about us
            <select
              id="knowAbout"
              name="knowAbout"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-1/2 h-12 py-2 px-3 mb-6">
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

export default UptickTalentBusiness;
