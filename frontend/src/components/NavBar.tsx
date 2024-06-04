import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import NavLogo from "../assets/nav-logo.png";

const NavBar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const location = useLocation();

  return (
    <>
      <nav className={`${location.pathname === "/about" ? "about" : ""}`}>
        <div className="logo">
          <Link to="/"><img src={NavLogo} width={150} height={500} alt="uptick logo" /></Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="dropdown">
              <Link to="/programs" className="programs">
                Programs <IoIosArrowDown className="fa" />
              </Link>
              <div className="dropdown-content">
                <Link to="/programs/beginner">Uptick Talent Beginners</Link>
                <Link to="/programs/tech">Uptick Talent Tech</Link>
                <Link to="/programs/business">Uptick Talent Business</Link>
                <Link to="/programs/map">Uptick Talent Map</Link>
              </div>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
        </div>

        <Link to="/programs">
          <button className="p-3 sm:px-4 sm:py-2  text-md font-medium invisible sm:visible rounded-lg bg-uptickblue10 text-white hover:bg-upticklightb30 navbar-btn">
            Explore Our Programs
          </button>
        </Link>
        {showDropdown ? (
          <FaTimes className="menu-icon" onClick={toggleDropdown} />
        ) : (
          <FaBars className="menu-icon" onClick={toggleDropdown} />
        )}
      </nav>

      {showDropdown && (
        <div className="dropdown-menu">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/programs">Programs</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
          </ul>
          <div className="nav-btn">
            <Link to="/programs">
              <button>Explore Our Programs</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;