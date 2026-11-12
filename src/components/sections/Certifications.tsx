"use client";

import React from "react";
import { certificationsData } from "@/data/certifications";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Award, Building2 } from "lucide-react";

export function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-dark-surface/40">
      <SectionHeading
        badge="Credentials"
        title="Professional Certifications"
        subtitle="Specialized industry certifications validating full-stack engineering and software engineering foundations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="rounded-2xl bg-card-surface border border-border-subtle hover:border-sand/40 hover:shadow-xl hover:shadow-black/50 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Ambient accent header */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-dark-surface border border-sand/30 flex items-center justify-center text-sand group-hover:border-electric transition-colors">
                <Award className="w-6 h-6" />
              </div>
              <Badge variant="outline" size="sm">
                {cert.category}
              </Badge>
            </div>

            <div className="space-y-2 mb-4">
              <h3 className="text-xl font-bold text-off-white group-hover:text-sand transition-colors">
                {cert.title}
              </h3>
              <div className="flex items-center gap-2 text-xs font-semibold text-electric">
                <Building2 className="w-3.5 h-3.5" />
                <span>Issued by {cert.issuer}</span>
              </div>
            </div>

            <p className="text-sm text-muted-text leading-relaxed mb-6">
              {cert.description}
            </p>

            <div className="pt-4 border-t border-border-subtle/70">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-sand block mb-2">
                Competencies Mastered
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cert.skillsAcquired.map((skill) => (
                  <Badge key={skill} variant="muted" size="sm">
                    {skill}
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

