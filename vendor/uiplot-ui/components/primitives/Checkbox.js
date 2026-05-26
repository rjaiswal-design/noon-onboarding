"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled,
  indeterminate
}) {
  const isControlled = checked !== void 0;
  const [internal, setInternal] = useState(defaultChecked ?? false);
  const value = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!value);
    onChange?.(!value);
  };
  const filled = value || indeterminate;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      role: "checkbox",
      "aria-checked": indeterminate ? "mixed" : value,
      onClick: toggle,
      disabled,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "transparent",
        border: "none",
        padding: 0,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1
      },
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": true,
            style: {
              width: 16,
              height: 16,
              borderRadius: "var(--ub-radius-xs)",
              background: filled ? "var(--ub-accent)" : "var(--ub-surface)",
              border: `1px solid ${filled ? "var(--ub-accent)" : "var(--ub-border-strong)"}`,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "background 0.12s var(--ub-ease-standard), border-color 0.12s var(--ub-ease-standard)"
            },
            children: indeterminate ? /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  width: 8,
                  height: 2,
                  background: "#0e0e0e",
                  borderRadius: 1
                }
              }
            ) : value ? /* @__PURE__ */ jsx("svg", { width: "10", height: "10", viewBox: "0 0 10 10", fill: "none", children: /* @__PURE__ */ jsx(
              "path",
              {
                d: "M1.5 5.5L4 8L8.5 2",
                stroke: "#0e0e0e",
                strokeWidth: "1.6",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ) }) : null
          }
        ),
        label && /* @__PURE__ */ jsx("span", { style: { color: "var(--ub-fg-soft)", fontSize: 13 }, children: label })
      ]
    }
  );
}
export {
  Checkbox
};
//# sourceMappingURL=Checkbox.js.map