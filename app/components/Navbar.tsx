const navItems = [
  { name: "Work", href: "#work" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <a href="#top" className="font-display text-lg font-bold tracking-tight text-ink">
          Abdalaziz Almufti
        </a>
        <nav aria-label="Main" className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hidden rounded-md px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-ink md:block"
            >
              {item.name}
            </a>
          ))}
          <a
            href="/Abdalaziz_Almufti_CV.pdf"
            download
            className="ml-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent"
          >
            Download CV
          </a>
        </nav>
      </div>
    </header>
  );
}
