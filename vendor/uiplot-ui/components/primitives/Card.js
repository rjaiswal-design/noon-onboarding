import { jsx, jsxs } from "react/jsx-runtime";
function Card({ active, padded = true, style, children, ...rest }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...rest,
      style: {
        background: "var(--ub-surface)",
        border: `1px solid ${active ? "var(--ub-accent)" : "var(--ub-border)"}`,
        borderRadius: "var(--ub-radius-xl)",
        padding: padded ? 20 : 0,
        transition: "border-color 0.2s ease",
        ...style
      },
      children
    }
  );
}
function CardHeader({
  eyebrow,
  title,
  meta
}) {
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 6, marginBottom: 12 }, children: [
    eyebrow && /* @__PURE__ */ jsx("span", { className: "ub-mono", style: { color: "var(--ub-accent)" }, children: eyebrow }),
    /* @__PURE__ */ jsx(
      "span",
      {
        style: {
          fontSize: 16,
          fontWeight: 500,
          color: "var(--ub-fg)",
          letterSpacing: "-0.13px"
        },
        children: title
      }
    ),
    meta && /* @__PURE__ */ jsx("span", { style: { color: "var(--ub-fg-muted)", fontSize: 13 }, children: meta })
  ] });
}
export {
  Card,
  CardHeader
};
//# sourceMappingURL=Card.js.map