import React from "react";
import img from "../assets/prof2.jpeg";
import "./Styles/About.css";
import PageWrapper from "../components/PageWrapper"
import resume from "../assets/Mouli_Krishnan_profile.pdf"
import { IoMdCodeDownload } from "react-icons/io";

const About = () => {
  return (
    <PageWrapper>
    <div className="about-container container my-5">

      <div className="row align-items-center justify-content-center mt-4">

        {/* Image Section */}
        <div className="col-lg-4 text-center mb-4 mb-lg-0">
          <img src={img} alt="Mouli" className="about-img img-fluid" />
        </div>

        {/* Content Section */}
        <div className="col-lg-7">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            I'm <strong>Mouli Krishnan</strong>, a passionate
            <strong> Technical Trainer</strong>,
            <strong> Full Stack Developer</strong>, and
            <strong> Graphic Designer</strong>.
            dedicated to building meaningful digital experiences. I enjoy transforming complex ideas into clean, user-friendly solutions that are both visually appealing and highly functional. My focus is on creating products that are intuitive, scalable, and centered around real user needs.
          </p>

          <p className="about-text">
            With hands-on experience in modern web technologies and creative design, I bridge the gap between functionality and aesthetics. As a trainer, I simplify complex concepts to help others grow in tech, and as a developer and designer, I combine clean code with thoughtful design to deliver impactful, engaging digital solutions.
          </p>

          {/* Skill Tags */}
          <div className="skills-badges">
            <span>Java</span>
            <span>SpringBoot</span>
            <span>React</span>
            <span>Node.js</span>
            <span>Express.js</span>
            <span>MongoDB</span>
          </div>

          {/* Buttons */}
          <div className="mt-4">
            <a className="btn-main me-3" href={resume} target="_blank" style={{textDecoration:"none"}}>Download CV<IoMdCodeDownload style={{width:"30px", height:"30px", paddingLeft:"5px"}}/></a>
          </div>
        </div>

      </div>

    </div>
    </PageWrapper>
  );
};

export default About;