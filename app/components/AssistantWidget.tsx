"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, SendHorizontal, X } from "lucide-react";
import type { Content, Lang } from "../content";

type Message = { role: "user" | "assistant"; content: string };

/**
 * Floating assistant that answers visitors' questions from the site content.
 * The answers come from /api/assistant, which holds the API key on the server.
 */
export default function AssistantWidget({ lang, t }: { lang: Lang; t: Content["assistant"] }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const list = listRef.current;
    if (list) list.scrollTop = list.scrollHeight;
  }, [messages, busy, notice]);

  async function ask(question: string) {
    const text = question.trim();
    if (!text || busy) return;
    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setNotice(null);
    setBusy(true);
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ lang, messages: next }),
      });
      if (res.status === 429) {
        setNotice(t.limit);
        return;
      }
      const data = (await res.json()) as { reply?: string };
      if (!res.ok || !data.reply) throw new Error("no reply");
      setMessages((m) => [...m, { role: "assistant", content: data.reply! }]);
    } catch {
      setNotice(t.error);
    } finally {
      setBusy(false);
      inputRef.current?.focus();
    }
  }

  const answered = messages.some((m) => m.role === "assistant");

  return (
    <>
      {open && (
        <section
          id="site-assistant"
          role="dialog"
          aria-label={t.title}
          className="assistant-panel fixed bottom-24 end-4 z-50 flex w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-line bg-surface text-ink shadow-2xl sm:end-6"
        >
          <header className="relative flex items-center gap-3 overflow-hidden bg-night px-5 py-4 text-snow">
            <span
              aria-hidden="true"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-mint font-display text-lg font-extrabold text-night"
            >
              {lang === "ar" ? "ع" : "A"}
            </span>
            <div className="min-w-0">
              <p className="font-display text-base font-bold leading-tight">{t.title}</p>
              <p className="text-xs text-snow/65">{t.subtitle}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                toggleRef.current?.focus();
              }}
              aria-label={t.close}
              className="ms-auto grid h-9 w-9 place-items-center rounded-full text-snow/70 transition-colors hover:bg-white/10 hover:text-snow"
            >
              <X aria-hidden="true" size={18} />
            </button>
          </header>

          <div
            ref={listRef}
            data-lenis-prevent
            aria-live="polite"
            className="flex max-h-[min(420px,55vh)] min-h-[260px] flex-col gap-3 overflow-y-auto overscroll-contain bg-paper px-4 py-4"
          >
            <p className="assistant-bubble assistant-bot">{t.greeting}</p>

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2">
                {t.suggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => ask(s)}
                    className="rounded-full border border-accent/40 bg-accent-soft px-3 py-1.5 text-start text-[13px] font-medium text-accent transition-colors hover:border-accent"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {messages.map((m, i) => (
              <p
                key={i}
                dir="auto"
                className={`assistant-bubble whitespace-pre-line ${m.role === "user" ? "assistant-user" : "assistant-bot"}`}
              >
                {m.content}
              </p>
            ))}

            {busy && (
              <p className="assistant-bubble assistant-bot assistant-typing" aria-label={t.thinking}>
                <span />
                <span />
                <span />
              </p>
            )}

            {notice && <p className="rounded-2xl border border-sun/50 bg-sun/10 px-4 py-3 text-sm">{notice}</p>}

            {answered && !busy && (
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="self-start text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
              >
                {t.contactCta}
              </a>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="flex gap-2 border-t border-line bg-surface p-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              maxLength={600}
              dir="auto"
              aria-label={t.placeholder}
              className="min-w-0 flex-1 rounded-2xl border border-line bg-paper px-4 py-2.5 text-sm text-ink outline-none placeholder:text-muted focus:border-accent"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label={t.send}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-accent text-paper transition-opacity disabled:opacity-40"
            >
              <SendHorizontal aria-hidden="true" size={18} className="rtl:-scale-x-100" />
            </button>
          </form>
          <p className="bg-surface px-4 pb-3 text-center text-[11px] text-muted">{t.note}</p>
        </section>
      )}

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="site-assistant"
        aria-label={open ? t.close : t.open}
        className="assistant-toggle fixed bottom-5 end-4 z-50 flex h-14 items-center gap-2 rounded-full bg-night px-5 font-semibold text-snow shadow-xl ring-1 ring-mint/35 transition-transform hover:-translate-y-0.5 sm:end-6"
      >
        {open ? (
          <X aria-hidden="true" size={20} className="text-mint" />
        ) : (
          <MessageCircle aria-hidden="true" size={20} className="text-mint" />
        )}
        <span className="hidden text-sm sm:inline">{open ? t.close : t.open}</span>
      </button>
    </>
  );
}
