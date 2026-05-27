import React from "react";
import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { BsPersonFillExclamation } from "react-icons/bs";
import { GiLightBulb } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";

import "./Nav.css";

const navItems = [
  {
    path: "/",
    icon: <FaHome />,
    label: "Home",
  },
  {
    path: "/about",
    icon: <BsPersonFillExclamation />,
    label: "About",
  },
  {
    path: "/skills",
    icon: <GiLightBulb />,
    label: "Skills",
  },
  {
    path: "/experience",
    icon: <MdWork />,
    label: "Experience",
  },
  {
    path: "/services",
    icon: <IoSettings />,
    label: "Services",
  },
  {
    path: "/contact",
    icon: <BiSolidPhoneCall />,
    label: "Contact",
  },
];

const Navbar = () => {
  return (
    <nav className="floating-nav">

      {navItems.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          className={({ isActive }) =>
            isActive ? "nav-item active" : "nav-item"
          }
        >
          <div className="nav-icon">
            {item.icon}
          </div>

          <span className="nav-text">
            {item.label}
          </span>
        </NavLink>
      ))}

    </nav>
  );
};

export default Navbar;