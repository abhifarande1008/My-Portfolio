"use client";

import { motion, useTransform } from "framer-motion";
import { useScrollProgress } from "@/lib/scroll-context";

export function Atmosphere() {
  const progress = useScrollProgress();
  const background = useTransform(
    progress,
    [0, 0.5, 0.8, 1],
    [
      "oklch(0.12 0.02 260)",
      "oklch(0.12 0.025 200)",
      "oklch(0.13 0.035 90)",
      "oklch(0.14 0.045 60)",
    ],
  );

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-[1]"
      style={{ background }}
    />
  );
}
