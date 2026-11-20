"use client";

import { useEffect, useState } from "react";

// onAddToCart prop hata diya
export function StickyBuyBar({ product }: { product: any }) {
  const [show, setShow] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  // JANII G: PLACEHOLDER — Yeh backend connect hone ke baad Zustand cart-store trigger karega
  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-border bg-brand-bg/95 p-3 backdrop-blur-md transition-transform duration-300 animate-slide-up lg:hidden shadow-[0_-4px_12px_-4px_rgba(27,59,43,0.08)]">
      <div className="flex items-center justify-between gap-4 max-w-lg mx-auto">
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-brand-green line-clamp-1">{product.name}</span>
          <span className="text-xs text-brand-muted">{product.currency} {product.price.toLocaleString("en-US")}</span>
        </div>
        <button
          onClick={handleAddToCart}
          className={`flex-1 max-w-[160px] rounded-brand-btn px-4 py-3 text-sm font-semibold text-brand-inverse transition-colors duration-300 ${
            added ? "bg-brand-success" : "bg-brand-green"
          }`}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}