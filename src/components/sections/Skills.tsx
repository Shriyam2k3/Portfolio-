"use client";

import React, { useState } from "react";
import {
  skillsData,
  skillCategories,
  SkillCategory,
} from "@/data/skills";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiJsonwebtokens,
  SiFirebase,
  SiPassport,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostman,
  SiVercel,
  SiRender,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbSql, TbApi } from "react-icons/tb";
import {
  ShieldCheck,
  Binary,
  Cpu,
  Database,
  Terminal,
  Network,
  Code,
} from "lucide-react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("All");

  const renderIcon = (iconName: string) => {
    const iconProps = { className: "w-5 h-5 shrink-0" };

    switch (iconName) {
      case "SiCplusplus":
        return <SiCplusplus {...iconProps} className="w-5 h-5 text-[#00599C]" />;
      case "FaJava":
        return <FaJava {...iconProps} className="w-5 h-5 text-[#E76F00]" />;
      case "SiPython":
        return <SiPython {...iconProps} className="w-5 h-5 text-[#3776AB]" />;
      case "SiJavascript":
        return <SiJavascript {...iconProps} className="w-5 h-5 text-[#F7DF1E]" />;
      case "SiTypescript":
        return <SiTypescript {...iconProps} className="w-5 h-5 text-[#3178C6]" />;
      case "TbSql":
        return <TbSql {...iconProps} className="w-5 h-5 text-sand" />;
      case "SiReact":
        return <SiReact {...iconProps} className="w-5 h-5 text-[#61DAFB]" />;
      case "SiNextdotjs":
        return <SiNextdotjs {...iconProps} className="w-5 h-5 text-off-white" />;
      case "SiTailwindcss":
        return <SiTailwindcss {...iconProps} className="w-5 h-5 text-[#06B6D4]" />;
      case "SiNodedotjs":
        return <SiNodedotjs {...iconProps} className="w-5 h-5 text-[#5FA04E]" />;
      case "SiExpress":
        return <SiExpress {...iconProps} className="w-5 h-5 text-off-white" />;
      case "TbApi":
        return <TbApi {...iconProps} className="w-5 h-5 text-electric" />;
      case "SiSocketdotio":
        return <SiSocketdotio {...iconProps} className="w-5 h-5 text-off-white" />;
      case "SiMongodb":
        return <SiMongodb {...iconProps} className="w-5 h-5 text-[#47A248]" />;
      case "SiMysql":
        return <SiMysql {...iconProps} className="w-5 h-5 text-[#4479A1]" />;
      case "SiPostgresql":
        return <SiPostgresql {...iconProps} className="w-5 h-5 text-[#4169E1]" />;
      case "SiRedis":
        return <SiRedis {...iconProps} className="w-5 h-5 text-[#DC382D]" />;
      case "SiJsonwebtokens":
        return <SiJsonwebtokens {...iconProps} className="w-5 h-5 text-[#D63AFF]" />;
      case "SiFirebase":
        return <SiFirebase {...iconProps} className="w-5 h-5 text-[#FFCA28]" />;
      case "SiPassport":
        return <SiPassport {...iconProps} className="w-5 h-5 text-[#34E27A]" />;
      case "ShieldCheck":
        return <ShieldCheck {...iconProps} className="w-5 h-5 text-electric" />;
      case "SiGit":
        return <SiGit {...iconProps} className="w-5 h-5 text-[#F05032]" />;
      case "SiGithub":
        return <SiGithub {...iconProps} className="w-5 h-5 text-off-white" />;
      case "SiDocker":
        return <SiDocker {...iconProps} className="w-5 h-5 text-[#2496ED]" />;
      case "SiPostman":
        return <SiPostman {...iconProps} className="w-5 h-5 text-[#FF6C37]" />;
      case "SiVercel":
        return <SiVercel {...iconProps} className="w-5 h-5 text-off-white" />;
      case "SiRender":
        return <SiRender {...iconProps} className="w-5 h-5 text-electric" />;
      case "Binary":
        return <Binary {...iconProps} className="w-5 h-5 text-electric" />;
      case "Cpu":
        return <Cpu {...iconProps} className="w-5 h-5 text-sand" />;
      case "Database":
        return <Database {...iconProps} className="w-5 h-5 text-electric" />;
      case "Terminal":
        return <Terminal {...iconProps} className="w-5 h-5 text-sand" />;
      case "Network":
        return <Network {...iconProps} className="w-5 h-5 text-electric" />;
      default:
        return <Code {...iconProps} className="w-5 h-5 text-sand" />;
    }
  };

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <SectionWrapper id="skills" className="bg-dark-surface/40">
      <SectionHeading
        badge="Technical Expertise"
        title="Technical Skills & Competencies"
        subtitle="A verified toolkit spanning languages, modern frontend frameworks, backend engines, database design, and core computer science fundamentals."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
        {skillCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-electric text-off-white glow-electric-subtle font-semibold shadow-md"
                  : "bg-card-surface text-muted-text hover:text-off-white hover:border-sand/40 border border-border-subtle"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="group rounded-xl bg-card-surface border border-border-subtle hover:border-electric/50 hover:glow-electric-subtle p-3.5 sm:p-4 transition-all duration-300 flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-lg bg-dark-surface border border-border-subtle flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              {renderIcon(skill.iconName)}
            </div>
            <div className="overflow-hidden">
              <h4 className="text-xs sm:text-sm font-semibold text-off-white group-hover:text-sand transition-colors truncate">
                {skill.name}
              </h4>
              <span className="text-[10px] text-muted-text uppercase tracking-wider block">
                {skill.category}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Core Engineering Note */}
      <div className="mt-12 text-center">
        <p className="text-xs text-muted-text">
          Focusing on maintainable architectures, clean code principles, and algorithmic optimization.
        </p>
      </div>
    </SectionWrapper>
  );
}

