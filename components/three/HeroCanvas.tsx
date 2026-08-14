"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { HeroObject } from "./HeroObject";

function useMobileTier() {
  const [mobile, setMobile] = useState(true);

  useEffect(() => {
    const narrow = window.matchMedia("(max-width: 768px)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const lowHw = (navigator.hardwareConcurrency || 8) <= 4;

    const compute = () => setMobile(narrow.matches || coarse.matches || lowHw);
    compute();
    narrow.addEventListener("change", compute);
    coarse.addEventListener("change", compute);
    return () => {
      narrow.removeEventListener("change", compute);
      coarse.removeEventListener("change", compute);
    };
  }, []);

  return mobile;
}

export function HeroCanvas() {
  const mobile = useMobileTier();

  return (
    <Canvas
      dpr={mobile ? [1, 1.5] : [1, 2]}
      gl={{ antialias: !mobile, alpha: true, powerPreference: "high-performance" }}
      frameloop="always"
      camera={{ position: [0, 0, 6], fov: 45 }}
      style={{ width: "100%", height: "100%" }}
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 8]} intensity={1.1} />
      <pointLight position={[-6, -2, 4]} intensity={0.6} color="#3ecfc0" />
      <HeroObject />
    </Canvas>
  );
}
