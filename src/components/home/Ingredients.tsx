import { Reveal } from "@/components/shared/Reveal";
import { ImageReveal } from "@/components/shared/ImageReveal";
import { placeholderHome } from "@/lib/placeholder-data";
import { IngredientsVisual } from "./IngredientsVisual";
import { IngredientsAccordion } from "./IngredientsAccordion";

export function Ingredients() {
  const { ingredients } = placeholderHome;

  return (
    <section
      className="section-prifya bg-brand-surface"
      aria-labelledby="ingredients-heading"
    >
      <div className="container-prifya">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Header — mobile: first; desktop: right column top */}
          <div className="lg:order-2 lg:col-start-2">
            <Reveal variant="fade-scale">
              <header>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber-text">
                  {ingredients.eyebrow}
                </p>
                <h2
                  id="ingredients-heading"
                  className="font-serif text-3xl leading-[1.1] tracking-tight text-brand-green md:text-4xl lg:text-5xl"
                >
                  {ingredients.heading.before}
                  <em className="italic text-brand-amber-text">
                    {ingredients.heading.italic}
                  </em>
                  {ingredients.heading.after}
                </h2>
                <p className="mt-4 max-w-md text-base leading-relaxed text-brand-muted md:text-lg">
                  {ingredients.subline}
                </p>
              </header>
            </Reveal>
          </div>

          {/* Image — mobile: second; desktop: left column spanning rows */}
          <div className="mt-10 lg:order-1 lg:col-start-1 lg:row-span-2 lg:mt-0">
            <ImageReveal>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-brand-card border border-brand-border bg-brand-bg shadow-brand-soft">
                <IngredientsVisual />
              </div>
            </ImageReveal>
          </div>

          {/* Content — mobile: third; desktop: right column bottom */}
          <div className="mt-10 lg:order-2 lg:col-start-2 lg:mt-0">
            {/* Key ingredients list */}
            <Reveal variant="fade-up">
              <ul className="divide-y divide-brand-border">
                {ingredients.keyIngredients.map((ing, i) => (
                  <Reveal
                    key={ing.name}
                    variant="slide-right"
                    delay={0.15 + i * 0.08}
                  >
                    <li className="group flex items-center gap-4 py-4">
                      <span
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-amber transition-[transform,background-color] duration-300 ease-brand group-hover:scale-150 group-hover:bg-brand-green"
                        aria-hidden="true"
                      />
                      <div className="flex flex-1 flex-wrap items-baseline justify-between gap-2">
                        <span className="text-base font-medium text-brand-green">
                          {ing.name}
                        </span>
                        <span className="text-xs uppercase tracking-wider text-brand-muted">
                          {ing.role}
                        </span>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </Reveal>

            {/* Full INCI accordion */}
            <Reveal variant="fade-up" delay={0.3}>
              <IngredientsAccordion
                label={ingredients.fullInci.label}
                text={ingredients.fullInci.text}
              />
            </Reveal>
          </div>
        </div>

        {/* Suitable for / Avoid if — full width below */}
        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:mt-20">
          <Reveal variant="slide-left">
            <div className="flex h-full gap-4 rounded-brand-card border border-brand-border bg-brand-bg p-6 transition-shadow duration-300 hover:shadow-brand-soft md:p-7">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-surface text-brand-success"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif text-lg leading-tight text-brand-green md:text-xl">
                  {ingredients.suitableFor.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {ingredients.suitableFor.text}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal variant="slide-right" delay={0.1}>
            <div className="flex h-full gap-4 rounded-brand-card border border-brand-border bg-brand-bg p-6 transition-shadow duration-300 hover:shadow-brand-soft md:p-7">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-amber-light text-brand-amber-text"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 8v4M12 16h.01" />
                </svg>
              </span>
              <div>
                <h3 className="font-serif text-lg leading-tight text-brand-green md:text-xl">
                  {ingredients.avoidIf.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {ingredients.avoidIf.text}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}