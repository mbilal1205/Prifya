import { Reveal } from "@/components/shared/Reveal";
import { placeholderHome } from "@/lib/placeholder-data";
import { FAQAccordion } from "./FAQAccordion";

export function FAQ() {
  const { faq } = placeholderHome;

  return (
    <section
      className="section-prifya bg-brand-bg"
      aria-labelledby="faq-heading"
    >
      <div className="container-prifya">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Header + contact CTA (sticky on desktop) */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <Reveal variant="fade-scale">
                <header>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber-text">
                    {faq.eyebrow}
                  </p>
                  <h2
                    id="faq-heading"
                    className="font-serif text-3xl leading-[1.1] tracking-tight text-brand-green md:text-4xl lg:text-5xl"
                  >
                    {faq.heading.before}
                    <em className="italic text-brand-amber-text">
                      {faq.heading.italic}
                    </em>
                    {faq.heading.after}
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-brand-muted md:text-lg">
                    {faq.subline}
                  </p>
                </header>
              </Reveal>

              {/* Contact CTA card */}
              <Reveal variant="fade-up" delay={0.2}>
                <div className="mt-8 rounded-brand-card border border-brand-border bg-brand-surface p-6 md:p-7">
                  <p className="font-serif text-lg leading-tight text-brand-green md:text-xl">
                    {faq.contactCta.text}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                    {faq.contactCta.subtext}
                  </p>
                  <a
                    href={faq.contactCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-dark"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.6 6.32A7.8 7.8 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.84.98h.01a7.94 7.94 0 0 0 5.55-13.56ZM12.05 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1 1 5.6 3.09Zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1s-.5.64-.61.77c-.11.13-.23.14-.42.05a5.4 5.4 0 0 1-1.6-.99 6 6 0 0 1-1.1-1.37c-.12-.2 0-.3.09-.4.09-.09.2-.24.3-.36.1-.12.13-.2.2-.34.06-.13.03-.25-.02-.35-.05-.1-.44-1.07-.61-1.46-.16-.38-.33-.33-.44-.34h-.38a.72.72 0 0 0-.52.25 2.19 2.19 0 0 0-.68 1.63c0 .96.7 1.89.8 2.02.1.13 1.37 2.1 3.32 2.95.47.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23Z" />
                    </svg>
                    {faq.contactCta.button}
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
            </div>
          </div>

          {/* Right: Accordion list */}
          <div className="lg:col-span-7">
            <Reveal variant="fade-up" delay={0.1}>
              <div>
                {faq.items.map((item, i) => (
                  <Reveal
                    key={item.q}
                    variant="fade-up"
                    delay={0.05 + i * 0.05}
                  >
                    <FAQAccordion question={item.q} answer={item.a} />
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}