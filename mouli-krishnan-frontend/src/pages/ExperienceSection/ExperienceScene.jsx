import { useState } from "react";

import Character from "./Character";
import Company from "./Company";
import ExperienceCard from "./ExperienceCard";
import Lights from "./Lights";
import Ground from "./Ground";
import Road from "./Road";

export default function ExperienceScene() {
  const [showCard, setShowCard] = useState(false);

  return (
    <>
      <Lights />

      <Ground />

      <Road />

      <Character targetZ={-5} onReached={() => setShowCard(true)} />

      <Company position={[0, 0, -5]} />

      {showCard && <ExperienceCard />}
    </>
  );
}
