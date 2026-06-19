"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveal-on-scroll hook. Returns a ref + a boolean that flips true once the
 * element scrolls into view (or is already in view on mount).
 *
 * Uses a passive scroll/resize listener rather than IntersectionObserver so it
 * works reliably across every browser and in headless preview environments.
 * The element is shown immediately if it is already within `offset` of the
 * viewport on mount, so content is never stuck hidden.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(offset = 0.95) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const check = () => {
      if (done) return;
      const rect = el.getBoundingClientRect();
      // Reveal once the top has reached the trigger line. No lower bound, so
      // fast/momentum scrolling (or a jump) that skips the element still
      // reveals it instead of leaving it permanently hidden.
      if (rect.top < window.innerHeight * offset) {
        done = true;
        setInView(true);
        window.removeEventListener("scroll", check);
        window.removeEventListener("resize", check);
      }
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [offset]);

  return [ref, inView] as const;
}
