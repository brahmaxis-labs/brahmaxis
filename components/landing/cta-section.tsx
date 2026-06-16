"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTetrahedron } from "./animated-tetrahedron";
import { useReveal } from "./use-reveal";

export function CtaSection() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative overflow-hidden rounded-3xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Ambient brand glow */}
          <div className="glow-brand w-[520px] h-[520px] -top-40 -right-20 opacity-40" />
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-100 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, color-mix(in oklch, var(--brand) 18%, transparent), transparent 45%)`
            }}
          />
          
          <div className="relative z-10 px-8 lg:px-16 py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-4xl lg:text-7xl font-display tracking-tight mb-8 leading-[0.95]">
                  Have an MVP,
                  <br />
                  IoT product, or analytics system?
                </h2>

                <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-xl">
                  Bring your product goal, operational problem, or pilot idea. Get a clear technical path, realistic scope, and capital-efficient first milestone.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-brand hover:bg-brand/90 text-brand-foreground px-8 h-14 text-base rounded-full group shadow-lg shadow-brand/20"
                  >
                    <a href="#contact">
                      Book a Discovery Call
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-base rounded-full border-border bg-background/40 hover:bg-accent hover:text-accent-foreground"
                  >
                    <a href="#features">Explore Services</a>
                  </Button>
                </div>

                <p className="text-sm text-muted-foreground mt-8 font-mono">
                  Work with a team powered by Brahmastra.
                </p>
              </div>

              {/* Right animation */}
              <div className="hidden lg:flex items-center justify-center w-[500px] h-[500px] -mr-16">
                <AnimatedTetrahedron />
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
