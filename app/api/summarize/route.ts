import { NextResponse } from "next/server";

// Force Node.js runtime so we can read process.env reliably and keep
// the secret server-side.
export const runtime = "nodejs";

/**
 * POST /api/summarize
 * Body: { content: string, title?: string }
 * Returns: { summary: string }  or  { error: string }
 *
 * Calls Claude (Anthropic) to summarise the supplied page content into
 * a tight bullet list. Requires ANTHROPIC_API_KEY in env (.env.local
 * locally, Vercel env var in production).
 */
export async function POST(req: Request) {
  let payload: { content?: string; title?: string };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { content, title } = payload;
  if (!content || typeof content !== "string") {
    return NextResponse.json(
      { error: "Missing `content` string in request body" },
      { status: 400 },
    );
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "ANTHROPIC_API_KEY is not set. Add it to .env.local (locally) and to the Vercel project env (production), then restart the dev server.",
      },
      { status: 500 },
    );
  }

  const prompt = `You are summarising a page from a designer onboarding doc${
    title ? ` titled "${title}"` : ""
  } for a new joiner. Produce 4–6 tight bullet points. Each bullet under 20 words. Focus on what the joiner should walk away knowing. No preamble. No closing remarks. Just the bullets, each starting with "• ".

Page content:
${content}`;

  try {
    const r = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        // Sonnet is plenty for a summarisation task; swap to opus if
        // you want it sharper, haiku if you want it cheaper.
        model: "claude-sonnet-4-5",
        max_tokens: 600,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    if (!r.ok) {
      const errText = await r.text();
      return NextResponse.json(
        { error: `Anthropic API ${r.status}: ${errText.slice(0, 400)}` },
        { status: r.status },
      );
    }

    const data = await r.json();
    type ContentBlock = { type?: string; text?: string };
    const summary =
      (data.content as ContentBlock[] | undefined)
        ?.map((b) => (b.type === "text" ? b.text ?? "" : ""))
        .join("")
        .trim() ?? "";

    return NextResponse.json({ summary });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Request failed" },
      { status: 500 },
    );
  }
}
