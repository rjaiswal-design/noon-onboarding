"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { AnimatePresence, motion } from "motion/react";
import {
  useEffect,
  useRef,
  useState
} from "react";
import { Kbd } from "../primitives/Kbd";
const FEEDBACK_W = 360;
const FEEDBACK_H = 200;
const SPEED = 1;
const LOGO_SPRING = {
  type: "spring",
  stiffness: 350 / SPEED,
  damping: 35
};
const MORPH_SPRING = {
  type: "spring",
  stiffness: 550 / SPEED,
  damping: 45,
  mass: 0.7
};
function useClickOutside(ref, onOutside) {
  useEffect(() => {
    const handler = (e) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) onOutside();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onOutside]);
}
function useDemoLoop(enabled, interval = 1800) {
  const [on, setOn] = useState(false);
  const timer = useRef(null);
  const start = () => {
    if (!enabled) return;
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => setOn((p) => !p), interval);
  };
  useEffect(() => {
    start();
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [enabled, interval]);
  const stop = () => {
    if (timer.current) window.clearInterval(timer.current);
  };
  return { on, setOn, mouseHandlers: { onMouseEnter: stop, onMouseLeave: start } };
}
function MorphSurface({
  label = "Unboxed UI",
  trigger = "Feedback",
  placeholder = "What's on your mind?",
  onSubmit,
  demoMode = false
}) {
  const rootRef = useRef(null);
  const textareaRef = useRef(null);
  const submitRef = useRef(null);
  const demo = useDemoLoop(demoMode);
  const open = demoMode ? demo.on : demo.on;
  const [openOverride, setOpenOverride] = useState(false);
  const isOpen = demoMode ? demo.on : openOverride;
  const [success, setSuccess] = useState(false);
  const [text, setText] = useState("");
  function close() {
    if (demoMode) demo.setOn(false);
    setOpenOverride(false);
    textareaRef.current?.blur();
  }
  function openFn() {
    if (demoMode) demo.setOn(true);
    setOpenOverride(true);
    setTimeout(() => textareaRef.current?.focus(), 50);
  }
  useClickOutside(rootRef, close);
  async function handleSubmit(e) {
    e.preventDefault();
    if (!text.trim()) {
      if (demoMode) {
        close();
        setSuccess(true);
        setTimeout(() => setSuccess(false), 1500);
      }
      return;
    }
    await onSubmit?.(text);
    setText("");
    close();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 1500);
  }
  function onKeyDown(e) {
    if (e.key === "Escape") close();
    if (e.key === "Enter" && e.metaKey) {
      e.preventDefault();
      submitRef.current?.click();
    }
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      ...demo.mouseHandlers,
      style: {
        width: FEEDBACK_W,
        height: FEEDBACK_H,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          ref: rootRef,
          initial: false,
          animate: {
            width: isOpen ? FEEDBACK_W : "auto",
            height: isOpen ? FEEDBACK_H : 44,
            borderRadius: isOpen ? 14 : 20
          },
          transition: { ...MORPH_SPRING, delay: isOpen ? 0 : 0.08 },
          style: {
            position: "relative",
            background: "var(--ub-surface)",
            border: "1px solid var(--ub-border)",
            boxShadow: "var(--ub-shadow-lg)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ jsx(
              "footer",
              {
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 44,
                  marginTop: "auto",
                  userSelect: "none",
                  whiteSpace: "nowrap"
                },
                children: /* @__PURE__ */ jsxs(
                  "div",
                  {
                    style: {
                      display: "flex",
                      alignItems: "center",
                      gap: 24,
                      padding: "0 12px"
                    },
                    children: [
                      /* @__PURE__ */ jsxs("div", { style: { display: "flex", alignItems: "center", gap: 8 }, children: [
                        isOpen ? /* @__PURE__ */ jsx("span", { style: { width: 20, height: 20, opacity: 0 } }) : /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            layoutId: "ub-morph-dot",
                            transition: LOGO_SPRING,
                            style: {
                              width: 20,
                              height: 20,
                              borderRadius: "50%",
                              background: "var(--ub-accent)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center"
                            },
                            children: /* @__PURE__ */ jsx(AnimatePresence, { children: success && /* @__PURE__ */ jsx(
                              motion.span,
                              {
                                initial: { opacity: 0, scale: 0.5 },
                                animate: { opacity: 1, scale: 1 },
                                exit: { opacity: 0, scale: 0.5 },
                                transition: {
                                  type: "spring",
                                  stiffness: 500 / SPEED,
                                  damping: 22,
                                  delay: 0.3
                                },
                                style: { display: "inline-flex" },
                                children: /* @__PURE__ */ jsx(CheckIcon, {})
                              },
                              "check"
                            ) })
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            style: { fontSize: 13, color: "var(--ub-fg)", fontWeight: 500 },
                            children: label
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsx(
                        "button",
                        {
                          type: "button",
                          onClick: openFn,
                          style: {
                            background: "transparent",
                            border: "none",
                            color: "var(--ub-fg-muted)",
                            fontSize: 13,
                            padding: "8px 12px",
                            margin: -8,
                            borderRadius: 999,
                            cursor: "pointer",
                            outline: "none"
                          },
                          onMouseEnter: (e) => e.currentTarget.style.color = "var(--ub-fg)",
                          onMouseLeave: (e) => e.currentTarget.style.color = "var(--ub-fg-muted)",
                          children: trigger
                        }
                      )
                    ]
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxs(
              "form",
              {
                onSubmit: handleSubmit,
                style: {
                  position: "absolute",
                  inset: "0 0 0 0",
                  width: FEEDBACK_W,
                  height: FEEDBACK_H,
                  pointerEvents: isOpen ? "auto" : "none"
                },
                children: [
                  /* @__PURE__ */ jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0 },
                      animate: { opacity: 1 },
                      exit: { opacity: 0 },
                      transition: MORPH_SPRING,
                      style: {
                        padding: 6,
                        display: "flex",
                        flexDirection: "column",
                        height: "100%"
                      },
                      children: [
                        /* @__PURE__ */ jsxs(
                          "div",
                          {
                            style: {
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              padding: "4px 6px 6px"
                            },
                            children: [
                              /* @__PURE__ */ jsx(
                                "span",
                                {
                                  style: {
                                    fontSize: 13,
                                    color: "var(--ub-fg-muted)",
                                    marginLeft: 22
                                  },
                                  children: label
                                }
                              ),
                              /* @__PURE__ */ jsxs(
                                "button",
                                {
                                  type: "submit",
                                  ref: submitRef,
                                  style: {
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 4,
                                    background: "transparent",
                                    border: "none",
                                    color: "var(--ub-fg-muted)",
                                    fontSize: 12,
                                    cursor: "pointer",
                                    outline: "none"
                                  },
                                  children: [
                                    /* @__PURE__ */ jsx(Kbd, { children: "\u2318" }),
                                    /* @__PURE__ */ jsx(Kbd, { children: "Enter" })
                                  ]
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "textarea",
                          {
                            ref: textareaRef,
                            value: text,
                            onChange: (e) => setText(e.target.value),
                            placeholder,
                            onKeyDown,
                            spellCheck: false,
                            style: {
                              flex: 1,
                              width: "100%",
                              resize: "none",
                              fontSize: 14,
                              lineHeight: 1.5,
                              outline: "none",
                              border: "none",
                              padding: 14,
                              caretColor: "var(--ub-accent)",
                              color: "var(--ub-fg)",
                              background: "var(--ub-bg-deep)",
                              borderRadius: 10,
                              fontFamily: "var(--ub-font-body)"
                            }
                          }
                        )
                      ]
                    },
                    "form-content"
                  ) }),
                  isOpen && /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      layoutId: "ub-morph-dot",
                      transition: LOGO_SPRING,
                      style: {
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "var(--ub-accent)",
                        position: "absolute",
                        top: 19,
                        left: 16
                      }
                    }
                  )
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function CheckIcon() {
  return /* @__PURE__ */ jsx("svg", { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", children: /* @__PURE__ */ jsx(
    "path",
    {
      d: "M5 13L9 17L19 7",
      stroke: "#0e0e0e",
      strokeWidth: 2.4,
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }
  ) });
}
export {
  MorphSurface
};
//# sourceMappingURL=MorphSurface.js.map