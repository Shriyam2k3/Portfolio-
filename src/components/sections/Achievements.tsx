"use client";

import React from "react";
import { achievementsData } from "@/data/achievements";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SiLeetcode } from "react-icons/si";
import { CheckCircle2, ExternalLink } from "lucide-react";

export function Achievements() {
  return (
    <SectionWrapper id="achievements" className="bg-charcoal">
      <SectionHeading
        badge="Problem Solving"
        title="Engineering Achievements"
        subtitle="Verified milestones in algorithmic mastery, data structure problem solving, and computational efficiency."
      />

      <div className="max-w-4xl mx-auto">
        {achievementsData.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-card-surface border border-border-subtle hover:border-electric/50 hover:glow-electric-subtle p-6 sm:p-8 md:p-10 transition-all duration-300 relative overflow-hidden group"
          >
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-electric/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
              {/* Left Column: Big metric number */}
              <div className="md:col-span-5 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-border-subtle pb-6 md:pb-0 md:pr-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFA116]/10 border border-[#FFA116]/30 text-xs font-semibold text-[#FFA116] mb-2">
                  <SiLeetcode className="w-3.5 h-3.5" />
                  {item.platform}
                </div>
                <div className="text-5xl sm:text-6xl font-extrabold text-sand font-mono tracking-tight">
                  {item.metric}
                </div>
                <p className="text-sm font-semibold text-off-white">
                  Problems Solved
                </p>
                <p className="text-xs text-muted-text">
                  Algorithmic patterns, dynamic programming, recursion & graphs
                </p>

                <div className="pt-4">
                  <Button
                    href={item.profileUrl}
                    isExternal
                    variant="primary"
                    size="sm"
                    icon={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    View LeetCode Profile
                  </Button>
                </div>
              </div>

              {/* Right Column: Verified details and highlights */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-off-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-text leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  {item.verifiedPoints.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-off-white/90"
                    >
                      <CheckCircle2 className="w-4 h-4 text-electric shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

