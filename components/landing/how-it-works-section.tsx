"use client";

import { useEffect, useState } from "react";
import { useReveal } from "./use-reveal";

const steps = [
  {
    number: "I",
    title: "Qualification Call",
    description: "Understand the problem, budget, decision-maker, timeline, and whether the project is a strong fit.",
    code: `const lead = await brahmaxis.qualify({
  problem: 'real',
  budget: 'viable',
  timeline: 'owned'
})`,
  },
  {
    number: "II",
    title: "Discovery Sprint",
    description: "Define scope, architecture, MVP boundary, cost, timeline, risks, and first delivery milestone.",
    code: `const discovery = await brahmaxis.scope({
  architecture: true,
  risks: true,
  output: 'paid-discovery'
})`,
  },
  {
    number: "III",
    title: "Proposal",
    description: "Document deliverables, timeline, milestones, payment schedule, assumptions, out-of-scope items, and maintenance options.",
    code: `const proposal = brahmaxis.propose({
  milestones: 'clear',
  payment: 'stage-based',
  scope: 'controlled'
})`,
  },
  {
    number: "IV",
    title: "Sprint Execution",
    description: "Run weekly planning, technical checks, Friday demos, written updates, and reviewable delivery.",
    code: `await brahmaxis.execute({
  cadence: ['plan', 'check', 'demo'],
  delivery: 'weekly',
  visibility: true
})`,
  },
  {
    number: "V",
    title: "Deployment",
    description: "Set up local, staging, production or pilot environments with access transfer, monitoring, and documentation.",
    code: `await brahmaxis.deploy({
  local: true,
  staging: true,
  monitoring: 'baseline'
})`,
  },
  {
    number: "VI",
    title: "Handover",
    description: "Deliver source code, architecture docs, API docs, deployment guides, runbooks, known limitations, and next roadmap.",
    code: `await brahmaxis.handover({
  docs: ['architecture', 'api', 'runbook'],
  ownership: 'client-ready'
})`,
  },
  {
    number: "VII",
    title: "Support",
    description: "Continue through maintenance retainers, bug-fix support, feature iteration, infra monitoring, CTO advisory, or analytics support.",
    code: `await brahmaxis.support({
  mode: ['maintenance', 'iteration', 'advisory'],
  continuity: true
})`,
  },
];

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [sectionRef, isVisible] = useReveal<HTMLElement>();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[oklch(0.135_0.014_265)] text-foreground overflow-hidden border-y border-border"
    >
      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`
        }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-foreground/50 mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Process
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Clear process.
            <br />
            <span className="text-foreground/50">Less ambiguity, faster shipping.</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 min-w-0">
          {/* Steps */}
          <div className="space-y-0 min-w-0">
            {steps.map((step, index) => (
              <button
                key={step.number}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`w-full text-left py-8 border-b border-foreground/10 transition-all duration-500 group ${
                  activeStep === index ? "opacity-100" : "opacity-40 hover:opacity-70"
                }`}
              >
                <div className="flex items-start gap-6">
                  <span className={`font-display text-3xl shrink-0 w-10 transition-colors duration-500 ${activeStep === index ? "text-brand" : "text-foreground/30"}`}>{step.number}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl lg:text-3xl font-display mb-3 group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-foreground/60 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Progress indicator */}
                    {activeStep === index && (
                      <div className="mt-4 h-px bg-foreground/20 overflow-hidden">
                        <div
                          className="h-full bg-brand w-0"
                          style={{
                            animation: 'progress 5s linear forwards'
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Code display */}
          <div className="lg:sticky lg:top-32 self-start min-w-0 max-w-full">
            <div className="border border-foreground/10 overflow-hidden max-w-full">
              {/* Window header */}
              <div className="px-6 py-4 border-b border-foreground/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-brand/70" />
                  <div className="w-3 h-3 rounded-full bg-foreground/20" />
                  <div className="w-3 h-3 rounded-full bg-foreground/20" />
                </div>
                <span className="text-xs font-mono text-foreground/40">workflow.ts</span>
              </div>

              {/* Code content */}
              <div className="p-8 font-mono text-sm min-h-[280px] overflow-x-auto">
                <pre className="text-foreground/70 min-w-max">
                  {steps[activeStep].code.split('\n').map((line, lineIndex) => (
                    <div 
                      key={`${activeStep}-${lineIndex}`} 
                      className="leading-loose code-line-reveal"
                      style={{ 
                        animationDelay: `${lineIndex * 80}ms`,
                      }}
                    >
                      <span className="text-foreground/20 select-none w-8 inline-block">{lineIndex + 1}</span>
                      <span className="inline-flex">
                        {line.split('').map((char, charIndex) => (
                          <span
                            key={`${activeStep}-${lineIndex}-${charIndex}`}
                            className="code-char-reveal"
                            style={{
                              animationDelay: `${lineIndex * 80 + charIndex * 15}ms`,
                            }}
                          >
                            {char === ' ' ? '\u00A0' : char}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>

              {/* Status */}
              <div className="px-6 py-4 border-t border-foreground/10 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs font-mono text-foreground/40">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        
        .code-line-reveal {
          opacity: 0;
          transform: translateX(-8px);
          animation: lineReveal 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes lineReveal {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .code-char-reveal {
          opacity: 0;
          filter: blur(8px);
          animation: charReveal 0.3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        
        @keyframes charReveal {
          to {
            opacity: 1;
            filter: blur(0);
          }
        }
      `}</style>
    </section>
  );
}
