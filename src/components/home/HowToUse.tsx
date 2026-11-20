"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/shared/Reveal";
import { placeholderHome } from "@/lib/placeholder-data";

export function HowToUse() {
  const { howToUse } = placeholderHome;
  const reduce = useReducedMotion();

  return (
    <section
      className="section-prifya bg-brand-bg"
      aria-labelledby="howto-heading"
    >
      <div className="container-prifya">
        <Reveal variant="fade-scale">
          <header className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber-text">
              {howToUse.eyebrow}
            </p>
            <h2
              id="howto-heading"
              className="font-serif text-3xl leading-[1.1] tracking-tight text-brand-green md:text-4xl lg:text-5xl"
            >
              {howToUse.heading.before}
              <em className="italic text-brand-amber-text">
                {howToUse.heading.italic}
              </em>
              {howToUse.heading.after}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
              {howToUse.subline}
            </p>
          </header>
        </Reveal>

        <div className="relative mt-14 lg:mt-20">
          {/* Desktop connector — scroll-draw from left */}
          {!reduce && (
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-none absolute left-0 right-0 top-[38px] hidden origin-left lg:block"
              aria-hidden="true"
            >
              <div className="mx-[16.66%] h-px bg-gradient-to-r from-transparent via-brand-border-strong to-transparent" />
            </motion.div>
          )}

          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {howToUse.steps.map((step, i) => (
              <motion.li
                key={step.num}
                initial={reduce ? false : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col items-start text-left lg:items-center lg:text-center"
              >
                {/* Circle — spring pop-in */}
                <motion.div
                  initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                  whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 20,
                    delay: 0.2 + i * 0.12,
                  }}
                  className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full border border-brand-border-strong bg-brand-bg transition-[border-color,background-color] duration-300 ease-brand group-hover:border-brand-green group-hover:bg-brand-surface"
                >
                  {/* Number — quick flip-in */}
                  <motion.span
                    initial={reduce ? false : { rotateY: -90, opacity: 0 }}
                    whileInView={reduce ? undefined : { rotateY: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45 + i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="inline-block font-serif text-2xl font-medium text-brand-green"
                    style={{ transformPerspective: 400 }}
                  >
                    {step.num}
                  </motion.span>
                </motion.div>

                <h3 className="mt-6 font-serif text-2xl leading-tight text-brand-green lg:mt-7">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-brand-muted">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <Reveal variant="fade-up" delay={0.4}>
          <p className="mx-auto mt-14 max-w-xl text-center text-xs leading-relaxed text-brand-muted lg:mt-20">
            <span className="font-semibold text-brand-green">
              {howToUse.patchTest.label}
            </span>{" "}
            {howToUse.patchTest.text}
          </p>
        </Reveal>
      </div>
    </section>
  );
}