import React, { useContext } from "react";

import { ReactTyped } from "react-typed";

import "./Styles/Home.css";

import profile from "../assets/prof4.jpg";

import { FaArrowRightLong } from "react-icons/fa6";
import { LanguageContext } from "../context/LanguageContext";

const Home = () => {
  const { language } = useContext(LanguageContext);

  const scrollToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <section className="home-container">
      {/* Background Glow */}
      <div className="hero-bg-glow hero-bg-1"></div>
      <div className="hero-bg-glow hero-bg-2"></div>

      <div className="hero-section">
        {/* Profile Image */}
        <div className="profile-wrapper">
          <div className="profile-ring"></div>

          <img src={profile} alt="Mouli Krishnan" className="profile-img" />
        </div>

        {/* Name */}
        <h1 className="name">{language === "ta" ? "மௌலி கிருஷ்ணன்" : "Mouli Krishnan"}</h1>

        {/* Role */}
        <div className="role-wrapper">
          <ReactTyped
            className="role"
            strings={language === "ta" ? [
              "டெக்னிக்கல் டிரெய்னர்",
              "ஃபுல் ஸ்டாக் டெவலப்பர்",
              "கிராபிக் டிசைனர்"
            ] : [
              "Technical Trainer",
              "Full Stack Developer",
              "Graphic Designer",
            ]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={1500}
            loop
          />
        </div>

        {/* Description */}
        <p className="hero-desc">
          {language === "ta" ? `பில்டிங் கிளீன் டிஜிட்டல் எக்ஸ்பீரியன்ஸஸ் வித் கிரியேட்டிவிட்டி, பெர்ஃபார்மன்ஸ், அண்ட் மாடர்ன் யூஐ டிசைன்.` : `Building clean digital experiences with creativity, performance, and
          modern UI design.`}
          
        </p>

        {/* Button */}
        <button className="reach-btn" onClick={scrollToContact}>
          Reach Out
          <FaArrowRightLong className="btn-icon" />
        </button>
      </div>
    </section>
  );
};

export default Home;
