import { Reveal } from "@/components/shared/Reveal";
import { StarRating } from "@/components/shared/StarRating";
import { placeholderHome } from "@/lib/placeholder-data";
import { RatingSummary } from "./RatingSummary";

function formatReviewDate(iso: string) {
  // Fixed locale → hydration-safe (server & client same string)
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function Reviews() {
  const { reviews } = placeholderHome;

  // JANII G: BLUEPRINT RULE — reviews nahi hain to section hide.
  // Khali ya fake reviews kabhi nahi.
  if (!reviews.enabled || reviews.items.length === 0) {
    return null;
  }

  return (
    <section
      className="section-prifya bg-brand-surface"
      aria-labelledby="reviews-heading"
    >
      <div className="container-prifya">
        {/* Header */}
        <Reveal variant="fade-scale">
          <header className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber-text">
              {reviews.eyebrow}
            </p>
            <h2
              id="reviews-heading"
              className="font-serif text-3xl leading-[1.1] tracking-tight text-brand-green md:text-4xl lg:text-5xl"
            >
              {reviews.heading.before}
              <em className="italic text-brand-amber-text">
                {reviews.heading.italic}
              </em>
              {reviews.heading.after}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted md:text-lg">
              {reviews.subline}
            </p>
          </header>
        </Reveal>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          {/* Left: rating summary */}
          <div className="lg:col-span-4">
            <Reveal variant="fade-up">
              <RatingSummary
                average={reviews.average}
                total={reviews.total}
                distribution={reviews.distribution}
              />
            </Reveal>
          </div>

          {/* Right: review cards */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 md:grid-cols-2">
              {reviews.items.map((review, i) => (
                <Reveal
                  key={review.id}
                  variant="fade-up"
                  delay={0.08 + i * 0.06}
                >
                  <article className="flex h-full flex-col rounded-brand-card border border-brand-border bg-brand-bg p-6 transition-shadow duration-300 hover:shadow-brand-soft">
                    <StarRating value={review.rating} size={14} />

                    <h3 className="mt-3 font-serif text-lg leading-tight text-brand-green">
                      {review.title}
                    </h3>

                    <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                      {review.body}
                    </p>

                    <footer className="mt-5 flex items-center justify-between gap-3 border-t border-brand-border pt-4 text-xs">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium text-brand-green">
                          {review.name}
                        </span>
                        {review.city && (
                          <span className="text-brand-muted">
                            • {review.city}
                          </span>
                        )}
                        {review.verified && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-brand-surface px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-success">
                            <svg
                              width="10"
                              height="10"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              aria-hidden="true"
                            >
                              <path d="M5 13l4 4L19 7" />
                            </svg>
                            Verified
                          </span>
                        )}
                      </div>
                      <time
                        dateTime={review.date}
                        className="shrink-0 text-brand-muted"
                      >
                        {formatReviewDate(review.date)}
                      </time>
                    </footer>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Submit CTA */}
            {reviews.submitCta && (
              <Reveal variant="fade-up" delay={0.35}>
                <div className="mt-6 flex flex-col items-start justify-between gap-3 rounded-brand-card border border-brand-border bg-brand-bg p-5 sm:flex-row sm:items-center">
                  <p className="text-sm text-brand-muted">
                    {reviews.submitCta.text}
                  </p>
                  <a
                    href={reviews.submitCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-prifya-outline group inline-flex items-center gap-2 px-4 py-2 text-sm"
                  >
                    {reviews.submitCta.button}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}