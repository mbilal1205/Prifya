import Link from "next/link";
import { LineReveal } from "@/components/shared/LineReveal";
import { placeholderHome, placeholderProduct } from "@/lib/placeholder-data";

export function FinalCTA() {
  const { finalCta } = placeholderHome;

  return (
    <section
      className="relative isolate overflow-hidden bg-brand-green"
      aria-labelledby="final-cta-heading"
    >
      {/* Ambient decorative glows — pure CSS, GPU-safe */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, #C68B59 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -left-32 h-[32rem] w-[32rem] rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #EEF2EE 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-prifya py-20 md:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <p
            className="mb-5 animate-line-up text-xs font-semibold uppercase tracking-[0.22em] text-brand-amber"
            style={{ animationDelay: "0ms" }}
          >
            {finalCta.eyebrow}
          </p>

          {/* Headline */}
          <LineReveal
            as="h2"
            lines={finalCta.headingLines}
            className="font-serif text-4xl leading-[1.05] tracking-tight text-brand-inverse sm:text-5xl md:text-6xl lg:text-7xl"
            baseDelay={120}
          />

          {/* Subline */}
          <p
            className="animate-blur-in mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-inverse/75 md:mt-7 md:text-lg"
            style={{ animationDelay: "450ms" }}
          >
            {finalCta.subline}
          </p>

          {/* CTAs — inline Tailwind utilities (no globals.css dependency) */}
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:mt-12">
            {/* Primary — inverted (alabaster on green) */}
            <Link
              href={finalCta.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-brand-btn bg-brand-inverse px-7 py-3.5 text-base font-semibold text-brand-green shadow-lg transition-[transform,box-shadow,background-color] duration-300 ease-brand hover:-translate-y-0.5 hover:bg-brand-amber-light hover:shadow-[0_12px_32px_-8px_rgba(198,139,89,0.55)] active:translate-y-0 active:scale-[0.98]"
            >
              {finalCta.primaryCta.label}
              <span className="mx-1 opacity-50">—</span>
              <span className="tabular-nums">
                {placeholderProduct.currency}{" "}
                {placeholderProduct.price.toLocaleString("en-US")}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-0.5 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Secondary — outline (transparent on green) */}
            <Link
              href={finalCta.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-brand-btn border border-brand-inverse/35 bg-transparent px-7 py-3.5 text-base font-semibold text-brand-inverse transition-[background-color,border-color] duration-300 ease-brand hover:border-brand-inverse hover:bg-brand-inverse/10"
            >
              {finalCta.secondaryCta.label}
            </Link>
          </div>

          {/* Trust row */}
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-brand-inverse/70 md:mt-12 md:text-sm">
            {finalCta.trust.map((item, i) => (
              <li
                key={item}
                className="animate-line-up flex items-center gap-1.5"
                style={{ animationDelay: `${900 + i * 90}ms` }}
              >
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full bg-brand-amber"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10">
        <div className="h-px bg-gradient-to-r from-transparent via-brand-inverse/10 to-transparent" />
      </div>
    </section>
  );
}