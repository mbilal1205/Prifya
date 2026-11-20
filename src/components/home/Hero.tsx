import Link from "next/link";
import { HeroParallax } from "./HeroParallax";
import { HeroVisual } from "./HeroVisual";
import { LineReveal } from "@/components/shared/LineReveal";
import { placeholderProduct, placeholderHome } from "@/lib/placeholder-data";

export function Hero() {
  const { hero } = placeholderHome;
  const lines = placeholderProduct.taglineLines;

  return (
    <section
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <HeroParallax>
        <HeroVisual />
      </HeroParallax>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/40 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mt-auto container-prifya pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber-text md:text-sm animate-blur-in"
            style={{ animationDelay: "0ms" }}
          >
            {hero.eyebrow}
          </p>

          {/* H1 — per-line cinematic reveal */}
          <LineReveal
            as="h1"
            lines={lines}
            className="font-serif text-4xl leading-[1.05] tracking-tight text-brand-green sm:text-5xl md:text-6xl lg:text-7xl"
            baseDelay={150}
          />

          {/* Subline — blur-in */}
          <p
            className="mt-5 max-w-xl text-base leading-relaxed text-brand-muted md:mt-6 md:text-lg animate-blur-in"
            style={{ animationDelay: "500ms" }}
          >
            {hero.subline}
          </p>

          {/* CTAs — staggered pop */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
            <Link
              href={`/product/${placeholderProduct.slug}`}
              className="btn-prifya-primary group px-7 py-3.5 text-base md:px-8 md:py-4 md:text-lg animate-line-up"
              style={{ animationDelay: "700ms" }}
            >
              {hero.ctaPrimary}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/our-story"
              className="btn-prifya-outline px-7 py-3.5 text-base md:px-8 md:py-4 md:text-lg animate-line-up"
              style={{ animationDelay: "820ms" }}
            >
              {hero.ctaSecondary}
            </Link>
          </div>

          {/* Trust — sequential dot fill */}
          <ul className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-brand-muted md:mt-10 md:text-sm">
            {hero.trust.map((item, i) => (
              <li
                key={item}
                className="flex items-center gap-1.5 animate-line-up"
                style={{ animationDelay: `${950 + i * 100}ms` }}
              >
                <TrustDot delay={`${1000 + i * 100}ms`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce text-brand-green" style={{ animationDuration: "2.4s" }}>
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

function TrustDot({ delay }: { delay: string }) {
  return (
    <span
      className="inline-block h-1.5 w-1.5 rounded-full bg-brand-amber"
      aria-hidden="true"
      style={{
        animation: "line-up 500ms cubic-bezier(0.22, 1, 0.36, 1) both",
        animationDelay: delay,
      }}
    />
  );
}