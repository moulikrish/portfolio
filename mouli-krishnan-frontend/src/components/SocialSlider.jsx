import React from "react";

import {
  FaLinkedinIn,
  FaGithub,
  FaHackerrank,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import "./SocialSlider.css";

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/moulik23/",
  },

  {
    icon: <FaGithub />,
    label: "GitHub",
    link: "https://github.com/moulikrish",
  },

  {
    icon: <SiLeetcode />,
    label: "LeetCode",
    link: "https://leetcode.com/u/MouliKrish/",
  },

  {
    icon: <FaHackerrank />,
    label: "HackerRank",
    link: "https://www.hackerrank.com/profile/moulikrish2020",
  },
];

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">

      {socialLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="soc-item"
        >

          <div className="soc-icon">
            {item.icon}
          </div>

          <span className="soc-link">
            {item.label}
          </span>

        </a>
      ))}

    </div>
  );
};

export default SocialSidebar;