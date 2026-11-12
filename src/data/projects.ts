export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  period: string;
  featured: boolean;
  shortDescription: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  bannerGradient: string;
  accentColor: string;
  overview: string;
  problemStatement: string;
  solution: string;
  keyFeatures: ProjectFeature[];
  technicalChallenges: {
    challenge: string;
    solution: string;
  }[];
  engineeringDecisions: {
    decision: string;
    rationale: string;
  }[];
  architecturePoints: string[];
}

export const projectsData: ProjectData[] = [
  {
    id: "rent-a-ride",
    slug: "rent-a-ride",
    title: "Rent-a-Ride",
    subtitle: "Full-Stack Car Rental & Fleet Reservation Platform",
    period: "October 2026",
    featured: true,
    shortDescription:
      "A full-stack car rental platform supporting vehicle discovery, advanced filtering, date-based reservations, and booking management.",
    githubUrl: "https://github.com/Shriyam2k3/Rent-a-Ride",
    liveUrl: "https://rent-a-ride-nu.vercel.app/",
    technologies: [
      "Next.js",
      "React 19",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Firebase Authentication",
      "Cloudinary",
      "Tailwind CSS",
    ],
    bannerGradient: "from-blue-600/20 via-blue-900/10 to-charcoal",
    accentColor: "#2F6BFF",
    overview:
      "Rent-a-Ride is a modern, high-performance car rental web application designed to simplify vehicle discovery, booking reservations, and fleet operations. Built with Next.js App Router and React 19 on the frontend with a scalable Node.js/MongoDB backend, the platform enables customers to discover rental vehicles, filter by category and pricing, and reserve dates seamlessly while offering administrators a complete dashboard for fleet and booking management.",
    problemStatement:
      "Traditional car rental processes suffer from friction: disjointed scheduling, slow vehicle search interfaces, lack of real-time reservation availability validation, and cumbersome manual administrative workflows for updating fleet inventory and rental statuses.",
    solution:
      "Rent-a-Ride provides an integrated digital portal combining instantaneous vehicle search with faceted filtering, server-side date-range collision detection, secure Firebase authentication, and an administrative inventory control center connected to Cloudinary CDN for instant media delivery.",
    keyFeatures: [
      {
        title: "Vehicle Discovery & Filtering",
        description:
          "Browse available vehicles with real-time parametric filters for category, transmission, fuel type, daily pricing, and capacity.",
      },
      {
        title: "Date-Based Booking Engine",
        description:
          "Interactive calendar date-picker with automatic overlap validation to prevent double-booking conflicts.",
      },
      {
        title: "Firebase Authentication & Google Sign-In",
        description:
          "Seamless authentication supporting both email/password credentials and one-tap Google OAuth with protected session management.",
      },
      {
        title: "Role-Based Access Control (RBAC)",
        description:
          "Server-side route protection segregating customer booking portals, vendor profiles, and administrator control panels.",
      },
      {
        title: "Admin Fleet Operations",
        description:
          "Dedicated management interface to add new vehicles, upload multi-angle photography to Cloudinary, configure pricing, and audit reservations.",
      },
      {
        title: "RESTful API Architecture",
        description:
          "Clean modular REST endpoints handling vehicle CRUD, availability checks, customer reservation histories, and user profile management.",
      },
    ],
    technicalChallenges: [
      {
        challenge: "Preventing Concurrent Date-Overlap Collisions",
        solution:
          "Implemented database-level queries verifying that new booking intervals [startDate, endDate] do not intersect existing confirmed reservations for the target vehicle before confirming state.",
      },
      {
        challenge: "Secure Media Management for Fleet Images",
        solution:
          "Integrated Cloudinary API with server-side signing to ensure fast, optimized WebP vehicle image transformations while minimizing server bandwidth load.",
      },
    ],
    engineeringDecisions: [
      {
        decision: "Next.js App Router for Frontend",
        rationale:
          "Leveraged Next.js App Router for hybrid server-side rendering of static vehicle catalogs and client-side interactivity for booking date-pickers.",
      },
      {
        decision: "Firebase Auth with MongoDB User Profiles",
        rationale:
          "Combines battle-tested OAuth token security and session handling from Firebase with deep, flexible relational data modeling in MongoDB.",
      },
    ],
    architecturePoints: [
      "Client: Next.js (App Router) + React 19 + Tailwind CSS + Lucide Icons",
      "Authentication: Firebase Authentication (Email/Password & Google Sign-In)",
      "Backend Services: Node.js + Express.js REST API",
      "Database: MongoDB Atlas with Mongoose ODM schemas",
      "Media Storage: Cloudinary Image CDN with automated WebP format delivery",
      "Deployment: Vercel edge infrastructure",
    ],
  },
  {
    id: "last-mile-delivery",
    slug: "last-mile-delivery",
    title: "Last-Mile Delivery & Logistics Platform",
    subtitle: "Intelligent Pan-India Telemetry & Haversine Fleet Dispatch",
    period: "August 2026",
    featured: true,
    shortDescription:
      "A multi-role logistics platform supporting customer, delivery-agent, and admin workflows with AI-assisted routing.",
    githubUrl: "https://github.com/Shriyam2k3/Last-Mile-Delivery-",
    liveUrl: "https://last-mile-delivery-orcin.vercel.app/",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Leaflet",
      "OSRM",
      "JWT",
      "Groq AI (LLaMA 3.3)",
      "Tailwind CSS",
    ],
    bannerGradient: "from-amber-600/20 via-orange-950/10 to-charcoal",
    accentColor: "#F59E0B",
    overview:
      "ExpressFlow is a production-grade full-stack logistics and last-mile delivery management platform. Built to overcome logistics bottlenecks across Pan-India freight operations, it brings together real-time GPS road routing via Leaflet and OSRM, automated nearest-driver assignment powered by the Haversine distance formula, dynamic dimensional weight freight calculations, and high-speed Groq AI (LLaMA 3.3) for Indian address typo correction, route risk assessment, and contextual AI logistics copilot assistance.",
    problemStatement:
      "Logistics operations face recurring hurdles: misassigned drivers leading to delayed handoffs, incorrect or non-standardized Indian delivery addresses causing failed first attempts, unpredictable pricing models, and lack of customer-facing rescheduling options.",
    solution:
      "ExpressFlow provides an end-to-end multi-role dispatch system where orders are dynamically priced using volumetric and zone matrices, automatically matched with the nearest available driver within capacity limits, visualized along real road polyline waypoints, and validated using Groq LLaMA 3.3 address intelligence.",
    keyFeatures: [
      {
        title: "Pan-India GPS Live Route Telemetry",
        description:
          "Leaflet-powered maps featuring single-polyline OSRM road routes (Agent -> Pickup -> Destination), radar-pulsing vehicle markers, and automated post-delivery cleanup.",
      },
      {
        title: "Haversine Nearest-Driver Auto-Assignment",
        description:
          "Algorithmic driver matching that computes great-circle distance between active couriers and pickup coordinates, respecting vehicle capacity caps.",
      },
      {
        title: "Configurable Freight Pricing Engine",
        description:
          "Volumetric calculation (L × B × H) / 5000, billing weight detection Max(Actual, Volumetric), intra/inter-zone slab lookups, and COD surcharges.",
      },
      {
        title: "Groq AI (LLaMA 3.3) Logistics Copilot",
        description:
          "Ultra-fast AI copilot assisting users with shipment queries, predicting corridor transit risk scores, and auto-formatting messy Indian street addresses.",
      },
      {
        title: "Customer Failed Delivery Rescheduling",
        description:
          "Self-serve customer portal allowing recipients to reschedule delivery time slots within a strict 3-attempt SLA window upon delivery exceptions.",
      },
      {
        title: "Enterprise Admin Command Center",
        description:
          "Comprehensive administrative dashboard featuring revenue reports, CSV export, live fleet distribution, user roster, and immutable activity audit logs.",
      },
    ],
    technicalChallenges: [
      {
        challenge: "Real-Road Multi-Leg Polyline Generation",
        solution:
          "Integrated Open Source Routing Machine (OSRM) with Nominatim geocoding to calculate actual turn-by-turn road networks rather than straight-line approximations.",
      },
      {
        challenge: "Sub-Second Address Normalization & Risk Inference",
        solution:
          "Utilized Groq's LPUs running LLaMA 3.3 70B to correct Indian colloquial address misspellings and output structured JSON delivery risk metrics with sub-second response times.",
      },
    ],
    engineeringDecisions: [
      {
        decision: "Haversine Pre-Filtering + OSRM Verification",
        rationale:
          "Utilized lightweight Haversine mathematical calculations in Node.js to narrow candidate drivers in O(N) time before running heavier road network routing on top candidates.",
      },
      {
        decision: "Multi-Role JWT Authentication Architecture",
        rationale:
          "Enforced strict role separation (Customer, Agent, Admin) through verified JWT claims and middleware gates preventing privilege escalation.",
      },
    ],
    architecturePoints: [
      "Frontend: React 18 Single Page Application with Tailwind CSS & Leaflet mapping",
      "API Layer: Express.js REST API with JWT authentication & role-based middleware",
      "Database: MongoDB Atlas with indexes on geolocation, status, and tracking IDs",
      "AI Engine: Groq AI running LLaMA 3.3 70B for address parsing and ETA risk scoring",
      "Routing & Geocoding: OSRM road polyline engine & OpenStreetMap Nominatim",
      "Deployment: Frontend on Vercel, API backend on Render",
    ],
  },
  {
    id: "medisync",
    slug: "medisync",
    title: "MediSync — Smart Hospital Management System",
    subtitle: "Real-Time Healthcare ERP with Socket.io Queue & Gemini AI",
    period: "July 2026",
    featured: true,
    shortDescription:
      "A full-stack hospital management system supporting appointments, electronic medical records, prescriptions, pharmacy, laboratory, billing, and AI-powered healthcare interactions.",
    githubUrl: "https://github.com/Shriyam2k3/Smart-Hospital-Management-System",
    liveUrl: "https://smart-hospital-management-system-ochre.vercel.app/login",
    technologies: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Socket.io",
      "JWT",
      "Google Gemini API",
      "Electron.js",
      "Tailwind CSS",
    ],
    bannerGradient: "from-emerald-600/20 via-teal-950/10 to-charcoal",
    accentColor: "#10B981",
    overview:
      "MediSync is an enterprise-grade Smart Hospital Management System designed on a modular MVC architecture with strict Role-Based Access Control (RBAC) supporting 6 distinct healthcare roles: System Admin, Doctor, Patient, Receptionist, Pharmacist, and Lab Technician. Featuring real-time Socket.io queue dispatch, Electronic Medical Records (EMR), automated multi-line digital prescription queues, Indian Rupee (₹) itemized billing, and an AI Medical Assistant powered by Google Gemini with bilingual English & Hindi support.",
    problemStatement:
      "Hospital operations frequently struggle with chaotic physical waiting room queues, fragmented patient histories scattered across paper charts, communication delays between doctors and pharmacy/lab dispensaries, and billing discrepancies.",
    solution:
      "MediSync unifies the entire clinical lifecycle into an interconnected real-time platform: patients receive synchronized digital queue numbers, doctors record EMR vitals and dispense prescriptions directly to the pharmacist queue, lab technicians upload diagnostic test reports, and billing generates GST-compliant itemized invoices in INR.",
    keyFeatures: [
      {
        title: "Six-Role Access Control (RBAC)",
        description:
          "Tailored dashboards and strict permission barriers for Admin, Doctor, Patient, Receptionist, Pharmacist, and Lab Technician.",
      },
      {
        title: "Real-Time Socket.io Queue Synchronization",
        description:
          "Live queue dispatch (#01, #02, etc.) that updates statuses across reception, doctor clinics, and patient screens instantaneously without page reloads.",
      },
      {
        title: "Bilingual AI Medical Assistant (Google Gemini)",
        description:
          "Dual-language (English & Hindi/Hinglish) conversational AI chatbot with symptom triage, emergency first-aid protocols, and zero-latency fallback knowledge base.",
      },
      {
        title: "Electronic Medical Records (EMR)",
        description:
          "Digital charts capturing blood pressure, pulse, clinical observations, diagnoses, and chronological medical visit timelines.",
      },
      {
        title: "Integrated Pharmacy & Lab Diagnostics",
        description:
          "Doctor-to-pharmacy 1-click prescription routing with stock deduction, batch tracking, and PDF diagnostic report uploads.",
      },
      {
        title: "Indian Rupee (₹) Itemized Invoicing",
        description:
          "Automated billing generator calculating doctor consultations, lab tests, medicine costs, and GST taxes in INR.",
      },
    ],
    technicalChallenges: [
      {
        challenge: "Real-Time Multi-Dashboard Queue Synchronization",
        solution:
          "Architected Socket.io room events emitting ticket state changes (Scheduled -> In-Progress -> Completed) to broadcast instant updates to doctor and receptionist panels.",
      },
      {
        challenge: "Uninterrupted Medical AI Triage with Zero-Latency Fallback",
        solution:
          "Engineered a dual-mode assistant that queries Google Gemini API for complex queries but falls back instantaneously to a compiled clinical triage matrix if network drops or rate limits hit.",
      },
    ],
    engineeringDecisions: [
      {
        decision: "Granular Six-Role Middleware Enforcements",
        rationale:
          "Separated patient confidentiality by ensuring doctors only see assigned patients, pharmacists only see dispensed drugs, and lab techs only see diagnostic orders.",
      },
      {
        decision: "Session Inactivity Security Timeout",
        rationale:
          "Implemented a 20-minute user inactivity watchdog monitoring keyboard/pointer events to protect unattended clinical terminal workstations in compliance with medical privacy.",
      },
    ],
    architecturePoints: [
      "Client: React 18 Single Page Application with Tailwind CSS & Recharts analytics",
      "Desktop Support: Electron.js container for hospital reception desk terminals",
      "Backend: Express.js REST API server with Socket.io WebSocket server",
      "Database: MongoDB Atlas with separate collections for EMR, prescriptions, lab tests, and invoices",
      "AI Service: Google Gemini API integration with English/Hindi language parsing",
      "Auth: JWT token rotation with bcrypt password hashing and 20-min idle timeout",
    ],
  },
];

