import type { Skill } from "./types";

export const skills: Skill[] = [
  { name: "JavaScript", category: "language", level: 90 },
  { name: "TypeScript", category: "language", level: 80 },
  { name: "HTML", category: "language", level: 95 },
  { name: "CSS", category: "language", level: 88 },

  // TODO: replace with live-site percentages when confirmed
  { name: "React", category: "framework", level: 88 },
  { name: "Next.js", category: "framework", level: 85 },
  { name: "Node.js", category: "framework", level: 78 },
  { name: "NestJS", category: "framework", level: 72 },
  { name: "Tailwind CSS", category: "framework", level: 90 },

  // TODO: replace with live-site percentages when confirmed
  { name: "Git", category: "tool", level: 85 },
  { name: "MongoDB", category: "tool", level: 80 },
  { name: "Firebase", category: "tool", level: 75 },
  { name: "Vercel", category: "tool", level: 82 },
  { name: "Android Studio", category: "tool", level: 70 },

  // TODO: replace with live-site percentages when confirmed
  { name: "REST APIs", category: "concept", level: 85 },
  { name: "Responsive UI", category: "concept", level: 90 },
  { name: "Agile / Scrum", category: "concept", level: 80 },
  { name: "CRUD / RBAC", category: "concept", level: 84 },
];

export const skillTabs = [
  { id: "language", label: "Languages" },
  { id: "framework", label: "Frameworks" },
  { id: "tool", label: "Tools" },
  { id: "concept", label: "Concepts" },
] as const;
