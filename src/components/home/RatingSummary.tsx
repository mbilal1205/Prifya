"use client";

import { motion, useReducedMotion } from "motion/react";
import { StarRating } from "@/components/shared/StarRating";

/**
 * RatingSummary — big average + 5 distribution bars.
 * - Bars animate scaleX 0 → percent (staggered)
 * - Respects prefers-reduced-motion (instant fill)
 */
export function RatingSummary({
  average,
  total,
  distribution,
}: {
  average: number;
  total: number;
  distribution: readonly [number, number, number, number, number]; // [5★, 4★, 3★, 2★, 1★]
}) {
  const reduce = useReducedMotion();
  const max = Math.max(...distribution, 1);

  return (
    <div className="rounded-brand-card border border-brand-border bg-brand-bg p-6 md:p-7">
      {/* Big average */}
      <div className="flex items-baseline gap-1.5">
        <span className="font-serif text-5xl leading-none text-brand-green md:text-6xl">
          {average.toFixed(1)}
        </span>
        <span className="text-sm text-brand-muted">/ 5</span>
      </div>

      <StarRating value={average} size={18} className="mt-2" />

      <p className="mt-2 text-xs text-brand-muted">
        Based on {total} {total === 1 ? "review" : "reviews"}
      </p>

      {/* Distribution bars */}
      <div className="mt-6 space-y-2.5">
        {[5, 4, 3, 2, 1].map((star, i) => {
          const count = distribution[5 - star] ?? 0;
          const pct = (count / max) * 100;

          return (
            <div key={star} className="flex items-center gap-3">
              <span
                className="w-7 shrink-0 text-xs font-medium text-brand-muted"
                aria-hidden="true"
              >
                {star}★
              </span>

              <div
                className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-brand-border"
                role="img"
                aria-label={`${star} star: ${count} reviews`}
              >
                <motion.div
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={reduce ? undefined : { scaleX: pct / 100 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1 + i * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-y-0 left-0 w-full origin-left rounded-full bg-brand-amber"
                />
              </div>

              <span
                className="w-6 shrink-0 text-right text-xs tabular-nums text-brand-muted"
                aria-hidden="true"
              >
                {count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}