"use client";

import { useEffect, useMemo } from "react";
import dynamic from "next/dynamic";
import { useThree, invalidate } from "@react-three/fiber";
import { CameraRig } from "./CameraRig";
import { Lights } from "./Lights";
import { EnvironmentRig } from "./EnvironmentRig";
import { Particles } from "./Particles";
import { DeviceShell } from "./DeviceShell";
import { ArchitectureScene } from "./ArchitectureScene";
import type { PerformanceTier } from "@/hooks/usePerformanceTier";

const IdentityHud = dynamic(() => import("./IdentityHud").then((mod) => mod.IdentityHud), { ssr: false });
const CraftLayers = dynamic(() => import("./CraftLayers").then((mod) => mod.CraftLayers), { ssr: false });
const WorkIcons = dynamic(() => import("./WorkIcons").then((mod) => mod.WorkIcons), { ssr: false });
const SignalMotif = dynamic(() => import("./SignalMotif").then((mod) => mod.SignalMotif), { ssr: false });

function WebGLGuard() {
  const gl = useThree((state) => state.gl);

  useEffect(() => {
    const canvas = gl.domElement;
    const onLost = (event: Event) => {
      event.preventDefault();
    };
    const onRestored = () => invalidate();
    canvas.addEventListener("webglcontextlost", onLost);
    canvas.addEventListener("webglcontextrestored", onRestored);
    return () => {
      canvas.removeEventListener("webglcontextlost", onLost);
      canvas.removeEventListener("webglcontextrestored", onRestored);
    };
  }, [gl]);

  return null;
}

export function Scene({ tier }: { tier: PerformanceTier }) {
  const mobile = useMemo(
    () => tier === "low" || window.matchMedia("(max-width: 768px)").matches,
    [tier],
  );

  return (
    <>
      <fog attach="fog" args={["#1a1b20", 12, 42]} />
      <WebGLGuard />
      <CameraRig />
      <Lights />
      <EnvironmentRig mobile={mobile} />
      <DeviceShell />
      <ArchitectureScene />
      <IdentityHud />
      <CraftLayers />
      <WorkIcons />
      <SignalMotif />
      <Particles tier={tier} />
    </>
  );
}
