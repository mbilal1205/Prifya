"use client";

import { motion, useReducedMotion } from "motion/react";

type Variant = "fade-up" | "fade-scale" | "slide-left" | "slide-right";

const VARIANTS: Record<
  Variant,
  { initial: Record<string, number>; whileInView: Record<string, number> }
> = {
  "fade-up":     { initial: { opacity: 0, y: 24 },            whileInView: { opacity: 1, y: 0 } },
  "fade-scale":  { initial: { opacity: 0, y: 20, scale: 0.97 }, whileInView: { opacity: 1, y: 0, scale: 1 } },
  "slide-left":  { initial: { opacity: 0, x: -60 },           whileInView: { opacity: 1, x: 0 } },
  "slide-right": { initial: { opacity: 0, x: 60 },            whileInView: { opacity: 1, x: 0 } },
};

export function Reveal({
  children,
  delay = 0,
  variant = "fade-up",
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: Variant;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const v = VARIANTS[variant];

  return (
    <motion.div
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}