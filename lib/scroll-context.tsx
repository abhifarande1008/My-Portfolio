"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useMotionValue, type MotionValue } from "framer-motion";
import Lenis from "lenis";
import { invalidate } from "@react-three/fiber";
import "lenis/dist/lenis.css";
import { eventElement } from "@/lib/dom";
import { detectPerformanceTier } from "@/hooks/usePerformanceTier";

const ScrollProgressContext = createContext<MotionValue<number> | null>(null);

export function ScrollProgressProvider({ children }: { children: ReactNode }) {
  const progress = useMotionValue(0);

  useEffect(() => {
    const previousRestoration = history.scrollRestoration;
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduce = reduceQuery.matches;
    const tier = detectPerformanceTier();

    const lenis = new Lenis({
      autoRaf: true,
      lerp: reduce ? 1 : tier === "low" ? 0.15 : 0.075,
      smoothWheel: !reduce,
      syncTouch: false,
    });

    const onScroll = ({ progress: value, limit }: { progress: number; limit: number }) => {
      const next = !limit || !Number.isFinite(value) ? 0 : Math.min(1, Math.max(0, value));
      progress.set(next);
      invalidate();
    };

    lenis.on("scroll", onScroll);
    lenis.scrollTo(0, { immediate: true });
    progress.set(0);

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }
      const link = eventElement(event.target)?.closest("a[href^='#']");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.length < 2) return;
      let target: Element | null = null;
      try {
        target = document.querySelector(href);
      } catch {
        return;
      }
      if (!target) return;
      event.preventDefault();
      lenis.scrollTo(href, { offset: 0, duration: reduce ? 0 : 1.15 });
    };

    const onResize = () => lenis.resize();
    document.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
      lenis.off("scroll", onScroll);
      lenis.destroy();
      history.scrollRestoration = previousRestoration;
    };
  }, [progress]);

  return (
    <ScrollProgressContext.Provider value={progress}>{children}</ScrollProgressContext.Provider>
  );
}

export function useScrollProgress() {
  const value = useContext(ScrollProgressContext);
  if (!value) {
    throw new Error("useScrollProgress must be used within ScrollProgressProvider");
  }
  return value;
}
