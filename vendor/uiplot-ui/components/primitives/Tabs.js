"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
function Tabs({ items, defaultId }) {
  const [active, setActive] = useState(defaultId ?? items[0]?.id);
  const current = items.find((i) => i.id === active);
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 16 }, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        role: "tablist",
        style: {
          display: "inline-flex",
          gap: 4,
          padding: 3,
          background: "var(--ub-surface)",
          border: "1px solid var(--ub-border)",
          borderRadius: "var(--ub-radius-md)",
          alignSelf: "flex-start"
        },
        children: items.map((it) => {
          const isActive = it.id === active;
          return /* @__PURE__ */ jsx(
            "button",
            {
              role: "tab",
              "aria-selected": isActive,
              onClick: () => setActive(it.id),
              className: "ub-mono",
              style: {
                padding: "6px 12px",
                fontSize: 10,
                color: isActive ? "var(--ub-fg)" : "var(--ub-fg-muted)",
                background: isActive ? "var(--ub-menu)" : "transparent",
                border: "none",
                borderRadius: "var(--ub-radius-sm)",
                cursor: "pointer",
                transition: "background 0.15s ease, color 0.15s ease"
              },
              children: it.label
            },
            it.id
          );
        })
      }
    ),
    /* @__PURE__ */ jsx("div", { role: "tabpanel", children: current?.content })
  ] });
}
export {
  Tabs
};
//# sourceMappingURL=Tabs.js.map