"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { FigmaFile } from "../content";

/** Build a canonical figma.com file URL from a key + name. */
function figmaFileUrl(key: string, name: string): string {
  const slug = encodeURIComponent(name.trim().replace(/\s+/g, "-"));
  return `https://www.figma.com/design/${key}/${slug}`;
}

/**
 * Sticky search input + filtered table of Figma files.
 *
 * Filters by file name (case-insensitive substring). Sticky behaviour
 * mirrors `SectionsWithSearch` — bumps padding + adds a hairline when
 * pinned so the search bar reads as a relaxed toolbar.
 */
export default function FigmaFilesTable({
  files,
}: {
  files: FigmaFile[];
}) {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const filtered = useMemo(() => {
    if (!query) return files;
    return files.filter(
      (f) =>
        f.name.toLowerCase().includes(query) ||
        (f.pod ?? "").toLowerCase().includes(query),
    );
  }, [query, files]);

  // Canonical POD reading order. PODs not in this list fall to the
  // end in alphabetical order; "Other" always last. Tweak this array
  // to re-order the page without touching the data.
  const POD_ORDER = [
    "Cart & checkout",
    "Discovery",
    "Customer",
    "Monetization",
    "noon One",
    "noon Experiences",
    "Web",
    "Partnership",
    "Other",
  ];

  // Per-POD accent color used for the dot in each block's header.
  // Restrained palette — distinct enough to scan, calm enough not to
  // fight the doc's editorial type system. Add new PODs here or they
  // fall back to the muted token.
  const POD_COLORS: Record<string, string> = {
    "Cart & checkout": "#1ABCFE",
    "Discovery": "#A259FF",
    "Customer": "#FF5800",
    "Monetization": "#0ACF83",
    "noon One": "#F24E1E",
    "noon Experiences": "#FF7262",
    "Web": "#475067",
    "Partnership": "#5856D6",
    "Other": "#B8B8B4",
  };

  const groups = useMemo(() => {
    const byPod = new Map<string, FigmaFile[]>();
    for (const f of filtered) {
      const pod = f.pod ?? "Other";
      const list = byPod.get(pod) ?? [];
      list.push(f);
      byPod.set(pod, list);
    }
    const known = POD_ORDER.filter((p) => byPod.has(p)).map((p) => ({
      pod: p,
      files: byPod.get(p)!,
    }));
    const unknown = [...byPod.keys()]
      .filter((p) => !POD_ORDER.includes(p))
      .sort((a, b) => a.localeCompare(b))
      .map((p) => ({ pod: p, files: byPod.get(p)! }));
    return [...known, ...unknown];
  }, [filtered]);

  // Sticky-pinned detection via a 1px sentinel + IntersectionObserver,
  // same pattern as SectionsWithSearch.
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [stuck, setStuck] = useState(false);
  useEffect(() => {
    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      ([entry]) => setStuck(!entry.isIntersecting),
      { threshold: 0 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ marginTop: 16 }}>
      <div ref={sentinelRef} aria-hidden style={{ height: 1 }} />
      <div
        style={{
          position: "sticky",
          top: 0,
          background: "var(--ub-bg)",
          paddingTop: stuck ? 20 : 4,
          paddingBottom: stuck ? 20 : 14,
          marginBottom: 8,
          zIndex: 5,
          borderBottom: `1px solid ${
            stuck ? "var(--ub-border)" : "transparent"
          }`,
          transition: "padding 0.18s ease, border-color 0.18s ease",
        }}
      >
        <div style={{ position: "relative" }}>
          <input
            type="text"
            className="cred-search"
            placeholder={`Search ${files.length} files — try “PDP”, “cart”, “onboarding”…`}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{ margin: 0, paddingRight: q ? 32 : undefined }}
            aria-label="Search Figma files"
          />
          {q && (
            <button
              type="button"
              onClick={() => setQ("")}
              aria-label="Clear search"
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                background: "transparent",
                border: 0,
                color: "var(--ub-fg-mutedXX)",
                cursor: "pointer",
                fontSize: 16,
                lineHeight: 1,
                padding: 4,
              }}
            >
              ×
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p
          style={{
            margin: "20px 0",
            color: "var(--ub-fg-mutedXX)",
            fontSize: 14,
          }}
        >
          No files match{" "}
          <span style={{ color: "var(--ub-fg-strong)" }}>“{q}”</span>.
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {groups.map(({ pod, files: podFiles }) => {
            const color = POD_COLORS[pod] ?? "var(--ub-fg-mutedXX)";
            return (
              <div
                key={pod}
                className="cred-wrap"
                style={{
                  // Override .cred-wrap's hard-clip so the header dot
                  // and the rows below it form one continuous block.
                  overflow: "hidden",
                }}
              >
                {/* POD header — tinted bar at the top of the block.
                    Color dot + title + count, sealed inside the same
                    rounded container as the table so they read as
                    one unit (no floating label). */}
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
                      boxShadow: `0 0 0 3px ${color}22`,
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
                    {pod}
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
                    {podFiles.length}{" "}
                    {podFiles.length === 1 ? "file" : "files"}
                  </span>
                </div>
                <table className="cred">
                  <tbody>
                    <AnimatePresence initial={false}>
                    {podFiles.map((f) => {
                      const href = figmaFileUrl(f.key, f.name);
                      return (
                        <motion.tr
                          key={f.key}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.16 }}
                        >
                          <td className="k">
                            <a
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              className="plain"
                              style={{ color: "inherit" }}
                            >
                              {f.name}
                            </a>
                          </td>
                          <td
                            style={{
                              textAlign: "right",
                              whiteSpace: "nowrap",
                              color: "var(--ub-fg-secondary)",
                              width: "1%",
                            }}
                          >
                            <a
                              href={href}
                              target="_blank"
                              rel="noreferrer"
                              className="plain"
                              aria-label={`Open ${f.name} in Figma`}
                              style={{ color: "inherit" }}
                            >
                              ↗
                            </a>
                          </td>
                        </motion.tr>
                      );
                    })}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
