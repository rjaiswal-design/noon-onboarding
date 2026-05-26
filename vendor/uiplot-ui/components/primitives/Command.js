"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from "react";
import { Kbd } from "./Kbd";
function Command({
  open,
  onClose,
  items,
  placeholder = "Search components, actions, docs\u2026"
}) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const filtered = useMemo(() => {
    if (!query) return items;
    const q = query.toLowerCase();
    return items.filter((it) => {
      const hay = [it.label, it.group, ...it.keywords ?? []].filter(Boolean).join(" ").toLowerCase();
      return hay.includes(q);
    });
  }, [items, query]);
  const groups = useMemo(() => {
    const map = /* @__PURE__ */ new Map();
    filtered.forEach((it) => {
      const g = it.group ?? "Results";
      if (!map.has(g)) map.set(g, []);
      map.get(g).push(it);
    });
    return [...map.entries()];
  }, [filtered]);
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    setTimeout(() => inputRef.current?.focus(), 10);
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => Math.min(filtered.length - 1, i + 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => Math.max(0, i - 1));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const it = filtered[active];
        if (it) {
          it.onSelect?.();
          onClose();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick: onClose,
      style: {
        position: "fixed",
        inset: 0,
        background: "var(--ub-overlay)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "12vh",
        zIndex: 60,
        animation: "ub-fade-in 0.18s var(--ub-ease-standard)"
      },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          onClick: (e) => e.stopPropagation(),
          style: {
            width: 560,
            maxWidth: "calc(100vw - 32px)",
            background: "var(--ub-surface)",
            border: "1px solid var(--ub-border)",
            borderRadius: "var(--ub-radius-2xl)",
            boxShadow: "var(--ub-shadow-modal)",
            overflow: "hidden",
            animation: "ub-pop-in 0.22s var(--ub-ease-spring-light)"
          },
          children: [
            /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 16px",
                  borderBottom: "1px solid var(--ub-border)"
                },
                children: [
                  /* @__PURE__ */ jsx("span", { style: { color: "var(--ub-fg-muted)" }, children: "\u2315" }),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      ref: inputRef,
                      value: query,
                      onChange: (e) => {
                        setQuery(e.target.value);
                        setActive(0);
                      },
                      placeholder,
                      style: {
                        flex: 1,
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        color: "var(--ub-fg)",
                        fontSize: 15,
                        fontFamily: "var(--ub-font-body)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsx(Kbd, { children: "esc" })
                ]
              }
            ),
            /* @__PURE__ */ jsx("div", { style: { maxHeight: 360, overflowY: "auto", padding: 6 }, children: filtered.length === 0 ? /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  padding: "32px 16px",
                  textAlign: "center",
                  color: "var(--ub-fg-muted)",
                  fontSize: 13
                },
                children: [
                  "No results for ",
                  /* @__PURE__ */ jsx("em", { children: query })
                ]
              }
            ) : groups.map(([group, list]) => /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "ub-mono",
                  style: {
                    fontSize: 9,
                    color: "var(--ub-fg-mutedXX)",
                    padding: "10px 10px 6px"
                  },
                  children: group
                }
              ),
              list.map((it) => {
                const idx = filtered.indexOf(it);
                const isActive = idx === active;
                return /* @__PURE__ */ jsxs(
                  "div",
                  {
                    onMouseEnter: () => setActive(idx),
                    onClick: () => {
                      it.onSelect?.();
                      onClose();
                    },
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "9px 10px",
                      borderRadius: "var(--ub-radius-sm)",
                      background: isActive ? "var(--ub-menu-hover)" : "transparent",
                      color: "var(--ub-fg-soft)",
                      fontSize: 13,
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ jsx("span", { style: { width: 16, color: "var(--ub-fg-muted)" }, children: it.icon ?? "\u2022" }),
                      /* @__PURE__ */ jsx("span", { style: { flex: 1 }, children: it.label }),
                      it.shortcut && /* @__PURE__ */ jsx(
                        "span",
                        {
                          className: "ub-mono",
                          style: { fontSize: 9, color: "var(--ub-fg-disabled)" },
                          children: it.shortcut
                        }
                      )
                    ]
                  },
                  it.id
                );
              })
            ] }, group)) }),
            /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "8px 14px",
                  borderTop: "1px solid var(--ub-border)",
                  color: "var(--ub-fg-muted)",
                  fontSize: 11
                },
                children: [
                  /* @__PURE__ */ jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
                    /* @__PURE__ */ jsx(Kbd, { children: "\u2191" }),
                    /* @__PURE__ */ jsx(Kbd, { children: "\u2193" }),
                    " navigate"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { style: { display: "inline-flex", alignItems: "center", gap: 4 }, children: [
                    /* @__PURE__ */ jsx(Kbd, { children: "\u21B5" }),
                    " select"
                  ] }),
                  /* @__PURE__ */ jsxs("span", { style: { marginLeft: "auto", display: "inline-flex", gap: 4, alignItems: "center" }, children: [
                    /* @__PURE__ */ jsx(Kbd, { children: "\u2318" }),
                    /* @__PURE__ */ jsx(Kbd, { children: "K" })
                  ] })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
export {
  Command
};
//# sourceMappingURL=Command.js.map