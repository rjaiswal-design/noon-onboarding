import { jsx } from "react/jsx-runtime";
function MonoLabel({ tone = "default", style, children, ...rest }) {
  const color = tone === "accent" ? "var(--ub-accent)" : tone === "muted" ? "var(--ub-fg-mutedXX)" : "var(--ub-fg)";
  return /* @__PURE__ */ jsx(
    "span",
    {
      ...rest,
      className: `ub-mono ${rest.className ?? ""}`,
      style: { color, ...style },
      children
    }
  );
}
export {
  MonoLabel
};
//# sourceMappingURL=MonoLabel.js.map