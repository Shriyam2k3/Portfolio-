export interface JourneyMilestone {
  year: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
}

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "July 2023",
    title: "Commenced B.Tech in CSE at VIT Bhopal University",
    category: "Academic Foundation",
    description:
      "Embarked on computer science degree with deep dive into fundamental engineering principles, computational logic, and low-level programming.",
    highlights: [
      "Rigorous foundations in C++ and Java",
      "Object-Oriented Programming (OOP) paradigms",
      "Discrete mathematics and computer organization",
    ],
  },
  {
    year: "Early 2024",
    title: "Algorithmic Problem Solving & Data Structures",
    category: "Algorithms & Logic",
    description:
      "Intensive focus on Data Structures and Algorithms on LeetCode, mastering complex algorithmic problem-solving patterns.",
    highlights: [
      "Solved 270+ DSA challenges on LeetCode",
      "Deep mastery in Arrays, Pointers, Linked Lists, Trees, and Recursion",
      "Time and space complexity optimization",
    ],
  },
  {
    year: "Late 2024 – Early 2025",
    title: "Full-Stack Web Development & Modern JavaScript",
    category: "Full Stack Engineering",
    description:
      "Transitioned into building complete modern web applications using the MERN ecosystem and mastering modern JavaScript/TypeScript architectures.",
    highlights: [
      "Completed Full Stack Web Development specialization with Apna College",
      "Built dynamic Single Page Applications with React and Tailwind CSS",
      "Engineered backend RESTful APIs with Node.js, Express, and MongoDB",
    ],
  },
  {
    year: "Mid 2026",
    title: "Architecting Distributed Systems & Real-Time Queues",
    category: "Systems & Real-Time Web",
    description:
      "Engineered MediSync — an enterprise-grade hospital management system supporting 6-role RBAC, Socket.io real-time queue synchronization, and Google Gemini AI.",
    highlights: [
      "Real-time bidirectional WebSocket events with Socket.io",
      "Six-role granular authorization security layer (RBAC)",
      "Bilingual healthcare AI triage integration with zero-latency fallback",
    ],
  },
  {
    year: "August 2026",
    title: "Logistics Optimization, Geolocation & High-Speed AI",
    category: "Applied AI & Geolocation",
    description:
      "Engineered ExpressFlow Last-Mile Delivery platform featuring Pan-India GPS road telemetry, Haversine driver dispatch, dynamic freight pricing, and Groq LLaMA 3.3 AI.",
    highlights: [
      "Pan-India GPS routing with Leaflet & OSRM road polyline engine",
      "Automated courier dispatch using Haversine great-circle calculations",
      "Groq AI integration for sub-second Indian address parsing & ETA risk assessment",
    ],
  },
  {
    year: "October 2026 – Present",
    title: "Next.js App Router Architecture & Production Platforms",
    category: "Modern Cloud Architecture",
    description:
      "Engineered Rent-a-Ride car rental platform leveraging Next.js App Router, React 19, Firebase Authentication, Cloudinary CDN, and scalable MongoDB schemas.",
    highlights: [
      "Modern Next.js server components and client-side reservation engine",
      "Firebase OAuth and role-based multi-dashboard security",
      "Ready for high-impact Software Development Engineer (SDE) roles",
    ],
  },
];

