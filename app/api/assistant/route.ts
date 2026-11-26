import type { NextRequest } from "next/server";
import type { Lang } from "../../content";
import { fallbackAnswer, systemPrompt } from "../../lib/assistant";

export const runtime = "nodejs";

type ChatMessage = { role: "user" | "assistant"; content: string };

const MAX_MESSAGES = 12; // conversation turns sent to the model
const MAX_CHARS = 600; // per message
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 20; // questions per visitor per window

// Best-effort, per-instance limit. Enough to stop casual abuse of the API key on a portfolio.
const hits = new Map<string, number[]>();

function rateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

function parseBody(body: unknown): { lang: Lang; messages: ChatMessage[] } | null {
  if (!body || typeof body !== "object") return null;
  const { lang, messages } = body as { lang?: unknown; messages?: unknown };
  if ((lang !== "en" && lang !== "ar") || !Array.isArray(messages) || messages.length === 0) return null;

  const clean: ChatMessage[] = [];
  for (const m of messages.slice(-MAX_MESSAGES)) {
    if (!m || typeof m !== "object") return null;
    const { role, content } = m as { role?: unknown; content?: unknown };
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") return null;
    const text = content.trim().slice(0, MAX_CHARS);
    if (text) clean.push({ role, content: text });
  }
  // The model expects the conversation to start and end with the visitor.
  while (clean.length && clean[0].role !== "user") clean.shift();
  if (!clean.length || clean[clean.length - 1].role !== "user") return null;
  return { lang, messages: clean };
}

async function askGemini(lang: Lang, messages: ChatMessage[]): Promise<string | null> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  const model = process.env.GEMINI_MODEL || "gemini-flash-latest";
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
    {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": apiKey },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemPrompt(lang) }] },
        contents: messages.map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })),
        generationConfig: { maxOutputTokens: 400, temperature: 0.3 },
      }),
      signal: AbortSignal.timeout(20_000),
    },
  );
  if (!res.ok) {
    console.error("assistant: Gemini API returned", res.status);
    return null;
  }
  const data = (await res.json()) as {
    candidates?: { content?: { parts?: { text?: string }[] } }[];
  };
  const text = data.candidates?.[0]?.content?.parts?.map((part) => part.text ?? "").join("").trim();
  return text || null;
}

async function askClaude(lang: Lang, messages: ChatMessage[]): Promise<string | null> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return null;

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: process.env.ANTHROPIC_MODEL || "claude-haiku-5-5",
      max_tokens: 400,
      // The site content is the same on every request, so cache it to cut cost and latency.
      system: [{ type: "text", text: systemPrompt(lang), cache_control: { type: "ephemeral" } }],
      messages,
    }),
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) {
    console.error("assistant: Claude API returned", res.status);
    return null;
  }
  const data = (await res.json()) as { content?: { type: string; text?: string }[] };
  const text = data.content?.filter((b) => b.type === "text").map((b) => b.text ?? "").join("").trim();
  return text || null;
}

/** Uses whichever AI provider has a key set (Gemini first, then Claude). */
async function askAi(lang: Lang, messages: ChatMessage[]): Promise<string | null> {
  for (const ask of [askGemini, askClaude]) {
    try {
      const reply = await ask(lang, messages);
      if (reply) return reply;
    } catch (error) {
      console.error("assistant: AI call failed", error);
    }
  }
  return null;
}

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }
  const parsed = parseBody(body);
  if (!parsed) return Response.json({ error: "bad_request" }, { status: 400 });

  const { lang, messages } = parsed;
  const question = messages[messages.length - 1].content;

  const reply = await askAi(lang, messages);
  if (reply) return Response.json({ reply, source: "ai" });

  // No key configured, or the AI is down: answer from the site content instead of failing.
  return Response.json({ reply: fallbackAnswer(question, lang), source: "site" });
}
