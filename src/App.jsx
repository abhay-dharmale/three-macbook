import { Canvas } from "@react-three/fiber";
import React from "react";
import "./App.css";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import MacContainer from "./MacContainer";

const App = () => {
  return (
    <div className="w-full h-[100svh] sm:h-screen relative">
    <div className="absolute w-full top-20 sm:top-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center justify-center">
      <h4 className="masked-text text-3xl sm:text-6xl">macbook pro.</h4>
      <p className="text-zinc-100 text-xs sm:text-sm">so prooo!</p>
      <p className="text-center mt-3 text-xs sm:text-sm px-10 sm:w-1/2 text-zinc-500">dolor sit amet, consectetur adipiscing elit. Aenean pellentesque lorem at dignissim placerat. Nullam eu ligula nec elit euismod sollicitudin. Proi</p>
    </div>
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
    </div>
  );
};

export default App;
