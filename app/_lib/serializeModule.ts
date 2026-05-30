import type { Module } from "../content";

/**
 * Flatten a Module's structured content (title, summary, sections,
 * tables, pies, libs, tools, links) into a plain-text prompt suitable
 * for an LLM summariser. Server-side only — runs at request time so
 * we don't ship the whole content tree to the client.
 */
export function serializeModule(m: Module): string {
  const lines: string[] = [];

  lines.push(`# ${m.title}`);
  if (m.summary) lines.push(m.summary);
  lines.push("");

  for (const s of m.sections) {
    lines.push(`## ${s.heading}`);
    if (s.body) lines.push(s.body);

    if (s.table) {
      lines.push("");
      lines.push(s.table.headers.join(" | "));
      lines.push(s.table.headers.map(() => "---").join(" | "));
      for (const row of s.table.rows) lines.push(row.join(" | "));
    }

    if (s.pie) {
      const total = s.pie.slices.reduce((a, b) => a + b.value, 0);
      lines.push("");
      lines.push("Chart data:");
      for (const sl of s.pie.slices) {
        const pct = Math.round((sl.value / total) * 100);
        lines.push(`- ${sl.label}: ${sl.value}${s.pie.unit ?? ""} (${pct}%)`);
      }
    }

    if (s.libs) {
      for (const l of s.libs) lines.push(`- ${l.name}: ${l.what}`);
    }

    if (s.tools) {
      for (const t of s.tools) {
        lines.push(`- ${t.name}${t.kind ? ` (${t.kind})` : ""}: ${t.what}`);
      }
    }

    lines.push("");
  }

  if (m.links?.length) {
    lines.push("Links:");
    for (const l of m.links) lines.push(`- ${l.label}: ${l.href}`);
  }

  return lines.join("\n");
}
