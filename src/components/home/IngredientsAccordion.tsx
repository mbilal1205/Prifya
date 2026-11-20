"use client";

import { useState } from "react";

export function IngredientsAccordion({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-8 border-t border-brand-border pt-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="inci-panel"
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
      >
        <span className="text-sm font-medium text-brand-green">{label}</span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand-border-strong text-brand-muted transition-[transform,background-color,border-color] duration-300 ease-brand ${
            open ? "rotate-45 border-brand-green bg-brand-green text-brand-inverse" : ""
          }`}
          aria-hidden="true"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <div
        id="inci-panel"
        role="region"
        aria-labelledby="inci-panel"
        className={`grid transition-[grid-template-rows] duration-300 ease-brand ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 pr-10 text-xs leading-relaxed text-brand-muted">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}