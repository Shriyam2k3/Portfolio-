"use client";

import React from "react";
import Link from "next/link";
import { ProjectData, projectsData } from "@/data/projects";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Cpu,
  ShieldCheck,
  Server,
  Database,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Workflow,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectDetailViewProps {
  project: ProjectData;
}

export function ProjectDetailView({ project }: ProjectDetailViewProps) {
  // Find current index and previous/next projects
  const currentIndex = projectsData.findIndex((p) => p.id === project.id);
  const prevProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : projectsData[0];

  return (
    <article className="min-h-screen bg-charcoal text-off-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background ambient glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono text-muted-text"
        >
          <Link href="/" className="hover:text-sand transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-sand transition-colors">
            Projects
          </Link>
          <span>/</span>
          <span className="text-sand font-medium">{project.title}</span>
        </nav>

        {/* Project Hero Header */}
        <header className="space-y-6 border-b border-border-subtle/80 pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-sand px-3 py-1 rounded-md bg-dark-surface border border-border-subtle">
              {project.period}
            </span>
            {project.liveUrl && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Application Available
              </span>
            )}
          </div>

          <div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-off-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-electric mt-2">
              {project.subtitle}
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-text leading-relaxed max-w-4xl">
            {project.overview}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && (
              <Button
                href={project.liveUrl}
                isExternal
                variant="primary"
                size="md"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Launch Live Demo
              </Button>
            )}
            <Button
              href={project.githubUrl}
              isExternal
              variant="secondary"
              size="md"
              icon={<FaGithub className="w-4 h-4" />}
            >
              View GitHub Repository
            </Button>
            <Button
              href="/projects"
              variant="outline"
              size="md"
              icon={<ArrowLeft className="w-4 h-4" />}
            >
              All Projects
            </Button>
          </div>

          {/* Tech Stack Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <span className="text-xs text-muted-text font-semibold mr-1">
              Technologies:
            </span>
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="sand" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </header>

        {/* Problem Statement & Solution Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card variant="card" className="p-6 sm:p-8 border-border-subtle space-y-3">
            <div className="flex items-center gap-3 text-sand">
              <div className="w-10 h-10 rounded-xl bg-dark-surface border border-border-subtle flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-sand" />
              </div>
              <h2 className="text-xl font-bold text-off-white">
                The Problem
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              {project.problemStatement}
            </p>
          </Card>

          <Card variant="card" className="p-6 sm:p-8 border-electric/40 glow-electric-subtle space-y-3">
            <div className="flex items-center gap-3 text-electric">
              <div className="w-10 h-10 rounded-xl bg-dark-surface border border-electric/40 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-electric" />
              </div>
              <h2 className="text-xl font-bold text-off-white">
                The Engineering Solution
              </h2>
            </div>
            <p className="text-sm sm:text-base text-muted-text leading-relaxed">
              {project.solution}
            </p>
          </Card>
        </section>

        {/* System Architecture Blueprint */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-card-surface border border-border-subtle flex items-center justify-center text-electric">
              <Workflow className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-off-white">
                System Architecture
              </h2>
              <p className="text-xs sm:text-sm text-muted-text">
                Modular data flow and decoupled service tiers based on the actual codebase.
              </p>
            </div>
          </div>

          <Card variant="dark" className="p-6 sm:p-8 border-border-subtle space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-card-surface border border-border-subtle space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-electric">
                  <Layers className="w-4 h-4" />
                  <span>Frontend / Client</span>
                </div>
                <p className="text-xs text-muted-text">
                  Component-driven reactive UI with responsive layout, state management, and real-time interaction handlers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card-surface border border-border-subtle space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-sand">
                  <Server className="w-4 h-4" />
                  <span>REST API & Services</span>
                </div>
                <p className="text-xs text-muted-text">
                  Controller & Service layered architecture handling auth tokens, mathematical computations, and validations.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-card-surface border border-border-subtle space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase text-emerald-400">
                  <Database className="w-4 h-4" />
                  <span>Data & External APIs</span>
                </div>
                <p className="text-xs text-muted-text">
                  Persistent MongoDB collections with Mongoose validation, integrated third-party AI models and CDNs.
                </p>
              </div>
            </div>

            {/* Architectural Points Checklist */}
            <div className="pt-4 border-t border-border-subtle space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-sand">
                Architecture Breakdown
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-off-white/90">
                {project.architecturePoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* Key Features Grid */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-card-surface border border-border-subtle flex items-center justify-center text-sand">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-off-white">
                Core Modules & Features
              </h2>
              <p className="text-xs sm:text-sm text-muted-text">
                Key user workflows and operational capabilities implemented in the application.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {project.keyFeatures.map((feat, idx) => (
              <Card
                key={idx}
                variant="card"
                className="p-5 flex flex-col justify-between border-border-subtle hover:border-sand/40 transition-colors"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-dark-surface border border-border-subtle flex items-center justify-center text-electric text-xs font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-off-white">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Technical Challenges & Solutions */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-card-surface border border-border-subtle flex items-center justify-center text-electric">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-off-white">
                Technical Challenges & Solutions
              </h2>
              <p className="text-xs sm:text-sm text-muted-text">
                Real engineering hurdles encountered during development and how they were resolved.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {project.technicalChallenges.map((item, idx) => (
              <Card
                key={idx}
                variant="card"
                className="p-6 border-border-subtle space-y-3"
              >
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-red-950/40 border border-red-500/40 text-red-400 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    !
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-off-white">
                      Challenge: {item.challenge}
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-3 pl-10 text-xs sm:text-sm text-muted-text leading-relaxed border-l-2 border-electric ml-3.5">
                  <p>
                    <span className="text-sand font-semibold block mb-0.5">
                      Engineering Resolution:
                    </span>
                    {item.solution}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Key Engineering Decisions */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-card-surface border border-border-subtle flex items-center justify-center text-sand">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-off-white">
                Engineering Decisions & Rationale
              </h2>
              <p className="text-xs sm:text-sm text-muted-text">
                Architectural trade-offs made to optimize maintainability, performance, and user trust.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.engineeringDecisions.map((item, idx) => (
              <Card
                key={idx}
                variant="card"
                className="p-6 border-border-subtle space-y-2.5"
              >
                <h3 className="text-base font-bold text-sand">
                  {item.decision}
                </h3>
                <p className="text-xs sm:text-sm text-muted-text leading-relaxed">
                  {item.rationale}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Previous / Next Project Navigation Bar */}
        <nav
          aria-label="Project Pagination"
          className="pt-10 border-t border-border-subtle grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <Link
            href={`/projects/${prevProject.slug}`}
            className="p-5 rounded-2xl bg-card-surface border border-border-subtle hover:border-sand/40 hover:glow-electric-subtle transition-all group flex items-center gap-4 text-left"
          >
            <div className="w-10 h-10 rounded-xl bg-dark-surface border border-border-subtle flex items-center justify-center text-muted-text group-hover:text-sand shrink-0">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] font-mono uppercase text-muted-text block">
                Previous Project
              </span>
              <span className="text-sm font-bold text-off-white group-hover:text-sand transition-colors truncate block">
                {prevProject.title}
              </span>
            </div>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="p-5 rounded-2xl bg-card-surface border border-border-subtle hover:border-sand/40 hover:glow-electric-subtle transition-all group flex items-center justify-between gap-4 text-right sm:flex-row-reverse"
          >
            <div className="w-10 h-10 rounded-xl bg-dark-surface border border-border-subtle flex items-center justify-center text-muted-text group-hover:text-electric shrink-0">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="overflow-hidden">
              <span className="text-[11px] font-mono uppercase text-muted-text block">
                Next Project
              </span>
              <span className="text-sm font-bold text-off-white group-hover:text-electric transition-colors truncate block">
                {nextProject.title}
              </span>
            </div>
          </Link>
        </nav>
      </div>
    </article>
  );
}

