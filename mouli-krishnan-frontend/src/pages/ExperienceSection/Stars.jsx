import { Stars } from "@react-three/drei";

export default function SkyStars() {
  return (
    <Stars
      radius={180}
      depth={80}
      count={7000}
      factor={6}
      saturation={0}
      fade
      speed={1}
    />
  );
}
