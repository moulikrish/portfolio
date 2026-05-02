import React from "react";
import { FaLinkedinIn, FaGithub ,FaHackerrank } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./SocialSlider.css";

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <a className="soc-item" href="https://www.linkedin.com/in/moulik23/" target="_blank" rel="noreferrer">
        <FaLinkedinIn />
        <span className="soc-link">Linikedin</span>
      </a>

      <a className="soc-item" href="https://github.com/moulikrish"  target="_blank" rel="noreferrer">
        <FaGithub />
        <span className="soc-link">Github</span>
      </a>

      <a className="soc-item" href="https://leetcode.com/u/MouliKrish/" target="_blank" rel="noreferrer">
        <SiLeetcode />
        <span className="soc-link">Leetcode</span>
      </a>

      <a className="soc-item" href="https://www.hackerrank.com/profile/moulikrish2020" target="_blank" rel="noreferrer">
        <FaHackerrank />
        <span className="soc-link">Hackerrank</span>
      </a>
    </div>
  );
};

export default SocialSidebar;