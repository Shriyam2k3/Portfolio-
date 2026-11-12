import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "electric" | "sand" | "muted" | "outline";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}

export function Badge({
  children,
  className,
  variant = "muted",
  size = "md",
  icon,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full transition-colors duration-200";

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5 gap-1",
    md: "text-xs px-3 py-1 gap-1.5",
  };

  const variantStyles = {
    electric:
      "bg-electric/15 text-electric border border-electric/30 hover:bg-electric/25",
    sand: "bg-sand/15 text-sand border border-sand/30 hover:bg-sand/25",
    muted:
      "bg-card-surface text-muted-text border border-border-subtle hover:text-off-white hover:border-sand/40",
    outline:
      "bg-transparent text-muted-text border border-border-subtle hover:border-electric hover:text-electric",
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}

