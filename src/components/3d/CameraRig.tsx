import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const CameraRig = ({ v = new THREE.Vector3() }) => {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(v.set(Math.sin(t / 2), 0, 12 + Math.cos(t / 5) / 2), 0.05);
    state.camera.lookAt(0, 0, 0);
  });
};
