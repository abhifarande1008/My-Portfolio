"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const facts = [
  "B.Tech IT — Walchand Institute of Technology, Sangli · CGPA 8.87",
  "Diploma — DKTE's Yashwantrao Chavan Polytechnic, Ichalkaranji · 92.44%",
  "Software Developer Intern — Akron Systems (On-site, June 2025–Present)",
  "Open to full-time & freelance opportunities",
];

export function About() {
  return (
    <section id="about" className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="font-mono text-[length:var(--text-mono)] tracking-[0.2em] text-accent uppercase"
        >
          About
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.08, ease }}
          className="mt-3 font-serif text-[length:var(--text-h2)]"
        >
          I build things for the web.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.16, ease }}
          className="mt-6 text-text-secondary"
        >
          Final-year IT student at Walchand Institute of Technology with hands-on
          experience in full-stack development. Currently interning at Akron Systems,
          building a multi-tenant College ERP.
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.24, ease }}
          className="mt-8 border-l-2 border-accent pl-5 font-serif text-2xl text-text-primary"
        >
          I care about clean code, fast UIs, and solving real problems.
        </motion.blockquote>
      </div>
      <motion.aside
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.16, ease }}
        className="rounded-2xl border border-white/10 bg-surface/75 p-6 backdrop-blur-sm lg:mr-[12vw]"
      >
        <p className="font-mono text-[length:var(--text-mono)] tracking-[0.18em] text-accent uppercase">
          Quick facts
        </p>
        <ul className="mt-5 space-y-4">
          {facts.map((fact, index) => (
            <motion.li
              key={fact}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.08, ease }}
              className="text-sm text-text-secondary"
            >
              {fact}
            </motion.li>
          ))}
        </ul>
      </motion.aside>
    </section>
  );
}
