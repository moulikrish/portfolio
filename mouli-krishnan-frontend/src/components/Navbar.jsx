import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BsPersonFillExclamation } from "react-icons/bs";
import { GiLightBulb } from "react-icons/gi";
import { MdWork } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import "./Nav.css";

const Navbar = () => {
  return (
    <div className="floating-nav">

      <NavLink to="/" className="nav-item">
        <FaHome />
        <span className="nav-text">Home</span>
      </NavLink>

      <NavLink to="/about" className="nav-item">
        <BsPersonFillExclamation />
        <span className="nav-text">About</span>
      </NavLink>

      <NavLink to="/skills" className="nav-item">
        <GiLightBulb />
        <span className="nav-text">Skills</span>
      </NavLink>

      <NavLink to="/experience" className="nav-item">
        <MdWork />
        <span className="nav-text">Experience</span>
      </NavLink>

      <NavLink to="/services" className="nav-item">
        <IoSettings />
        <span className="nav-text">Services</span>
      </NavLink>

      <NavLink to="/contact" className="nav-item">
        <BiSolidPhoneCall />
        <span className="nav-text">Contact</span>
      </NavLink>

    </div>
  );
};

export default Navbar;