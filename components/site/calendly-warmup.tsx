"use client";

import { useEffect } from "react";
import { warmCalendly } from "@/lib/calendly";

export function CalendlyWarmup() {
  useEffect(() => {
    const run = () => {
      void warmCalendly().catch(() => {
        window.__calendlyWidgetPromise = undefined;
      });
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(run, { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(run, 1200);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  return null;
}
