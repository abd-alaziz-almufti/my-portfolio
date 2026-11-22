"use client";

import { useEffect } from "react";

/**
 * Small, dependency-free interaction layer:
 * - [data-spotlight]: a soft light follows the pointer inside the card (CSS vars --mx / --my).
 * - [data-magnetic]: the element leans toward the pointer a little.
 * - .scroll-progress: a thin bar at the top that tracks page progress.
 * Everything is skipped for reduced motion and for touch-only pointers.
 */
export default function Interactions() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const bar = document.querySelector<HTMLElement>(".scroll-progress");
    let ticking = false;
    const onScroll = () => {
      if (ticking || !bar) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (reduce || !finePointer) {
      return () => window.removeEventListener("scroll", onScroll);
    }

    const onMove = (e: PointerEvent) => {
      const target = e.target as Element | null;
      const card = target?.closest<HTMLElement>("[data-spotlight]");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${e.clientX - r.left}px`);
        card.style.setProperty("--my", `${e.clientY - r.top}px`);
      }
    };

    const magnets = Array.from(document.querySelectorAll<HTMLElement>("[data-magnetic]"));
    const cleanups = magnets.map((el) => {
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) * 0.18;
        const y = (e.clientY - (r.top + r.height / 2)) * 0.28;
        el.style.transform = `translate(${x}px, ${y}px)`;
      };
      const leave = () => {
        el.style.transform = "";
      };
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerleave", leave);
      return () => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerleave", leave);
      };
    });

    document.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointermove", onMove);
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
