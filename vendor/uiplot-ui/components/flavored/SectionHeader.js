import { jsx, jsxs } from "react/jsx-runtime";
function SectionHeader({
  number,
  eyebrow,
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 14 }, children: [
    /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 14 }, children: [
      number && /* @__PURE__ */ jsxs(
        "span",
        {
          className: "ub-mono",
          style: {
            fontSize: 10,
            color: "var(--ub-fg-mutedXX)",
            padding: "3px 7px",
            border: "1px solid var(--ub-border)",
            borderRadius: "var(--ub-radius-xs)",
            background: "var(--ub-bg-deep)"
          },
          children: [
            "\xA7",
            number
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        "span",
        {
          "aria-hidden": true,
          style: {
            flex: "0 1 80px",
            height: 1,
            background: "linear-gradient(to right, var(--ub-accent), transparent)"
          }
        }
      ),
      eyebrow && /* @__PURE__ */ jsx(
        "span",
        {
          className: "ub-mono",
          style: { fontSize: 11, color: "var(--ub-accent)" },
          children: eyebrow
        }
      )
    ] }),
    /* @__PURE__ */ jsx(
      "h2",
      {
        style: {
          fontFamily: "var(--ub-font-title)",
          fontSize: 44,
          fontWeight: 500,
          letterSpacing: "-1.1px",
          lineHeight: 1.05,
          color: "var(--ub-fg)",
          margin: 0
        },
        children: title
      }
    ),
    children && /* @__PURE__ */ jsx(
      "p",
      {
        style: {
          color: "var(--ub-fg-muted)",
          fontSize: 15,
          lineHeight: 1.65,
          maxWidth: 580,
          margin: 0,
          marginTop: 2
        },
        children
      }
    )
  ] });
}
export {
  SectionHeader
};
//# sourceMappingURL=SectionHeader.js.map