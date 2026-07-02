import React, { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

import arrow from "../assets/arrow1.png";

import "./IntroOverlay.css";

const IntroOverlay = ({ show, onClose }) => {
  const { text } = useContext(LanguageContext);

  if (!show) return null;

  const musicHint = text?.musicHint || "Click to\nPlay Music";

  return (
    <div
      className="intro-overlay"
      onClick={onClose}
    >
      <div
        className="intro-pointer"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={arrow}
          alt="Music Hint Arrow"
          className="intro-arrow"
        />

        <h2 className="intro-title">
          {musicHint.split("\n").map((line, index) => (
            <span key={index}>{line}</span>
          ))}
        </h2>
      </div>
    </div>
  );
};

export default IntroOverlay;