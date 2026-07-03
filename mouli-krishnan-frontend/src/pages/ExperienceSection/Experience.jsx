import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";

import Scene from "./Scene";
import ExperienceCard from "./ExperienceCard";
import JourneyCompleted from "./JourneyCompleted";
import Loader from "./Loader";

import experienceData from "./ExperienceData";

import "./experience.css";

export default function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [walking, setWalking] = useState(true);
  const [zoom, setZoom] = useState(false);

  const [showCard, setShowCard] = useState(false);
  const [completed, setCompleted] = useState(false);

  const experience = experienceData[currentIndex];

  function handleReached() {
    setWalking(false);
    setZoom(true);
    setShowCard(true);
  }

  function handleNext() {
    if (currentIndex < experienceData.length - 1) {
      setCurrentIndex((prev) => prev + 1);

      setWalking(true);
      setZoom(false);
      setShowCard(false);
    } else {
      setShowCard(false);
      setCompleted(true);
    }
  }

  return (
    <div className="experience-page">
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 4, 8],
          fov: 45,
        }}
      >
        <Suspense fallback={<Loader />}>
          <Scene
            experience={experience}
            experienceData={experienceData}
            walking={walking}
            zoom={zoom}
            onReached={handleReached}
          />
        </Suspense>
      </Canvas>

      {showCard && (
        <ExperienceCard
          company={experience}
          onNext={handleNext}
          isLast={currentIndex === experienceData.length - 1}
        />
      )}

      {completed && <JourneyCompleted />}
    </div>
  );
}
