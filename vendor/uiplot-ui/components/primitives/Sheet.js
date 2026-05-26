"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
function Sheet({
  open,
  onClose,
  side = "right",
  width = 380,
  height = "60vh",
  title,
  children
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  const panelStyle = side === "right" ? { right: 0, top: 0, bottom: 0, width, animation: "ub-sheet-right 0.22s var(--ub-ease-emphasis)" } : side === "left" ? { left: 0, top: 0, bottom: 0, width, animation: "ub-sheet-left 0.22s var(--ub-ease-emphasis)" } : { left: 0, right: 0, bottom: 0, height, animation: "ub-sheet-bottom 0.22s var(--ub-ease-emphasis)" };
  return /* @__PURE__ */ jsx(
    "div",
    {
      onClick: onClose,
      style: {
        position: "fixed",
        inset: 0,
        background: "var(--ub-overlay-soft)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        zIndex: 50,
        animation: "ub-fade-in 0.18s var(--ub-ease-standard)"
      },
      children: /* @__PURE__ */ jsxs(
        "aside",
        {
          onClick: (e) => e.stopPropagation(),
          style: {
            position: "absolute",
            background: "var(--ub-surface)",
            borderLeft: side === "right" ? "1px solid var(--ub-border)" : void 0,
            borderRight: side === "left" ? "1px solid var(--ub-border)" : void 0,
            borderTop: side === "bottom" ? "1px solid var(--ub-border)" : void 0,
            padding: 24,
            boxShadow: "var(--ub-shadow-xl)",
            overflow: "auto",
            ...panelStyle
          },
          children: [
            title && /* @__PURE__ */ jsx(
              "h3",
              {
                style: {
                  fontFamily: "var(--ub-font-title)",
                  fontSize: 24,
                  letterSpacing: "-0.5px",
                  fontWeight: 500,
                  margin: 0,
                  marginBottom: 16
                },
                children: title
              }
            ),
            children
          ]
        }
      )
    }
  );
}
export {
  Sheet
};
//# sourceMappingURL=Sheet.js.map