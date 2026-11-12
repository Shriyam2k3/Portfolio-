"use client";

import React from "react";
import { educationData } from "@/data/education";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper id="education" className="bg-dark-surface/40">
      <SectionHeading
        badge="Academics"
        title="Education & Academic Background"
        subtitle="Foundational training in computer science theory, systems architecture, and engineering principles."
      />

      <div className="max-w-4xl mx-auto">
        {educationData.map((edu, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-card-surface border-2 border-sand/40 p-6 sm:p-8 md:p-10 shadow-2xl relative overflow-hidden group hover:border-sand/70 transition-all duration-300"
          >
            {/* Top decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sand via-electric to-sand" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-dark-surface border border-sand/40 flex items-center justify-center shrink-0 text-sand shadow-inner">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sand/15 text-sand border border-sand/30 text-xs font-semibold mb-2">
                    <Award className="w-3 h-3 text-sand" />
                    Undergraduate Degree
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-off-white">
                    {edu.institution}
                  </h3>
                  <p className="text-base sm:text-lg font-semibold text-sand mt-1">
                    {edu.degree}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0 md:text-right">
                <span className="inline-flex items-center md:justify-end gap-1.5 text-xs font-mono text-off-white bg-dark-surface px-3 py-1.5 rounded-lg border border-border-subtle">
                  <Calendar className="w-3.5 h-3.5 text-electric" />
                  {edu.duration}
                </span>
                <span className="inline-flex items-center md:justify-end gap-1.5 text-xs text-muted-text">
                  <MapPin className="w-3.5 h-3.5 text-sand" />
                  {edu.location}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-text leading-relaxed mb-6">
              {edu.description}
            </p>

            {/* Coursework tags */}
            <div className="pt-6 border-t border-border-subtle/80">
              <div className="flex items-center gap-2 mb-3 text-xs font-semibold uppercase tracking-wider text-sand">
                <BookOpen className="w-3.5 h-3.5 text-electric" />
                <span>Key Coursework & Focus Areas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {edu.courses.map((course) => (
                  <Badge key={course} variant="muted" size="md">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

