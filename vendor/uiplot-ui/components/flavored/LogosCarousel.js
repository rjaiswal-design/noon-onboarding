"use client";
import { jsx, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import {
  Canopy,
  Canva,
  Casetext,
  Strava,
  Descript,
  Duolingo,
  Faire,
  Clearbit,
  IDEO,
  KhanAcademy,
  Quizlet,
  Ramp
} from "./_logos";
const DEFAULT_LOGOS = [
  [/* @__PURE__ */ jsx(Canopy, {}, "1"), /* @__PURE__ */ jsx(Canva, {}, "2"), /* @__PURE__ */ jsx(Casetext, {}, "3"), /* @__PURE__ */ jsx(Strava, {}, "4")],
  [/* @__PURE__ */ jsx(Descript, {}, "5"), /* @__PURE__ */ jsx(Duolingo, {}, "6"), /* @__PURE__ */ jsx(Faire, {}, "7"), /* @__PURE__ */ jsx(Clearbit, {}, "8")],
  [/* @__PURE__ */ jsx(IDEO, {}, "9"), /* @__PURE__ */ jsx(KhanAcademy, {}, "10"), /* @__PURE__ */ jsx(Quizlet, {}, "11"), /* @__PURE__ */ jsx(Ramp, {}, "12")]
];
function LogosCarousel({
  logos = DEFAULT_LOGOS,
  stagger = 0.14,
  count,
  interval = 1500
}) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const current = logos[index].slice(0, count);
  const next = logos[(index + 1) % logos.length].slice(0, count);
  useEffect(() => {
    const t = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    if (!animate) return;
    const i = setInterval(() => {
      setIndex((idx) => (idx + 1) % logos.length);
    }, interval);
    return () => clearInterval(i);
  }, [animate, logos.length, interval]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "ub-logos-row",
      style: { maxWidth: 720, width: "100%" },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              gridArea: "1 / 1",
              display: "flex",
              width: "100%",
              gap: 32,
              justifyContent: "center",
              alignItems: "center"
            },
            children: current.map((logo, i) => /* @__PURE__ */ jsx(Logo, { state: "exit", animate, index: i, stagger, children: logo }, i))
          },
          `${index}-exit`
        ),
        animate && /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              gridArea: "1 / 1",
              display: "flex",
              width: "100%",
              gap: 32,
              justifyContent: "center",
              alignItems: "center"
            },
            children: next.map((logo, i) => /* @__PURE__ */ jsx(Logo, { state: "enter", animate, index: i, stagger, children: logo }, i))
          },
          `${index}-enter`
        )
      ]
    }
  );
}
function Logo({
  children,
  animate,
  index,
  state,
  stagger = 0.14
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "ub-logo",
      "data-state": state,
      "data-animate": animate,
      style: { "--delay": `${index * stagger}s` },
      children
    }
  );
}
export {
  DEFAULT_LOGOS,
  LogosCarousel
};
//# sourceMappingURL=LogosCarousel.js.map