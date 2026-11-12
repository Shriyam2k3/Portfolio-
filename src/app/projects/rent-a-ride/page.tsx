import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";
import { ProjectDetailView } from "@/components/projects/ProjectDetailView";

export const metadata: Metadata = {
  title: "Rent-a-Ride | Shriyam Rastogi",
  description:
    "Full-Stack Car Rental Platform built with Next.js, React 19, MongoDB, and Firebase Authentication.",
};

export default function RentARidePage() {
  const project = projectsData.find((p) => p.slug === "rent-a-ride");
  if (!project) notFound();

  return <ProjectDetailView project={project} />;
}

