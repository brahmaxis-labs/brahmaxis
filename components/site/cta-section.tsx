"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "@/components/landing/animated-tetrahedron";
import { useReveal } from "@/components/landing/use-reveal";

type CTA = { label: string; href: string };

/** Reusable closing call-to-action block with a brand spotlight + 3D accent. */
export function CTASection({
  title,
  sub,
  primary,
  secondary,
  note,
}: {
  title: ReactNode;
  sub: string;
  primary: CTA;
  secondary?: CTA;
  note?: string;
}) {
  const [sectionRef, isVisible] = useReveal<HTMLElement>();
  const [pos, setPos] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={onMove}
        >
          <div className="glow-brand w-[520px] h-[520px] -top-40 -right-20 opacity-40" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(600px circle at ${pos.x}% ${pos.y}%, color-mix(in oklch, var(--brand) 18%, transparent), transparent 45%)`,
            }}
          />

          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="flex-1">
                <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8 leading-[0.98]">
                  {title}
                </h2>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">{sub}</p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand hover:bg-brand/90 text-brand-foreground px-8 h-14 text-base rounded-full group shadow-lg shadow-brand/20"
                  >
                    <Link href={primary.href}>
                      {primary.label}
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  {secondary && (
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="h-14 px-8 text-base rounded-full border-border bg-background/40 hover:bg-accent hover:text-accent-foreground"
                    >
                      <Link href={secondary.href}>{secondary.label}</Link>
                    </Button>
                  )}
                </div>

                {note && <p className="text-sm text-muted-foreground mt-8 font-mono">{note}</p>}
              </div>

              <div className="hidden lg:flex items-center justify-center w-[440px] h-[440px] -mr-16" aria-hidden>
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" aria-hidden />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" aria-hidden />
        </div>
      </div>
    </section>
  );
}
