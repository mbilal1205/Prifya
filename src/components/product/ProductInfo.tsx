"use client";

import { useState } from "react";
import Link from "next/link";
import { placeholderProduct, placeholderProductDetails } from "@/lib/placeholder-data";
import { StarRating } from "@/components/shared/StarRating";
import { useCartStore } from "@/stores/cart-store";
export function ProductInfo() {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
 const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  // JANII G: PLACEHOLDER — Yeh backend connect hone ke baad Zustand store trigger karega
 const handleAddToCart = () => {
    addItem({
      id: placeholderProduct.slug,
      name: placeholderProduct.name,
      price: placeholderProduct.price,
      size: placeholderProduct.size,
      qty: qty,
      slug: placeholderProduct.slug,
    });
    openCart();
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex flex-col">
      {/* Breadcrumb */}
      <nav className="mb-4 text-xs text-brand-muted" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-brand-green">Home</Link></li>
          <li>/</li>
          <li><Link href="/shop" className="hover:text-brand-green">Shop</Link></li>
          <li>/</li>
          <li aria-current="page" className="text-brand-green font-medium">{placeholderProduct.name}</li>
        </ol>
      </nav>

      {/* Title & Rating */}
      <h1 className="font-serif text-3xl leading-tight text-brand-green md:text-4xl lg:text-5xl">
        {placeholderProduct.name}
      </h1>
      
      <div className="mt-3 flex items-center gap-3">
        <StarRating value={4.8} size={16} />
        <span className="text-xs text-brand-muted underline decoration-brand-border underline-offset-4 cursor-pointer hover:text-brand-green">
          Read reviews
        </span>
      </div>

      {/* Price */}
      <div className="mt-5 flex items-baseline gap-3">
        <span className="text-2xl font-semibold text-brand-green md:text-3xl">
          {placeholderProduct.currency} {placeholderProduct.price.toLocaleString("en-US")}
        </span>
        {placeholderProduct.compareAtPrice && (
          <span className="text-sm text-brand-muted line-through">
            {placeholderProduct.currency} {placeholderProduct.compareAtPrice.toLocaleString("en-US")}
          </span>
        )}
      </div>

      {/* Short Benefits */}
      <ul className="mt-6 space-y-2">
        {placeholderProductDetails.benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-brand-muted">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-success" aria-hidden="true">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {benefit}
          </li>
        ))}
      </ul>

      {/* Size / Quantity */}
      <div className="mt-8 border-t border-brand-border pt-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-brand-green">Size: {placeholderProduct.size}</span>
          
          <div className="flex items-center rounded-brand-btn border border-brand-border-strong bg-brand-bg">
            <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-3 py-2 text-brand-muted hover:text-brand-green" aria-label="Decrease quantity">−</button>
            <span className="w-8 text-center text-sm font-medium">{qty}</span>
            <button onClick={() => setQty(qty + 1)} className="px-3 py-2 text-brand-muted hover:text-brand-green" aria-label="Increase quantity">+</button>
          </div>
        </div>
      </div>

      {/* Add to Cart */}
      <div className="mt-6 flex flex-col gap-3">
        <button
          onClick={handleAddToCart}
          className={`btn-prifya-primary flex w-full items-center justify-center gap-2 py-4 text-base transition-all duration-300 ${
            added ? "bg-brand-success" : ""
          }`}
        >
          {added ? (
            <>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 13l4 4L19 7" />
              </svg>
              Added to Cart
            </>
          ) : (
            "Add to Cart"
          )}
        </button>
        
        {/* WhatsApp Order Option */}
        <a
          href={`https://wa.me/923000000000?text=Hi, I want to order the ${placeholderProduct.name}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-prifya-outline flex w-full items-center justify-center gap-2 py-3.5 text-sm"
        >
          Order on WhatsApp
        </a>
      </div>

      {/* Mini Trust Row */}
      <div className="mt-6 grid grid-cols-1 gap-2 rounded-brand-card bg-brand-surface p-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-brand-border">
        {placeholderProductDetails.trustBadges.map((badge, i) => (
          <div key={i} className="flex items-center justify-center gap-2 text-[11px] font-medium text-brand-green sm:px-2 text-center">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-amber shrink-0" aria-hidden="true" />
            {badge}
          </div>
        ))}
      </div>
    </div>
  );
}