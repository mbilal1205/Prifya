"use client";

import { useState } from "react";
import { HeroVisual } from "@/components/home/HeroVisual";

export function ProductGallery() {
  // JANII G: PLACEHOLDER — Abhi hum SVG bottle reuse kar rahe hain.
  // Jab real photos aayen, to yahan array mein unke paths daal dein.
  const images = [
    <HeroVisual key="1" />,
    <div key="2" className="flex h-full w-full items-center justify-center bg-brand-surface text-brand-green font-serif text-2xl">Texture Close-up</div>,
    <div key="3" className="flex h-full w-full items-center justify-center bg-brand-surface text-brand-green font-serif text-2xl">Lifestyle Image</div>,
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image — aspect 4:5 ratio (CLS safe) */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-brand-card border border-brand-border bg-brand-bg shadow-brand-soft">
        <div className="absolute inset-0 transition-opacity duration-500">
          {images[active]}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-brand-btn border-2 transition-all duration-300 ${
              active === i ? "border-brand-green" : "border-transparent opacity-70 hover:opacity-100"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <div className="pointer-events-none absolute inset-0 scale-[0.4] origin-top-left">
              {img}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}