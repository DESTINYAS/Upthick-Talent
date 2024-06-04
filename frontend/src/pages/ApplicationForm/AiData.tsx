import React, { useState } from "react";
import Notification from "../../components/Notification";

interface FormDataState {
  firstname: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  yearsOfExp: string;
  feStack: string;
  beStack: string;
  mobileStack: string;
  otherStack: string;
  githubLink: string;
  careerGoals: string;
  status: string;
  portfolioLink: string;
  availability: string;
  fellowshipInfo: string;
  resume: "Newbie";
  programPreferenceID: number;
  jobAppliedForID: number;
  type: "program";
}

const AiData: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const [formData, setFormData] = useState<FormDataState>({
    firstname: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    address: "string",
    yearsOfExp: "Less than a year",
    feStack: "string",
    beStack: "string",
    mobileStack: "string",
    otherStack: "string",
    githubLink: "string",
    careerGoals: "",
    portfolioLink: "",
    availability: "yes",
    fellowshipInfo: "string",
    resume: "Newbie",
    status: "pending",
    programPreferenceID: 4,
    jobAppliedForID: 0,
    type: "program",
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
    console.log("Form Data:", formData);
    console.log("JSON String:", JSON.stringify(formData));
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
        console.log("Form submitted successfully");
        setShowNotification(!showNotification);
        setNotificationText("Form Submitted Successfully");
        setNotificationType("success");

        setFormData({
          firstname: "",
          lastName: "",
          email: "",
          phone: "",
          city: "",
          address: "",
          yearsOfExp: "",
          feStack: "",
          beStack: "",
          mobileStack: "",
          otherStack: "",
          githubLink: "",
          careerGoals: "",
          portfolioLink: "",
          status: "pending",
          availability: "",
          fellowshipInfo: "",
          resume: "Newbie",
          programPreferenceID: 4,
          jobAppliedForID: 0,
          type: "program",
        });
      } else {
        const responseData = await response.json();
        console.error(
          "Form submission failed with status:",
          response.status,
          responseData
        );
        setShowNotification(!showNotification);
        setNotificationText("Form submission failed");
        setNotificationType("error");
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setShowNotification(!setNotificationText);
      setNotificationText(error.message);
      setNotificationType("error");
    }
  };
  return (
    <>
      <div className="container mx-auto space-y-4 md:space-y-10 p-10 md:p-24">
        <h2 className="text-4xl md:text-5xl font-bold">AI & Data Program</h2>

        <p className="text-xl md:text-2xl font-normal ">SUBMIT YOUR APPLICATION</p>
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
            </div>

            <label className=" mb-2 flex flex-col" htmlFor="lastName">
              Last Name
              <input
                type="lastName"
                id="lastName"
                placeholder="Doe"
                name="lastName"
                className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>

            <label className="flex flex-col mb-2" htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
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

            <label className="flex flex-col mb-2" htmlFor="city">
              City, State
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Doha, Qatar"
                className="border rounded-lg bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
                value={formData.city}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label className="flex flex-col mb-2" htmlFor="yearsOfExp">
              How many years of product management experience do you have?
              <select
                id="yearsOfExp"
                name="yearsOfExp"
                className="border rounded-lg bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
                value={formData.yearsOfExp}
                onChange={handleChange}>
                <option value="Less than a year">Less than a year</option>
                <option value="1-2 years">1-2 years</option>
                <option value="Above 2 years">Above 2 years</option>
              </select>
            </label>
          </div>

          <div>
            <label className="flex flex-col mb-2" htmlFor="careerGoals">
              What are your career goals between the next two years?
              <input
                type="text"
                id="careerGoals"
                name="careerGoals"
                className="border rounded-lg bg-gray-200 w-full h-24 py-2 px-3 mb-6"
                value={formData.careerGoals}
                onChange={handleChange}
                required
              />
            </label>

            <label className="flex flex-col mb-2" htmlFor="portfolioLink">
              Link to portfolio or one of your completed Projects
              <input
                type="url"
                id="portfolioLink"
                name="portfolioLink"
                className="border rounded-lg bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
                value={formData.portfolioLink}
                onChange={handleChange}
                required
              />
            </label>

            <label className="flex flex-col mb-2" htmlFor="availability">
              Are you able to commit at least 40 hours per week to participate
              fully in the fellowship?
              <select
                id="availability"
                name="availability"
                className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6">
                <option value="availability">Yes</option>
                <option value="availability">No</option>
              </select>
            </label>

            <label className="flex flex-col mb-2" htmlFor="fellowshipInfo">
              How did you get to know about the fellowship?
              <select
                id="fellowshipInfo"
                name="fellowshipInfo"
                className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6">
                <option value="fellowshipInfo">
                  Andela Learning Community
                </option>
                <option value="fellowshipInfo">
                  Google Developer Group Jos
                </option>
                <option value="fellowshipInfo">
                  Google Developer Group Lagos
                </option>
                <option value="fellowshipInfo">
                  Google Developer Group Ikorodu
                </option>
                <option value="fellowshipInfo">GDSC Unilag</option>
                <option value="fellowshipInfo">GDSC Unilorin</option>
                <option value="fellowshipInfo">GDSC FUTA</option>
                <option value="fellowshipInfo">GDSC OAU</option>
                <option value="fellowshipInfo">GDSC UI</option>
                <option value="fellowshipInfo">nHub</option>
                <option value="fellowshipInfo">Akure Tech Hub</option>
                <option value="fellowshipInfo">Code Plateau</option>
                <option value="fellowshipInfo">
                  Meta developer Circle Accra Ghana
                </option>
                <option value="fellowshipInfo">
                  Meta developer Circle Aba
                </option>
                <option value="fellowshipInfo">
                  Meta developer Circle Lagos
                </option>
                <option value="fellowshipInfo">
                  Meta developer Circle Abuja
                </option>
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

export default AiData;
