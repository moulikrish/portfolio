import React from "react";

import { ReactTyped } from "react-typed";

import "./Styles/Home.css";

import profile from "../assets/prof1.jpeg";

import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {

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

          <img
            src={profile}
            alt="Mouli Krishnan"
            className="profile-img"
          />

        </div>

        {/* Name */}
        <h1 className="name">
          Mouli Krishnan
        </h1>

        {/* Role */}
        <div className="role-wrapper">

          <ReactTyped
            className="role"
            strings={[
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
          Building clean digital experiences with
          creativity, performance, and modern UI design.
        </p>

        {/* Button */}
        <button
          className="reach-btn"
          onClick={scrollToContact}
        >

          Reach Out

          <FaArrowRightLong className="btn-icon" />

        </button>

      </div>

    </section>
  );
};

export default Home;