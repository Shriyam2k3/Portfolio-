export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description: string;
  courses: string[];
}

export const educationData: EducationItem[] = [
  {
    institution: "VIT Bhopal University",
    degree: "Bachelor of Technology in Computer Science Engineering",
    duration: "July 2023 – May 2027",
    location: "Bhopal, Madhya Pradesh, India",
    description:
      "Undergraduate studies with comprehensive focus on core computer science foundations, software engineering methodologies, data structures, algorithms, database systems, and modern full-stack application development.",
    courses: [
      "Data Structures and Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Computer Networks",
      "Software Engineering",
    ],
  },
];

