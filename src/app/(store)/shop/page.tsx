import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { ImageReveal } from "@/components/shared/ImageReveal";
import { HeroVisual } from "@/components/home/HeroVisual"; // Reusing the beautiful SVG bottle
import { placeholderShop, placeholderProduct } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Shop — Prifya",
  description: "Explore the Prifya Hair Serum. Free delivery across Pakistan, Cash on Delivery.",
};

export default function ShopPage() {
  const { eyebrow, heading, subline, productBadge } = placeholderShop;

  return (
    <div className="bg-brand-bg pb-24 pt-16 md:pb-32 md:pt-24 lg:pt-32">
      <div className="container-prifya">
        
        {/* Header */}
        <Reveal variant="fade-scale">
          <header className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brand-amber-text">
              {eyebrow}
            </p>
            <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-brand-green md:text-5xl lg:text-6xl">
              {heading}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-brand-muted md:text-lg">
              {subline}
            </p>
          </header>
        </Reveal>

        {/* Big Single Product Showcase */}
        <div className="mt-16 md:mt-24">
          <Reveal variant="fade-up" delay={0.2}>
            <Link 
              href={`/product/${placeholderProduct.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-brand-card border border-brand-border bg-brand-surface transition-shadow duration-500 hover:shadow-brand-elevated lg:flex-row"
            >
              
              {/* Image Section (Left on Desktop) */}
              <div className="relative aspect-[4/5] w-full overflow-hidden lg:aspect-auto lg:w-1/2">
                <ImageReveal>
                  {/* Reusing HeroVisual for the placeholder bottle */}
                  <div className="absolute inset-0 h-full w-full transition-transform duration-700 ease-brand group-hover:scale-105">
                    <HeroVisual />
                  </div>
                </ImageReveal>
                
                {/* Product Badge */}
                <div className="absolute left-6 top-6 z-10">
                  <span className="badge-prifya-amber">{productBadge}</span>
                </div>
              </div>

              {/* Content Section (Right on Desktop) */}
              <div className="flex flex-1 flex-col justify-center p-8 md:p-12 lg:p-16">
                <div className="max-w-md">
                  <h2 className="font-serif text-3xl leading-tight text-brand-green md:text-4xl">
                    {placeholderProduct.name}
                  </h2>
                  
                  <p className="mt-4 text-sm leading-relaxed text-brand-muted md:text-base">
                    {placeholderProduct.subline}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <span className="text-2xl font-semibold text-brand-green">
                      {placeholderProduct.currency} {placeholderProduct.price.toLocaleString("en-US")}
                    </span>
                    {placeholderProduct.compareAtPrice && (
                      <span className="text-sm text-brand-muted line-through">
                        {placeholderProduct.currency} {placeholderProduct.compareAtPrice.toLocaleString("en-US")}
                      </span>
                    )}
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-sm text-brand-success font-medium">
                    <span className="h-2 w-2 rounded-full bg-brand-success animate-pulse" />
                    In stock — ready to ship
                  </div>

                  <div className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-brand-btn bg-brand-green px-6 py-4 text-base font-semibold text-brand-inverse transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-brand-soft sm:w-auto">
                    View Product
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

            </Link>
          </Reveal>
        </div>

      </div>
    </div>
  );
}