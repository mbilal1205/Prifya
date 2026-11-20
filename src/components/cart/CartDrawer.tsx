"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useCartStore } from "@/stores/cart-store";
import { placeholderProduct } from "@/lib/placeholder-data";

export function CartDrawer() {
  const { isOpen, closeCart, items, updateQty, removeItem } = useCartStore();
  const reduce = useReducedMotion();

  // Body scroll lock jab drawer khula ho
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-brand-ink/40 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={reduce ? { duration: 0 } : { type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-brand-bg shadow-2xl sm:w-[400px]"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping Cart"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-brand-border px-5 py-4">
              <h2 className="font-serif text-xl text-brand-green">Your Cart</h2>
              <button
                onClick={closeCart}
                className="flex h-10 w-10 items-center justify-center rounded-full text-brand-muted transition-colors hover:bg-brand-surface hover:text-brand-green"
                aria-label="Close cart"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            {/* Free Delivery Banner */}
            <div className="bg-brand-surface px-5 py-2.5 text-center text-xs font-medium text-brand-success flex items-center justify-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-success animate-pulse" />
              Free delivery across Pakistan applied
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
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
                          <div className="flex justify-between items-start">
                            <Link href={`/product/${item.slug}`} onClick={closeCart} className="font-serif text-base text-brand-green hover:underline">
                              {item.name}
                            </Link>
                            <button onClick={() => removeItem(item.id)} className="text-brand-muted hover:text-brand-error" aria-label="Remove item">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
                            </button>
                          </div>
                          <p className="mt-0.5 text-xs text-brand-muted">{item.size}</p>
                        </div>
                        
                        <div className="flex items-center justify-between mt-2">
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
              <div className="border-t border-brand-border bg-brand-bg p-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-brand-muted">Subtotal</span>
                  <span className="font-serif text-xl text-brand-green">
                    {placeholderProduct.currency} {subtotal.toLocaleString("en-US")}
                  </span>
                </div>
                <p className="mb-4 text-xs text-brand-muted">Shipping & taxes calculated at checkout. Cash on Delivery available.</p>
                <Link href="/checkout" onClick={closeCart} className="btn-prifya-primary w-full py-3.5 text-base">
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}