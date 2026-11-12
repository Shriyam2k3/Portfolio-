import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { projectsData } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  Sparkles,
  Car,
  Truck,
  HeartPulse,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Projects | Shriyam Rastogi",
  description:
    "Explore full-stack software engineering projects engineered by Shriyam Rastogi, including Rent-a-Ride, ExpressFlow Last-Mile Delivery, and MediSync Smart Hospital Management.",
};

export default function ProjectsPage() {
  const projectIcons: Record<string, React.ReactNode> = {
    "rent-a-ride": <Car className="w-6 h-6 text-electric" />,
    "last-mile-delivery": <Truck className="w-6 h-6 text-[#F59E0B]" />,
    medisync: <HeartPulse className="w-6 h-6 text-[#10B981]" />,
  };

  return (
    <main className="min-h-screen bg-charcoal text-off-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background ambient light */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-electric/10 blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-12">
        {/* Header Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs font-mono text-muted-text"
        >
          <Link href="/" className="hover:text-sand transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-sand font-medium">Projects</span>
        </nav>

        {/* Page Title */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric/10 text-electric border border-electric/30 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Featured Software Engineering Works
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-off-white tracking-tight">
            Engineering Projects
          </h1>
          <p className="text-base sm:text-lg text-muted-text leading-relaxed">
            Detailed architectures, system designs, problem formulations, and live deployments across full-stack web, logistics optimization, and real-time healthcare systems.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projectsData.map((project) => (
            <Card
              key={project.id}
              variant="card"
              className="p-6 sm:p-8 md:p-10 border-border-subtle hover:border-sand/40 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Top gradient stripe */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.bannerGradient}`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-dark-surface border border-border-subtle flex items-center justify-center shrink-0">
                      {projectIcons[project.id] || <Layers className="w-6 h-6 text-electric" />}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-sand/80 px-2.5 py-0.5 rounded bg-dark-surface border border-border-subtle">
                        {project.period}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-off-white group-hover:text-sand transition-colors mt-1">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-electric">
                    {project.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-muted-text leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Key Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-off-white/80 pt-2">
                    {project.keyFeatures.slice(0, 4).map((f, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                        <span className="truncate">{f.title}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technology Chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="muted" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-4 lg:border-l lg:border-border-subtle/80 lg:pl-8">
                  <div className="space-y-2 text-xs text-muted-text">
                    <p className="font-semibold text-sand uppercase tracking-wider">
                      Quick Status
                    </p>
                    {project.liveUrl ? (
                      <div className="flex items-center gap-2 text-emerald-400 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Live on Vercel</span>
                      </div>
                    ) : (
                      <div className="text-muted-text">Production Codebase</div>
                    )}
                    <p>Open source repository verified on GitHub.</p>
                  </div>

                  <div className="space-y-2.5 pt-4">
                    <Button
                      href={`/projects/${project.slug}`}
                      variant="primary"
                      size="md"
                      className="w-full justify-center"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Read Case Study
                    </Button>

                    <div className="flex items-center gap-2">
                      <Button
                        href={project.githubUrl}
                        isExternal
                        variant="secondary"
                        size="sm"
                        className="flex-1 justify-center"
                        icon={<FaGithub className="w-3.5 h-3.5" />}
                      >
                        GitHub
                      </Button>
                      {project.liveUrl && (
                        <Button
                          href={project.liveUrl}
                          isExternal
                          variant="outline"
                          size="sm"
                          className="flex-1 justify-center"
                          icon={<ExternalLink className="w-3.5 h-3.5" />}
                        >
                          Live App
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Back to Home Link */}
        <div className="pt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sand hover:text-off-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-electric" />
            <span>Return to Portfolio Homepage</span>
          </Link>
        </div>
      </div>
    </main>
  );
}

