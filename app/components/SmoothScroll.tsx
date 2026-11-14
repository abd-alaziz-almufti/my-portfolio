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

      // Lists and card groups come in one child after another.
      gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
        gsap.from(group.children, {
          opacity: 0,
          y: 22,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: group, start: "top 86%", once: true },
        });
      });

      // Project screenshots open up as they enter.
      gsap.utils.toArray<HTMLElement>("[data-shot]").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 48,
          scale: 0.94,
          duration: 1.1,
          ease: "power3.out",
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });

      // Elements that drift at their own speed while the page scrolls.
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          y: Number(el.dataset.parallax),
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.4 },
        });
      });

      // The timeline line fills in as it is read.
      gsap.utils.toArray<HTMLElement>("[data-timeline]").forEach((list) => {
        const fill = list.querySelector("[data-timeline-fill]");
        if (!fill) return;
        gsap.fromTo(
          fill,
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: { trigger: list, start: "top 70%", end: "bottom 60%", scrub: 0.4 } },
        );
      });

      // Reading progress along the bottom edge of the header.
      const bar = document.querySelector<HTMLElement>("[data-scroll-progress]");
      if (bar) {
        gsap.to(bar, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
        });
      }

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
