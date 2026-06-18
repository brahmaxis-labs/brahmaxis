import type { ReactNode } from "react";
import { GridGlow } from "./background";
import { Pill } from "./pill";

/** Shared hero band for inner pages — clears the fixed nav and sets the page title. */
export function PageHero({
  eyebrow,
  title,
  sub,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-36 lg:pt-44 pb-16 lg:pb-20 border-b border-foreground/10">
      <GridGlow />
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <Pill>{eyebrow}</Pill>
        <h1 className="mt-8 text-[clamp(2.4rem,6vw,5rem)] font-display font-semibold leading-[0.98] tracking-[-0.03em] max-w-[18ch]">
          {title}
        </h1>
        {sub && (
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">{sub}</p>
        )}
        {children && <div className="mt-10 flex flex-col sm:flex-row gap-4">{children}</div>}
      </div>
    </section>
  );
}
