import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import DustParticles from "./DustParticles";

useGLTF.preload("/models/walking2.glb");

const Character = forwardRef(
  ({ targetZ, isWalking, onReached, speed = 2 }, ref) => {
    const group = useRef();

    const reached = useRef(false);

    const { scene, animations } = useGLTF("/models/walking2.glb");

    const { actions } = useAnimations(animations, group);

    useImperativeHandle(ref, () => group.current);

    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;

        child.receiveShadow = true;
      }
    });

    useEffect(() => {
      scene.scale.set(1.2, 1.2, 1.2);

      scene.rotation.y = Math.PI;

      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }, [scene]);

    useEffect(() => {
      if (!actions) return;

      const names = Object.keys(actions);

      if (names.length === 0) return;

      const action = actions[names[0]];

      action.reset();

      action.fadeIn(0.5);

      action.play();
    }, [actions]);

    useEffect(() => {
      reached.current = false;
    }, [targetZ]);

    useFrame((state, delta) => {
      if (!group.current) return;

      if (isWalking) {
        group.current.position.z -= speed * delta;
      }

      if (group.current.position.z <= targetZ && !reached.current) {
        reached.current = true;

        onReached?.();
      }
    });

    return (
      <group ref={group}>
        <primitive object={scene} />
        <DustParticles/>
      </group>
    );
  },
);

export default Character;
