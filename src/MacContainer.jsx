import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'

const MacContainer = () => {
  let model = useGLTF("./mac.glb")
  let meshes = {}

  let tex = useTexture('./red.jpg')
  const groupRef = useRef();
  const { viewport, size } = useThree(); // Get viewport details

  // Traverse and configure the model
  model.scene.traverse((e) => {
    meshes[e.name] = e;
  })
  
  meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
  meshes.matte.material.map = tex;
  meshes.matte.material.emissiveIntensity = 0;
  meshes.matte.material.metalness = 0;
  meshes.matte.material.roughness = 1;

  let data = useScroll();

  // Adjust rotation based on scroll
  useFrame((state, delta) => {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (data.offset) * 90);

    // Make the model responsive
    const scaleFactor = Math.min(viewport.width / size.width, viewport.height / size.height);
    if (groupRef.current) {
      groupRef.current.scale.setScalar(scaleFactor * 9);  // Adjust this scalar for sensitivity
    }
  });

  // Adjust the model position based on window size
  useEffect(() => {
    function handleResize() {
      if (groupRef.current) {
        const aspect = size.width / size.height;
        if (aspect < 1) {
          // For portrait aspect ratio
          groupRef.current.position.set(0, -10, 0); // Adjust this value for better alignment
        } else {
          // For landscape aspect ratio
          groupRef.current.position.set(0, -7, 50); // Adjust based on screen size
        }
      }
    }

    // Call resize on mount and on resize events
    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  return (
    <group ref={groupRef} position={[0, -13, 0]}>
      <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer;