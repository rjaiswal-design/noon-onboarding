"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
function CodeBlock({ code, language = "tsx", filename }) {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    });
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        background: "var(--ub-bg-deep)",
        border: "1px solid var(--ub-border)",
        borderRadius: "var(--ub-radius-lg)",
        overflow: "hidden"
      },
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "8px 12px",
              borderBottom: "1px solid var(--ub-border)",
              background: "var(--ub-surface)"
            },
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "ub-mono",
                  style: { fontSize: 10, color: "var(--ub-fg-mutedXX)" },
                  children: filename ?? language
                }
              ),
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: onCopy,
                  className: "ub-mono",
                  style: {
                    background: "transparent",
                    border: "1px solid var(--ub-border)",
                    color: copied ? "var(--ub-success)" : "var(--ub-fg-soft)",
                    padding: "3px 8px",
                    fontSize: 9,
                    borderRadius: "var(--ub-radius-xs)",
                    cursor: "pointer",
                    transition: "color 0.15s ease, border-color 0.15s ease"
                  },
                  children: copied ? "COPIED" : "COPY"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "pre",
          {
            style: {
              margin: 0,
              padding: "14px 16px",
              fontFamily: "var(--ub-font-mono)",
              fontSize: 12,
              lineHeight: 1.7,
              color: "var(--ub-fg-soft)",
              overflowX: "auto"
            },
            children: /* @__PURE__ */ jsx("code", { children: code })
          }
        )
      ]
    }
  );
}
export {
  CodeBlock
};
//# sourceMappingURL=CodeBlock.js.map