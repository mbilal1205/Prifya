"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

/**
 * Hero parallax wrapper.
 * - Uses global scrollY (0 → 800px range) → subtle image drift + scale
 * - Respects prefers-reduced-motion (no motion)
 * - `will-change: transform` only on the animating node
 * - Children are passed through → server components can be composed inside
 */
export function HeroParallax({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], reduce ? ["0px", "0px"] : ["0px", "120px"]);
  const scale = useTransform(scrollY, [0, 800], reduce ? [1, 1] : [1, 1.06]);

  return (
    <motion.div
      ref={ref}
      style={{ y, scale, willChange: "transform" }}
      className="absolute inset-0"
      aria-hidden="true"
    >
      {children}
    </motion.div>
  );
}