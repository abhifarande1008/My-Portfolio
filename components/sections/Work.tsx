"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projectsData";
import { ProjectCard } from "@/components/ui/ProjectCard";

export function Work() {
  return (
    <section id="work" className="section-shell">
      <motion.p
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-[length:var(--text-mono)] tracking-[0.2em] text-accent uppercase"
      >
        Work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className="mt-3 font-serif text-[length:var(--text-h2)]"
      >
        Selected projects.
      </motion.h2>
      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
