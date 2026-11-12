import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shriyam-portfolio.vercel.app"),
  title: "Shriyam Rastogi | Software Developer & Full Stack Engineer",
  description:
    "Personal portfolio of Shriyam Rastogi — Computer Science undergraduate at VIT Bhopal University, Full Stack Developer, and SDE Aspirant specializing in React, Next.js, Node.js, Express, MongoDB, and AI integrations.",
  keywords: [
    "Shriyam Rastogi",
    "Software Developer",
    "Full Stack Developer",
    "SDE",
    "VIT Bhopal",
    "Next.js",
    "React",
    "Node.js",
    "MongoDB",
    "LeetCode",
  ],
  authors: [{ name: "Shriyam Rastogi" }],
  creator: "Shriyam Rastogi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shriyamrastogi.dev",
    siteName: "Shriyam Rastogi Portfolio",
    title: "Shriyam Rastogi | Software Developer & Full Stack Engineer",
    description:
      "Explore software engineering projects, 270+ LeetCode DSA problem solutions, full-stack architectures, and technical competencies.",
    images: [
      {
        url: "/images/profile.jpeg",
        width: 1024,
        height: 1024,
        alt: "Shriyam Rastogi - Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shriyam Rastogi | Software Developer",
    description:
      "Computer Science undergraduate at VIT Bhopal University, Full Stack Developer & SDE Aspirant.",
    images: ["/images/profile.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#1E1E1C",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-charcoal text-off-white selection:bg-electric selection:text-off-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
