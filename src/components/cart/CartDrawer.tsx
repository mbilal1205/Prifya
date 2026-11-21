"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCartStore } from "@/stores/cart-store";
import { placeholderProduct } from "@/lib/placeholder-data";

export function CartDrawer() {
  const { isOpen, closeCart, items, updateQty, removeItem } = useCartStore();
  const reduce = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  // Mobile detect karne ke liye (taake animation alag ho)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile(); // Initial check
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Escape key se close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeCart();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, closeCart]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Animation Variants
  // Mobile: Bottom center bubble
  // Desktop: Right-bottom corner flying
  const initial = isMobile 
    ? { opacity: 0, scale: 0.6, y: "30vh" } 
    : { opacity: 0, scale: 0.6, x: "30vw", y: "30vh" };

  const animate = { opacity: 1, scale: 1, x: 0, y: 0 };
  
  const exit = isMobile
    ? { opacity: 0, scale: 0.6, y: "30vh" }
    : { opacity: 0, scale: 0.6, x: "30vw", y: "30vh" };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-brand-ink/40 backdrop-blur-[3px]"
            aria-hidden="true"
          />

          {/* Centered Popup Wrapper */}
          <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={reduce ? false : initial}
              animate={reduce ? false : animate}
              exit={reduce ? undefined : exit}
              transition={{ 
                type: "spring", 
                stiffness: 280, 
                damping: 24,
                mass: 1
              }}
              className="pointer-events-auto relative flex w-full max-w-[420px] max-h-[85vh] flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-bg shadow-[0_20px_60px_-15px_rgba(27,59,43,0.3)]"
              role="dialog"
              aria-modal="true"
              aria-label="Shopping Cart"
            >
              {/* Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-brand-border px-5 py-4">
                <h2 className="font-serif text-xl text-brand-green">Your Cart</h2>
                <button
                  onClick={closeCart}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-brand-muted transition-colors hover:bg-brand-surface hover:text-brand-green"
                  aria-label="Close cart"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M6 6l12 12M18 6 6 18" />
                  </svg>
                </button>
              </div>

              {/* Free Delivery Banner */}
              <div className="flex shrink-0 items-center justify-center gap-2 bg-brand-surface px-5 py-2.5 text-center text-xs font-medium text-brand-success">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-success animate-pulse" />
                Free delivery across Pakistan applied
              </div>

              {/* Cart Items (Scrollable) */}
              <div className="flex-1 overflow-y-auto p-5 scrollbar-hide">
                {items.length === 0 ? (
                  <div className="flex h-full min-h-[250px] flex-col items-center justify-center text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-surface text-brand-muted">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    </div>
                    <p className="font-serif text-lg text-brand-green">Your cart is empty</p>
                    <p className="mt-1 text-sm text-brand-muted">Looks like you haven't added anything yet.</p>
                    <button onClick={closeCart} className="btn-prifya-outline mt-6 px-6 py-2.5 text-sm">
                      Continue Shopping
                    </button>
                  </div>
                ) : (
                  <ul className="space-y-5">
                    {items.map((item) => (
                      <li key={item.id} className="flex gap-4">
                        {/* Placeholder Image */}
                        <div className="h-24 w-20 shrink-0 overflow-hidden rounded-brand-btn border border-brand-border bg-brand-surface p-2">
                          <div className="flex h-full items-center justify-center text-brand-amber-text/50">
                             <svg width="24" height="40" viewBox="0 0 400 600" className="h-full w-auto"><rect x="155" y="220" width="90" height="280" rx="8" fill="#EEF2EE" stroke="#1B3B2B" strokeWidth="10"/></svg>
                          </div>
                        </div>
                        
                        {/* Details */}
                        <div className="flex flex-1 flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-2">
                              <Link href={`/product/${item.slug}`} onClick={closeCart} className="font-serif text-base leading-tight text-brand-green hover:underline">
                                {item.name}
                              </Link>
                              <button onClick={() => removeItem(item.id)} className="shrink-0 text-brand-muted hover:text-brand-error transition-colors" aria-label="Remove item">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                              </button>
                            </div>
                            <p className="mt-1 text-xs text-brand-muted">{item.size}</p>
                          </div>
                          
                          <div className="mt-2 flex items-center justify-between">
                            {/* Qty Stepper */}
                            <div className="flex items-center rounded-brand-btn border border-brand-border bg-brand-bg">
                              <button onClick={() => updateQty(item.id, item.qty - 1)} className="px-2.5 py-1 text-brand-muted hover:text-brand-green" aria-label="Decrease">−</button>
                              <span className="w-6 text-center text-xs font-medium">{item.qty}</span>
                              <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-2.5 py-1 text-brand-muted hover:text-brand-green" aria-label="Increase">+</button>
                            </div>
                            <span className="text-sm font-semibold text-brand-green">
                              {placeholderProduct.currency} {(item.price * item.qty).toLocaleString("en-US")}
                            </span>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="shrink-0 border-t border-brand-border bg-brand-bg p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-medium text-brand-muted">Subtotal</span>
                    <span className="font-serif text-xl text-brand-green">
                      {placeholderProduct.currency} {subtotal.toLocaleString("en-US")}
                    </span>
                  </div>
                  <p className="mb-4 text-xs text-brand-muted">Shipping & taxes calculated at checkout. Cash on Delivery available.</p>
                  <Link href="/checkout" onClick={closeCart} className="btn-prifya-primary flex w-full justify-center py-3.5 text-base shadow-brand-soft">
                    Proceed to Checkout
                  </Link>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}