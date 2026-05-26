"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { Popover } from "./Popover";
function DropdownMenu({ trigger, items, width = 200 }) {
  return /* @__PURE__ */ jsx(
    Popover,
    {
      trigger,
      width,
      placement: "bottom-start",
      contentStyle: { padding: 4 },
      children: /* @__PURE__ */ jsx(
        "ul",
        {
          role: "menu",
          style: { margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 1 },
          children: items.map((it, i) => {
            if (it === "separator") {
              return /* @__PURE__ */ jsx(
                "li",
                {
                  "aria-hidden": true,
                  style: {
                    margin: "4px 6px",
                    height: 1,
                    background: "var(--ub-border)"
                  }
                },
                `sep-${i}`
              );
            }
            return /* @__PURE__ */ jsxs(
              "li",
              {
                role: "menuitem",
                "aria-disabled": it.disabled,
                onClick: () => !it.disabled && it.onSelect?.(),
                style: {
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "7px 10px",
                  fontSize: 13,
                  color: it.disabled ? "var(--ub-fg-disabled)" : it.destructive ? "var(--ub-danger)" : "var(--ub-fg-soft)",
                  cursor: it.disabled ? "not-allowed" : "pointer",
                  borderRadius: "var(--ub-radius-xs)"
                },
                onMouseEnter: (e) => !it.disabled && (e.currentTarget.style.background = "var(--ub-menu-hover)"),
                onMouseLeave: (e) => e.currentTarget.style.background = "transparent",
                children: [
                  it.icon && /* @__PURE__ */ jsx("span", { style: { flexShrink: 0 }, children: it.icon }),
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
        }
      )
    }
  );
}
export {
  DropdownMenu
};
//# sourceMappingURL=DropdownMenu.js.map