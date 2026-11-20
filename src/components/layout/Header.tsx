"use client";

import Link from "next/link";
import Image from "next/image"; // <-- Image import kiya
import { useEffect, useState } from "react";
import { placeholderNav, placeholderProduct } from "@/lib/placeholder-data";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-[background-color,backdrop-filter,box-shadow,border-color] duration-300 ease-brand ${
        scrolled
          ? "border-b border-brand-border bg-brand-bg/90 shadow-[0_2px_12px_-4px_rgba(27,59,43,0.08)] backdrop-blur-md"
          : "border-b border-transparent bg-brand-bg/60 backdrop-blur-sm"
      }`}
    >
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="container-prifya flex h-20 items-center justify-between gap-6">
          {/* Logo — Desktop */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="Prifya Home">
            <Image
              src="/logo.png" // JANII G: Agar extension alag hai (jpg/webp), to yahan change karein
              alt="Prifya Logo"
              width={160}
              height={50}
              priority // LCP fast load
              className="h-10 w-auto object-contain mix-blend-multiply"
            />
          </Link>

          <nav aria-label="Primary" className="flex items-center gap-8">
            {placeholderNav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-brand-muted transition-colors hover:text-brand-green"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <CartButton />
            <Link
              href={`/product/${placeholderProduct.slug}`}
              className="btn-prifya-primary px-5 py-2.5 text-sm"
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="lg:hidden">
        <div className="container-prifya flex h-16 items-center justify-between">
          {/* Logo — Mobile */}
          <Link href="/" className="flex shrink-0 items-center" aria-label="Prifya Home">
            <Image
              src="/logo.png" // JANII G: Agar extension alag hai, to yahan change karein
              alt="Prifya Logo"
              width={120}
              height={38}
              priority
              className="h-8 w-auto object-contain mix-blend-multiply"
            />
          </Link>
          <CartButton />
        </div>
      </div>
    </header>
  );
}

function CartButton() {
  // JANII G: PLACEHOLDER — Zustand cart-store ke saath real hoga
  const cartCount = 0;
  return (
    <Link
      href="/cart"
      className="relative flex h-10 w-10 items-center justify-center rounded-full text-brand-green transition-colors hover:bg-brand-surface"
      aria-label={`Cart${cartCount > 0 ? `, ${cartCount} items` : ", empty"}`}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
      {cartCount > 0 && (
        <span
          className="absolute -right-0.5 -top-0.5 flex min-h-[18px] min-w-[18px] items-center justify-center rounded-full bg-brand-amber px-1 text-[10px] font-bold text-white"
          aria-hidden="true"
        >
          {cartCount > 9 ? "9+" : cartCount}
        </span>
      )}
    </Link>
  );
}