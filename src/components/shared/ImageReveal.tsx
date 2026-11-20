"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * ImageReveal — clip-path curtain reveal (left → right).
 * - Wow moment for imagery without layout shift
 * - Respects prefers-reduced-motion
 * - Once per viewport
 * - clip-path is GPU-composited on modern browsers
 */
export function ImageReveal({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) return <>{children}</>;

  return (
    <motion.div
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0 0 0)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "clip-path" }}
    >
      {children}
    </motion.div>
  );
}