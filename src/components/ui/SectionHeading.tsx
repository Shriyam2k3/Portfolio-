import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-3xl",
        className
      )}
    >
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4",
            "bg-electric/10 text-electric border border-electric/30"
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-off-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-muted-text leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

