"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
function Switch({ checked, defaultChecked, onChange, label, disabled }) {
  const isControlled = checked !== void 0;
  const [internal, setInternal] = useState(defaultChecked ?? false);
  const value = isControlled ? checked : internal;
  const toggle = () => {
    if (disabled) return;
    if (!isControlled) setInternal(!value);
    onChange?.(!value);
  };
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": value,
      disabled,
      onClick: toggle,
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
            style: {
              width: 30,
              height: 18,
              borderRadius: "var(--ub-radius-pill)",
              background: value ? "var(--ub-accent)" : "var(--ub-surface-hover)",
              border: `1px solid ${value ? "var(--ub-accent)" : "var(--ub-border)"}`,
              position: "relative",
              transition: "background 260ms cubic-bezier(0.32, 0.72, 0, 1), border-color 260ms cubic-bezier(0.32, 0.72, 0, 1)"
            },
            children: /* @__PURE__ */ jsx(
              "span",
              {
                style: {
                  position: "absolute",
                  top: 1,
                  left: 1,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: value ? "#0e0e0e" : "var(--ub-fg-soft)",
                  transform: value ? "translateX(12px)" : "translateX(0)",
                  willChange: "transform",
                  transition: "transform 260ms cubic-bezier(0.32, 0.72, 0, 1), background 220ms cubic-bezier(0.32, 0.72, 0, 1)"
                }
              }
            )
          }
        ),
        label && /* @__PURE__ */ jsx("span", { style: { color: "var(--ub-fg-soft)", fontSize: 13 }, children: label })
      ]
    }
  );
}
export {
  Switch
};
//# sourceMappingURL=Switch.js.map