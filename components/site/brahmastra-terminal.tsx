"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/components/landing/use-reveal";

const lines = [
  { prompt: true, text: "brahmastra init acme-marketplace" },
  { ok: true, text: "repo · ci · env scaffolded" },
  { prompt: true, text: "brahmastra add commerce ads dashboard" },
  { ok: true, text: "seller + ROAS templates wired" },
  { prompt: true, text: "brahmastra deploy cloud" },
  { ok: true, text: "live · monitored · documented" },
  { prompt: true, text: "brahmastra generate docs" },
  { ok: true, text: "runbooks + api reference" },
];

/** Self-driving "delivery accelerator" CLI animation. Starts when scrolled into view. */
export function BrahmastraTerminal() {
  const [ref, inView] = useReveal<HTMLDivElement>(0.8);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => {
      setStep((s) => {
        if (s >= lines.length) {
          clearInterval(id);
          return s;
        }
        return s + 1;
      });
    }, 700);
    return () => clearInterval(id);
  }, [inView]);

  const running = step < lines.length;

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border bg-[oklch(0.135_0.014_265)] overflow-hidden shadow-[0_24px_60px_-30px_color-mix(in_oklch,var(--brand)_40%,transparent)]"
    >
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
        {lines.slice(0, step).map((line, i) => (
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
        {!running && step > 0 && (
          <div className="term-line flex items-center">
            <span className="text-brand">$</span>
            <span className="term-cursor" aria-hidden />
          </div>
        )}
      </div>
    </div>
  );
}
