import type { Tool } from "../content";

/** Sub-section order — groups render top-to-bottom in this sequence.
 *  Anything not listed falls to the end alphabetically. */
const KIND_ORDER = [
  // Product & visual toolkit groups
  "Access",
  "Font pack",
  "Figma plugin",
  // Softwares groups (rough flow: browse → make → think → write → build → run → coordinate → talk)
  "Browser",
  "Design",
  "AI",
  "Notes",
  "Code editor",
  "Terminal",
  "Task management",
  "Conversations",
  // taste.md groups
  "Reference",
];

/** Plural / proper section heading per kind. */
const GROUP_LABEL: Record<string, string> = {
  "Figma plugin": "Plugins",
  "Font pack": "Fonts",
  "Access": "Access",
  "Browser": "Browser",
  "Design": "Design",
  "AI": "AI",
  "Notes": "Notes",
  "Code editor": "Code editor",
  "Terminal": "Terminal",
  "Task management": "Task management",
  "Conversations": "Conversations",
  "Reference": "Reference",
};

/** Single accent color for all sub-section dots — keeps the toolkit
 *  visually unified under the noon orange. (PODs on the directory
 *  page still use per-bucket colors; that's a different doc.) */
const DOT_COLOR = "var(--ub-accent)";

/** Default CTA verb per kind. Overridden by per-tool `cta`. */
const KIND_CTA: Record<string, string> = {
  "Figma plugin": "Install",
  "Font pack": "Download",
  "Access": "Request",
  "Browser": "Download",
  "Design": "Download",
  "AI": "Open",
  "Notes": "Download",
  "Code editor": "Download",
  "Terminal": "Download",
  "Task management": "Open",
  "Conversations": "Open",
  "Reference": "Open",
};

function ctaFor(t: Tool): string {
  return t.cta ?? (t.kind && KIND_CTA[t.kind]) ?? "Open";
}

function groupByKind(tools: Tool[]) {
  const map = new Map<string, Tool[]>();
  for (const t of tools) {
    const k = t.kind ?? "Other";
    const list = map.get(k) ?? [];
    list.push(t);
    map.set(k, list);
  }
  const known = KIND_ORDER.filter((k) => map.has(k)).map((k) => ({
    kind: k,
    tools: map.get(k)!,
  }));
  const unknown = [...map.keys()]
    .filter((k) => !KIND_ORDER.includes(k))
    .sort((a, b) => a.localeCompare(b))
    .map((k) => ({ kind: k, tools: map.get(k)! }));
  return [...known, ...unknown];
}

export default function ToolsTable({ tools }: { tools: Tool[] }) {
  const groups = groupByKind(tools);

  return (
    <div
      style={{
        marginTop: 16,
        display: "flex",
        flexDirection: "column",
        gap: 18,
      }}
    >
      {groups.map(({ kind, tools: kindTools }) => {
        const color = DOT_COLOR;
        const label = GROUP_LABEL[kind] ?? kind;
        return (
          <div
            key={kind}
            className="cred-wrap"
            style={{ overflow: "hidden" }}
          >
            {/* Sub-section header — sealed inside the same rounded
                container as the rows so they read as one block. */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 14px",
                background: "var(--ub-surface)",
                borderBottom: "1px solid var(--ub-border)",
              }}
            >
              <span
                aria-hidden
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 9999,
                  background: color,
                  // Soft halo around the dot. Using var(--ub-accent-12)
                  // (≈12% accent) so it matches the noon orange ramp
                  // already defined in tokens.
                  boxShadow: "0 0 0 3px var(--ub-accent-12)",
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--ub-fg-strong)",
                  letterSpacing: "-0.005em",
                }}
              >
                {label}
              </span>
              <span style={{ flex: 1 }} />
              <span
                style={{
                  fontFamily: "var(--ub-font-mono)",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "var(--ub-fg-mutedXX)",
                  padding: "3px 7px",
                  borderRadius: 9999,
                  background: "var(--ub-bg)",
                  border: "1px solid var(--ub-border)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {kindTools.length}{" "}
                {kindTools.length === 1 ? "tool" : "tools"}
              </span>
            </div>
            <table
              className="cred"
              // `table-layout: fixed` + explicit colgroup so every tools
              // table on the page uses the same column widths. Without
              // this each <table> auto-sizes against its own content, so
              // a table of long names (e.g. "Field token mapper") gets
              // narrow cta column while a table of short names (e.g.
              // "Dia") ends up with a huge description column — making
              // the page look misaligned. Fixed widths keep everything
              // visually rhythmic.
              style={{ tableLayout: "fixed" }}
            >
              <colgroup>
                <col style={{ width: "26%" }} />
                <col />
                <col style={{ width: "14%" }} />
              </colgroup>
              <tbody>
                {kindTools.map((t) => (
                  <tr key={t.href}>
                    <td className="k">
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noreferrer"
                        className="plain"
                        style={{ color: "inherit" }}
                      >
                        {t.name}
                      </a>
                    </td>
                    <td>{t.what}</td>
                    <td
                      style={{
                        textAlign: "right",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noreferrer"
                        className="plain"
                        style={{
                          color: "var(--ub-accent)",
                          fontWeight: 500,
                          fontSize: 13,
                        }}
                      >
                        {ctaFor(t)}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
