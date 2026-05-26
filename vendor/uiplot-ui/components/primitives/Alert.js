import { jsx, jsxs } from "react/jsx-runtime";
const toneMap = {
  neutral: {
    bg: "var(--ub-surface)",
    border: "var(--ub-border)",
    fg: "var(--ub-fg-soft)"
  },
  accent: {
    bg: "var(--ub-accent-06)",
    border: "var(--ub-accent-border)",
    fg: "var(--ub-accent)"
  },
  success: {
    bg: "rgba(74,222,128,0.06)",
    border: "#2d4a2d",
    fg: "var(--ub-success)"
  },
  danger: {
    bg: "rgba(224,90,90,0.06)",
    border: "rgba(224,90,90,0.3)",
    fg: "var(--ub-danger)"
  }
};
function Alert({ tone = "neutral", title, children, icon, action }) {
  const t = toneMap[tone];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      role: "alert",
      style: {
        display: "flex",
        gap: 12,
        padding: "12px 14px",
        background: t.bg,
        border: `1px solid ${t.border}`,
        borderRadius: "var(--ub-radius-lg)"
      },
      children: [
        icon && /* @__PURE__ */ jsx("span", { style: { color: t.fg, flexShrink: 0, marginTop: 1 }, children: icon }),
        /* @__PURE__ */ jsxs("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 4 }, children: [
          title && /* @__PURE__ */ jsx("div", { style: { color: t.fg, fontSize: 13, fontWeight: 500 }, children: title }),
          children && /* @__PURE__ */ jsx("div", { style: { color: "var(--ub-fg-muted)", fontSize: 13, lineHeight: "20px" }, children })
        ] }),
        action && /* @__PURE__ */ jsx("div", { style: { flexShrink: 0 }, children: action })
      ]
    }
  );
}
export {
  Alert
};
//# sourceMappingURL=Alert.js.map