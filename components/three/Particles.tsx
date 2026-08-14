"use client";

import { Sparkles } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useScrollProgress } from "@/lib/scroll-context";

export function Particles({ mobile }: { mobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  const scroll = useScrollProgress();

  useFrame(() => {
    if (!group.current) return;
    const t = Number.isFinite(scroll.get()) ? THREE.MathUtils.clamp(scroll.get(), 0, 1) : 0;
    group.current.position.set(1.55, 0, THREE.MathUtils.lerp(0, -28, t));
  });

  return (
    <group ref={group}>
      <Sparkles
        count={mobile ? 8 : 14}
        scale={mobile ? 3.5 : 5}
        size={mobile ? 1.1 : 1.5}
        speed={0.12}
        opacity={0.32}
        color="#b7fff4"
      />
    </group>
  );
}
