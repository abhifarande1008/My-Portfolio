"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "5+", label: "Technologies" },
  { value: "2", label: "Live Projects" },
];

export function Hero() {
  return (
    <section id="hero" className="section-shell flex flex-col justify-center">
      <motion.p
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease }}
        className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[length:var(--text-mono)] text-accent"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        Available for Work
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.08, ease }}
        className="max-w-4xl font-serif text-[length:var(--text-hero)] leading-[0.95] text-text-primary"
      >
        Abhishek Farande
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.16, ease }}
        className="mt-4 font-mono text-[length:var(--text-mono)] tracking-[0.18em] text-accent uppercase"
      >
        React & Next.js Developer · Kolhapur, Maharashtra
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, delay: 0.24, ease }}
        className="mt-6 max-w-xl text-text-secondary"
      >
        Passionate developer crafting modern web experiences using cutting-edge
        technologies. Specialized in building responsive, user-friendly applications.
      </motion.p>
      <div className="mt-10 flex flex-wrap gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.32 + index * 0.08, ease }}
          >
            <p className="font-serif text-3xl text-text-primary">{stat.value}</p>
            <p className="font-mono text-[length:var(--text-mono)] text-text-secondary">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.56, ease }}
        className="mt-10 flex flex-wrap gap-3"
      >
        <MagneticButton
          href="#work"
          className="rounded-full bg-accent px-5 py-3 font-mono text-[length:var(--text-mono)] text-void"
        >
          View Work
        </MagneticButton>
        <MagneticButton
          href="#contact"
          className="rounded-full border border-white/15 px-5 py-3 font-mono text-[length:var(--text-mono)] text-text-primary"
        >
          Contact Me
        </MagneticButton>
        <MagneticButton
          href="/resume.pdf"
          className="rounded-full border border-accent/40 px-5 py-3 font-mono text-[length:var(--text-mono)] text-accent"
        >
          Download Resume
        </MagneticButton>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.72, duration: 0.8 }}
        className="mt-8 flex gap-5 font-mono text-[length:var(--text-mono)] text-text-secondary"
      >
        <a
          href="https://github.com/abhishekfarande04"
          target="_blank"
          rel="noreferrer"
          data-cursor="interactive"
          className="hover:text-accent"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-farande-3836a6253"
          target="_blank"
          rel="noreferrer"
          data-cursor="interactive"
          className="hover:text-accent"
        >
          LinkedIn
        </a>
        <a href="mailto:abhishekfarande81@gmail.com" data-cursor="interactive" className="hover:text-accent">
          Email
        </a>
      </motion.div>
    </section>
  );
}
