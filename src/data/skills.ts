export type SkillCategory =
  | "All"
  | "Languages"
  | "Frontend"
  | "Backend"
  | "Database"
  | "Auth"
  | "Tools"
  | "Core";

export interface SkillItem {
  name: string;
  category: SkillCategory;
  iconName: string;
  highlight?: boolean;
}

export const skillCategories: { id: SkillCategory; label: string }[] = [
  { id: "All", label: "All Skills" },
  { id: "Languages", label: "Languages" },
  { id: "Frontend", label: "Frontend" },
  { id: "Backend", label: "Backend" },
  { id: "Database", label: "Database" },
  { id: "Auth", label: "Auth & Security" },
  { id: "Tools", label: "Tools & DevOps" },
  { id: "Core", label: "Core Concepts" },
];

export const skillsData: SkillItem[] = [
  // Programming Languages
  { name: "C++", category: "Languages", iconName: "SiCplusplus", highlight: true },
  { name: "Java", category: "Languages", iconName: "FaJava", highlight: true },
  { name: "Python", category: "Languages", iconName: "SiPython", highlight: true },
  { name: "JavaScript", category: "Languages", iconName: "SiJavascript", highlight: true },
  { name: "TypeScript", category: "Languages", iconName: "SiTypescript", highlight: true },
  { name: "SQL", category: "Languages", iconName: "TbSql", highlight: true },

  // Frontend
  { name: "React.js", category: "Frontend", iconName: "SiReact", highlight: true },
  { name: "Next.js", category: "Frontend", iconName: "SiNextdotjs", highlight: true },
  { name: "Tailwind CSS", category: "Frontend", iconName: "SiTailwindcss", highlight: true },

  // Backend
  { name: "Node.js", category: "Backend", iconName: "SiNodedotjs", highlight: true },
  { name: "Express.js", category: "Backend", iconName: "SiExpress", highlight: true },
  { name: "REST APIs", category: "Backend", iconName: "TbApi", highlight: true },
  { name: "Socket.io", category: "Backend", iconName: "SiSocketdotio", highlight: true },

  // Database
  { name: "MongoDB", category: "Database", iconName: "SiMongodb", highlight: true },
  { name: "MySQL", category: "Database", iconName: "SiMysql", highlight: true },
  { name: "PostgreSQL", category: "Database", iconName: "SiPostgresql", highlight: true },
  { name: "Redis", category: "Database", iconName: "SiRedis", highlight: true },

  // Authentication
  { name: "JWT", category: "Auth", iconName: "SiJsonwebtokens", highlight: true },
  { name: "Firebase Auth", category: "Auth", iconName: "SiFirebase", highlight: true },
  { name: "Passport.js", category: "Auth", iconName: "SiPassport", highlight: true },
  { name: "RBAC", category: "Auth", iconName: "ShieldCheck", highlight: true },

  // Tools
  { name: "Git", category: "Tools", iconName: "SiGit", highlight: true },
  { name: "GitHub", category: "Tools", iconName: "SiGithub", highlight: true },
  { name: "Docker", category: "Tools", iconName: "SiDocker", highlight: true },
  { name: "Postman", category: "Tools", iconName: "SiPostman", highlight: true },
  { name: "Vercel", category: "Tools", iconName: "SiVercel", highlight: true },
  { name: "Render", category: "Tools", iconName: "SiRender", highlight: true },

  // Core Concepts
  { name: "Data Structures & Algorithms", category: "Core", iconName: "Binary", highlight: true },
  { name: "Object-Oriented Programming (OOP)", category: "Core", iconName: "Cpu", highlight: true },
  { name: "Database Management Systems (DBMS)", category: "Core", iconName: "Database", highlight: true },
  { name: "Operating Systems", category: "Core", iconName: "Terminal", highlight: true },
  { name: "Computer Networks", category: "Core", iconName: "Network", highlight: true },
];

