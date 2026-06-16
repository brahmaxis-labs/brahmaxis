"use client";

import { Fragment, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[820px] lg:min-h-screen flex flex-col overflow-hidden">
      {/* Structural grid + ambient brand glow */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)] opacity-70 pointer-events-none" />
      <div className="glow-brand w-[700px] h-[700px] -top-40 -right-40 opacity-50" />
      <div className="glow-brand w-[420px] h-[420px] top-1/3 -left-32 opacity-25" />

      {/* Animated sphere background */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] lg:w-[760px] lg:h-[760px] opacity-30 pointer-events-none">
        <AnimatedSphere />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-28 lg:py-32">
        {/* Eyebrow */}
        <div
          className={`mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/50 backdrop-blur px-4 py-1.5 text-xs font-mono text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            Capital-efficient product engineering
          </span>
        </div>

        {/* Main headline */}
        <div className="mb-12">
          <h1 className="text-[clamp(2.75rem,8.5vw,7rem)] font-display font-semibold leading-[0.95] tracking-[-0.03em]">
            {[
              ["Build", "edge-cloud,", "IoT,"],
              ["analytics,", "and", "MVP"],
              ["products", "faster"],
            ].map((line, li, lines) => {
              const offset = lines
                .slice(0, li)
                .reduce((n, l) => n + l.length, 0);
              return (
                <span key={li} className="block">
                  {line.map((word, wi) => (
                    <Fragment key={word}>
                      <span
                        className={`word-rise inline-block ${
                          word === "faster" ? "text-gradient-brand" : ""
                        }`}
                        style={{ animationDelay: `${0.1 + (offset + wi) * 0.07}s` }}
                      >
                        {word}
                      </span>{" "}
                    </Fragment>
                  ))}
                </span>
              );
            })}
          </h1>
          <p className="mt-6 font-display text-2xl lg:text-4xl text-muted-foreground tracking-tight">
            without enterprise bloat.
          </p>
        </div>

        {/* Description */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end">
          <p
            className={`text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            We help founders and companies design, build, deploy, and scale real-world software systems with a proven engineering playbook.
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              asChild
              size="lg"
              className="bg-brand hover:bg-brand/90 text-brand-foreground px-8 h-14 text-base rounded-full group shadow-lg shadow-brand/20 transition-shadow hover:shadow-brand/30"
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
              className="h-14 px-8 text-base rounded-full border-border bg-card/40 backdrop-blur hover:bg-accent hover:text-accent-foreground"
            >
              <a href="#features">Explore Services</a>
            </Button>
          </div>
        </div>

      </div>
      
      {/* Stats marquee - full width, in normal flow at the bottom */}
      <div
        className={`relative z-10 shrink-0 pb-12 lg:pb-16 transition-all duration-700 delay-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex gap-10 lg:gap-16 marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16">
              {[
                { value: "MVPs", label: "usable products, not decks", company: "PRODUCT" },
                { value: "IoT", label: "devices, telemetry, pilots", company: "EDGE" },
                { value: "Analytics", label: "dashboards and decisions", company: "DATA" },
                { value: "Infra", label: "deploy, monitor, hand over", company: "OPS" },
              ].map((stat) => (
                <div key={`${stat.company}-${i}`} className="flex items-baseline gap-3 lg:gap-4">
                  <span className="text-2xl sm:text-3xl lg:text-5xl font-display">{stat.value}</span>
                  <span className="text-xs lg:text-sm text-muted-foreground">
                    {stat.label}
                    <span className="block font-mono text-xs mt-1">{stat.company}</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      
    </section>
  );
}
