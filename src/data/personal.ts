export interface SocialLinks {
  github: string;
  linkedin: string;
  leetcode: string;
  email: string;
  phone?: string;
}

export interface PersonalInfo {
  name: string;
  monogram: string;
  titles: string[];
  roleAnimation: string[];
  summary: string;
  heroDescription: string;
  aboutDescription: string;
  education: {
    institution: string;
    degree: string;
    duration: string;
    location: string;
  };
  socials: SocialLinks;
  resumeUrl: string;
  profilePhoto: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
  pillars: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export const personalData: PersonalInfo = {
  name: "Shriyam Rastogi",
  monogram: "SR",
  titles: [
    "Software Developer",
    "Full Stack Developer",
    "SDE Aspirant"
  ],
  roleAnimation: [
    "Software Developer",
    "Full Stack Developer",
    "Software Engineering Enthusiast"
  ],
  summary:
    "I am a Computer Science Engineering undergraduate at VIT Bhopal University with a strong interest in software development, full-stack engineering, data structures and algorithms, and building scalable real-world applications. I enjoy developing complete applications, designing backend APIs, integrating modern technologies, and solving engineering challenges.",
  heroDescription:
    "Computer Science undergraduate at VIT Bhopal University, passionate about building scalable full-stack applications, solving real-world engineering problems, and exploring AI-powered solutions.",
  aboutDescription:
    "I am a Computer Science Engineering undergraduate at VIT Bhopal University with a passion for building scalable and meaningful software applications. My interests include full-stack development, backend engineering, data structures and algorithms, and AI-powered applications. I enjoy transforming ideas into functional products and continuously improving my engineering skills.",
  education: {
    institution: "VIT Bhopal University",
    degree: "Bachelor of Technology in Computer Science Engineering",
    duration: "July 2023 – May 2027",
    location: "Bhopal, Madhya Pradesh, India",
  },
  socials: {
    github: "https://github.com/Shriyam2k3",
    linkedin: "https://www.linkedin.com/in/shriyam-rastogi",
    leetcode: "https://leetcode.com/u/Shriyam2k3/",
    email: "shriyamrastogi123@email.com",
    phone: "895-764-3317",
  },
  resumeUrl: "/resume/Shriyam_Rastogi_Resume.pdf",
  profilePhoto: "/images/profile.jpeg",
  stats: [
    {
      label: "Featured Projects",
      value: "3",
      description: "Full-Stack Production Platforms",
    },
    {
      label: "LeetCode Problems Solved",
      value: "270+",
      description: "Data Structures & Algorithms",
    },
    {
      label: "Core Specialization",
      value: "Full Stack",
      description: "Scalable Systems & APIs",
    },
  ],
  pillars: [
    {
      title: "Problem Solver",
      description:
        "Passionate about data structures, algorithmic complexity, and designing elegant solutions to challenging engineering problems.",
      icon: "Code2",
    },
    {
      title: "Full Stack Developer",
      description:
        "Hands-on expertise across modern React/Next.js interfaces, Node.js/Express microservices, and database modeling with MongoDB & SQL.",
      icon: "Layers",
    },
    {
      title: "Quick Learner",
      description:
        "Agile adapter of emerging technologies, modern API standards, cloud microservices, and high-performance developer tooling.",
      icon: "Sparkles",
    },
    {
      title: "Product-Oriented Thinker",
      description:
        "Focused on crafting intuitive user experiences, bulletproof security, clean system architecture, and real business utility.",
      icon: "Rocket",
    },
  ],
};

