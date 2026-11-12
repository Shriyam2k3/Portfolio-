"use client";

import React from "react";
import { journeyMilestones } from "@/data/journey";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar, CheckCircle2 } from "lucide-react";

export function Journey() {
  return (
    <SectionWrapper id="journey" className="bg-charcoal">
      <SectionHeading
        badge="Evolution"
        title="Engineering Journey"
        subtitle="A verified progression from computer science theory and algorithmic problem solving to architecting production-ready full-stack and AI-powered platforms."
      />

      <div className="max-w-4xl mx-auto relative">
        {/* Central Vertical Timeline Line */}
        <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-electric via-sand/40 to-border-subtle" />

        <div className="space-y-12 sm:space-y-16">
          {journeyMilestones.map((milestone, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row items-start"
              >
                {/* Timeline node dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-5 w-4 h-4 rounded-full bg-charcoal border-2 border-electric z-20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-electric animate-ping" />
                </div>

                {/* Content card left/right positioning */}
                <div
                  className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                    isEven ? "sm:pr-10 sm:text-right" : "sm:pl-10 sm:ml-auto"
                  }`}
                >
                  <Card
                    variant="card"
                    className="p-6 border-border-subtle hover:border-sand/40 transition-all text-left"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono text-sand font-semibold bg-dark-surface px-2.5 py-0.5 rounded-md border border-border-subtle">
                        <Calendar className="w-3 h-3 text-electric" />
                        {milestone.year}
                      </span>
                      <Badge variant="outline" size="sm">
                        {milestone.category}
                      </Badge>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-off-white mb-2">
                      {milestone.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-text leading-relaxed mb-4">
                      {milestone.description}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-border-subtle/60">
                      {milestone.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className="flex items-start gap-2 text-xs text-off-white/90"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-electric shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}

