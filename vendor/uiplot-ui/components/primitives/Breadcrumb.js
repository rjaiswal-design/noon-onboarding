import { jsx, jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
function Breadcrumb({ items }) {
  return /* @__PURE__ */ jsx(
    "nav",
    {
      "aria-label": "Breadcrumb",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--ub-font-mono)",
        fontSize: 11,
        letterSpacing: "0.04em"
      },
      children: items.map((it, i) => {
        const last = i === items.length - 1;
        return /* @__PURE__ */ jsxs(Fragment, { children: [
          it.href && !last ? /* @__PURE__ */ jsxs(
            "a",
            {
              href: it.href,
              style: {
                color: "var(--ub-fg-muted)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 4
              },
              children: [
                it.icon,
                it.label
              ]
            }
          ) : /* @__PURE__ */ jsxs(
            "span",
            {
              style: {
                color: last ? "var(--ub-fg)" : "var(--ub-fg-muted)",
                display: "inline-flex",
                alignItems: "center",
                gap: 4
              },
              children: [
                it.icon,
                it.label
              ]
            }
          ),
          !last && /* @__PURE__ */ jsx("span", { style: { color: "var(--ub-border-strong)" }, children: "/" })
        ] }, `${it.label}-${i}`);
      })
    }
  );
}
export {
  Breadcrumb
};
//# sourceMappingURL=Breadcrumb.js.map