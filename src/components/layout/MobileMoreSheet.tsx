"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const MORE_LINKS = [
  { href: "/our-story", label: "Our Story" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/policies/shipping", label: "Shipping & Delivery" },
  { href: "/policies/returns", label: "Returns & Refunds" },
  { href: "/policies/privacy", label: "Privacy Policy" },
  { href: "/policies/terms", label: "Terms of Service" },
] as const;

export function MobileMoreSheet({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const reduce = useReducedMotion() ?? false;

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const spring = reduce
    ? { duration: 0 }
    : { type: "spring" as const, damping: 32, stiffness: 320 };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
          <motion.div
            key="sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="more-sheet-title"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={spring}
            className="fixed inset-x-0 bottom-0 z-50 rounded-t-2xl bg-brand-bg shadow-2xl lg:hidden"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-brand-border" />
            <div className="flex items-center justify-between px-5 pb-2 pt-3">
              <h2 id="more-sheet-title" className="font-serif text-lg text-brand-green">
                Menu
              </h2>
              <button
                ref={closeBtnRef}
                type="button"
                onClick={onClose}
                className="flex h-10 w-10 items-center justify-center rounded-full text-brand-green transition-colors hover:bg-brand-surface"
                aria-label="Close menu"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>
            <nav aria-label="More navigation" className="px-2 pb-6 pt-1">
              <ul>
                {MORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="block rounded-lg px-4 py-3 text-base text-brand-ink transition-colors hover:bg-brand-surface"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="mt-2 border-t border-brand-border pt-2">
                  {/* JANII G: PLACEHOLDER — real WhatsApp number yahan */}
                  <a
                    href="https://wa.me/923000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-semibold text-brand-green transition-colors hover:bg-brand-surface"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.6 6.32A7.8 7.8 0 0 0 12.05 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1a7.93 7.93 0 0 0 3.84.98h.01a7.94 7.94 0 0 0 5.55-13.56ZM12.05 18.5h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.5.65.67-2.43-.16-.25a6.6 6.6 0 1 1 5.6 3.09Zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1s-.5.64-.61.77c-.11.13-.23.14-.42.05a5.4 5.4 0 0 1-1.6-.99 6 6 0 0 1-1.1-1.37c-.12-.2 0-.3.09-.4.09-.09.2-.24.3-.36.1-.12.13-.2.2-.34.06-.13.03-.25-.02-.35-.05-.1-.44-1.07-.61-1.46-.16-.38-.33-.33-.44-.34h-.38a.72.72 0 0 0-.52.25 2.19 2.19 0 0 0-.68 1.63c0 .96.7 1.89.8 2.02.1.13 1.37 2.1 3.32 2.95.47.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23Z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}