'use client';

import { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

import WorkDisplay from "@/app/inner-display/page";
import Comp from "@/components/Comp";

function CameraController({ isHovered }: { isHovered: boolean }) {
  const lookAt = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    const camera = state.camera as THREE.PerspectiveCamera;

    // Smooth damping amount (Controls how fast/smooth the animation is)
    // Higher number (e.g., -8) = faster snap. Lower number (e.g., -2) = slower glide.
    const damping = 1 - Math.exp(-5 * delta);

    // ==========================================
    // 1. CAMERA POSITIONS (Where the camera sits in 3D space)
    // Format: new THREE.Vector3(Left/Right, Up/Down, Forward/Backward)
    // ==========================================
    
    // Idle state: Camera is 10 units back (Z=10)
    const idlePosition = new THREE.Vector3(0, 0, 10);

    // Hover state: To REDUCE zoom, we increase the Z value (3rd number) so the camera stays further back.
    // Original was 2.5. Changed to 4.5. 
    // You can also adjust the Y value (2nd number) to move the camera higher or lower relative to the screen.
    const focusPosition = new THREE.Vector3(0, -0.35, 4.5);

    const targetPos = isHovered ? focusPosition : idlePosition;


    // ==========================================
    // 2. CAMERA TARGETS (Where the camera is looking/pointing)
    // ==========================================
    
    // Idle state: Looking directly at the center of the scene (0,0,0)
    const idleLook = new THREE.Vector3(0, 0, 0);
    
    // Hover state: Looks slightly down (Y = -0.25) to center the computer screen in the frame.
    const focusLook = new THREE.Vector3(0, -0.25, 0);

    const targetLook = isHovered ? focusLook : idleLook;

    // Apply movement & rotation smoothly
    camera.position.lerp(targetPos, damping);
    lookAt.current.lerp(targetLook, damping);
    camera.lookAt(lookAt.current);


    // ==========================================
    // 3. ZOOM / FIELD OF VIEW (Lens effect)
    // ==========================================
    // Lower FOV = more zoomed in (telephoto). Higher FOV = wider view.
    // Original hover FOV was 26. Changed to 35 to reduce the lens zoom effect.
    // Idle FOV stays at 50.
    const targetFov = isHovered ? 35 : 50;

    camera.fov = THREE.MathUtils.lerp(
      camera.fov,
      targetFov,
      damping
    );

    camera.updateProjectionMatrix();
  });

  return null;
}

export default function OurWork() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="h-screen w-full relative bg-black flex flex-col items-center justify-center overflow-hidden">

      {/* HUD */}
      <div
        className={`absolute top-10 left-10 z-10 text-white font-mono pointer-events-none transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-black uppercase text-[var(--brand-red)]">
          // TERMINAL_ACCESS
        </h2>

        <p className="text-[10px] md:text-xs tracking-widest text-white/50 mt-1">
          SYSTEM_READY_FOR_DEPLOYMENT
        </p>
      </div>

      <div
        className={`absolute bottom-10 text-center z-10 font-mono text-white/30 text-[10px] tracking-[0.2em] transition-opacity duration-500 ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      >
        [ HOVER MODEL TO INITIALIZE INTERFACE ]
      </div>

      {/* Wrapper div with dynamic cursor styling. */}
      <div className={`w-full h-full ${isHovered ? "cursor-pointer" : "cursor-crosshair"}`}>
        <Canvas
          camera={{
            position: [0, 0, 10], // Initial starting position before animation takes over
            fov: 50,              // Initial FOV
            near: 0.1,
            far: 100,
          }}
        >
          <Environment preset="city" />

          <CameraController isHovered={isHovered} />

          {/* Wrap the 3D model in a group and attach 3D Pointer events here. */}
          <group
            onPointerEnter={(e) => {
              e.stopPropagation(); 
              setIsHovered(true);
            }}
            onPointerLeave={(e) => {
              e.stopPropagation();
              setIsHovered(false);
            }}
          >
          
            <Comp
              position={[0, -1.5, 0]}
              scale={1}
            />
          </group>

        </Canvas>
      </div>
    </section>
  );
}