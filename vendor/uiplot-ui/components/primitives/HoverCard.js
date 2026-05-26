"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
function HoverCard({
  trigger,
  children,
  width = 280
}) {
  const [open, setOpen] = useState(false);
  const closeT = useRef(null);
  const show = () => {
    if (closeT.current) window.clearTimeout(closeT.current);
    setOpen(true);
  };
  const hide = () => {
    closeT.current = window.setTimeout(() => setOpen(false), 120);
  };
  return /* @__PURE__ */ jsxs(
    "span",
    {
      onMouseEnter: show,
      onMouseLeave: hide,
      style: { position: "relative", display: "inline-flex" },
      children: [
        trigger,
        open && /* @__PURE__ */ jsx(
          "span",
          {
            role: "tooltip",
            style: {
              position: "absolute",
              top: "calc(100% + 8px)",
              left: 0,
              width,
              padding: 14,
              background: "var(--ub-menu)",
              border: "1px solid var(--ub-border)",
              borderRadius: "var(--ub-radius-lg)",
              boxShadow: "var(--ub-shadow-md)",
              zIndex: 30,
              animation: "ub-pop-in 0.16s var(--ub-ease-standard)"
            },
            children
          }
        )
      ]
    }
  );
}
export {
  HoverCard
};
//# sourceMappingURL=HoverCard.js.map