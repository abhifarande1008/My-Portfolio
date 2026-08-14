import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "college-erp",
    title: "College ERP System",
    description:
      "Multi-tenant College ERP at Akron Systems — role-based dashboards, dynamic forms, and full CRUD in an Agile team.",
    bullets: [
      "Contributing to a multi-tenant College ERP system at Akron Systems as part of a 5-member Agile team",
      "Built responsive role-based dashboards with dynamic forms and full CRUD functionality",
      "Optimized backend APIs using NestJS and MongoDB, reducing response latency by 25%",
      "Collaborated in Agile sprints, improving delivery speed by 15%",
    ],
    tech: ["Next.js", "NestJS", "TypeScript", "Tailwind CSS", "ShadCN UI", "MongoDB"],
    image: "/projects/erp.svg",
    status: "building",
    private: true,
  },
  {
    id: "park-o",
    title: "Park-O — Online Parking System",
    description:
      "Role-based parking management with map visualization, automated fees, and Admin / User / Operator access.",
    bullets: [
      "Built a role-based online parking management system for booking and managing spaces",
      "Implemented Admin / User / Entry-Exit Operator roles for controlled access",
      "Integrated Leaflet maps for real-time parking location visualization",
      "Deployed on Vercel; designed a time-based cost calculation system for automated fee estimation",
    ],
    tech: ["Next.js", "Node.js", "JavaScript", "Leaflet", "MongoDB", "Vercel"],
    image: "/projects/parko.svg",
    status: "shipped",
    githubUrl: "https://github.com/abhishekfarande04",
  },
  {
    id: "diploma-aspirants",
    title: "Diploma Aspirants App",
    description:
      "Android app for diploma students to access shared study materials with Firebase auth and real-time sync.",
    bullets: [
      "Built a centralized Android app for diploma students to access shared study materials",
      "Integrated Firebase for real-time sync and user authentication",
      "Improved study accessibility and reduced resource duplication",
    ],
    tech: ["Android Studio", "Firebase"],
    image: "/projects/diploma.svg",
    status: "shipped",
    private: true,
    liveUrl: "#",
  },
];
