"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { AnimatedSphere } from "./animated-sphere";
import { Pill } from "@/components/site/pill";

const HEADLINE = [
  ["Build", "revenue-critical"],
  ["software", "—", "not", "just", "screens."],
];
const GRADIENT = new Set(["not", "just", "screens."]);

const TRUST = [
  "Built systems across AdTech, eCommerce, FinTech, data, and real-world operations",
  "Experience with multi-tenant SaaS, APIs, dashboards, automation, infra, and deployment",
  "Brahmastra-powered delivery for faster scaffolding, cleaner handover, and repeatable execution",
];

export function HomeHero() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section className="relative min-h-[860px] lg:min-h-screen flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)] opacity-70 pointer-events-none" />
      <div className="glow-brand w-[700px] h-[700px] -top-40 -right-40 opacity-50" />
      <div className="glow-brand w-[420px] h-[420px] top-1/3 -left-32 opacity-25" />

      <div className="absolute right-0 top-1/3 -translate-y-1/2 w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] lg:w-[720px] lg:h-[720px] opacity-30 pointer-events-none" aria-hidden>
        <AnimatedSphere />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-28 lg:py-32">
        <div
          className={`mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <Pill>Founder-led product engineering</Pill>
        </div>

        <h1 className="text-[clamp(2.6rem,7.5vw,6.5rem)] font-display font-semibold leading-[0.95] tracking-[-0.03em] max-w-[16ch]">
          {HEADLINE.map((line, li, lines) => {
            const offset = lines.slice(0, li).reduce((n, l) => n + l.length, 0);
            return (
              <span key={li} className="block">
                {line.map((word, wi) => (
                  <Fragment key={`${li}-${wi}`}>
                    <span
                      className={`word-rise inline-block ${GRADIENT.has(word) ? "text-gradient-brand" : ""}`}
                      style={{ animationDelay: `${0.1 + (offset + wi) * 0.06}s` }}
                    >
                      {word}
                    </span>{" "}
                  </Fragment>
                ))}
              </span>
            );
          })}
        </h1>

        <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-24 items-end">
          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Brahmaxis Labs helps founders and teams design, build, deploy, and scale eCommerce
              automation, AdTech workflows, SaaS MVPs, analytics dashboards, internal tools,
              infrastructure, and edge-cloud systems.
            </p>
            <p className="mt-5 text-base text-muted-foreground/80 leading-relaxed max-w-xl">
              We combine senior engineering judgment, reusable delivery systems, and the execution
              playbook behind ParkTek and Brahmastra to ship software that can actually run in
              production.
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row lg:flex-col items-start gap-4 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-brand hover:bg-brand/90 text-brand-foreground px-8 h-14 text-base rounded-full group shadow-lg shadow-brand/20"
              >
                <Link href="/contact">
                  Book a Discovery Call
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-full border-border bg-card/40 backdrop-blur hover:bg-accent hover:text-accent-foreground"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Trust bullets */}
      <div
        className={`relative z-10 shrink-0 pb-12 lg:pb-16 max-w-[1400px] mx-auto w-full px-6 lg:px-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        <div className="grid gap-3 sm:grid-cols-3 border-t border-foreground/10 pt-8">
          {TRUST.map((t) => (
            <div key={t} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                <Check className="h-3 w-3" />
              </span>
              <span className="text-sm text-muted-foreground leading-relaxed">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
