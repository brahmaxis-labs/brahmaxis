"use client";

import { useEffect, useState } from "react";
import { useReveal } from "./use-reveal";

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [ref, inView] = useReveal<HTMLDivElement>(0.6);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (end === 0) {
      setCount(0);
      return;
    }
    const duration = 1600;
    const startTime = performance.now();
    const id = setInterval(() => {
      const progress = Math.min((performance.now() - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress >= 1) {
        setCount(end);
        clearInterval(id);
      }
    }, 32);
    return () => clearInterval(id);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-6xl lg:text-8xl font-display font-semibold tracking-tight text-gradient-brand">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

const metrics = [
  { 
    value: 3, 
    suffix: "", 
    prefix: "",
    label: "Core proof layers: product, infrastructure, operations",
  },
  { 
    value: 0, 
    suffix: "", 
    prefix: "",
    label: "Source code or sensitive data shown",
  },
  { 
    value: 1, 
    suffix: "", 
    prefix: "",
    label: "ParkTek case study to anchor credibility",
  },
  { 
    value: 0, 
    suffix: "", 
    prefix: "",
    label: "Unauthorized employer endorsements",
  },
];

export function MetricsSection() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>();

  return (
    <section id="case-studies" ref={sectionRef} className="relative py-24 lg:py-32 border-y border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-24">
          <div>
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Case Studies
            </span>
            <h2
              className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              ParkTek proof
              <br />
              without IP leakage.
            </h2>
            <p className="mt-8 max-w-3xl text-xl text-muted-foreground leading-relaxed">
              ParkTek was built from the ground up by the founding team. We use sanitized architecture, deployment lessons, operational constraints, and business outcomes as proof, not private code or sensitive dashboards.
            </p>
          </div>
          <div className="flex items-center gap-4 font-mono text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Sanitized
            </span>
            <span className="text-foreground/30">|</span>
            <span>Case study ready</span>
          </div>
        </div>
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/10">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`bg-background p-8 lg:p-12 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <AnimatedCounter 
                end={typeof metric.value === 'number' ? metric.value : 0} 
                suffix={metric.suffix} 
                prefix={metric.prefix}
              />
              <div className="mt-4 text-lg text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
