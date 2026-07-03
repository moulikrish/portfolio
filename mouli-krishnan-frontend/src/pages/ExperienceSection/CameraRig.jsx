import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraRig({ target }) {
  useFrame((state) => {
    if (!target.current) return;

    const position = target.current.position;

    const desired = new THREE.Vector3(position.x, 4, position.z + 8);

    state.camera.position.lerp(desired, 0.05);

    state.camera.lookAt(position.x, 1.5, position.z);
  });

  return null;
}
