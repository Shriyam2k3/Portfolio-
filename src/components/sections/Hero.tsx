"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { Button } from "@/components/ui/Button";
import {
  ArrowRight,
  Download,
  Mail,
  ChevronDown,
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiCplusplus,
  SiTypescript,
} from "react-icons/si";

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = personalData.roleAnimation;

  // Typewriter effect for professional roles
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;
    const pauseBeforeDelete = 2000;

    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
    } else if (isDeleting && displayText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 400);
    } else {
      timeout = setTimeout(() => {
        const nextText = isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-charcoal"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-electric/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-sand/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#454540_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Greeting, Name, Roles, Bio, CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card-surface border border-border-subtle text-xs text-sand">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-medium tracking-wide">
                Available for SDE & Full Stack Opportunities
              </span>
            </div>

            {/* Greeting & Headline */}
            <div>
              <p className="text-sand font-mono text-sm sm:text-base tracking-wider uppercase mb-2 font-medium">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-off-white leading-[1.08]">
                <span className="text-gradient-sand">{personalData.name}</span>
              </h1>
            </div>

            {/* Animated Role Typer */}
            <div className="h-9 sm:h-10 flex items-center justify-center lg:justify-start">
              <span className="text-lg sm:text-2xl font-semibold text-electric">
                {displayText}
              </span>
              <span className="inline-block w-0.5 h-6 ml-1 bg-electric animate-pulse" />
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-muted-text max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalData.heroDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Button
                onClick={() => scrollTo("projects")}
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                View My Projects
              </Button>
              <Button
                onClick={() => scrollTo("contact")}
                variant="outline"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
              >
                Contact Me
              </Button>
              <Button
                href={personalData.resumeUrl}
                variant="secondary"
                size="lg"
                download="Shriyam_Rastogi_Resume.pdf"
                icon={<Download className="w-4 h-4" />}
              >
                Download Resume
              </Button>
            </div>

            {/* Verified Statistics Strip */}
            <div className="pt-8 border-t border-border-subtle/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              {personalData.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-extrabold text-sand font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-text mt-0.5 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Profile Image with Electric-Blue Orbital Ring */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] lg:w-[420px] lg:h-[420px] flex items-center justify-center">
              {/* Outer pulsing electric-blue glow */}
              <div className="absolute inset-4 rounded-full bg-electric/20 blur-2xl animate-pulse-glow pointer-events-none" />

              {/* Orbital Ring 1 with Dash Array */}
              <div className="absolute inset-0 rounded-full border border-dashed border-electric/40 animate-spin-slow pointer-events-none" />

              {/* Orbital Ring 2 with Accent Dots */}
              <div className="absolute inset-3 rounded-full border border-sand/20 animate-spin-reverse pointer-events-none" />

              {/* Soft Radial Highlight Behind Photo */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-card-surface via-dark-surface to-charcoal border-2 border-electric/60 glow-electric shadow-2xl overflow-hidden">
                <Image
                  src={personalData.profilePhoto}
                  alt={personalData.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 360px, 400px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Floating Programming Icon Badges (Subtle, professional) */}
              <div
                className="absolute -top-1 left-8 w-11 h-11 rounded-xl bg-card-surface border border-border-subtle shadow-xl flex items-center justify-center text-electric hover:scale-110 transition-transform duration-200"
                title="React"
              >
                <SiReact className="w-5 h-5 text-[#61DAFB]" />
              </div>

              <div
                className="absolute top-1/4 -right-2 w-11 h-11 rounded-xl bg-card-surface border border-border-subtle shadow-xl flex items-center justify-center text-off-white hover:scale-110 transition-transform duration-200"
                title="Node.js"
              >
                <SiNodedotjs className="w-5 h-5 text-[#5FA04E]" />
              </div>

              <div
                className="absolute bottom-6 -left-3 w-11 h-11 rounded-xl bg-card-surface border border-border-subtle shadow-xl flex items-center justify-center text-sand hover:scale-110 transition-transform duration-200"
                title="C++"
              >
                <SiCplusplus className="w-5 h-5 text-[#00599C]" />
              </div>

              <div
                className="absolute -bottom-2 right-12 w-11 h-11 rounded-xl bg-card-surface border border-border-subtle shadow-xl flex items-center justify-center text-electric hover:scale-110 transition-transform duration-200"
                title="TypeScript"
              >
                <SiTypescript className="w-5 h-5 text-[#3178C6]" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button
            onClick={() => scrollTo("about")}
            className="group flex flex-col items-center gap-1.5 text-xs text-muted-text hover:text-sand transition-colors cursor-pointer"
            aria-label="Scroll down to About section"
          >
            <span className="font-mono tracking-widest uppercase text-[10px]">
              Explore
            </span>
            <ChevronDown className="w-4 h-4 text-electric animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}

