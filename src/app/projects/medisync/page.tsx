import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";

export const metadata: Metadata = {
  title: "MediSync — Smart Hospital Management System | Shriyam Rastogi",
  description:
    "Smart Hospital Management System featuring 6-role RBAC, Socket.io real-time queue dispatch, and Google Gemini AI.",
};

export default function MediSyncPage() {
  const project = projectsData.find((p) => p.slug === "medisync");
  if (!project) notFound();

  return <ProjectDetailView project={project} />;
}

