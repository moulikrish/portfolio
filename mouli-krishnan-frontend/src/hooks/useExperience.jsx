import { useState } from "react";
import experienceData from "../pages/ExperienceSection/ExperienceData";

export default function useExperience() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [walking, setWalking] = useState(true);

  const [zoom, setZoom] = useState(false);

  const [showCard, setShowCard] = useState(false);

  const [completed, setCompleted] = useState(false);

  const experience = experienceData[currentIndex];

  const handleReached = () => {
    setWalking(false);
    setZoom(true);
    setShowCard(true);
  };

  const handleNext = () => {

    if (currentIndex < experienceData.length - 1) {

      setCurrentIndex((prev) => prev + 1);

      setWalking(true);
      setZoom(false);
      setShowCard(false);

    } else {

      setCompleted(true);
      setShowCard(false);
      setWalking(false);

    }
  };

  return {
    experience,
    experienceData,
    currentIndex,
    walking,
    zoom,
    showCard,
    completed,
    handleReached,
    handleNext,
  };
}