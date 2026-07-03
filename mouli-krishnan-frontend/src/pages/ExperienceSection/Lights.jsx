import { Environment } from "@react-three/drei";

export default function Lights() {
  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.6} />

      {/* Main Sun Light */}
      <directionalLight
        position={[10, 15, 10]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={100}
        shadow-camera-left={-30}
        shadow-camera-right={30}
        shadow-camera-top={30}
        shadow-camera-bottom={-30}
      />

      {/* Purple Neon Light */}
      <pointLight
        position={[0, 5, 0]}
        color="#760081"
        intensity={25}
        distance={80}
      />

      {/* Blue Fill Light */}
      <pointLight
        position={[-8, 4, -15]}
        color="#4da6ff"
        intensity={10}
        distance={50}
      />

      {/* Pink Accent Light */}
      <pointLight
        position={[8, 3, -35]}
        color="#ff66cc"
        intensity={8}
        distance={40}
      />

      {/* Back Rim Light */}
      <spotLight
        position={[0, 15, 25]}
        angle={0.35}
        intensity={8}
        penumbra={1}
        castShadow
      />

      {/* HDR Environment */}
      <Environment preset="city" />
    </>
  );
}