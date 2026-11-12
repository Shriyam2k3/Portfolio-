import React from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isExternal?: boolean;
  download?: string | boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  className,
  href,
  variant = "primary",
  size = "md",
  isExternal = false,
  download,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal cursor-pointer active:scale-98 disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-electric text-off-white hover:bg-electric-hover glow-electric-subtle hover:glow-electric shadow-lg shadow-electric/25 border border-electric/40",
    secondary:
      "bg-sand text-charcoal hover:bg-[#E4D9C3] font-semibold border border-sand/30 shadow-md",
    outline:
      "bg-transparent text-off-white border border-border-subtle hover:border-sand hover:text-sand hover:bg-card-surface/60",
    ghost:
      "bg-transparent text-muted-text hover:text-off-white hover:bg-card-surface/40",
  };

  const combinedStyles = cn(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
          download={download}
        >
          {icon && <span className="inline-flex shrink-0">{icon}</span>}
          <span>{children}</span>
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles} download={download}>
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        <span>{children}</span>
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

