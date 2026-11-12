export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  description: string;
  skillsAcquired: string[];
}

export const certificationsData: CertificationItem[] = [
  {
    id: "apna-college-fullstack",
    title: "Full Stack Web Development",
    issuer: "Apna College",
    category: "Full Stack Web Engineering",
    description:
      "Comprehensive certification program covering end-to-end full-stack web application engineering, modern React frontend development, Node.js and Express backend REST API architecture, and database management with MongoDB.",
    skillsAcquired: [
      "React.js & State Management",
      "Node.js & Express.js REST APIs",
      "MongoDB & Mongoose Schemas",
      "Authentication & Route Protection",
      "Full Stack System Deployment",
    ],
  },
  {
    id: "mp-online-se-ai",
    title: "Advanced Software Engineering and AI Foundation",
    issuer: "MP Online Limited",
    category: "Software Engineering & Applied AI",
    description:
      "Advanced professional training program covering core software engineering lifecycles, structured system design, object-oriented principles, and foundations of artificial intelligence and machine learning applications.",
    skillsAcquired: [
      "Software Engineering Lifecycles & Methodologies",
      "System Design & Object-Oriented Architecture",
      "Foundations of Machine Learning & Applied AI",
      "Enterprise Workflow Development",
    ],
  },
];

