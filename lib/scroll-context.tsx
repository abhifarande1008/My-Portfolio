"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useScroll, type MotionValue } from "framer-motion";

const ScrollProgressContext = createContext<MotionValue<number> | null>(null);

export function ScrollProgressProvider({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();

  return (
    <ScrollProgressContext.Provider value={scrollYProgress}>
      {children}
    </ScrollProgressContext.Provider>
  );
}

export function useScrollProgress() {
  const value = useContext(ScrollProgressContext);
  if (!value) {
    throw new Error("useScrollProgress must be used within ScrollProgressProvider");
  }
  return value;
}
