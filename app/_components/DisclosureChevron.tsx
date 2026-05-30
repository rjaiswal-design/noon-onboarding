"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Replaces the bare `[ + ]` / `[ − ]` text indicator on disclosure
 * buttons. Looks like a real control: chip with hairline border + soft
 * surface, hovers to accent, and the chevron rotates 0° → 90° when the
 * disclosure opens so the affordance is unambiguous.
 */
export default function DisclosureChevron({ open }: { open: boolean }) {
  const reduce = useReducedMotion();
  return (
    <span className="disclosure-chevron" aria-hidden>
      <motion.svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        animate={{ rotate: reduce ? 0 : open ? 90 : 0 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <path
          d="M4 2.5L7.5 6L4 9.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    </span>
  );
}
