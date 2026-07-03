import { useGLTF } from "@react-three/drei";

export default function Company({ position = [0, 0, 0], scale = 0.02 }) {
  const { scene } = useGLTF("/models/Building2.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <group>
      <primitive
        object={scene}
        position={position}
        scale={[scale, scale, scale]}
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[position[0], 0.05, position[2]]}
      >
        <circleGeometry args={[4, 64]} />
        <meshStandardMaterial
          color="#760081"
          emissive="#760081"
          emissiveIntensity={6}
          transparent
          opacity={0.35}
        />
      </mesh>
      <spotLight
        position={[position[0], 12, position[2] + 2]}
        angle={0.35}
        penumbra={1}
        intensity={12}
        castShadow
      />
    </group>
  );
}
