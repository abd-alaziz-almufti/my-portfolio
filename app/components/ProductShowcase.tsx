"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import BrowserFrame from "./BrowserFrame";

const views = [
  {
    id: "dashboard",
    tab: "Clinic dashboard",
    caption: "Each specialist starts the day with the patients who need attention and the alerts they haven't read.",
    image: "/images/hl-dashboard.webp",
    alt: "HealthyLife AI clinic dashboard in Arabic, showing patient counts, patients who stopped logging meals, and a welcome banner for the nutritionist",
  },
  {
    id: "meal-plan",
    tab: "Meal plan builder",
    caption: "Plans are built meal by meal from local dishes, with alternatives, and the calories and macros update with every change.",
    image: "/images/hl-meal-plan.webp",
    alt: "HealthyLife AI meal plan builder in Arabic, with breakfast items and their alternatives and a daily nutrition summary ring showing 2011 of 2349 calories",
  },
  {
    id: "alerts",
    tab: "Adherence alerts",
    caption: "The system flags patients who stopped logging or went over their targets, and celebrates progress, before the next visit.",
    image: "/images/hl-alerts.webp",
    alt: "HealthyLife AI alerts page in Arabic, listing patients who have not logged meals for three days, one who exceeded calorie targets, and one weight-loss achievement",
  },
];

export default function ProductShowcase() {
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
        aria-label="HealthyLife AI screens"
        className="flex flex-wrap gap-2"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") select(active + 1);
          if (e.key === "ArrowLeft") select(active - 1);
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

      <BrowserFrame label="HealthyLife AI · Specialist dashboard" tone="dark" className="mt-4">
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
