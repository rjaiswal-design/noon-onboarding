import { jsx, jsxs } from "react/jsx-runtime";
function Progress({ value, max = 100, showValue, tone = "accent" }) {
  const pct = Math.min(100, Math.max(0, value / max * 100));
  const color = tone === "success" ? "var(--ub-success)" : tone === "danger" ? "var(--ub-danger)" : "var(--ub-accent)";
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 12, width: "100%" }, children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        role: "progressbar",
        "aria-valuenow": value,
        "aria-valuemax": max,
        style: {
          flex: 1,
          height: 4,
          background: "var(--ub-surface-hover)",
          borderRadius: 999,
          overflow: "hidden"
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              width: `${pct}%`,
              height: "100%",
              background: color,
              transition: "width 0.3s var(--ub-ease-standard)"
            }
          }
        )
      }
    ),
    showValue && /* @__PURE__ */ jsxs(
      "span",
      {
        className: "ub-mono",
        style: { fontSize: 10, color: "var(--ub-fg-soft)", minWidth: 32, textAlign: "right" },
        children: [
          Math.round(pct),
          "%"
        ]
      }
    )
  ] });
}
export {
  Progress
};
//# sourceMappingURL=Progress.js.map