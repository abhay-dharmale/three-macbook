import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <Canvas camera={{ fov: 20, position: [0, 0, 100] }}>
      {/* <OrbitControls /> */}
      <Environment
        files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/christmas_photo_studio_04_1k.hdr",
        ]}
      />
      <ScrollControls pages={3}>
        <MacContainer />
      </ScrollControls>
    </Canvas>
  );
};

export default App;
