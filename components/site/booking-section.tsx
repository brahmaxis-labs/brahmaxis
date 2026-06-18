"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check, ArrowRight, CalendarClock } from "lucide-react";
import { Reveal } from "./reveal";
import { CALENDLY_EMBED, CALENDLY_URL, warmCalendly } from "@/lib/calendly";

const BENEFITS = [
  "Product roadmap review",
  "Architecture feedback",
  "AI opportunity assessment",
  "Scaling recommendations",
  "Actionable next steps",
];

export function BookingSection() {
  const calRef = useRef<HTMLDivElement>(null);
  const mounted = useRef(false);
  const [ready, setReady] = useState(false);

  // Explicit init — reliable on first load AND client-side navigation,
  // unlike Calendly's one-shot auto-scan of `.calendly-inline-widget`.
  const initCalendly = useCallback(() => {
    if (mounted.current || !window.Calendly || !calRef.current) return;
    mounted.current = true;
    window.Calendly.initInlineWidget({ url: CALENDLY_EMBED, parentElement: calRef.current });
    setReady(true);
  }, []);

  useEffect(() => {
    let cancelled = false;

    warmCalendly()
      .then(() => {
        if (!cancelled) initCalendly();
      })
      .catch(() => {
        window.__calendlyWidgetPromise = undefined;
      });

    return () => {
      cancelled = true;
    };
  }, [initCalendly]);

  return (
    <section id="book" className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-6 lg:px-12">
        <div className="grid items-start gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          {/* Offer card */}
          <Reveal className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur-sm lg:p-10">
              <div className="glow-brand absolute -right-24 -top-24 h-56 w-56 opacity-40" aria-hidden />

              {/* Urgency badge */}
              <span className="relative inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-brand-soft">
                <CalendarClock className="h-3.5 w-3.5" aria-hidden />
                Limited to the first 50 bookings
              </span>

              {/* Pricing */}
              <div className="relative mt-7 flex items-end gap-3">
                <span className="text-2xl font-display text-muted-foreground line-through decoration-muted-foreground/50">
                  <span className="sr-only">Regular price </span>$20
                </span>
                <span className="text-5xl font-display font-semibold leading-none text-gradient-brand">
                  Free
                </span>
              </div>
              <p className="relative mt-3 text-sm text-muted-foreground">
                Free for the first 50 founder consultations.
              </p>

              {/* Benefits */}
              <ul className="relative mt-8 space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    <span className="text-sm text-foreground/90">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Primary CTA */}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a free 30-minute strategy call on Calendly"
                className="group relative mt-9 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-medium text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:bg-brand/90 hover:shadow-brand/30 active:scale-[0.98]"
              >
                Book Free Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="relative mt-4 text-center text-xs text-muted-foreground">
                30 minutes · video call · no obligation
              </p>
            </div>
          </Reveal>

          {/* Inline Calendly embed */}
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-border bg-card/40 p-1.5 backdrop-blur-sm">
              <div className="relative h-[640px] w-full overflow-hidden rounded-[1.35rem] sm:h-[720px]">
                {/* Calendly injects its iframe here — kept free of React children */}
                <div
                  ref={calRef}
                  className="absolute inset-0"
                  role="region"
                  aria-label="Calendly booking calendar"
                />
                {/* Placeholder sibling, removed once the widget initializes */}
                {!ready && (
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground">
                    <CalendarClock className="h-6 w-6 animate-pulse text-brand" aria-hidden />
                    Loading calendar…
                  </div>
                )}
              </div>
            </div>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Calendar not loading?{" "}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand hover:underline underline-offset-4"
              >
                Open it in a new tab
              </a>
              .
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
