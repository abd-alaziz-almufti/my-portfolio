"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Flips the page between light and dark. The initial theme is set before paint by the
 * inline script in each root layout (saved choice first, then the system setting).
 */
export default function ThemeToggle({ label, className = "" }: { label: string; className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`theme-toggle h-10 w-10 place-items-center rounded-full border border-line bg-surface text-ink transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <Sun aria-hidden="true" size={17} className="theme-icon-sun" />
      <Moon aria-hidden="true" size={17} className="theme-icon-moon" />
    </button>
  );
}
