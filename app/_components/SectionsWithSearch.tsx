"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Section } from "../content";

/**
 * Sections renderer with a page-wide live search bar.
 *
 * Matching: a section is kept if its heading/body contains the query
 * (in which case all its libraries are shown), OR any of its libs
 * matches by name/description (in which case only the matching libs
 * are shown for that section). Sections with no matches collapse.
 *
 * Used by modules whose sections include a `libs[]` table (currently
 * `tech-understanding`). Modules without libs continue to render via
 * the plain server path in `m/[slug]/page.tsx`.
 */
export default function SectionsWithSearch({
  sections,
}: {
  sections: Section[];
}) {
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  // Detect when the sticky bar is actually pinned to the viewport top
  // (not just sitting in its natural place). A 1px sentinel above the
  // bar enters/exits the viewport when scroll position crosses the
  // sticky threshold; toggling `stuck` lets us bump padding + add a
  // hairline so the pinned state reads as a relaxed toolbar instead
  // of a content row glued to the edge.
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

  const groups = useMemo(() => {
    if (!query) {
      return sections.map((s) => ({ s, libs: s.libs ?? [] }));
    }
    const out: { s: Section; libs: NonNullable<Section["libs"]> }[] = [];
    for (const s of sections) {
      const sectionHit =
        s.heading.toLowerCase().includes(query) ||
        s.body.toLowerCase().includes(query);
      const libs = sectionHit
        ? s.libs ?? []
        : (s.libs ?? []).filter(
            (l) =>
              l.name.toLowerCase().includes(query) ||
              l.what.toLowerCase().includes(query),
          );
      if (sectionHit || libs.length > 0) {
        out.push({ s, libs });
      }
    }
    return out;
  }, [query, sections]);

  return (
    <>
      {/* Sentinel sits 1px above the sticky bar. When it scrolls out
          of the viewport the bar is "stuck" — observe it to drive the
          padding/border change below. aria-hidden because it has no
          semantic role. */}
      <div ref={sentinelRef} aria-hidden style={{ height: 1 }} />
      {/* Sticky search row — stays anchored when the user scrolls
          through long sections. The wrapper background hides the
          content scrolling underneath. */}
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
            // type="text" not "search" — the native search input adds
            // its own UA clear button (WebKit's
            // ::-webkit-search-cancel-button) which doubles up with
            // ours and can't be styled to match.
            type="text"
            className="cred-search"
            placeholder="Search libraries — try “camera”, “motion”, “localize”…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{ margin: 0, paddingRight: q ? 32 : undefined }}
            aria-label="Search libraries"
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

      {groups.length === 0 ? (
        <p
          style={{
            margin: "24px 0",
            color: "var(--ub-fg-mutedXX)",
            fontSize: 14,
          }}
        >
          No matches for{" "}
          <span style={{ color: "var(--ub-fg-strong)" }}>“{q}”</span>.
        </p>
      ) : (
        <section
          style={{ display: "flex", flexDirection: "column", gap: 40 }}
        >
          {groups.map(({ s, libs }) => (
            <div key={s.heading}>
              <h2 className="h-sec" style={{ marginBottom: 10 }}>
                {s.heading}
              </h2>
              <p style={{ margin: 0 }}>{s.body}</p>
              {libs.length > 0 && (
                <div className="cred-wrap" style={{ marginTop: 16 }}>
                  <table className="cred">
                    <thead>
                      <tr>
                        <th style={{ width: "1%", whiteSpace: "nowrap" }}>
                          Library
                        </th>
                        <th>What it gives you</th>
                      </tr>
                    </thead>
                    <tbody>
                      {libs.map((lib) => (
                        <tr key={lib.name}>
                          <td className="k" style={{ whiteSpace: "nowrap" }}>
                            <a
                              href={lib.href}
                              target="_blank"
                              rel="noreferrer"
                              className="plain lib-chip"
                            >
                              {lib.name}
                            </a>
                          </td>
                          <td>{lib.what}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </section>
      )}
    </>
  );
}
