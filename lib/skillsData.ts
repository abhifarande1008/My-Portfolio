import type { Skill } from "./types";

export const skills: Skill[] = [
  { name: "TypeScript", category: "frontend", level: 90 },
  { name: "JavaScript", category: "frontend", level: 90 },
  { name: "React.js", category: "frontend", level: 90 },
  { name: "Next.js", category: "frontend", level: 85 },
  { name: "Redux Toolkit", category: "frontend", level: 80 },
  { name: "React Query", category: "frontend", level: 80 },
  { name: "React Hook Form", category: "frontend", level: 85 },
  { name: "Zod", category: "frontend", level: 85 },
  { name: "Tailwind CSS", category: "frontend", level: 90 },
  { name: "shadcn/ui", category: "frontend", level: 85 },
  { name: "HTML/CSS", category: "frontend", level: 95 },

  { name: "Node.js", category: "backend", level: 80 },
  { name: "NestJS", category: "backend", level: 80 },
  { name: "RESTful APIs", category: "backend", level: 85 },
  { name: "GraphQL (Apollo)", category: "backend", level: 80 },
  { name: "MongoDB", category: "backend", level: 85 },

  { name: "Git", category: "tools", level: 85 },
  { name: "Postman", category: "tools", level: 85 },
  { name: "Azure Boards", category: "tools", level: 80 },
  { name: "Vercel", category: "tools", level: 85 },
  { name: "Microservices", category: "tools", level: 75 },
  { name: "Multi-tenancy", category: "tools", level: 80 },
  { name: "RBAC", category: "tools", level: 85 },
  { name: "SSR", category: "tools", level: 85 },
  { name: "Caching", category: "tools", level: 80 },
  { name: "OOP", category: "tools", level: 85 },
  { name: "DBMS", category: "tools", level: 80 },
  { name: "Agile", category: "tools", level: 85 },
];

export const skillTabs = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools & Concepts" },
] as const;
