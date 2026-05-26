"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
function Accordion({ items, defaultOpen = [], multiple }) {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = (id) => setOpen(
    (s) => s.includes(id) ? s.filter((x) => x !== id) : multiple ? [...s, id] : [id]
  );
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        background: "var(--ub-surface)",
        border: "1px solid var(--ub-border)",
        borderRadius: "var(--ub-radius-lg)",
        overflow: "hidden"
      },
      children: items.map((it, i) => {
        const isOpen = open.includes(it.id);
        return /* @__PURE__ */ jsxs(
          "div",
          {
            style: {
              borderTop: i === 0 ? "none" : "1px solid var(--ub-border)"
            },
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => toggle(it.id),
                  "aria-expanded": isOpen,
                  style: {
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    background: "transparent",
                    border: "none",
                    color: "var(--ub-fg)",
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                    textAlign: "left",
                    outline: "none"
                  },
                  children: [
                    /* @__PURE__ */ jsx("span", { children: it.title }),
                    /* @__PURE__ */ jsx(
                      motion.span,
                      {
                        animate: { rotate: isOpen ? 180 : 0 },
                        transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] },
                        style: {
                          display: "inline-flex",
                          color: "var(--ub-fg-muted)",
                          transformOrigin: "center"
                        },
                        children: /* @__PURE__ */ jsx("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", children: /* @__PURE__ */ jsx(
                          "path",
                          {
                            d: "M2.5 4L5.5 7L8.5 4",
                            stroke: "currentColor",
                            strokeWidth: "1.4",
                            strokeLinecap: "round"
                          }
                        ) })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: {
                    height: { duration: 0.28, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.18, ease: [0.4, 0, 0.2, 1] }
                  },
                  style: { overflow: "hidden" },
                  children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        padding: "0 16px 14px",
                        color: "var(--ub-fg-muted)",
                        fontSize: 13,
                        lineHeight: "20px"
                      },
                      children: it.content
                    }
                  )
                },
                "panel"
              ) })
            ]
          },
          it.id
        );
      })
    }
  );
}
export {
  Accordion
};
//# sourceMappingURL=Accordion.js.map