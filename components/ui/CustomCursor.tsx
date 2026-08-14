"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { eventElement } from "@/lib/dom";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const scale = useMotionValue(1);
  const ringX = useSpring(x, { stiffness: 700, damping: 38, mass: 0.18 });
  const ringY = useSpring(y, { stiffness: 700, damping: 38, mass: 0.18 });
  const ringScale = useSpring(scale, { stiffness: 520, damping: 32, mass: 0.15 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;

    const move = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const over = (event: MouseEvent) => {
      const target = eventElement(event.target);
      if (target?.closest("input, textarea")) {
        scale.set(0);
        setHover(false);
        return;
      }
      const interactive = Boolean(
        target?.closest("[data-cursor='interactive'], a, button"),
      );
      scale.set(interactive ? 1.55 : 1);
      setHover(interactive);
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [scale, x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[80] hidden md:block" aria-hidden>
      <motion.div
        className="absolute top-0 left-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_10px_oklch(0.72_0.18_180/0.9)]"
        style={{ x, y }}
      />
      <motion.div
        className="absolute top-0 left-0 h-7 w-7 -translate-x-1/2 -translate-y-1/2"
        style={{ x: ringX, y: ringY, scale: ringScale }}
      >
        <svg viewBox="0 0 28 28" className="h-full w-full">
          <circle
            cx="14"
            cy="14"
            r="11"
            fill="none"
            stroke="oklch(0.72 0.18 180)"
            strokeWidth={hover ? "1.4" : "1"}
            opacity="0.95"
          />
          <path
            d="M14 3v3M14 22v3M3 14h3M22 14h3"
            stroke="oklch(0.72 0.18 180)"
            strokeWidth="1.1"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}
