import Link from "next/link";
import type { Metadata } from "next";
import { LineReveal } from "@/components/shared/LineReveal";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileTabBar } from "@/components/layout/MobileTabBar";
import { placeholderNotFound } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Page not found — Prifya",
  description:
    "The page you're looking for doesn't exist. Return to the homepage or explore Prifya Hair Serum.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  const {
    eyebrow,
    headingLines,
    subline,
    primaryCta,
    secondaryCta,
    suggestionsLabel,
    suggestions,
    whatsappCta,
  } = placeholderNotFound;

  return (
    <div className="flex min-h-dvh flex-col">
      <AnnouncementBar />
      <Header />

      <main className="relative flex flex-1 items-center overflow-x-clip bg-brand-bg">
        {/* Ambient sage glow — soft, calm */}
        <div
          className="pointer-events-none absolute inset-0 overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, #EEF2EE 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 container-prifya py-16 md:py-24 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            {/* Tilted leaf SVG — "off the path" */}
            <div className="mx-auto mb-6 flex h-16 w-16 animate-line-up items-center justify-center">
              <svg
                width="56"
                height="56"
                viewBox="0 0 60 60"
                fill="none"
                aria-hidden="true"
                className="rotate-[15deg] text-brand-amber"
              >
                <path
                  d="M30 12 Q46 22 46 40 Q30 50 14 40 Q14 22 30 12 Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M30 18 L30 44"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.5"
                />
                <path
                  d="M30 26 L24 22 M30 26 L36 22 M30 32 L23 28 M30 32 L37 28 M30 38 L25 36 M30 38 L35 36"
                  stroke="currentColor"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </div>

            {/* Eyebrow */}
            <p
              className="animate-blur-in mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand-amber-text"
              style={{ animationDelay: "100ms" }}
            >
              {eyebrow}
            </p>

            {/* Headline — per-line cinematic reveal */}
            <LineReveal
              as="h1"
              lines={headingLines}
              className="font-serif text-4xl leading-[1.05] tracking-tight text-brand-green sm:text-5xl md:text-6xl"
              baseDelay={150}
            />

            {/* Subline */}
            <p
              className="animate-blur-in mx-auto mt-5 max-w-md text-base leading-relaxed text-brand-muted md:mt-6 md:text-lg"
              style={{ animationDelay: "450ms" }}
            >
              {subline}
            </p>

            {/* Primary / Secondary CTAs — inline Tailwind (bulletproof) */}
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center md:mt-12">
              <Link
                href={primaryCta.href}
                className="group inline-flex items-center justify-center gap-2 rounded-brand-btn bg-brand-green px-7 py-3.5 text-base font-semibold text-brand-inverse transition-[transform,box-shadow,background-color] duration-300 ease-brand hover:-translate-y-0.5 hover:bg-brand-green-dark hover:shadow-brand-soft active:scale-[0.98]"
              >
                {primaryCta.label}
                <svg
                  width="16"
                  height="16"
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
              </Link>

              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-brand-btn border border-brand-border-strong bg-transparent px-7 py-3.5 text-base font-semibold text-brand-green transition-colors duration-300 ease-brand hover:border-brand-green hover:bg-brand-surface"
              >
                {secondaryCta.label}
              </Link>
            </div>

            {/* Suggestions — recover the user */}
            <div className="mt-14 border-t border-brand-border pt-8 md:mt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-muted">
                {suggestionsLabel}
              </p>
              <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {suggestions.map((s) => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-border bg-brand-bg px-4 py-2 text-sm font-medium text-brand-green transition-colors duration-200 hover:border-brand-green hover:bg-brand-surface"
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* WhatsApp fallback */}
            <p className="mt-8 text-sm text-brand-muted">
              {whatsappCta.text}{" "}
              <a
                href={whatsappCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-green underline decoration-brand-amber/40 underline-offset-4 transition-colors hover:text-brand-green-dark hover:decoration-brand-amber"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
      <MobileTabBar />
    </div>
  );
}