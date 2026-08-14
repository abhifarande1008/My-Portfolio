"use client";

import { useEffect } from "react";
import { useThree, invalidate } from "@react-three/fiber";
import { CameraRig } from "./CameraRig";
import { Lights } from "./Lights";
import { EnvironmentRig } from "./EnvironmentRig";
import { Particles } from "./Particles";
import { DeviceShell } from "./DeviceShell";
import { ArchitectureScene } from "./ArchitectureScene";
import { IdentityHud } from "./IdentityHud";
import { CraftLayers } from "./CraftLayers";
import { WorkIcons } from "./WorkIcons";
import { SignalMotif } from "./SignalMotif";

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

export function Scene({ mobile }: { mobile: boolean }) {
  return (
    <>
      <fog attach="fog" args={["#12141c", 12, 42]} />
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
      <Particles mobile={mobile} />
    </>
  );
}
