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

const SoftwareDev: React.FC = () => {
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
    otherStack: "",
    githubLink: "",
    careerGoals: "",
    portfolioLink: "",
    availability: "yes",
    fellowshipInfo: "string",
    resume: "Newbie",
    status: "pending",
    programPreferenceID: 5,
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
          address: "string",
          yearsOfExp: "Less than a year",
          feStack: "string",
          beStack: "string",
          mobileStack: "string",
          otherStack: "",
          githubLink: "",
          careerGoals: "",
          portfolioLink: "",
          status: "pending",
          availability: "yes",
          fellowshipInfo: "",
          resume: "Newbie",
          programPreferenceID: 5,
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
      setShowNotification(true);
      setNotificationText(error.message || "An error occurred");
      setNotificationType("error");
    }
    
  };
  return (
    <>
    <div className="container mx-auto space-y-4 md:space-y-10 p-10 md:p-24">
      <h2 className="text-5xl font-bold">Software Engineering</h2>
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
          </div>

          <label className="mb-2 flex flex-col" htmlFor="lastName">
            Last Name
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Doe"
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
            How many years of programming experience do you have?
            <select
              id="yearsOfExp"
              name="yearsOfExp"
              value={formData.yearsOfExp}
              onChange={handleChange}
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6">
              <option value="option1">Less than a year</option>
              <option value="option2">1-2 years</option>
              <option value="option3">Above 2 years</option>
            </select>
          </label>

          <label className="flex flex-col mb-2" htmlFor="address">
            What stack are you most proficient in or looking to land a job in
            this fellowship?
            <select
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
              required>
              <option value="option1">Nill</option>
              <option value="option2">Frontend</option>
              <option value="option3">Backend</option>
              <option value="option4">Full Stack</option>
              <option value="option5">Mobile</option>
              <option value="option6">Others</option>
            </select>
          </label>

          <label className="flex flex-col mb-2" htmlFor="feStack">
            If you are a front end engineer, what technology do you use?
            <select
              id="feStack"
              name="feStack"
              value={formData.feStack}
              onChange={handleChange}
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6">
              <option value="option1">Nill</option>
              <option value="option2">ReactJs</option>
              <option value="option3">AngularJs</option>
              <option value="option4">VueJa</option>
              <option value="option5">NextJs</option>
              <option value="option6">Others</option>
            </select>
          </label>

          <div className="flex flex-col">
            <label className="flex flex-col mb-2" htmlFor="beStack">
              If you are a back end engineer, what technology do you use?
              <select
                id="beStack"
                name="beStack"
                value={formData.beStack}
                onChange={handleChange}
                className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6">
                <option value="option1">Nill</option>
                <option value="option2">NodeJs</option>
                <option value="option3">Python (Flask/DJango)</option>
                <option value="option4">Java(SpringBoot)</option>
                <option value="option5">C# (.Net)</option>
                <option value="option6">Typescript</option>
                <option value="option7">NestJs</option>
                <option value="option8">PHP Laravel</option>
                <option value="option9">
                  Other PHP FrameWork (Xend, Code, Igniter)
                </option>
                <option value="option10">Ruby on Rail</option>
                <option value="option11">GoLang</option>
                <option value="option12">Others</option>
              </select>
            </label>
          </div>
        </div>

        <div>
          <label className="flex flex-col mb-2" htmlFor="mobileStack">
            If you are a mobile engineer, what technology do you use?
            <select
              id="mobileStack"
              name="mobileStack"
              value={formData.mobileStack}
              onChange={handleChange}
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6">
              <option value="option1">Nill</option>
              <option value="option2">Flutter (Dart Engineering)</option>
              <option value="option3">Python (Django/Flask)</option>
              <option value="option4">React Native</option>
              <option value="option5">Native Android (Kotlin)</option>
              <option value="option6">Native Android (Java)</option>
              <option value="option7">iOS (Swift/Objective C)</option>
              <option value="option8">.Net (Xamarain)</option>
              <option value="option9">Ionic Framework</option>
              <option value="option10">Others</option>
            </select>
          </label>

          <label className="flex flex-col mb-2" htmlFor="otherStack">
            Other tracks? List your most proficient technologies below?
            <input
              type="text"
              id="otherStack"
              name="otherStack"
              value={formData.otherStack}
              className="border rounded-lg bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
              onChange={handleChange}
            />
          </label>

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

          <label className="flex flex-col mb-2" htmlFor="githubLink">
            Link to GitHub
            <input
              type="url"
              id="githubLink"
              name="githubLink"
              className="border rounded-lg bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6"
              value={formData.githubLink}
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
              <option value="option1">Yes</option>
              <option value="option2">No</option>
            </select>
          </label>

          <label className="flex flex-col mb-2" htmlFor="fellowshipInfo">
            How did you get to know about the fellowship?
            <select
              id="fellowshipInfo"
              name="fellowshipInfo"
              className="border rounded-lg  bg-gray-200 w-4/5 md:w-2/3 h-12 py-2 px-3 mb-6">
              <option value="option1">Andela Learning Community</option>
              <option value="option2">Google Developer Group Jos</option>
              <option value="option3">Google Developer Group Lagos</option>
              <option value="option4">Google Developer Group Ikorodu</option>
              <option value="option5">GDSC Unilag</option>
              <option value="option6">GDSC Unilorin</option>
              <option value="option7">GDSC FUTA</option>
              <option value="option8">GDSC OAU</option>
              <option value="option9">GDSC UI</option>
              <option value="option10">nHub</option>
              <option value="option11">Akure Tech Hub</option>
              <option value="option12">Code Plateau</option>
              <option value="option13">
                Meta developer Circle Accra Ghana
              </option>
              <option value="option14">Meta developer Circle Aba</option>
              <option value="option15">Meta developer Circle Lagos</option>
              <option value="option16">Meta developer Circle Abuja</option>
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

export default SoftwareDev;
