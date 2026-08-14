"use client";

import { useEffect, useState } from "react";
import { useScrollProgress } from "@/lib/scroll-context";
import { useActiveSection } from "@/lib/use-active-section";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const progress = useScrollProgress();
  const active = useActiveSection();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    return progress.on("change", (value) => {
      const next = value > 0.02;
      setScrolled((current) => (current === next ? current : next));
    });
  }, [progress]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 flex items-center justify-between gap-2 pt-[max(0.65rem,env(safe-area-inset-top))] pr-[max(0.75rem,env(safe-area-inset-right))] pb-3 pl-[max(0.75rem,env(safe-area-inset-left))] transition-colors duration-500 sm:gap-4 sm:px-[clamp(1rem,5vw,4.5rem)] sm:pt-4 sm:pb-4 ${
        scrolled ? "border-b border-white/6 bg-void/55 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <a
        href="#hero"
        data-cursor="interactive"
        className="shrink-0 font-mono text-[length:var(--text-mono)] tracking-[0.28em] text-accent uppercase"
      >
        AF
      </a>
      <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 sm:gap-3">
        <nav className="flex min-w-0 max-w-full gap-0.5 overflow-x-auto overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] sm:max-w-none sm:gap-1 [&::-webkit-scrollbar]:hidden">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor="interactive"
                className={`shrink-0 rounded-full px-2 py-1.5 font-mono text-[10px] uppercase transition-colors sm:px-3 sm:text-[length:var(--text-mono)] ${
                  isActive
                    ? "bg-accent/15 text-accent"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
