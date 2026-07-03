import { Sparkles } from "@react-three/drei";

export default function DustParticles() {
  return (
    <Sparkles
      count={50}
      size={2}
      speed={0.5}
      scale={[5, 1, 5]}
      position={[0, 0.2, 0]}
    />
  );
}
