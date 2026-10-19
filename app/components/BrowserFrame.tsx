export default function BrowserFrame({
  label,
  tone = "light",
  children,
  className = "",
}: {
  label: string;
  tone?: "light" | "dark";
  children: React.ReactNode;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <div
      className={`overflow-hidden rounded-xl border shadow-[0_24px_60px_-28px_rgba(18,33,29,0.45)] ${
        dark ? "border-white/15 bg-[#1b2c27]" : "border-line bg-surface"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-3 border-b px-3.5 py-2.5 ${
          dark ? "border-white/10 bg-[#22352f]" : "border-line bg-[#eef1ef]"
        }`}
      >
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#e0685a]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#e3b341]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#4fb56b]" />
        </div>
        <div
          className={`min-w-0 flex-1 truncate rounded-md px-3 py-1 text-center text-xs ${
            dark ? "bg-white/10 text-white/70" : "bg-surface text-muted"
          }`}
        >
          {label}
        </div>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}
