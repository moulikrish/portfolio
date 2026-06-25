import React from "react";

import img from "../assets/prof3.png";
import resume from "../assets/Mouli_Krishnan_profile.pdf";

import "./Styles/About.css";

import PageWrapper from "../components/PageWrapper";

import { IoMdCodeDownload } from "react-icons/io";

const About = () => {
  return (

    <PageWrapper>

      <section className="about-section">

        <div className="about-container container">

          <div className="row align-items-center justify-content-center g-5">

            {/* IMAGE SECTION */}
            <div className="col-lg-4 text-center">

              <div className="about-image-wrapper">

                <img
                  src={img}
                  alt="Mouli Krishnan"
                  className="about-img img-fluid"
                />

              </div>

            </div>

            {/* CONTENT SECTION */}
            <div className="col-lg-7">

              <div className="about-content">

                <h2 className="about-title">
                  About Me
                </h2>

                <div className="about-line" />

                <p className="about-text">
                  I'm <strong>Mouli Krishnan</strong>, a passionate
                  <strong> Technical Trainer</strong>,
                  <strong> Full Stack Developer</strong>, and
                  <strong> Graphic Designer</strong> dedicated to building
                  meaningful digital experiences.
                </p>

                <p className="about-text">
                  I enjoy transforming complex ideas into clean,
                  user-friendly solutions that are visually appealing
                  and highly functional.
                </p>

                <p className="about-text">
                  My focus is on creating products that are intuitive,
                  scalable, and centered around real user needs while
                  combining clean code with thoughtful design.
                </p>

                {/* SKILLS */}
                <div className="skills-badges">

                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>

                </div>

                {/* BUTTON */}
                <div className="about-btn-wrap">

                  <a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-main"
                  >

                    Download CV

                    <IoMdCodeDownload className="download-icon" />

                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </PageWrapper>
  );
};

export default About;