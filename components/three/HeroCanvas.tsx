"use client";

import { AdaptiveDpr } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";
import { Scene } from "./Scene";

function readMobileTier() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 768px)").matches || window.matchMedia("(pointer: coarse)").matches;
}

export function HeroCanvas() {
  const mobile = useMemo(() => readMobileTier(), []);

  return (
    <Canvas
      dpr={mobile ? [1, 1.25] : [1, 1.5]}
      gl={{
        antialias: !mobile,
        alpha: true,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.08,
        outputColorSpace: THREE.SRGBColorSpace,
      }}
      frameloop="demand"
      camera={{ position: [-0.85, 0.18, 5.6], fov: 36, near: 0.12, far: 48 }}
      style={{ width: "100%", height: "100%" }}
      onCreated={(state) => {
        state.gl.setClearColor(0x000000, 0);
        state.invalidate();
      }}
    >
      <Scene mobile={mobile} />
      <AdaptiveDpr pixelated={false} />
    </Canvas>
  );
}
