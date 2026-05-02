import React from "react";
import { ReactTyped } from "react-typed";
import "./Styles/Home.css";
import profile from "../assets/prof1.jpeg";

const Home = ({darkMode, setDarkMode}) => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="home-container">
        

        <div className="hero-section">
          <img src={profile} alt="profile" className="profile-img" />
          <h1 className="name">Mouli Krishnan</h1>
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
          />{" "}
          <br />
          <button className="reach-btn">Reach Out</button>
        </div>
      </div>
    </>
  );
};

export default Home;
