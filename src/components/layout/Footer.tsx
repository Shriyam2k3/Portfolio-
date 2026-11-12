"use client";

import React from "react";
import Link from "next/link";
import { personalData } from "@/data/personal";
import { ArrowUp, Mail } from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.pushState(null, "", "#home");
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Journey", href: "#journey" },
    { label: "Education", href: "#education" },
    { label: "Achievements", href: "#achievements" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-charcoal border-t border-border-subtle relative overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-electric/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-card-surface to-dark-surface border border-sand/40 flex items-center justify-center font-bold text-sand">
                <span className="text-base font-mono">{personalData.monogram}</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-off-white">
                  {personalData.name}
                </h3>
                <p className="text-xs text-muted-text">
                  Software Developer | Full Stack Developer | SDE Aspirant
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-text max-w-sm leading-relaxed">
              Passionate about building scalable full-stack applications, real-time distributed systems, and solving complex algorithmic challenges.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-lg bg-card-surface border border-border-subtle flex items-center justify-center text-muted-text hover:text-off-white hover:border-sand/40 hover:glow-electric-subtle transition-all"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-lg bg-card-surface border border-border-subtle flex items-center justify-center text-muted-text hover:text-[#0A66C2] hover:border-sand/40 hover:glow-electric-subtle transition-all"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode Profile"
                className="w-9 h-9 rounded-lg bg-card-surface border border-border-subtle flex items-center justify-center text-muted-text hover:text-[#FFA116] hover:border-sand/40 hover:glow-electric-subtle transition-all"
              >
                <SiLeetcode className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.socials.email}`}
                aria-label="Send Email"
                className="w-9 h-9 rounded-lg bg-card-surface border border-border-subtle flex items-center justify-center text-muted-text hover:text-sand hover:border-sand/40 hover:glow-electric-subtle transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-sand">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-muted-text hover:text-off-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/projects"
                className="text-electric hover:underline font-medium"
              >
                All Projects →
              </Link>
            </div>
          </div>

          {/* Action column */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-card-surface border border-border-subtle text-sm text-off-white hover:border-electric hover:glow-electric-subtle transition-all duration-300"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-electric group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
            <div className="text-xs text-muted-text md:text-right space-y-1">
              <p>Designed & Built with Next.js & Tailwind CSS</p>
              <p className="text-sand/80 font-mono">Bhopal, MP, India</p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-border-subtle/60 flex flex-col sm:flex-row items-center justify-between text-xs text-muted-text gap-3">
          <p>© 2026 Shriyam Rastogi. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted for high performance & verified engineering excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
