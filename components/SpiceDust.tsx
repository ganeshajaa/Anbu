import type { CSSProperties } from "react";

// A few tiny gold specks drifting upward in the hero, like spice dust in warm light.
// Positions are fixed numbers (not random) so the server and browser always agree.
const specks = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  size: 2 + (i % 3),
  duration: 16 + ((i * 7) % 12),
  delay: -((i * 5) % 20),
  drift: ((i % 5) - 2) * 18,
  alpha: (0.25 + (i % 4) * 0.1).toFixed(2),
}));

export default function SpiceDust() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {specks.map((s, i) => (
        <span
          key={i}
          className="dust"
          style={
            {
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              animationDuration: `${s.duration}s`,
              animationDelay: `${s.delay}s`,
              "--drift": `${s.drift}px`,
              "--alpha": s.alpha,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
