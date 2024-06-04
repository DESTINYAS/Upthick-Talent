import React, { useState } from "react";
import axios from "axios";
// import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Notification from "../../components/Notification";
import ButtonLoader from "../../components/ButtonLoader";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [showNotification, setShowNotification] = useState(false);
  const [notificationText, setNotificationText] = useState("");
  const [notificationType, setNotificationType] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(!loading);
      axios
        .post("https://upthick-talent-teama.onrender.com/auth/login", {
          username,
          password,
        })
        .then(function (response) {
          // Storing token in localStorage
          const token = response.data.accessToken;
          localStorage.setItem("token", token);
          console.log(`Loggedin ${response.data}`);

          setLoading(false);

          setShowNotification(!showNotification);
          setNotificationText("Signed In");
          setNotificationType("success");
          // Clear form data after successful submission
          setUsername("");
          setPassword("");

          {
            setTimeout(() => {
              navigate("/dashboard", { replace: true });
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

  return (
    <>
      <div className="p-10 bg-uptickblue100 h-100">
        <div className="logo">
          <img src="/uptickLogo.svg" alt="uptick logo" />
        </div>
        <div className="flex items-center justify-center mt-16 bg-uptickblue100 text-white font-raleway">
          <div className="w-full max-w-md">
            <form className=" px-8 pt-6 pb-8 mb-4">
              <h1 className="text-3xl font-bold ">Welcome Back!</h1>
              <p className="mb-6 text-xs text-gray-400">Login to continue</p>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  User ID
                </label>
                <input
                  className="shadow appearance-none border border-uptickneutral bg-uptickfaded opacity-10 rounded-md w-full py-2.5 px-4 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  className="shadow appearance-none border text-white border-uptickneutral bg-uptickfaded opacity-10 rounded-md w-full py-2.5 px-4 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-400 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  className="shadow appearance-none border border-uptickneutral bg-uptickfaded opacity-10 rounded-md w-full py-2.5 px-4 text-white leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-gray-500 text-sm mb-8 mt-0">
                <input
                  type="checkbox"
                  name="Remember Me"
                  id=""
                  placeholder="remember me"
                />
                <label className="ml-1">Remember Me</label>
              </div>

              <div>
                <Link to="/admin">
                  <button
                    className="flex items-center justify-center rounded-md w-full py-2.5 px-4 bg-uptickblue20"
                    onClick={onSubmit}
                  >
                    {loading ? <ButtonLoader /> : "Log In"}
                  </button>
                </Link>
              </div>
            </form>

            <div className="text-center">
              <p className="text-white text-sm">
                Do you have an account?
                <span className="text-uptickblue30">
                  <Link to="/"> Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
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

export default Login;