"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { LoadingScreen } from "@/components/shared/LoadingScreen";

const HeroCanvas = dynamic(
  () => import("./HeroCanvas").then((mod) => mod.HeroCanvas),
  { ssr: false, loading: () => <LoadingScreen /> },
);

export default function HeroCanvasWrapper() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <HeroCanvas />
    </div>
  );
}
