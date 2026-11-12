"use client";

import React from "react";
import Image from "next/image";
import { personalData } from "@/data/personal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
  Code2,
  Layers,
  Sparkles,
  Rocket,
  GraduationCap,
  MapPin,
} from "lucide-react";

export function About() {
  const pillarIcons: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-electric" />,
    Layers: <Layers className="w-5 h-5 text-sand" />,
    Sparkles: <Sparkles className="w-5 h-5 text-electric" />,
    Rocket: <Rocket className="w-5 h-5 text-sand" />,
  };

  return (
    <SectionWrapper id="about" className="bg-dark-surface/50">
      <SectionHeading
        badge="About Me"
        title="Know More About Me"
        subtitle="Passionate about turning complex computational ideas into clean, scalable, and resilient software."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Rectangular Professional Image Card with Sand Border */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="w-full max-w-md rounded-2xl bg-card-surface border border-sand/40 p-3 shadow-2xl relative group">
            {/* Ambient subtle glow behind card */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-electric/20 to-sand/10 blur-xl opacity-40 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none" />

            <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-charcoal border border-border-subtle">
              <Image
                src={personalData.profilePhoto}
                alt={personalData.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 380px"
                className="object-cover object-center group-hover:scale-103 transition-transform duration-500"
              />
            </div>

            {/* Quick summary below photograph */}
            <div className="pt-4 px-2 pb-1 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-off-white">
                  {personalData.name}
                </h3>
                <p className="text-xs text-sand font-mono">B.Tech CSE &bull; 2023–2027</p>
              </div>
              <Badge variant="electric" size="sm">
                VIT Bhopal
              </Badge>
            </div>
          </div>

          {/* Quick Academic Info Card */}
          <div className="w-full max-w-md mt-4 grid grid-cols-2 gap-3">
            <Card variant="card" className="p-3.5 flex items-start gap-2.5">
              <GraduationCap className="w-4 h-4 text-sand shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] text-muted-text uppercase font-semibold block">
                  Degree
                </span>
                <span className="text-xs font-medium text-off-white leading-tight">
                  B.Tech in CSE
                </span>
              </div>
            </Card>

            <Card variant="card" className="p-3.5 flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-electric shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] text-muted-text uppercase font-semibold block">
                  Location
                </span>
                <span className="text-xs font-medium text-off-white leading-tight">
                  Bhopal, MP, India
                </span>
              </div>
            </Card>
          </div>
        </div>

        {/* Right Column: Narrative, Interests, and 4 Pillar Cards */}
        <div className="lg:col-span-7 space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-base sm:text-lg text-muted-text leading-relaxed">
              I am a Computer Science Engineering undergraduate at{" "}
              <span className="text-off-white font-medium">VIT Bhopal University</span>{" "}
              with a passion for building scalable and meaningful software applications.
            </p>
            <p className="text-base sm:text-lg text-muted-text leading-relaxed mt-3">
              My core interests include{" "}
              <span className="text-sand font-medium">full-stack development</span>,{" "}
              <span className="text-sand font-medium">backend engineering</span>,{" "}
              <span className="text-sand font-medium">data structures and algorithms</span>, and{" "}
              <span className="text-sand font-medium">AI-powered applications</span>. I enjoy transforming ideas into functional products and continuously improving my engineering skills.
            </p>
          </div>

          {/* Key Engineering Pillars (4 Interactive Cards) */}
          <div className="pt-2">
            <h4 className="text-xs uppercase font-bold tracking-widest text-sand mb-4">
              Core Engineering Strengths
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalData.pillars.map((pillar, idx) => (
                <Card
                  key={idx}
                  variant="card"
                  borderAccent
                  className="p-5 flex flex-col justify-between group"
                >
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-xl bg-dark-surface border border-border-subtle flex items-center justify-center group-hover:border-electric transition-colors duration-200">
                      {pillarIcons[pillar.icon] || <Sparkles className="w-5 h-5 text-electric" />}
                    </div>
                    <h5 className="text-base font-bold text-off-white group-hover:text-sand transition-colors">
                      {pillar.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Domain Focus Chips */}
          <div className="pt-2 flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-text font-medium mr-1">
              Primary Interests:
            </span>
            <Badge variant="sand" size="sm">Software Engineering</Badge>
            <Badge variant="electric" size="sm">Full Stack Development</Badge>
            <Badge variant="sand" size="sm">Distributed Systems & APIs</Badge>
            <Badge variant="outline" size="sm">Applied AI & Automation</Badge>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

