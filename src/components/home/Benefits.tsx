import { Reveal } from "@/components/shared/Reveal";
import { CountUp } from "@/components/shared/CountUp";
import { placeholderHome } from "@/lib/placeholder-data";

const CARD_VARIANTS = ["slide-left", "fade-up", "slide-right"] as const;

export function Benefits() {
  const { benefits } = placeholderHome;

  return (
    <section
      className="section-prifya bg-brand-surface"
      aria-labelledby="benefits-heading"
    >
      <div className="container-prifya">
        <Reveal variant="fade-scale">
          <header className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber-text">
              {benefits.eyebrow}
            </p>
            <h2
              id="benefits-heading"
              className="font-serif text-3xl leading-[1.1] tracking-tight text-brand-green md:text-4xl lg:text-5xl"
            >
              {benefits.heading.before}
              <em className="italic text-brand-amber-text">
                {benefits.heading.italic}
              </em>
              {benefits.heading.after}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
              {benefits.subline}
            </p>
          </header>
        </Reveal>

        <div className="mt-12 grid divide-y divide-brand-border lg:mt-16 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {benefits.items.map((benefit, i) => (
            <Reveal
              key={benefit.num}
              variant={CARD_VARIANTS[i]}
              delay={0.12 + i * 0.08}
              className="group"
            >
              <article className="flex h-full flex-col py-10 lg:px-10 lg:py-14">
                <div className="flex items-baseline gap-3">
                  <CountUp
                    target={Number(benefit.num)}
                    pad={2}
                    className="font-serif text-3xl leading-none text-brand-amber-text"
                  />
                  <span
                    className="h-px w-8 origin-left bg-brand-amber/60 transition-[width,background-color] duration-300 ease-brand group-hover:w-12 group-hover:bg-brand-amber"
                    style={{
                      animation: `draw-x 800ms cubic-bezier(0.22, 1, 0.36, 1) both`,
                      animationDelay: `${400 + i * 100}ms`,
                    }}
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-brand-green">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {benefit.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Local keyframe for hairline draw (scoped via inline style, no globals.css change) */}
      <style>{`@keyframes draw-x { from { transform: scaleX(0); } to { transform: scaleX(1); } }`}</style>
    </section>
  );
}