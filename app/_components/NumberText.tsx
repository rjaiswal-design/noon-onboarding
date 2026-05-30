import { Fragment, type ReactNode } from "react";

/**
 * Wraps only the *meaningful* numeric tokens in body / summary copy
 * with a styled chip. Selective on purpose — chipping every number
 * (ordinals, plain digits, seat counts) over-decorated the prose.
 *
 * Chipped:
 *  - Currency amounts ("AED 24.99", "SAR 30")
 *  - Percentages ("~60%", "95%")
 *  - Magnitude-suffixed counts ("1.2M", "564k", "2B")
 *  - Multipliers ("1.2×")
 *
 * NOT chipped (left as flowing prose):
 *  - Ordinals ("1st", "2nd")
 *  - Bare digits ("2 seats", "5", "24")
 *  - Number + unit pairs without a magnitude suffix
 *  - Decimals without a suffix ("1.4 months")
 */
const NUM_RE =
  /(?:AED|SAR|USD)\s+\d[\d.,]*|~?\d[\d,]*(?:\.\d+)?[kMB×%]/g;

export default function NumberText({ children }: { children: string }) {
  const text = children;
  const out: ReactNode[] = [];
  let lastIndex = 0;

  for (const m of text.matchAll(NUM_RE)) {
    const match = m[0];
    const idx = m.index ?? 0;
    if (idx > lastIndex) {
      out.push(text.slice(lastIndex, idx));
    }
    out.push(
      <span className="num" key={`${idx}-${match}`}>
        {match}
      </span>,
    );
    lastIndex = idx + match.length;
  }
  if (lastIndex < text.length) {
    out.push(text.slice(lastIndex));
  }

  return (
    <>
      {out.map((node, i) => (
        <Fragment key={i}>{node}</Fragment>
      ))}
    </>
  );
}
