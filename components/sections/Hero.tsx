"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SITE } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "2+", label: "Years Coding" },
  { value: "5+", label: "Technologies" },
  { value: "2", label: "Live Projects" },
];

export function Hero() {
  return (
    <section id="hero" className="section-shell grid items-center md:grid-cols-[minmax(0,1.15fr)_minmax(14rem,40%)] lg:grid-cols-[minmax(0,1fr)_minmax(16rem,42%)]">
      <div className="copy-lane relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease }}
          className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[length:var(--text-mono)] text-accent"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Available for Work
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          className="font-serif text-[length:var(--text-hero)] leading-[0.92] text-text-primary"
        >
          Abhishek
          <br />
          Farande
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.16, ease }}
          className="mt-5 max-w-full font-mono text-[length:var(--text-mono)] tracking-[0.12em] text-accent uppercase sm:tracking-[0.18em]"
        >
          Full-Stack Developer · Kolhapur
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.24, ease }}
          className="mt-6 max-w-md text-pretty text-text-secondary"
        >
          Full-Stack Developer building admissions, examination, fee-payment and student-record
          modules of a multi-tenant College ERP — using Next.js, React, TypeScript, NestJS, and MongoDB.
        </motion.p>
        <div className="mt-8 flex flex-wrap gap-4 sm:mt-10 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.32 + index * 0.08, ease }}
              className="min-w-[120px] rounded-2xl border border-text-primary/10 bg-surface/40 p-4 shadow-sm backdrop-blur-md transition-colors hover:bg-surface/60 sm:p-5"
            >
              <p className="font-serif text-3xl text-text-primary">{stat.value}</p>
              <p className="mt-1 font-mono text-[length:var(--text-mono)] text-text-secondary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.56, ease }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href="#work"
            className="rounded-full bg-accent px-5 py-3 font-mono text-[length:var(--text-mono)] text-void transition-all hover:bg-accent/90 hover:shadow-[0_0_20px_color-mix(in_oklch,var(--accent)_40%,transparent)] sm:px-6 sm:py-3.5"
          >
            View Work
          </MagneticButton>
          <MagneticButton
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-text-primary/20 bg-transparent px-5 py-3 font-mono text-[length:var(--text-mono)] text-text-primary transition-colors hover:border-accent/50 hover:bg-accent/5 sm:px-6 sm:py-3.5"
          >
            Download Resume
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="group relative flex items-center justify-center px-2 py-3 font-mono text-[length:var(--text-mono)] text-text-secondary transition-colors hover:text-text-primary sm:px-3 sm:py-3.5"
          >
            Contact Me
            <span className="absolute bottom-2 left-2 right-2 block h-[1px] origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100 sm:bottom-2.5 sm:left-3 sm:right-3"></span>
          </MagneticButton>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.72, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[length:var(--text-mono)] text-text-secondary"
        >
          <a href={SITE.github} target="_blank" rel="noreferrer" data-cursor="interactive" className="transition-colors hover:text-accent">
            GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noreferrer" data-cursor="interactive" className="transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={`mailto:${SITE.emailWork}`} data-cursor="interactive" className="transition-colors hover:text-accent">
            Email
          </a>
        </motion.div>
      </div>
      <div className="hidden md:block" aria-hidden />
    </section>
  );
}
