import type { ExperienceEntry } from "./types";

export const experience: ExperienceEntry[] = [
  {
    type: "experience",
    title: "Full-Stack Developer",
    org: "Seratek Systems (formerly Akron System)",
    period: "Jan 2026 – Present",
    description:
      "Developed 72+ pages on Next.js App Router with 600+ components. Implemented multi-step admission forms with React Hook Form + Zod. Engineered role-based Internal Marks submission (1,200+ lines) with RBAC routing. Resolved Examination-module race conditions with a 5-minute TTL cache. Developed Preview-Personalization backend (GraphQL + REST APIs). Secured routes with AuthGuard, state management via Redux Toolkit, React Query, Apollo.",
    tags: ["Next.js", "NestJS", "TypeScript", "GraphQL", "MongoDB", "Tailwind CSS"],
  },
  {
    type: "experience",
    title: "Software Developer Intern",
    org: "Seratek Systems",
    period: "June 2025 – Dec 2025",
    description:
      "Delivered NestJS + MongoDB REST APIs and shadcn/ui CRUD pages for student, course and scholarship modules.",
    tags: ["NestJS", "MongoDB", "shadcn/ui", "REST APIs"],
  },
];

