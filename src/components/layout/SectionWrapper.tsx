import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id: string;
  className?: string;
  containerClassName?: string;
  hasBackgroundPattern?: boolean;
}

export function SectionWrapper({
  id,
  children,
  className,
  containerClassName,
  hasBackgroundPattern = false,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-border-subtle/40 overflow-hidden",
        className
      )}
      {...props}
    >
      {hasBackgroundPattern && (
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#454540_1px,transparent_1px)] [background-size:24px_24px]" />
      )}
      <div className={cn("max-w-7xl mx-auto relative z-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

