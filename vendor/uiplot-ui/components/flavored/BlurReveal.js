"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from "react";
const DEFAULT_BLUR = 12;
const DEFAULT_DURATION = 2e3;
function BlurReveal({
  children,
  blur = DEFAULT_BLUR,
  duration = DEFAULT_DURATION,
  replayable = true,
  resetKey,
  className,
  style
}) {
  const rootRef = useRef(null);
  const [phase, setPhase] = useState("idle");
  const [nonce, setNonce] = useState(0);
  useEffect(() => {
    setPhase("idle");
    const el = rootRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          requestAnimationFrame(() => setPhase("play"));
          obs.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [nonce, resetKey]);
  useEffect(() => {
    if (phase !== "play") return;
    const totalMs = duration * 1.5 + 50;
    const t = window.setTimeout(() => setPhase("done"), totalMs);
    return () => window.clearTimeout(t);
  }, [phase, duration, nonce]);
  const replay = () => setNonce((n) => n + 1);
  return /* @__PURE__ */ jsxs("div", { style: { position: "relative", width: "100%", display: "flex", justifyContent: "center" }, children: [
    replayable && /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: replay,
        className: "ub-mono",
        style: {
          position: "absolute",
          top: 0,
          right: 0,
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          padding: "4px 8px",
          background: "var(--ub-surface)",
          border: "1px solid var(--ub-border)",
          color: "var(--ub-fg-muted)",
          borderRadius: "var(--ub-radius-xs)",
          fontSize: 9,
          cursor: "pointer",
          outline: "none",
          zIndex: 3,
          transition: "color 0.12s var(--ub-ease-standard), border-color 0.12s var(--ub-ease-standard)"
        },
        onMouseEnter: (e) => {
          e.currentTarget.style.color = "var(--ub-fg)";
          e.currentTarget.style.borderColor = "var(--ub-border-strong)";
        },
        onMouseLeave: (e) => {
          e.currentTarget.style.color = "var(--ub-fg-muted)";
          e.currentTarget.style.borderColor = "var(--ub-border)";
        },
        "aria-label": "Replay reveal",
        children: [
          /* @__PURE__ */ jsx(ReplayIcon, {}),
          "REPLAY"
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: rootRef,
        className: `ub-blur-reveal ${className ?? ""}`.trim(),
        "data-phase": phase,
        style: {
          ...style,
          "--ub-br-blur": `${blur}px`,
          "--ub-br-clip": `${duration}ms`,
          "--ub-br-fade": `${duration + duration / 2}ms`
        },
        children: [
          /* @__PURE__ */ jsx("div", { className: "ub-blur-reveal__banner", children }),
          /* @__PURE__ */ jsx(Effects, {})
        ]
      },
      nonce
    )
  ] });
}
function Effects() {
  return /* @__PURE__ */ jsxs("div", { className: "ub-blur-reveal__effects", "aria-hidden": true, children: [
    /* @__PURE__ */ jsx("div", { className: "ub-blur-reveal__blur" }),
    /* @__PURE__ */ jsxs("svg", { className: "ub-blur-reveal__noise", children: [
      /* @__PURE__ */ jsxs("filter", { id: "ub-blur-noise", children: [
        /* @__PURE__ */ jsx(
          "feTurbulence",
          {
            baseFrequency: "1",
            numOctaves: "4",
            stitchTiles: "stitch",
            type: "fractalNoise"
          }
        ),
        /* @__PURE__ */ jsx("feColorMatrix", { type: "saturate", values: "0" })
      ] }),
      /* @__PURE__ */ jsx("rect", { filter: "url(#ub-blur-noise)", height: "100%", width: "100%" })
    ] })
  ] });
}
function ReplayIcon() {
  return /* @__PURE__ */ jsxs("svg", { width: 9, height: 9, viewBox: "0 0 12 12", fill: "none", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M2 6a4 4 0 1 0 1.2-2.85",
        stroke: "currentColor",
        strokeWidth: "1.4",
        strokeLinecap: "round"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M2 2.2v2h2",
        stroke: "currentColor",
        strokeWidth: "1.4",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  ] });
}
function BlurRevealContents({
  label = "Devouring Details",
  cta = "Register Now"
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 16,
        fontSize: 22,
        color: "var(--ub-fg)",
        fontFamily: "var(--ub-font-title)"
      },
      children: [
        /* @__PURE__ */ jsxs("div", { style: { display: "inline-flex", alignItems: "center", gap: 8 }, children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              style: {
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: "var(--ub-accent)",
                display: "inline-block"
              }
            }
          ),
          /* @__PURE__ */ jsx("span", { children: label })
        ] }),
        /* @__PURE__ */ jsx(
          "span",
          {
            style: {
              background: "var(--ub-accent)",
              color: "#0e0e0e",
              padding: "0 14px",
              height: 30,
              borderRadius: 999,
              display: "inline-flex",
              alignItems: "center",
              fontSize: 13,
              fontFamily: "var(--ub-font-body)",
              fontWeight: 500
            },
            children: cta
          }
        )
      ]
    }
  );
}
export {
  BlurReveal,
  BlurRevealContents
};
//# sourceMappingURL=BlurReveal.js.map