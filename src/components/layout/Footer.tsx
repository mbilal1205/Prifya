"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { placeholderFooter } from "@/lib/placeholder-data";

export function Footer() {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const [year, setYear] = useState(2026);
  const toggle = (title: string) =>
    setOpen((prev) => ({ ...prev, [title]: !prev[title] }));

  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
useEffect(() => {
    // Browser par load hone ke baad current saal update ho jayega
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="relative mt-20 border-t border-brand-border bg-brand-bg pb-[calc(5rem+env(safe-area-inset-bottom))] lg:mt-24 lg:pb-12">
      <div className="container-prifya pt-12 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="font-serif text-2xl font-semibold tracking-tight text-brand-green"
            >
              PRIFYA
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-brand-muted">
              {placeholderFooter.tagline}
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-brand-muted">
              <span
                className="h-1.5 w-1.5 rounded-full bg-brand-success"
                aria-hidden="true"
              />
              {placeholderFooter.codBadge}
            </p>

            <div className="mt-5 flex items-center gap-1">
              <a
                href={placeholderFooter.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full text-brand-muted transition-colors hover:bg-brand-surface hover:text-brand-green"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.6 6.32A7.8 7.8 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.84.98h.01a7.94 7.94 0 0 0 5.55-13.56ZM12.05 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1 1 5.6 3.09Zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1s-.5.64-.61.77c-.11.13-.23.14-.42.05a5.4 5.4 0 0 1-1.6-.99 6 6 0 0 1-1.1-1.37c-.12-.2 0-.3.09-.4.09-.09.2-.24.3-.36.1-.12.13-.2.2-.34.06-.13.03-.25-.02-.35-.05-.1-.44-1.07-.61-1.46-.16-.38-.33-.33-.44-.34h-.38a.72.72 0 0 0-.52.25 2.19 2.19 0 0 0-.68 1.63c0 .96.7 1.89.8 2.02.1.13 1.37 2.1 3.32 2.95.47.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23Z" />
                </svg>
              </a>
              <a
                href={placeholderFooter.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full text-brand-muted transition-colors hover:bg-brand-surface hover:text-brand-green"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {/* Sections */}
          <div className="lg:col-span-8">
            {/* Mobile accordion */}
            <div className="lg:hidden">
              {placeholderFooter.sections.map((section) => {
                const isOpen = !!open[section.title];
                const panelId = `footer-${section.title.toLowerCase()}`;
                return (
                  <div
                    key={section.title}
                    className="border-b border-brand-border last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() => toggle(section.title)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full items-center justify-between py-4 text-left"
                    >
                      <span className="text-sm font-medium text-brand-green">
                        {section.title}
                      </span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`text-brand-muted transition-transform duration-300 ease-brand ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={panelId}
                      className={`grid transition-[grid-template-rows] duration-300 ease-brand ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <ul className="space-y-2.5 pb-4">
                          {section.links.map((link) => (
                            <li key={link.href}>
                              {"external" in link && link.external ? (
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-brand-muted transition-colors hover:text-brand-green"
                                >
                                  {link.label}
                                </a>
                              ) : (
                                <Link
                                  href={link.href}
                                  className="text-sm text-brand-muted transition-colors hover:text-brand-green"
                                >
                                  {link.label}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Desktop columns */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-8">
              {placeholderFooter.sections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-brand-green">
                    {section.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        {"external" in link && link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-brand-muted transition-colors hover:text-brand-green"
                          >
                            {link.label}
                          </a>
                        ) : (
                          <Link
                            href={link.href}
                            className="text-sm text-brand-muted transition-colors hover:text-brand-green"
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-brand-border pt-6 text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between lg:mt-14">
          <p>
            ©{" "}
            <span>{year}</span>{" "}
            {placeholderFooter.bottom.copyright}
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">
              {placeholderFooter.bottom.madeIn}
            </span>
            <button
              type="button"
              onClick={backToTop}
              className="flex items-center gap-1 transition-colors hover:text-brand-green"
              aria-label={placeholderFooter.bottom.backToTop}
            >
              {placeholderFooter.bottom.backToTop}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 19V5M5 12l7-7 7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}