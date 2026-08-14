"use client";

import { useEffect, useState } from "react";
import { useScrollProgress } from "@/lib/scroll-context";

const links = [
  { href: "#hero", label: "Hero", start: 0, end: 0.15 },
  { href: "#about", label: "About", start: 0.15, end: 0.35 },
  { href: "#skills", label: "Skills", start: 0.35, end: 0.5 },
  { href: "#work", label: "Work", start: 0.5, end: 0.8 },
  { href: "#contact", label: "Contact", start: 0.8, end: 1.01 },
];

export function Navbar() {
  const progress = useScrollProgress();
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const unsub = progress.on("change", (value) => {
      const match = links.find((link) => value >= link.start && value < link.end);
      if (match) setActive(match.href);
    });
    return () => unsub();
  }, [progress]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-[clamp(1.25rem,5vw,4.5rem)] py-5">
      <a
        href="#hero"
        data-cursor="interactive"
        className="font-mono text-[length:var(--text-mono)] tracking-[0.2em] text-accent uppercase"
      >
        AF
      </a>
      <nav className="flex flex-wrap justify-end gap-x-5 gap-y-2 font-mono text-[length:var(--text-mono)] uppercase">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            data-cursor="interactive"
            className={
              active === link.href
                ? "text-accent"
                : "text-text-secondary transition-colors hover:text-text-primary"
            }
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
