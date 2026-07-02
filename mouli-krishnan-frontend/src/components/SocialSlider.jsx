import React, { useContext } from "react";

import { FaGithub, FaHackerrank, FaLinkedinIn } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import "./SocialSlider.css";
import { LanguageContext } from "../context/LanguageContext";

const SocialSidebar = ({ showIntro }) => {
  const { text } = useContext(LanguageContext);

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      label: text.linkedin,
      link: "https://www.linkedin.com/in/moulik23/",
    },
    {
      icon: <FaGithub />,
      label: text.github,
      link: "https://github.com/moulikrish",
    },
    {
      icon: <SiLeetcode />,
      label: text.leetcode,
      link: "https://leetcode.com/u/MouliKrish/",
    },
    {
      icon: <FaHackerrank />,
      label: text.hackerrank,
      link: "https://www.hackerrank.com/profile/moulikrish2020",
    },
  ];

  if (showIntro) return null;

  return (
    <div className="social-sidebar">
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="soc-item"
        >
          <div className="soc-icon">{item.icon}</div>

          <span className="soc-link">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
