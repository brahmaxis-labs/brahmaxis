/**
 * Ambient page atmosphere: structural "axis" grid + soft indigo glows.
 * Purely decorative — sits behind content, never intercepts pointer events.
 */
export function GridGlow({
  className = "",
  grid = true,
}: {
  className?: string;
  grid?: boolean;
}) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden>
      {grid && (
        <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_50%_0%,black,transparent_75%)] opacity-70" />
      )}
      <div className="glow-brand w-[700px] h-[700px] -top-48 -right-40 opacity-40" />
      <div className="glow-brand w-[420px] h-[420px] top-1/3 -left-32 opacity-20" />
    </div>
  );
}
