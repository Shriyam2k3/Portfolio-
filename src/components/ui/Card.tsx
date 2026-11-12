import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  borderAccent?: boolean;
  variant?: "card" | "dark" | "sand-border";
}

export function Card({
  children,
  className,
  hoverEffect = true,
  borderAccent = false,
  variant = "card",
  ...props
}: CardProps) {
  const variantStyles = {
    card: "bg-card-surface border-border-subtle",
    dark: "bg-dark-surface border-border-subtle",
    "sand-border": "bg-card-surface border-sand/30",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border p-6 transition-all duration-300 relative",
        variantStyles[variant],
        hoverEffect &&
          "hover:-translate-y-1 hover:border-sand/40 hover:shadow-xl hover:shadow-black/40",
        borderAccent && "hover:border-electric/50 hover:glow-electric-subtle",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

