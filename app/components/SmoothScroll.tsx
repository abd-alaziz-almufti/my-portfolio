"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Mounts once. Lenis drives the scroll, GSAP's ticker drives Lenis,
 * and ScrollTrigger is told about every Lenis scroll tick so they stay in sync.
 * Also animates every [data-reveal] element into view.
 * Does nothing visual when the visitor prefers reduced motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({ lerp: 0.1 });

      lenis.on("scroll", ScrollTrigger.update);
      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);

      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      items.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.9,
          ease: "power3.out",
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });

      // In-page links: scroll through Lenis, measured without the reveal transforms
      // so the heading always lands just below the sticky header.
      const documentY = (el: HTMLElement) => {
        let y = 0;
        for (let node: HTMLElement | null = el; node; node = node.offsetParent as HTMLElement | null) y += node.offsetTop;
        return y;
      };
      const onClick = (event: MouseEvent) => {
        const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
        const id = link?.getAttribute("href")?.slice(1);
        if (!link || !id || event.defaultPrevented || event.metaKey || event.ctrlKey) return;
        const target = document.getElementById(id);
        if (!target) return;
        event.preventDefault();
        lenis.scrollTo(id === "top" ? 0 : Math.max(0, documentY(target) - 88));
        history.pushState(null, "", `#${id}`);
      };
      document.addEventListener("click", onClick);

      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);

      return () => {
        window.removeEventListener("load", refresh);
        document.removeEventListener("click", onClick);
        gsap.ticker.remove(tick);
        lenis.destroy();
      };
    });

    return () => mm.revert();
  }, []);

  return null;
}
