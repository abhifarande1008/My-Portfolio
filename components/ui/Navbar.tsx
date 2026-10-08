"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";


// ─── Links ───────────────────────────────────────────────────────────────────
const links = [
  { href: "#hero",    label: "Home"    },
  { href: "#about",   label: "About"   },
  { href: "#skills",  label: "Skills"  },
  { href: "#work",    label: "Work"    },
  { href: "#contact", label: "Contact" },
] as const;

// ─── Scan shimmer ─────────────────────────────────────────────────────────────
function ScanShimmer() {
  return (
    <motion.span
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
    >
      <motion.span
        className="absolute top-0 bottom-0 w-1/3 rounded-full"
        style={{
          background:
            "linear-gradient(90deg,transparent 0%,color-mix(in oklch,var(--accent) 40%,transparent) 50%,transparent 100%)",
        }}
        initial={{ left: "-34%" }}
        animate={{ left: "134%" }}
        transition={{
          duration: 1.05,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 5.5,
          delay: 2.0,
        }}
      />
    </motion.span>
  );
}

// ─── NavLink ──────────────────────────────────────────────────────────────────
type NavLinkProps = {
  href: string;
  label: string;
  isActive: boolean;
  isHovered: boolean;
  onHoverStart: () => void;
  reduceMotion: boolean;
};

function NavLink({ href, label, isActive, isHovered, onHoverStart, reduceMotion }: NavLinkProps) {
  return (
    <a
      href={href}
      data-cursor="interactive"
      aria-current={isActive ? "page" : undefined}
      onMouseEnter={onHoverStart}
      onFocus={onHoverStart}
      className={`relative shrink-0 select-none rounded-full px-1.5 py-0.5 font-mono text-[8.5px] uppercase tracking-normal outline-none transition-colors duration-200 sm:px-3 sm:py-1.5 sm:text-[10px] sm:tracking-wider lg:px-3.5 lg:py-2 lg:text-[length:var(--text-mono)] ${isActive ? "font-semibold" : "font-normal"}`}
      style={{
        color: isActive
          ? "var(--accent)"
          : isHovered
          ? "var(--text-primary)"
          : "var(--text-secondary)",
      }}
    >
      {isActive && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-0 rounded-full border border-accent/40 bg-accent/15"
          style={{ boxShadow: "0 0 16px -2px color-mix(in oklch,var(--accent) 28%,transparent)" }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 420, damping: 32, mass: 0.8 }
          }
        >
          {!reduceMotion && <ScanShimmer />}
        </motion.span>
      )}
      {isHovered && !isActive && (
        <motion.span
          layoutId="nav-hover-glider"
          className="absolute inset-0 rounded-full border border-accent/25"
          style={{
            background:
              "radial-gradient(ellipse at center, color-mix(in oklch,var(--accent) 18%,transparent) 0%, color-mix(in oklch,var(--accent) 6%,transparent) 100%)",
            boxShadow: "0 0 18px -2px color-mix(in oklch,var(--accent) 22%,transparent)",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={
            reduceMotion
              ? { duration: 0 }
              : { type: "spring", stiffness: 440, damping: 30, mass: 0.75 }
          }
        />
      )}
      <motion.span
        className="relative z-10 flex items-center gap-1 sm:gap-1.5"
        animate={!reduceMotion && isHovered ? { y: -1 } : { y: 0 }}
        transition={{ type: "spring", stiffness: 450, damping: 26 }}
      >
        {isActive && (
          <motion.span
            layoutId="nav-active-dot"
            className="h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]"
            transition={
              reduceMotion
                ? { duration: 0 }
                : { type: "spring", stiffness: 480, damping: 30 }
            }
          />
        )}

        <span>{label}</span>
      </motion.span>
    </a>
  );
}

import { motion } from "framer-motion";
import { useActiveSection } from "@/lib/use-active-section";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

// ─── Navbar ───────────────────────────────────────────────────────────────────
export function Navbar() {
  const active    = useActiveSection();
  const [hoveredHref,  setHoveredHref]  = useState<string | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduceMotion(e.matches);
    mq.addEventListener("change", onChange);

    return () => {
      mq.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <header
      role="banner"
      className="fixed top-0 right-0 left-0 z-50 pointer-events-none flex items-center justify-between bg-transparent pt-[max(0.65rem,env(safe-area-inset-top))] pr-[max(0.4rem,env(safe-area-inset-right))] pb-3 pl-[max(0.4rem,env(safe-area-inset-left))] sm:px-[clamp(1rem,5vw,4.5rem)] sm:pt-4 sm:pb-4"
    >
          <motion.a
            href="#hero"
            data-cursor="interactive"
            aria-label="AF — back to top"
            className="relative pointer-events-auto shrink-0 flex items-center rounded-full border border-text-primary/15 bg-surface/90 px-2 py-0.5 sm:px-3 sm:py-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-3xl outline-none will-change-transform lg:px-3 lg:py-1.5 transition-colors hover:border-text-primary/25"
            whileHover={reduceMotion ? {} : { scale: 1.04 }}
            whileTap={reduceMotion ? {} : { scale: 0.96 }}
          >
            <Image
              src="/AF-navbar-logo.svg"
              alt="AF logo"
              width={72}
              height={28}
              priority
              className="relative z-10 h-3.5 w-auto sm:h-5 lg:h-7"
            />
          </motion.a>

        <motion.div
          className="pointer-events-auto flex shrink min-w-0 max-w-full items-center gap-1 will-change-transform sm:max-w-[calc(100vw-8rem)] sm:gap-2"
        >

          <nav
            aria-label="Site navigation"
            onMouseLeave={() => setHoveredHref(null)}
            className="relative flex min-w-0 max-w-full shrink items-center gap-0.5 overflow-x-auto rounded-full border border-text-primary/15 bg-surface/90 p-0.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-3xl transition-colors duration-300 hover:border-text-primary/25 [-ms-overflow-style:none] [scrollbar-width:none] sm:gap-1 sm:p-1.5 [&::-webkit-scrollbar]:hidden"
          >
            {links.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                isActive={active === link.href}
                isHovered={hoveredHref === link.href}
                onHoverStart={() => setHoveredHref(link.href)}
                reduceMotion={reduceMotion}
              />
            ))}
          </nav>
          <motion.div
            whileHover={reduceMotion ? {} : { scale: 1.08, rotate: 6 }}
            whileTap={reduceMotion ? {} : { scale: 0.92, rotate: -4 }}
            transition={{ type: "spring", stiffness: 500, damping: 22 }}
            className="shrink-0"
          >
            <ThemeToggle />
          </motion.div>
        </motion.div>
      </header>
  );
}
