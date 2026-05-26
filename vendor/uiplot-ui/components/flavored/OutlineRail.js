"use client";
import { jsx } from "react/jsx-runtime";
function OutlineRail({
  items,
  activeId,
  onSelect
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        paddingTop: 12,
        paddingBottom: 12
      },
      children: items.map((it) => {
        const isActive = it.id === activeId;
        return /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: () => onSelect?.(it.id),
            "aria-label": it.id,
            style: {
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: "pointer",
              height: 1,
              width: it.major ? 40 : 24,
              marginLeft: 15,
              backgroundColor: isActive ? "var(--ub-accent)" : it.major ? "var(--ub-fg)" : "var(--ub-border-strong)",
              transition: "background-color 0.2s ease, width 0.2s ease"
            }
          },
          it.id
        );
      })
    }
  );
}
export {
  OutlineRail
};
//# sourceMappingURL=OutlineRail.js.map