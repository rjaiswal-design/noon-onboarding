"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
function BeforeAfter({
  before,
  after,
  defaultSplit = 0.45,
  height = 280
}) {
  const ref = useRef(null);
  const [split, setSplit] = useState(defaultSplit);
  const [dragging, setDragging] = useState(false);
  const onMove = (clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const next = (clientX - rect.left) / rect.width;
    setSplit(Math.min(0.95, Math.max(0.05, next)));
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      onMouseDown: (e) => {
        setDragging(true);
        onMove(e.clientX);
      },
      onMouseMove: (e) => dragging && onMove(e.clientX),
      onMouseUp: () => setDragging(false),
      onMouseLeave: () => setDragging(false),
      style: {
        position: "relative",
        width: "100%",
        height,
        borderRadius: 28,
        overflow: "hidden",
        border: "1px solid var(--ub-border)",
        background: "var(--ub-bg-deep)",
        userSelect: "none",
        cursor: "ew-resize"
      },
      children: [
        /* @__PURE__ */ jsx("div", { style: { position: "absolute", inset: 0 }, children: after }),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              width: `${split * 100}%`,
              overflow: "hidden",
              borderRight: "1px solid var(--ub-fg-12)"
            },
            children: /* @__PURE__ */ jsx("div", { style: { width: ref.current?.clientWidth ?? "100%", height: "100%" }, children: before })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 12,
              left: 12,
              padding: "3px 8px",
              background: "rgba(0,0,0,0.55)",
              color: split > 0.15 ? "var(--ub-fg)" : "var(--ub-fg-muted)",
              fontFamily: "var(--ub-font-mono)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderRadius: "var(--ub-radius-sm)"
            },
            children: "Before"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 12,
              right: 12,
              padding: "3px 8px",
              background: "rgba(0,0,0,0.55)",
              color: split < 0.85 ? "var(--ub-fg)" : "var(--ub-fg-muted)",
              fontFamily: "var(--ub-font-mono)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              borderRadius: "var(--ub-radius-sm)"
            },
            children: "After"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${split * 100}%`,
              width: 2,
              background: "var(--ub-fg)",
              transform: "translateX(-1px)"
            },
            children: /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  background: "var(--ub-fg)",
                  color: "#0e0e0e",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--ub-font-mono)",
                  fontSize: 14,
                  fontWeight: 800
                },
                children: "\u21C6"
              }
            )
          }
        )
      ]
    }
  );
}
export {
  BeforeAfter
};
//# sourceMappingURL=BeforeAfter.js.map