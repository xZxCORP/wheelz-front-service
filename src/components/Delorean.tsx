import { Environment, OrbitControls, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const Delorean = () => {
  const gltf = useGLTF('./3D/scene.gltf');

  return (
    <mesh>
      <primitive
        object={gltf.scene}
        position={[10, 1, 0]}
        scale={0.8}
        rotation={[0.2, Math.PI / 4, 0.2]}
      />
    </mesh>
  );
};

const DeloreanScene = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      camera={{ position: [5, 1, 25], fov: 40 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Delorean />
      <Environment preset="dawn" />
    </Canvas>
  );
};

export default DeloreanScene;
