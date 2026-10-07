import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio – 3D Interactive Site",
    description: "A scroll-driven 3D portfolio with procedural Three.js scenes, optimized for performance.",
    bullets: [
      "Built a scroll-driven 3D portfolio with procedural Three.js scenes",
      "Optimized for 90+ Lighthouse mobile scores",
    ],
    tech: ["Next.js", "React Three Fiber", "Three.js", "Framer Motion"],
    image: "/projects/erp.svg", // Reusing an existing icon placeholder if there's no specific one
    status: "shipped",
    githubUrl: "https://github.com/abhifarande1008/My-Portfolio",
  },
  {
    id: "park-o",
    title: "Parko – Online Parking System",
    description:
      "Role-based parking platform with Leaflet maps and automated fee calculation.",
    bullets: [
      "Built a role-based parking platform with Leaflet maps and automated fee calculation",
      "Deployed the full-stack app on Vercel",
    ],
    tech: ["Next.js", "NestJS", "MongoDB", "Leaflet", "Vercel"],
    image: "/projects/parko.svg",
    status: "shipped",
    githubUrl: "https://github.com/abhifarande1008/Parko---Online-Parking-System",
  }
];
