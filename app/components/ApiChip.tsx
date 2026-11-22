"use client";

import { useEffect, useState } from "react";

/** Terminal-style chip that "types" the request, then shows the response. */
export default function ApiChip({ request, status, time }: { request: string; status: string; time: string }) {
  const [typed, setTyped] = useState(request.length);
  const [done, setDone] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));
    let i = 0;
    const tick = () => {
      if (i <= request.length) {
        setTyped(i);
        setDone(false);
        i += 1;
        later(tick, 55);
      } else {
        later(() => setDone(true), 350);
        later(() => {
          i = 0;
          tick();
        }, 5200);
      }
    };
    later(tick, 1400);
    return () => timers.forEach(clearTimeout);
  }, [request]);

  return (
    <span>
      <span className="block font-mono text-[11px] text-white/55">
        {request.slice(0, typed)}
        {!done && <span className="caret text-mint">▍</span>}
      </span>
      <span
        className={`mt-1 flex items-center gap-2 font-mono text-sm font-semibold transition-opacity duration-300 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-mint">{status}</span>
        <span className="text-white/40">·</span>
        <span className="text-white/80">{time}</span>
      </span>
    </span>
  );
}
