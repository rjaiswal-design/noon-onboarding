"use client";
import { jsx } from "react/jsx-runtime";
function Skeleton({ width = "100%", height = 12, radius = 4, style }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "aria-hidden": true,
      style: {
        display: "inline-block",
        width,
        height,
        borderRadius: radius,
        background: "linear-gradient(90deg, var(--ub-surface) 0%, var(--ub-menu-hover) 50%, var(--ub-surface) 100%)",
        backgroundSize: "200% 100%",
        animation: "ub-skeleton 1.4s ease-in-out infinite",
        ...style
      }
    }
  );
}
export {
  Skeleton
};
//# sourceMappingURL=Skeleton.js.map