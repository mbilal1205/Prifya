"use client";

import { useId, useState } from "react";

export function FAQAccordion({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  const btnId = `${id}-btn`;
  const panelId = `${id}-panel`;

  return (
    <div className="border-b border-brand-border">
      <h3>
        <button
          id={btnId}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-start justify-between gap-4 py-5 text-left transition-colors hover:text-brand-green md:py-6"
        >
          <span className="flex-1 text-base font-medium leading-snug text-brand-green md:text-lg">
            {question}
          </span>

          {/* Plus/Minus icon — morph via rotate + fade */}
          <span
            className={`relative mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-[background-color,border-color,transform] duration-300 ease-brand ${
              open
                ? "rotate-180 border-brand-green bg-brand-green text-brand-inverse"
                : "border-brand-border-strong text-brand-green group-hover:border-brand-green"
            }`}
            aria-hidden="true"
          >
            {/* horizontal bar (always visible) */}
            <span className="absolute h-[1.5px] w-3 rounded-full bg-current" />
            {/* vertical bar (fades out when open → becomes minus) */}
            <span
              className={`absolute h-3 w-[1.5px] rounded-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        className={`grid transition-[grid-template-rows] duration-400 ease-brand ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        style={{ transitionDuration: "400ms" }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-5 pr-10 text-sm leading-relaxed text-brand-muted md:pb-6 md:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}