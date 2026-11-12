"use client";

import React from "react";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  ExternalLink,
  ArrowRight,
  Layers,
  Car,
  Truck,
  HeartPulse,
} from "lucide-react";
import { SiGithub } from "react-icons/si";

export function FeaturedProjects() {
  const projectIcons: Record<string, React.ReactNode> = {
    "rent-a-ride": <Car className="w-6 h-6 text-electric" />,
    "last-mile-delivery": <Truck className="w-6 h-6 text-[#F59E0B]" />,
    medisync: <HeartPulse className="w-6 h-6 text-[#10B981]" />,
  };

  return (
    <SectionWrapper id="projects" className="bg-charcoal">
      <SectionHeading
        badge="Portfolio"
        title="Featured Engineering Projects"
        subtitle="Full-stack applications engineered for production with real-world business logic, secure authentication, and modern architectures."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl bg-card-surface border border-border-subtle hover:border-sand/40 hover:shadow-2xl hover:shadow-black/60 transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
          >
            {/* Top decorative gradient bar */}
            <div className={`h-1.5 w-full bg-gradient-to-r ${project.bannerGradient}`} />

            <div className="p-6 sm:p-7 flex-1 flex flex-col">
              {/* Header: Icon, Title, and Timeline */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-dark-surface border border-border-subtle flex items-center justify-center shrink-0 group-hover:border-electric transition-colors">
                  {projectIcons[project.id] || <Layers className="w-6 h-6 text-electric" />}
                </div>
                <span className="text-xs font-mono text-sand/80 px-2.5 py-1 rounded-md bg-dark-surface border border-border-subtle">
                  {project.period}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-3">
                <h3 className="text-xl font-bold text-off-white group-hover:text-sand transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-electric font-medium mt-0.5">
                  {project.subtitle}
                </p>
              </div>

              {/* Short Description */}
              <p className="text-sm text-muted-text leading-relaxed mb-6 flex-1">
                {project.shortDescription}
              </p>

              {/* Key Features Quick Peek */}
              <div className="space-y-1.5 mb-6 text-xs text-muted-text/90">
                {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                    <span className="truncate">{feat.title}</span>
                  </div>
                ))}
              </div>

              {/* Technology Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.slice(0, 6).map((tech) => (
                  <Badge key={tech} variant="muted" size="sm">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 6 && (
                  <Badge variant="outline" size="sm">
                    +{project.technologies.length - 6} more
                  </Badge>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-border-subtle/80 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub Repository`}
                    className="p-2 rounded-lg bg-dark-surface border border-border-subtle text-muted-text hover:text-off-white hover:border-sand/40 transition-colors"
                  >
                    <SiGithub className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Application`}
                      className="p-2 rounded-lg bg-dark-surface border border-border-subtle text-muted-text hover:text-electric hover:border-electric/50 transition-colors"
                      title="View Verified Live Application"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <Button
                  href={`/projects/${project.slug}`}
                  variant="outline"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />}
                  className="text-xs"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Link to all projects page */}
      <div className="mt-12 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sand hover:text-off-white transition-colors"
        >
          <span>Explore All Project Deep Dives & Architectural Blueprints</span>
          <ArrowRight className="w-4 h-4 text-electric" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
