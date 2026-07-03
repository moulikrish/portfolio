import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraAnimation({
  target,

  zoom,
}) {
  useFrame((state) => {
    if (!target.current) return;

    const character = target.current.position;

    const distance = zoom ? 5 : 8;

    const height = zoom ? 2.8 : 4;

    const desired = new THREE.Vector3(
      character.x,

      height,

      character.z + distance,
    );

    state.camera.position.lerp(
      desired,

      0.03,
    );

    state.camera.lookAt(
      character.x,

      1.5,

      character.z,
    );
  });

  return null;
}
