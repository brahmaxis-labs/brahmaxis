"use client";

import { useEffect, useState } from "react";
import { useReveal } from "./use-reveal";

const locations = [
  { city: "IoT startups", region: "Connected products and pilots", latency: "Pilot" },
  { city: "Hardware startups", region: "Device-to-cloud systems", latency: "Integrate" },
  { city: "Logistics", region: "Tracking, dispatch, and ops workflows", latency: "Move" },
  { city: "Warehousing", region: "Inventory and operational dashboards", latency: "Control" },
  { city: "Facilities", region: "Smart buildings and monitoring", latency: "Operate" },
  { city: "Smart infrastructure", region: "Edge-cloud reliability", latency: "Scale" },
  { city: "Operations-heavy SMEs", region: "Internal tools and automation", latency: "Digitize" },
  { city: "Analytics teams", region: "KPI systems and decisions", latency: "Decide" },
];

export function InfrastructureSection() {
  const [sectionRef, isVisible] = useReveal<HTMLElement>();
  const [activeLocation, setActiveLocation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLocation((prev) => (prev + 1) % locations.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="domains" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Ideal customers
            </span>
            <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-8">
              Built for
              <br />
              real operations.
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Best fit: founders, startups, SMEs, and operations-heavy teams that need serious software without enterprise cost or agency bloat.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">8</div>
                <div className="text-sm text-muted-foreground">Best-fit segments</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">Ops</div>
                <div className="text-sm text-muted-foreground">Domain focus</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-display mb-2">Pilot</div>
                <div className="text-sm text-muted-foreground">Launch lens</div>
              </div>
            </div>
          </div>

          {/* Right: Location list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="border border-border rounded-xl bg-card/40 backdrop-blur-sm overflow-hidden">
              {/* Header */}
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <span className="text-sm font-mono text-muted-foreground">Industry focus</span>
                <span className="flex items-center gap-2 text-xs font-mono text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Ready to deliver
                </span>
              </div>

              {/* Locations */}
              <div>
                {locations.map((location, index) => (
                  <div
                    key={location.city}
                    className={`px-6 py-5 border-b border-border/60 last:border-b-0 flex items-center justify-between transition-all duration-300 ${
                      activeLocation === index ? "bg-brand/[0.07]" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeLocation === index ? "bg-brand shadow-[0_0_0_3px_color-mix(in_oklch,var(--brand)_25%,transparent)]" : "bg-foreground/20"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{location.city}</div>
                        <div className="text-sm text-muted-foreground">{location.region}</div>
                      </div>
                    </div>
                    <span className="font-mono text-sm text-muted-foreground">{location.latency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
