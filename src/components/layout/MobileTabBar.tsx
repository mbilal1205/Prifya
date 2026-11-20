"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileMoreSheet } from "./MobileMoreSheet";
import { placeholderProduct } from "@/lib/placeholder-data";

type IconProps = { className?: string };

function HomeIcon({ className = "" }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1z" />
    </svg>
  );
}
function ShopIcon({ className = "" }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 7h18l-1.5 12.5a1 1 0 0 1-1 .5H5.5a1 1 0 0 1-1-.5z" />
      <path d="M8 7V5a4 4 0 0 1 8 0v2" />
    </svg>
  );
}
function TrackIcon({ className = "" }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  );
}
function MoreIcon({ className = "" }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <circle cx="12" cy="5" r="1.75" />
      <circle cx="12" cy="12" r="1.75" />
      <circle cx="12" cy="19" r="1.75" />
    </svg>
  );
}
function OrderIcon({ className = "" }: IconProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

// Routes jahan tab bar nahi dikhna chahiye (checkout distraction-free, PDP ka apna sticky bar)
const HIDDEN_ROUTES = ["/checkout", "/cart", "/order/", "/product/"];

export function MobileTabBar() {
  const pathname = usePathname();
  const [moreOpen, setMoreOpen] = useState(false);

    if (HIDDEN_ROUTES.some((r) => pathname.startsWith(r))) return null;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav
        aria-label="Mobile navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-border bg-brand-bg/95 backdrop-blur-md lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="relative h-16">
          <ul className="grid h-full grid-cols-5">
            <li>
              <Link
                href="/"
                className={`flex h-full flex-col items-center justify-center gap-1 text-[11px] transition-colors ${
                  isActive("/") ? "font-semibold text-brand-green" : "text-brand-muted"
                }`}
                aria-current={isActive("/") ? "page" : undefined}
              >
                <HomeIcon />
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/shop"
                className={`flex h-full flex-col items-center justify-center gap-1 text-[11px] transition-colors ${
                  isActive("/shop") ? "font-semibold text-brand-green" : "text-brand-muted"
                }`}
                aria-current={isActive("/shop") ? "page" : undefined}
              >
                <ShopIcon />
                Shop
              </Link>
            </li>

            {/* Center placeholder — elevated button is absolute */}
            <li aria-hidden="true" />

            <li>
              <Link
                href="/track"
                className={`flex h-full flex-col items-center justify-center gap-1 text-[11px] transition-colors ${
                  isActive("/track") ? "font-semibold text-brand-green" : "text-brand-muted"
                }`}
                aria-current={isActive("/track") ? "page" : undefined}
              >
                <TrackIcon />
                Track
              </Link>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMoreOpen(true)}
                className="flex h-full w-full flex-col items-center justify-center gap-1 text-[11px] text-brand-muted transition-colors active:text-brand-green"
                aria-label="More options"
                aria-haspopup="dialog"
                aria-expanded={moreOpen}
              >
                <MoreIcon />
                More
              </button>
            </li>
          </ul>

          {/* Elevated center Order Now */}
          <Link
            href={`/product/${placeholderProduct.slug}`}
            aria-label="Order now"
            className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-green text-brand-inverse shadow-[0_8px_24px_-8px_rgba(27,59,43,0.5)] transition-transform duration-150 ease-brand active:scale-95"
          >
            <OrderIcon />
          </Link>
        </div>
      </nav>

      <MobileMoreSheet open={moreOpen} onClose={() => setMoreOpen(false)} />
    </>
  );
}