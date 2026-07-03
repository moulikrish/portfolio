import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Road() {
  const laneRef = useRef();

  useFrame((state) => {
    if (laneRef.current) {
      laneRef.current.position.z = (state.clock.getElapsedTime() * 6) % 8;
    }
  });

  return (
    <group>
      {/* Road Base */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 200]} />

        <meshStandardMaterial color="#111" metalness={0} roughness={1} />
      </mesh>

      <mesh position={[-3, 0.01, -100]}>
        <boxGeometry args={[0.08, 0.02, 200]} />

        <meshBasicMaterial color="#ff00ff" />
      </mesh>

      <mesh position={[3, 0.01, -100]}>
        <boxGeometry args={[0.08, 0.02, 200]} />

        <meshBasicMaterial color="#ff00ff" />
      </mesh>

      

      {/* Center Lane */}
      <group ref={laneRef}>
        {Array.from({ length: 35 }).map((_, i) => (
          <mesh
            key={i}
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, 0.02, -i * 7]}
          >
            <planeGeometry args={[0.25, 3]} />

            <meshStandardMaterial
              color="#ffffff"
              emissive="#ffffff"
              emissiveIntensity={0.4}
            />
          </mesh>
        ))}
      </group>

      {/* Left Neon Strip */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-3.9, 0.03, -40]}>
        <planeGeometry args={[0.08, 250]} />

        <meshStandardMaterial
          color="#760081"
          emissive="#760081"
          emissiveIntensity={6}
        />
      </mesh>

      {/* Right Neon Strip */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[3.9, 0.03, -40]}>
        <planeGeometry args={[0.08, 250]} />

        <meshStandardMaterial
          color="#760081"
          emissive="#760081"
          emissiveIntensity={6}
        />
      </mesh>

      {/* <pointLight
        position={[0, 1, -100]}
        color="#760081"
        intensity={8}
        distance={250}
      /> */}
    </group>
  );
}
