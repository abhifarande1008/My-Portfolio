"use client";

import { motion, useTransform } from "framer-motion";
import { useScrollProgress } from "@/lib/scroll-context";
import { useTheme } from "@/lib/theme-context";

const DARK_BG = [
  "oklch(0.12 0.02 260)",
  "oklch(0.12 0.025 200)",
  "oklch(0.13 0.035 90)",
  "oklch(0.14 0.045 60)",
];

const LIGHT_BG = [
  "oklch(0.96 0.012 85)",
  "oklch(0.95 0.018 200)",
  "oklch(0.94 0.028 90)",
  "oklch(0.93 0.035 60)",
];

const DARK_GLOW = [
  "radial-gradient(ellipse at 78% 42%, oklch(0.45 0.12 180 / 0.22), transparent 42%)",
  "radial-gradient(ellipse at 55% 48%, oklch(0.5 0.1 70 / 0.2), transparent 46%)",
];

const LIGHT_GLOW = [
  "radial-gradient(ellipse at 78% 42%, oklch(0.72 0.1 180 / 0.28), transparent 42%)",
  "radial-gradient(ellipse at 55% 48%, oklch(0.78 0.1 70 / 0.22), transparent 46%)",
];

const BG_INPUT = [0, 0.5, 0.8, 1];
const GLOW_INPUT = [0, 1];

export function Atmosphere() {
  const progress = useScrollProgress();
  const { theme } = useTheme();
  const isLight = theme === "light";
  const background = useTransform(progress, BG_INPUT, isLight ? LIGHT_BG : DARK_BG);
  const glow = useTransform(progress, GLOW_INPUT, isLight ? LIGHT_GLOW : DARK_GLOW);

  return (
    <>
      <motion.div key={`bg-${theme}`} aria-hidden className="pointer-events-none fixed inset-0 -z-[1]" style={{ background }} />
      <motion.div key={`glow-${theme}`} aria-hidden className="pointer-events-none fixed inset-0 -z-[1]" style={{ backgroundImage: glow }} />
      <div
        className={`pointer-events-none fixed inset-0 -z-[1] ${
          isLight
            ? "bg-[radial-gradient(ellipse_at_top_left,oklch(0.88_0.03_80/0.45),transparent_36%)]"
            : "bg-[radial-gradient(ellipse_at_top_left,oklch(0.3_0.04_260/0.18),transparent_36%)]"
        }`}
      />
      <div className="vignette" />
      <div className="grain" />
    </>
  );
}
