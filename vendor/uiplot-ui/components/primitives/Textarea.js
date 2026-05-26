"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { forwardRef, useState } from "react";
const Textarea = forwardRef(function Textarea2({ label, hint, invalid, style, ...rest }, ref) {
  const [focused, setFocused] = useState(false);
  return /* @__PURE__ */ jsxs("label", { style: { display: "flex", flexDirection: "column", gap: 6, width: "100%" }, children: [
    label && /* @__PURE__ */ jsx("span", { className: "ub-mono", style: { color: "var(--ub-fg-mutedXX)", fontSize: 10 }, children: label }),
    /* @__PURE__ */ jsx(
      "textarea",
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
          background: "var(--ub-surface)",
          color: "var(--ub-fg)",
          border: `1px solid ${invalid ? "var(--ub-danger)" : focused ? "var(--ub-accent)" : "var(--ub-border)"}`,
          borderRadius: "var(--ub-radius-md)",
          padding: "10px 12px",
          fontFamily: "var(--ub-font-body)",
          fontSize: 14,
          lineHeight: 1.5,
          resize: "vertical",
          minHeight: 80,
          outline: "none",
          transition: "border-color 0.15s ease",
          ...style
        }
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
  Textarea
};
//# sourceMappingURL=Textarea.js.map