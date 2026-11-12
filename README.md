# 🚀 Shriyam Rastogi — Premium Developer Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

> 🌐 **Live Application**: **[https://portfolio-shriyam2k3.vercel.app/](https://portfolio-shriyam2k3.vercel.app/)**  
> 📁 **GitHub Repository**: **[https://github.com/Shriyam2k3/Portfolio-](https://github.com/Shriyam2k3/Portfolio-)**

A custom-built, production-ready, highly responsive developer portfolio showcasing verified software engineering projects, data structures & algorithms problem-solving metrics, system architecture blueprints, and academic credentials.

---

## 👨‍💻 Professional Profile

- **Name**: Shriyam Rastogi
- **Title**: Software Developer | Full Stack Developer | SDE Aspirant
- **Education**: B.Tech in Computer Science Engineering, VIT Bhopal University (July 2023 – May 2027)
- **Location**: Bhopal, Madhya Pradesh, India
- **Email**: [shriyamrastogi123@email.com](mailto:shriyamrastogi123@email.com)
- **LinkedIn**: [linkedin.com/in/shriyam-rastogi](https://www.linkedin.com/in/shriyam-rastogi)
- **LeetCode**: [leetcode.com/u/Shriyam2k3](https://leetcode.com/u/Shriyam2k3/) (270+ DSA Solved)
- **GitHub**: [github.com/Shriyam2k3](https://github.com/Shriyam2k3)

---

## 🎨 Strict Color Palette & Design Tokens

Designed with a minimal, high-contrast aesthetic tailored for technical recruiters and engineering managers:

| Token | Hex | Usage |
| :--- | :--- | :--- |
| **Charcoal** | `#1E1E1C` | Dominant page background & layout foundation |
| **Sand** | `#D8CBB3` | Typography accents, secondary cards, and academic borders |
| **Electric Blue** | `#2F6BFF` | Active navigation indicator, orbital glow, and interactive CTAs |
| **Dark Surface** | `#292927` | Section containers & alternating layers |
| **Card Surface** | `#30302D` | Elevated project cards, skill badges, dialogs |
| **Off White** | `#F7F5F0` | Primary headings and readable body text |
| **Muted Text** | `#A8A8A3` | Secondary metadata and technical descriptions |
| **Border** | `#454540` | Subtle hairline dividers and card outlines |

---

## 🌟 Key Website Features

1. **Full-Screen Hero Section**:
   - High-resolution portrait framed with an animated electric-blue orbital ring and ambient glow.
   - Dynamic typewriter role rotator (`Software Developer` ⇄ `Full Stack Developer` ⇄ `Software Engineering Enthusiast`).
   - Verified statistics counter: **3 Featured Projects**, **270+ LeetCode DSA Solved**, **Full Stack Development**.
   - Direct CTA buttons: *View My Projects*, *Contact Me*, and *Download Resume*.

2. **About Me**:
   - Rectangular portrait card with sand border and academic credentials.
   - 4 Interactive Pillars: *Problem Solver*, *Full Stack Developer*, *Quick Learner*, and *Product-Oriented Thinker*.

3. **Featured Projects & Dedicated Case Studies**:
   - Dedicated deep-dive pages with system architecture diagrams, problem statements, engineering solutions, challenges, and trade-offs.

4. **Technical Skills Matrix**:
   - Category filters: `All`, `Languages`, `Frontend`, `Backend`, `Database`, `Auth & Security`, `Tools & DevOps`, `Core Concepts`.
   - Technology icons with electric-blue hover glow (zero arbitrary percentage bars).

5. **Engineering Journey**:
   - Timeline highlighting real-world architectural evolution from C++/Java foundations to distributed systems, WebSockets, and AI integrations.

6. **Education & Certifications**:
   - Academic profile for **VIT Bhopal University** (B.Tech CSE, 2023–2027).
   - Industry credentials from **Apna College** (Full Stack) and **MP Online Limited** (Software Engineering & AI Foundation).

7. **Production Contact API**:
   - Working contact route (`/api/contact`) with input validation, honeypot spam protection, and delivery confirmation.

---

## 🛠️ Featured Engineering Projects

| Project | Stack | Description | Links |
| :--- | :--- | :--- | :--- |
| **Rent-a-Ride** | Next.js, React 19, Node.js, Express, MongoDB, Firebase Auth, Cloudinary | Full-stack car rental platform with vehicle discovery, parametric filtering, collision-free date reservations, and Cloudinary media management. | [Live Demo](https://rent-a-ride-nu.vercel.app/) &bull; [GitHub](https://github.com/Shriyam2k3/Rent-a-Ride) &bull; [Case Study](/projects/rent-a-ride) |
| **Last-Mile Delivery (ExpressFlow)** | React, Node.js, Express, MongoDB, Leaflet, OSRM, Groq AI (LLaMA 3.3) | Multi-role logistics platform with Pan-India GPS route telemetry, Haversine nearest-driver auto-dispatch, dynamic freight pricing, and Groq AI address parsing. | [Live Demo](https://last-mile-delivery-orcin.vercel.app/) &bull; [GitHub](https://github.com/Shriyam2k3/Last-Mile-Delivery-) &bull; [Case Study](/projects/last-mile-delivery) |
| **MediSync** | React 18, Node.js, Express, MongoDB, Socket.io, JWT, Gemini API, Electron.js | Smart hospital management system featuring 6-role RBAC, Socket.io real-time queue dispatch, bilingual Gemini AI medical assistant, EMR charts, and INR billing. | [Live Demo](https://smart-hospital-management-system-ochre.vercel.app/login) &bull; [GitHub](https://github.com/Shriyam2k3/Smart-Hospital-Management-System) &bull; [Case Study](/projects/medisync) |

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── images/
│   │   └── profile.jpeg          # Verified high-resolution portrait
│   └── resume/
│       └── Shriyam_Rastogi_Resume.pdf  # Downloadable PDF resume
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Global metadata, SEO & typography
│   │   ├── page.tsx              # Scrolling homepage
│   │   ├── globals.css           # Design tokens & orbital animations
│   │   ├── not-found.tsx         # Custom 404 handler
│   │   ├── robots.ts             # SEO robots rules
│   │   ├── sitemap.ts            # Dynamic sitemap generator
│   │   ├── api/
│   │   │   └── contact/route.ts  # Contact API with spam honeypot
│   │   └── projects/
│   │       ├── page.tsx          # All-projects showcase gallery
│   │       ├── rent-a-ride/page.tsx
│   │       ├── last-mile-delivery/page.tsx
│   │       └── medisync/page.tsx
│   ├── components/
│   │   ├── layout/               # Navbar, Footer, SectionWrapper
│   │   ├── sections/             # Hero, About, Projects, Skills, Journey, Education, Achievements, Certifications, Contact
│   │   ├── projects/             # ProjectDetailView & architecture blueprints
│   │   └── ui/                   # Button, Card, Badge, SectionHeading
│   └── data/                     # Personal, projects, skills, education, achievements, journey
```

---

## ⚡ Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ (v20+ recommended)
- `npm` or `pnpm`

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Shriyam2k3/Portfolio-.git
   cd Portfolio-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

### Production Build
```bash
npm run build
npm run start
```

---

## 🚀 Deployment to Vercel

The portfolio is optimized for 1-click deployment on **[Vercel](https://vercel.com)**:

1. Import the repository `https://github.com/Shriyam2k3/Portfolio-` in the Vercel Dashboard.
2. Vercel automatically detects Next.js settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
3. Click **Deploy**.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
