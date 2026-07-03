import { useRef } from "react";

import Character from "./Character";
import Company from "./Company";

import Ground from "./Ground";
import Road from "./Road";
import Lights from "./Lights";

import CameraAnimation from "./CameraAnimation";

import Effects from "./Effects";
import SkyStars from "./Stars";
import FloatingParticles from "./FloatingParticles";

export default function Scene({
  experience,
  experienceData,
  walking,
  zoom,
  onReached,
}) {
  const characterRef = useRef();

  return (
    <>
      <color attach="background" args={["#050505"]} />

      <fog attach="fog" args={["#050505", 20, 120]} />

      <Lights />

      <Ground />

      <Road />

      <SkyStars />

      <FloatingParticles />

      <Effects />

      <Character
        ref={characterRef}
        targetZ={experience.buildingPosition.z}
        isWalking={walking}
        onReached={onReached}
      />

      <CameraAnimation
        target={characterRef}
        zoom={zoom}
      />

      {experienceData.map((item) => (
        <Company
          key={item.id}
          companyName={item.company}
          position={[
            item.buildingPosition.x,
            item.buildingPosition.y,
            item.buildingPosition.z,
          ]}
        />
      ))}
    </>
  );
}