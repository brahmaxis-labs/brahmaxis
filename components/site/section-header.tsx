"use client";

import type { ReactNode } from "react";
import { useReveal } from "@/components/landing/use-reveal";

/** Consistent section heading: mono eyebrow + display title + optional intro. */
export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  className = "",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const [ref, isVisible] = useReveal<HTMLDivElement>();
  const centered = align === "center";

  return (
    <div
      ref={ref}
      className={`${centered ? "text-center mx-auto max-w-3xl" : "max-w-4xl"} ${className}`}
    >
      <span
        className={`inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="w-8 h-px bg-foreground/30" />
        {eyebrow}
        {centered && <span className="w-8 h-px bg-foreground/30" />}
      </span>
      <h2
        className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-8 text-xl text-muted-foreground leading-relaxed ${
            centered ? "" : "max-w-3xl"
          }`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
