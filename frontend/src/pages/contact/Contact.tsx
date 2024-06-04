import React, { useState } from "react";
import Notification from "../../components/Notification";


const ContactUs: React.FC = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("");


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });
      const response = await fetch(
        "https://upthick-talent-teama.onrender.com/contact/users/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            subject: "user Request",
          }),
        }
      );

      if (response.ok) {
        console.log("Form submitted successfully");
        setShowNotification(!showNotification);
        setNotificationText("Form Submitted Successfully");
        setNotificationType("success");

        // Clear form data after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
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
    <div>
      <section className="bg-cover bg-contact-page">
        <div className="flex flex-col h-full">
          <div className="container flex flex-col flex-1 px-6 py-12 mx-auto">
            <div className="flex-1 lg:flex lg:items-center lg:-mx-6">
              <div className="mt-8 lg:w-3/5 lg:mx-6">
                <div className="w-full bg-transparent px-4 py-10 mx-auto overflow-hidden space-y-4 sm:space-y-8 shadow-2xl rounded-xl lg:max-w-3xl">
                  <h1 className="text-5xl sm:text-7xl font-bold text-white">
                    Get in touch
                  </h1>

                  <p className="mt-2 text-white text-lg font-normal">
                    We Really Can&apos;t Wait To Hear From You!
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6">
                    <div className="flex-1 text-base font-semibold">
                      <input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        type="text"
                        placeholder="Enter your name"
                        className="block w-full px-5 py-3 mt-2  text-white bg-blackshade border border-gray-200 rounded-lg dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                      />
                    </div>

                    <div className="flex-1 mt-6">
                      <input
                        type="email"
                        placeholder="Enter your E-mail Address"
                        className="block w-full px-5 py-3 mt-2  text-white bg-blackshade border border-gray-200 rounded-lg dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="flex mt-6">
                      <input
                        type="number"
                        placeholder="Enter your Phone number"
                        className="block w-full px-5 py-3 mt-2 text-white bg-blackshade border border-gray-200 rounded-lg 
                         dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="w-full mt-6">
                      <textarea
                        className="block w-full h-32 px-5 py-3 mt-2 text-white  bg-blackshade border border-gray-200 rounded-lg md:h-48 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                        placeholder="Go ahead we are with you"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-1/5 px-2 py-3 mt-6 text-sm font-medium rounded-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600  hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className=" mx-4 container sm:mx-auto py-5 overflow-hidden rounded-lg lg:col-span-2 h-full lg:h-auto">
            <iframe
              className="w-full px-6 h-96 mb-10"
              frameBorder="0"
              title="map"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.5030724311264!2d8.884882874161992!3d9.891992074885687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1053a17498e6e039%3A0x3382074082a6bc6!2sGunda%20Printing%20Press!5e0!3m2!1sen!2sus!4v1698971937501!5m2!1sen!2sus"></iframe>
          </div>
        </div>
      </section>
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

export default ContactUs;
