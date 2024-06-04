import React, { useState } from "react";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { FiShoppingBag, FiUser, FiLogOut } from "react-icons/fi";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

interface MenuItem {
  title: string;
  icon?: JSX.Element;
  path?: string;
  subMenu?: MenuItem[];
  isOpen?: boolean;
}

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMainMenuItemClick = (title: string, path?: string) => {
    setSelectedItem((prevItem) => (prevItem === title ? null : title));
    navigate(path || "/");
  };

  const handleSubMenuItemClick = (path?: string) => {
    navigate(path || "/");
  };

  const handleArrowClick = (menu: MenuItem) => {
    setSelectedItem((prevItem) =>
      prevItem === menu.title ? null : menu.title
    );
  };

  const Menus: MenuItem[] = [
    { title: "Dashboard", icon: <RxDashboard />, path: "/dashboard" },
    {
      title: "Programs",
      icon: <FiUser />,
      subMenu: [
        { title: "Talent Tech", path: "/talent-tech" },
        { title: "Talent Business", path: "/talent-business" },
        { title: "Talent Map", path: "/talent-map" },
        { title: "Talent Beginners", path: "/talent-beginners" },
      ],
    },
    { title: "Jobs", icon: <FiShoppingBag />, path: "/jobs" },
    { title: "Blogs", icon: <HiOutlinePencilSquare />, path: "/blogs" },
    { title: "Logout", icon: <FiLogOut />, path: "/" },
  ];

  return (
    <div className="flex">
      <div
        className={`fixed ${
          open ? "w-64" : "w-20 "
        } bg-uptickadminblue h-screen p-5  pt-8 relative duration-300`}
      >
        <FaRegArrowAltCircleLeft
          className={`absolute cursor-pointer z-50 -right-3 top-4 w-7 text-6xl text-uptickblue50
          ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            alt="uptick logo"
            src="/uptickLogo.svg"
            className={`origin-left mb-16 duration-200 ${!open && "scale-0"}`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`rounded-md p-3 cursor-pointer hover:bg-uptickfaded hover:bg-opacity-10 text-white text-xl items-center gap-x-4 
             ${
               selectedItem === menu.title &&
               "bg-uptickfaded bg-opacity-10 text-white"
             }`}
              onClick={() => handleMainMenuItemClick(menu.title, menu.path)}
            >
              <div className="flex items-center">
                {menu.icon}
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 ml-2`}
                >
                  {menu.title}
                </span>
                {menu.subMenu && (
                  <IoIosArrowDown
                    className={`cursor-pointer w-7 text-3xl ml-6 text-white
                    ${selectedItem === menu.title && open && "rotate-180"}`}
                    onClick={() => handleArrowClick(menu)}
                  />
                )}
              </div>
              {menu.subMenu && selectedItem === menu.title && (
                <ul className="relative left-2 mt-4 text-white">
                  {menu.subMenu.map((subMenu, subIndex) => (
                    <li
                      key={subIndex}
                      className={`flex p-2 cursor-pointer hover:bg-gray-200`}
                      onClick={() => handleSubMenuItemClick(subMenu.path)}
                    >
                      {subMenu.icon}
                      <span className="pl-2 text-sm">{subMenu.title}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;