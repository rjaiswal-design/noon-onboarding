"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useRef } from "react";
function SpotlightCard({
  children,
  style,
  intensity = 0.18,
  className
}) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      onMouseMove: onMove,
      className,
      style: {
        position: "relative",
        background: "var(--ub-surface)",
        border: "1px solid var(--ub-border)",
        borderRadius: "var(--ub-radius-xl)",
        overflow: "hidden",
        ...style
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            style: {
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: `radial-gradient(360px circle at var(--mx, -200px) var(--my, -200px), rgba(255,88,0,${intensity}), transparent 60%)`,
              transition: "background 60ms linear"
            }
          }
        ),
        /* @__PURE__ */ jsx("div", { style: { position: "relative", zIndex: 1 }, children })
      ]
    }
  );
}
export {
  SpotlightCard
};
//# sourceMappingURL=SpotlightCard.js.map