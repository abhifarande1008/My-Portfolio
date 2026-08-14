"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import type { Project } from "@/lib/types";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLElement>(null);

  const onMove = (event: MouseEvent<HTMLElement>) => {
    const node = cardRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 12;
    const rotateX = (0.5 - py) * 12;
    node.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    const node = cardRef.current;
    if (node) node.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="group overflow-hidden rounded-2xl border border-white/8 bg-surface/80 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-transform duration-200 will-change-transform"
      data-cursor="interactive"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-void">
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          quality={90}
          className="object-cover"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {project.status === "building" && (
            <span className="rounded-full bg-accent/20 px-2 py-1 font-mono text-[10px] tracking-wider text-accent uppercase">
              Currently Building
            </span>
          )}
          {project.private && (
            <span className="rounded-full bg-black/50 px-2 py-1 font-mono text-[10px] tracking-wider text-text-primary uppercase">
              Private Repo
            </span>
          )}
          {project.liveUrl && (
            <span className="rounded-full bg-warm/20 px-2 py-1 font-mono text-[10px] tracking-wider text-warm uppercase">
              Live Demo
            </span>
          )}
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div>
          <h3 className="font-serif text-2xl text-text-primary">{project.title}</h3>
          <p className="mt-2 text-sm text-text-secondary">{project.description}</p>
        </div>
        <ul className="space-y-2 text-sm text-text-secondary">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 px-2 py-1 font-mono text-[length:var(--text-mono)] text-text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 font-mono text-[length:var(--text-mono)]">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-accent">
              GitHub
            </a>
          )}
          {project.liveUrl && project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-accent">
              Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
