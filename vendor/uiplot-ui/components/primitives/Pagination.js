"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
function range(from, to) {
  return Array.from({ length: to - from + 1 }, (_, i) => from + i);
}
function Pagination({
  total,
  page,
  defaultPage = 1,
  onChange,
  siblings = 1
}) {
  const isControlled = page !== void 0;
  const [internal, setInternal] = useState(defaultPage);
  const current = isControlled ? page : internal;
  const go = (p) => {
    const next = Math.min(total, Math.max(1, p));
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };
  const start = Math.max(2, current - siblings);
  const end = Math.min(total - 1, current + siblings);
  const pages = [1];
  if (start > 2) pages.push("\u2026");
  pages.push(...range(start, end));
  if (end < total - 1) pages.push("\u2026");
  if (total > 1) pages.push(total);
  const btn = (active) => ({
    minWidth: 28,
    height: 28,
    padding: "0 8px",
    background: active ? "var(--ub-menu)" : "transparent",
    color: active ? "var(--ub-fg)" : "var(--ub-fg-muted)",
    border: "1px solid var(--ub-border)",
    borderRadius: "var(--ub-radius-xs)",
    cursor: "pointer",
    fontFamily: "var(--ub-font-mono)",
    fontSize: 11
  });
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      "aria-label": "Pagination",
      style: { display: "inline-flex", alignItems: "center", gap: 4 },
      children: [
        /* @__PURE__ */ jsx("button", { onClick: () => go(current - 1), style: btn(false), "aria-label": "Previous", children: "\u2039" }),
        pages.map(
          (p, i) => p === "\u2026" ? /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                color: "var(--ub-fg-disabled)",
                fontFamily: "var(--ub-font-mono)",
                fontSize: 11,
                padding: "0 4px"
              },
              children: "\u2026"
            },
            `e-${i}`
          ) : /* @__PURE__ */ jsx("button", { onClick: () => go(p), style: btn(p === current), children: p }, p)
        ),
        /* @__PURE__ */ jsx("button", { onClick: () => go(current + 1), style: btn(false), "aria-label": "Next", children: "\u203A" })
      ]
    }
  );
}
export {
  Pagination
};
//# sourceMappingURL=Pagination.js.map