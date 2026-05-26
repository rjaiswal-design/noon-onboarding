"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
function Slider({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  showValue
}) {
  const isControlled = value !== void 0;
  const [internal, setInternal] = useState(defaultValue ?? min);
  const v = isControlled ? value : internal;
  const ref = useRef(null);
  const [dragging, setDragging] = useState(false);
  const pct = (v - min) / (max - min) * 100;
  const setFromClient = (clientX) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    const raw = min + ratio * (max - min);
    const stepped = Math.round(raw / step) * step;
    if (!isControlled) setInternal(stepped);
    onChange?.(stepped);
  };
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, width: "100%" }, children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        onMouseDown: (e) => {
          setDragging(true);
          setFromClient(e.clientX);
        },
        onMouseMove: (e) => dragging && setFromClient(e.clientX),
        onMouseUp: () => setDragging(false),
        onMouseLeave: () => setDragging(false),
        style: {
          flex: 1,
          height: 4,
          background: "var(--ub-surface-hover)",
          borderRadius: 999,
          position: "relative",
          cursor: "pointer",
          userSelect: "none"
        },
        children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                position: "absolute",
                inset: "0 auto 0 0",
                width: `${pct}%`,
                background: "var(--ub-accent)",
                borderRadius: 999
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                position: "absolute",
                top: "50%",
                left: `${pct}%`,
                transform: "translate(-50%, -50%)",
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "var(--ub-fg)",
                border: "2px solid var(--ub-bg)",
                transition: dragging ? "none" : "left 0.06s linear"
              }
            }
          )
        ]
      }
    ),
    showValue && /* @__PURE__ */ jsx(
      "span",
      {
        className: "ub-mono",
        style: {
          fontSize: 10,
          color: "var(--ub-fg-soft)",
          minWidth: 24,
          textAlign: "right"
        },
        children: v
      }
    )
  ] });
}
export {
  Slider
};
//# sourceMappingURL=Slider.js.map