import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";

export const metadata: Metadata = {
  title: "Last-Mile Delivery & Logistics Platform | Shriyam Rastogi",
  description:
    "Multi-Role Logistics & GPS Fleet Platform featuring Haversine driver dispatch, Pan-India route telemetry, and Groq LLaMA 3.3 AI.",
};

export default function LastMileDeliveryPage() {
  const project = projectsData.find((p) => p.slug === "last-mile-delivery");
  if (!project) notFound();

  return <ProjectDetailView project={project} />;
}

