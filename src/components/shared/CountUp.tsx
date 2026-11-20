"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

/**
 * CountUp — "00" → "01" on first view.
 * - ~0.5KB gzipped
 * - rAF-driven (no library), ease-out cubic
 * - Respects prefers-reduced-motion (jumps to final)
 */
export function CountUp({
  target,
  pad = 2,
  duration = 600,
  className,
}: {
  target: number;
  pad?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(target);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {String(n).padStart(pad, "0")}
    </span>
  );
}