import { useMemo } from "react";
import { Points, PointMaterial } from "@react-three/drei";

export default function FloatingParticles() {
  const particles = useMemo(() => {
    const arr = [];

    for (let i = 0; i < 600; i++) {
      arr.push(
        (Math.random() - 0.5) * 60,
        Math.random() * 8,
        -Math.random() * 220,
      );
    }

    return new Float32Array(arr);
  }, []);

  return (
    <Points positions={particles}>
      <PointMaterial
        transparent
        color="#760081"
        size={0.12}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}
