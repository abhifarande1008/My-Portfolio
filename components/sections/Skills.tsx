"use client";

import { motion } from "framer-motion";
import { SkillTabs } from "@/components/ui/SkillTabs";

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <motion.p
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-[length:var(--text-mono)] tracking-[0.2em] text-accent uppercase"
      >
        Skills
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 max-w-2xl font-serif text-[length:var(--text-h2)]"
      >
        Tools I reach for.
      </motion.h2>
      <div className="mt-10 max-w-2xl lg:mr-[22vw]">
        <SkillTabs />
      </div>
    </section>
  );
}
