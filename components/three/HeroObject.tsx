"use client";

import { useEffect, useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useScrollProgress } from "@/lib/scroll-context";

const ACCENT = new THREE.Color("#3ecfc0");
const WARM = new THREE.Color("#e8b84a");

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function targetsForScroll(t: number) {
  const x = THREE.MathUtils.clamp(t, 0, 1);

  if (x < 0.15) {
    const k = x / 0.15;
    return {
      x: lerp(0, 0.4, k),
      y: lerp(0.15, 0.05, k),
      z: 0,
      scale: lerp(1.35, 1.15, k),
      opacity: 1,
      distort: lerp(0.35, 0.42, k),
    };
  }

  if (x < 0.5) {
    const k = (x - 0.15) / 0.35;
    return {
      x: lerp(0.4, 2.35, k),
      y: lerp(0.05, -0.2, k),
      z: lerp(0, -1.2, k),
      scale: lerp(1.15, 0.72, k),
      opacity: lerp(1, 0.7, k),
      distort: lerp(0.42, 0.55, k),
    };
  }

  if (x < 0.8) {
    const k = (x - 0.5) / 0.3;
    return {
      x: lerp(2.35, 2.6, k),
      y: lerp(-0.2, 0.4, k),
      z: lerp(-1.2, -2.2, k),
      scale: lerp(0.72, 0.5, k),
      opacity: lerp(0.7, 0.28, k),
      distort: lerp(0.55, 0.3, k),
    };
  }

  const k = (x - 0.8) / 0.2;
  return {
    x: lerp(2.6, 0.15, k),
    y: lerp(0.4, 0, k),
    z: lerp(-2.2, -0.4, k),
    scale: lerp(0.5, 0.95, k),
    opacity: lerp(0.28, 0.85, k),
    distort: lerp(0.3, 0.38, k),
  };
}

export function HeroObject() {
  const scroll = useScrollProgress();
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<{
    color: THREE.Color;
    emissive: THREE.Color;
    opacity: number;
    emissiveIntensity: number;
    distort: number;
  } | null>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const lastScroll = useRef(0);
  const color = useMemo(() => new THREE.Color().copy(ACCENT), []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    const mesh = meshRef.current;
    const material = materialRef.current;
    if (!mesh || !material) return;

    const t = scroll.get();
    const velocity = Math.abs(t - lastScroll.current) / Math.max(delta, 1 / 120);
    lastScroll.current = t;

    const target = targetsForScroll(t);
    mesh.position.x = THREE.MathUtils.damp(mesh.position.x, target.x, 3.2, delta);
    mesh.position.y = THREE.MathUtils.damp(mesh.position.y, target.y, 3.2, delta);
    mesh.position.z = THREE.MathUtils.damp(mesh.position.z, target.z, 3.2, delta);

    const nextScale = THREE.MathUtils.damp(mesh.scale.x, target.scale, 3.2, delta);
    mesh.scale.setScalar(nextScale);

    const heroFactor = 1 - THREE.MathUtils.smoothstep(t, 0.08, 0.28);
    const spin = 0.12 + Math.min(velocity * 0.35, 0.25);
    mesh.rotation.y += delta * spin;
    mesh.rotation.x = THREE.MathUtils.damp(
      mesh.rotation.x,
      mouse.current.y * 0.35 * heroFactor,
      4,
      delta,
    );
    mesh.rotation.z = THREE.MathUtils.damp(
      mesh.rotation.z,
      mouse.current.x * 0.2 * heroFactor,
      4,
      delta,
    );

    const mix = THREE.MathUtils.smoothstep(t, 0.72, 1);
    color.copy(ACCENT).lerp(WARM, mix);
    material.color.copy(color);
    material.emissive.copy(color);
    material.opacity = THREE.MathUtils.damp(material.opacity, target.opacity, 4, delta);
    material.emissiveIntensity = THREE.MathUtils.damp(
      material.emissiveIntensity,
      0.45 + mix * 0.25,
      4,
      delta,
    );

    const distortMat = material;
    distortMat.distort = THREE.MathUtils.damp(
      distortMat.distort,
      target.distort + Math.min(velocity * 0.4, 0.2),
      3,
      delta,
    );
  });

  return (
    <mesh ref={meshRef} position={[0, 0.15, 0]} scale={1.35}>
      <icosahedronGeometry args={[1.35, 8]} />
      <MeshDistortMaterial
        ref={materialRef as never}
        color={ACCENT}
        emissive={ACCENT}
        emissiveIntensity={0.45}
        roughness={0.25}
        metalness={0.35}
        distort={0.35}
        speed={1.1}
        transparent
        opacity={1}
      />
    </mesh>
  );
}
