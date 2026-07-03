import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Ground() {
  const gridRef = useRef();

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.getElapsedTime() * 2) % 10;
    }
  });

  return (
    <>
      {/* Main Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[300, 300]} />

        <meshStandardMaterial color="#0b0b0b" roughness={1} metalness={0.15} />
      </mesh>

      {/* Neon Grid */}
      <gridHelper
        ref={gridRef}
        args={[300, 300, "#760081", "#202020"]}
        position={[0, 0.02, 0]}
      />
    </>
  );
}
