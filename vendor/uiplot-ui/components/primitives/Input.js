"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
const Input = forwardRef(function Input2({ label, hint, invalid, iconLeft, style, ...rest }, ref) {
  const [focused, setFocused] = useState(false);
  return /* @__PURE__ */ jsxs("label", { style: { display: "flex", flexDirection: "column", gap: 6, width: "100%" }, children: [
    label && /* @__PURE__ */ jsx(
      "span",
      {
        className: "ub-mono",
        style: { color: "var(--ub-fg-mutedXX)", fontSize: 10 },
        children: label
      }
    ),
    /* @__PURE__ */ jsxs(
      "span",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "var(--ub-surface)",
          border: `1px solid ${invalid ? "var(--ub-danger)" : focused ? "var(--ub-accent)" : "var(--ub-border)"}`,
          borderRadius: "var(--ub-radius-md)",
          padding: "9px 12px",
          transition: "border-color 0.15s ease"
        },
        children: [
          iconLeft && /* @__PURE__ */ jsx("span", { style: { color: "var(--ub-fg-muted)" }, children: iconLeft }),
          /* @__PURE__ */ jsx(
            "input",
            {
              ref,
              ...rest,
              onFocus: (e) => {
                setFocused(true);
                rest.onFocus?.(e);
              },
              onBlur: (e) => {
                setFocused(false);
                rest.onBlur?.(e);
              },
              style: {
                background: "transparent",
                border: "none",
                outline: "none",
                color: "var(--ub-fg)",
                fontFamily: "var(--ub-font-body)",
                fontSize: 14,
                width: "100%",
                ...style
              }
            }
          )
        ]
      }
    ),
    hint && /* @__PURE__ */ jsx(
      "span",
      {
        style: {
          color: invalid ? "var(--ub-danger)" : "var(--ub-fg-muted)",
          fontSize: 12
        },
        children: hint
      }
    )
  ] });
});
export {
  Input
};
//# sourceMappingURL=Input.js.map