"use client";

import { useEffect, useState } from "react";
import { Shield, Lock, Eye, FileCheck } from "lucide-react";
import { useReveal } from "./use-reveal";

const securityFeatures = [
  {
    icon: Shield,
    title: "CLI workflows",
    description: "Internal commands and setup flows that reduce repetitive project scaffolding and delivery setup.",
  },
  {
    icon: Lock,
    title: "Templates and patterns",
    description: "Reusable backend, frontend, infra, analytics, and edge-cloud structures shaped by real delivery work.",
  },
  {
    icon: Eye,
    title: "Deployment playbooks",
    description: "Local, staging, cloud, monitoring, logging, and handover practices applied consistently across builds.",
  },
  {
    icon: FileCheck,
    title: "Documentation engine",
    description: "Architecture docs, API docs, environment setup, runbooks, troubleshooting guides, and maintenance notes.",
  },
];

// Each module owns one command + one output line, in card order.
const terminalLines = [
  { prompt: true, text: "brahmastra init parktek-pilot", module: 0 },
  { ok: true, text: "repo · ci · env scaffolded", module: 0 },
  { prompt: true, text: "brahmastra add api auth dashboard", module: 1 },
  { ok: true, text: "reusable templates wired", module: 1 },
  { prompt: true, text: "brahmastra deploy cloud", module: 2 },
  { ok: true, text: "live · monitored · documented", module: 2 },
  { prompt: true, text: "brahmastra generate docs", module: 3 },
  { ok: true, text: "runbooks + api reference", module: 3 },
];

const certifications = ["Internal accelerator", "Not public SaaS", "CLI workflows", "Reusable templates", "Deployment playbooks"];

function moduleState(index: number, step: number): "idle" | "active" | "done" {
  const start = index * 2;
  if (step >= start + 2) return "done";
  if (step > start) return "active";
  return "idle";
}

function BrahmastraTerminal({ step }: { step: number }) {
  const running = step < terminalLines.length;
  return (
    <div className="rounded-xl border border-border bg-[oklch(0.135_0.014_265)] overflow-hidden shadow-[0_24px_60px_-30px_color-mix(in_oklch,var(--brand)_40%,transparent)]">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-brand/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">brahmastra — zsh</span>
        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px]">
          <span className={`h-1.5 w-1.5 rounded-full ${running ? "bg-brand/70 animate-pulse" : "bg-brand"}`} />
          <span className="text-muted-foreground">{running ? "running" : "ready"}</span>
        </span>
      </div>
      <div className="p-5 font-mono text-sm leading-7 min-h-[224px]">
        {terminalLines.slice(0, step).map((line, i) => (
          <div key={i} className="term-line whitespace-pre-wrap break-words">
            {line.prompt ? (
              <>
                <span className="text-brand">$ </span>
                <span className="text-foreground/90">{line.text}</span>
              </>
            ) : (
              <span className="text-brand-soft">✓ {line.text}</span>
            )}
            {i === step - 1 && running && <span className="term-cursor" aria-hidden />}
          </div>
        ))}
        {!running && (
          <div className="term-line flex items-center">
            <span className="text-brand">$</span>
            <span className="term-cursor" aria-hidden />
          </div>
        )}
      </div>
    </div>
  );
}

export function SecuritySection() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>();
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const id = setInterval(() => {
      setStep((s) => {
        if (s >= terminalLines.length) {
          clearInterval(id);
          return s;
        }
        return s + 1;
      });
    }, 700);
    return () => clearInterval(id);
  }, [isVisible]);

  return (
    <section id="brahmastra" ref={sectionRef} className="relative py-24 lg:py-32 bg-foreground/[0.02] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Content + live terminal */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Brahmastra
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Powered by
              <br />
              Brahmastra.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Brahmastra is our proprietary internal engineering accelerator for building full-stack, edge-cloud, IoT, and analytics products faster using reusable templates, CLI workflows, infrastructure patterns, documentation generators, and deployment playbooks.
            </p>

            {/* Animated CLI terminal driving the modules */}
            <BrahmastraTerminal step={step} />

            {/* Certifications */}
            <div className="mt-12 flex flex-wrap gap-3">
              {certifications.map((cert, index) => (
                <span
                  key={cert}
                  className={`px-4 py-2 rounded-full border border-border bg-card/40 text-sm font-mono transition-all duration-500 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 50 + 200}ms` }}
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Modules that activate in sync with the terminal */}
          <div className="grid gap-6 lg:content-center">
            {securityFeatures.map((feature, index) => {
              const state = moduleState(index, step);
              const stateCls =
                state === "active"
                  ? "border-brand bg-card ring-1 ring-brand/40 shadow-[0_0_44px_-12px_color-mix(in_oklch,var(--brand)_55%,transparent)] opacity-100"
                  : state === "done"
                  ? "border-brand/40 bg-card opacity-100"
                  : "border-border bg-card/40 opacity-55";
              const iconCls =
                state === "active"
                  ? "bg-brand text-brand-foreground border-brand"
                  : state === "done"
                  ? "bg-brand/15 text-brand border-brand/30"
                  : "border-border text-muted-foreground";
              return (
                <div
                  key={feature.title}
                  className={`relative p-6 rounded-xl border transition-all duration-500 hover:-translate-y-1 ${stateCls}`}
                >
                  {/* status chip */}
                  <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 font-mono text-[11px]">
                    {state === "active" && (
                      <>
                        <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                        <span className="text-brand-soft">running</span>
                      </>
                    )}
                    {state === "done" && (
                      <>
                        <span className="text-brand">✓</span>
                        <span className="text-muted-foreground">ready</span>
                      </>
                    )}
                    {state === "idle" && <span className="text-muted-foreground/60">queued</span>}
                  </span>

                  <div className="flex items-start gap-4">
                    <div
                      className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-lg border transition-colors duration-300 ${iconCls}`}
                    >
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div className="pr-16">
                      <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
