import React, { useState } from "react";
import DropdownMessage from "../../components/DropdownMessage";
import { BsChevronDown } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md w-screen p-4 flex items-center justify-end sticky top-0 overflow-x-hidden h-16 overflow-y-hidden">
      <div className="text-uptickblue100"></div>

      <div className="relative flex items-center text-black  lg:right-64 ">
        <div className="text-black mr-2">
        <DropdownMessage />
        </div>
        <div className="mr-2 text-uptickblue30 rounded-xl border border-uptickblue30">
          <FiUser className="h-6 w-6 p-1" />
        </div>
        <button
          onClick={toggleDropdown}
          className="flex items-center focus:outline-none"
        >
          <p className="ml-2 text-uptickblue100">Admin</p>
          <BsChevronDown className="h-4 w-4 ml-1 text-uptickblue100" />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-5 right-0 mt-2 bg-white text-gray-800 rounded-md shadow-lg overflow-y-hidden">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;