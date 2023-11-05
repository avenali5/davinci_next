import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  Bounds,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";
import { Painting } from "./Painting";

const Model = () => {
  return (
    <Canvas>
      <Bounds fit clip observe margin={1.2}>
        <Float scale={1.5} position={[0, 0, 0]} rotation={[0, 0.6, 0]}>
          <Painting />
        </Float>
      </Bounds>
      <Environment preset='lobby' />
      <OrbitControls enableZoom={false} enablePan={false} />
      <PerspectiveCamera position={[0, 0, 2.5]} fov={100} type='perspective' />
    </Canvas>
  );
};

export default Model;
