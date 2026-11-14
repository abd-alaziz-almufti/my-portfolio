"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Content } from "../content";

type Nav = Content["nav"];

export default function Navbar({ name, nav }: { name: string; nav: Nav }) {
  const navItems = nav.items;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const wide = window.matchMedia("(min-width: 768px)");
    const onWide = () => wide.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    wide.addEventListener("change", onWide);
    return () => {
      window.removeEventListener("keydown", onKey);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink" onClick={() => setOpen(false)}>
          {name}
        </a>
        <nav aria-label={nav.main} className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="nav-link hidden rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink md:block"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/Abdalaziz_Almufti_CV.pdf"
            download
            className="ms-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            <span className="sm:hidden">{nav.cvShort}</span>
            <span className="hidden sm:inline">{nav.cv}</span>
          </a>
          <Link
            href={nav.switchTo.href}
            lang={nav.switchTo.lang}
            hrefLang={nav.switchTo.lang}
            title={nav.switchTo.title}
            aria-label={nav.switchTo.title}
            className="lang-switch ms-1 grid h-10 min-w-10 place-items-center rounded-full border border-line bg-surface px-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <span className="md:hidden">{nav.switchTo.short}</span>
            <span className="hidden md:inline">{nav.switchTo.label}</span>
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? nav.closeMenu : nav.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="menu-toggle ms-1 grid h-10 w-10 place-items-center rounded-full border border-line bg-surface md:hidden"
          >
            <span aria-hidden="true" className="menu-icon" data-open={open || undefined} />
          </button>
        </nav>
      </div>

      <div id="mobile-menu" className="mobile-menu absolute inset-x-0 top-full md:hidden" data-open={open || undefined} inert={!open}>
        <ul className="w-full px-5">
          {navItems.map((item, i) => (
            <li key={item.name} style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between border-t border-line py-4 font-display text-2xl font-bold tracking-tight text-ink"
              >
                {item.name}
                <span className="text-sm font-medium tabular-nums text-muted">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <span
        data-scroll-progress
        aria-hidden="true"
        className="absolute inset-x-0 -bottom-px h-0.5 origin-left scale-x-0 bg-accent rtl:origin-right"
      />
    </header>
  );
}
