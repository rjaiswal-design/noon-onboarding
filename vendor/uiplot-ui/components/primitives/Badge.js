import { jsx } from "react/jsx-runtime";
const toneMap = {
  neutral: { bg: "var(--ub-surface-2)", fg: "var(--ub-fg-soft)", border: "var(--ub-border)" },
  accent: { bg: "var(--ub-accent-08)", fg: "var(--ub-accent)", border: "var(--ub-accent-border)" },
  success: { bg: "rgba(74,222,128,0.08)", fg: "var(--ub-success)", border: "#2d4a2d" },
  danger: { bg: "rgba(224,90,90,0.08)", fg: "var(--ub-danger)", border: "rgba(224,90,90,0.3)" },
  muted: { bg: "transparent", fg: "var(--ub-fg-muted)", border: "var(--ub-border)" }
};
function Badge({ tone = "neutral", style, children, ...rest }) {
  const t = toneMap[tone];
  return /* @__PURE__ */ jsx(
    "span",
    {
      ...rest,
      className: `ub-mono ${rest.className ?? ""}`,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "3px 8px",
        background: t.bg,
        color: t.fg,
        border: `1px solid ${t.border}`,
        borderRadius: "var(--ub-radius-sm)",
        fontSize: 10,
        ...style
      },
      children
    }
  );
}
export {
  Badge
};
//# sourceMappingURL=Badge.js.map