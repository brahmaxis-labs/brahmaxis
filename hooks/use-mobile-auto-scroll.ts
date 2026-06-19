"use client";

import { useEffect, useRef, useState } from "react";

export function useMobileAutoScroll<T extends HTMLElement>(itemCount: number) {
  const scrollerRef = useRef<T>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const mobile = window.matchMedia("(max-width: 639px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!scroller || !mobile.matches || reducedMotion.matches) return;

    let paused = false;
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    const updateActiveIndex = () => {
      const firstCard = scroller.firstElementChild as HTMLElement | null;
      const step = firstCard ? firstCard.offsetWidth + 16 : scroller.clientWidth * 0.86;
      setActiveIndex(Math.min(itemCount - 1, Math.max(0, Math.round(scroller.scrollLeft / step))));
    };

    const interval = window.setInterval(() => {
      if (paused) return;

      const firstCard = scroller.firstElementChild as HTMLElement | null;
      const step = firstCard ? firstCard.offsetWidth + 16 : scroller.clientWidth * 0.86;
      const atEnd = scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 8;

      scroller.scrollTo({
        left: atEnd ? 0 : scroller.scrollLeft + step,
        behavior: "smooth",
      });
    }, 2800);

    scroller.addEventListener("pointerdown", pause);
    scroller.addEventListener("pointerup", resume);
    scroller.addEventListener("pointercancel", resume);
    scroller.addEventListener("mouseenter", pause);
    scroller.addEventListener("mouseleave", resume);
    scroller.addEventListener("scroll", updateActiveIndex, { passive: true });
    updateActiveIndex();

    return () => {
      window.clearInterval(interval);
      scroller.removeEventListener("pointerdown", pause);
      scroller.removeEventListener("pointerup", resume);
      scroller.removeEventListener("pointercancel", resume);
      scroller.removeEventListener("mouseenter", pause);
      scroller.removeEventListener("mouseleave", resume);
      scroller.removeEventListener("scroll", updateActiveIndex);
    };
  }, [itemCount]);

  return { activeIndex, scrollerRef };
}
