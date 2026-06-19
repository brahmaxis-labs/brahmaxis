"use client";

import { Linkedin } from "lucide-react";
import { useReveal } from "./use-reveal";

const team = [
  { name: "Kushal", initials: "K", role: "Product architecture · CTO leadership · Edge-cloud systems · Consulting delivery", linkedin: "https://www.linkedin.com/in/kushalg/" },
  { name: "Shruti", initials: "S", role: "Website · Product design · Frontend · Client experience · Full-stack development", linkedin: "https://www.linkedin.com/in/shruti-agarwal-ac1422/" },
  { name: "Akash", initials: "A", role: "Engineering · Backend · Platform · Data · Infrastructure" },
  { name: "Rajat", initials: "R", role: "Product architecture · Software engineering · Consulting delivery · Execution" },
];

const features = [
  {
    title: "Core delivery team",
    description: "Named builders responsible for execution, client experience, architecture, engineering, and delivery coordination.",
  },
  {
    title: "Specialist bench",
    description: "Project-specific help across data, UX, cloud, security, product, and operations when the scope needs it.",
  },
  {
    title: "Advisor network",
    description: "Occasional high-level input from domain experts without presenting them as delivery owners.",
  },
  {
    title: "Clear representation",
    description: "No employer logos, implied endorsements, or inflated team claims unless written permission exists.",
  },
];

export function DevelopersSection() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>();

  return (
    <section id="team" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start min-w-0">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Team
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Core builders.{" "}
              <br />
              <span className="text-muted-foreground">Selective experts.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Brahmaxis Labs presents who owns delivery clearly: core team first, specialist bench when needed, advisor network only when genuinely involved.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  <h3 className="font-medium mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Team cards */}
          <div className="min-w-0">
            <div className="grid sm:grid-cols-2 gap-4">
              {team.map((person, index) => (
                <div
                  key={person.name}
                  className={`group rounded-xl border border-border bg-card/40 p-6 transition-all duration-500 hover:border-brand/40 hover:bg-card hover:-translate-y-1 hover:shadow-[0_14px_44px_-16px_color-mix(in_oklch,var(--brand)_35%,transparent)] ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${index * 80 + 150}ms` }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/30 bg-brand/15 font-display text-lg font-semibold text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-brand-foreground">
                      {person.initials}
                    </div>
                    {person.linkedin && (
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${person.name} on LinkedIn`}
                        className="text-muted-foreground transition-colors hover:text-brand"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{person.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{person.role}</p>
                </div>
              ))}
            </div>

            {/* Note + links */}
            <p className="mt-6 text-sm text-muted-foreground">
              Specialist bench and advisors are brought in per project — never presented as full-time delivery owners.
            </p>
            <div className="mt-6 flex items-center gap-6 text-sm">
              <a href="/contact" className="text-foreground hover:underline underline-offset-4">
                Discuss your build
              </a>
              <span className="text-foreground/20">|</span>
              <a href="/process" className="text-muted-foreground hover:text-foreground">
                Review process
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
