"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import BrowserFrame from "./BrowserFrame";
import type { Content } from "../content";

type Showcase = Content["healthyLife"]["showcase"];

export default function ProductShowcase({ text }: { text: Showcase }) {
  const views = text.views;
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    const next = (index + views.length) % views.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={text.label}
        className="flex flex-wrap gap-2"
        onKeyDown={(e) => {
          const step = getComputedStyle(e.currentTarget).direction === "rtl" ? -1 : 1;
          if (e.key === "ArrowRight") select(active + step);
          if (e.key === "ArrowLeft") select(active - step);
        }}
      >
        {views.map((view, i) => (
          <button
            key={view.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            role="tab"
            id={`tab-${view.id}`}
            aria-selected={active === i}
            aria-controls={`panel-${view.id}`}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              active === i ? "bg-white text-ink" : "bg-white/10 text-white/75 hover:bg-white/15 hover:text-white"
            }`}
          >
            {view.tab}
          </button>
        ))}
      </div>

      <p className="mt-4 min-h-[3rem] max-w-2xl text-white/75" aria-live="polite">
        {views[active].caption}
      </p>

      <BrowserFrame label={text.frame} tone="dark" className="mt-4">
        <div className="relative aspect-[1350/555] w-full bg-[#eef6f4]">
          {views.map((view, i) => (
            <div
              key={view.id}
              role="tabpanel"
              id={`panel-${view.id}`}
              aria-labelledby={`tab-${view.id}`}
              hidden={active !== i}
              className="showcase-panel absolute inset-0"
            >
              <Image
                src={view.image}
                alt={view.alt}
                fill
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="object-cover object-top"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </BrowserFrame>
    </div>
  );
}
