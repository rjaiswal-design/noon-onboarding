import type { PieData } from "../content";

const DEFAULT_COLORS = [
  "#ff5800", // noon orange
  "#1d2539", // grey-900
  "#475067", // grey-700
  "#8a8a8a",
  "#b8b8b4",
];

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180; // 0° = top
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function donutSlice(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  startAngle: number,
  endAngle: number,
): string {
  const so = polarToCartesian(cx, cy, outerR, startAngle);
  const eo = polarToCartesian(cx, cy, outerR, endAngle);
  const si = polarToCartesian(cx, cy, innerR, endAngle);
  const ei = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
  return [
    `M ${so.x} ${so.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${eo.x} ${eo.y}`,
    `L ${si.x} ${si.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${ei.x} ${ei.y}`,
    "Z",
  ].join(" ");
}

/**
 * Hand-rolled donut chart in plain SVG — no external chart lib needed.
 * Renders the slices on the left, a legend on the right with each
 * slice's value (auto-suffixed with `unit`) and percentage.
 * `centerLabel` + total go inside the donut hole.
 */
export default function Pie({ data }: { data: PieData }) {
  const total = data.slices.reduce((s, sl) => s + sl.value, 0);
  const size = 180;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 80;
  const innerR = 52;
  const unit = data.unit ?? "";

  let angle = 0;
  const slices = data.slices.map((sl, i) => {
    const sliceAngle = (sl.value / total) * 360;
    const path = donutSlice(cx, cy, outerR, innerR, angle, angle + sliceAngle);
    const color = sl.color ?? DEFAULT_COLORS[i % DEFAULT_COLORS.length];
    const pct = Math.round((sl.value / total) * 100);
    angle += sliceAngle;
    return { ...sl, path, color, pct };
  });

  return (
    <div
      style={{
        display: "flex",
        gap: 32,
        marginTop: 18,
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        role="img"
        aria-label={`Pie chart: ${slices.map((s) => `${s.label} ${s.value}${unit}`).join(", ")}`}
      >
        {slices.map((s) => (
          <path key={s.label} d={s.path} fill={s.color} />
        ))}
        {data.centerLabel && (
          <>
            <text
              x={cx}
              y={cy - 6}
              textAnchor="middle"
              style={{
                fontFamily: "var(--ub-font-mono)",
                fontSize: 9,
                fontWeight: 600,
                fill: "var(--ub-fg-mutedXX)",
                letterSpacing: "0.12em",
              }}
            >
              {data.centerLabel.toUpperCase()}
            </text>
            <text
              x={cx}
              y={cy + 12}
              textAnchor="middle"
              style={{
                fontFamily: "var(--ub-font-mono)",
                fontSize: 16,
                fontWeight: 700,
                fill: "var(--ub-fg-strong)",
              }}
            >
              {total}
              {unit}
            </text>
          </>
        )}
      </svg>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexDirection: "column",
          gap: 6,
        }}
      >
        {slices.map((s) => (
          <li
            key={s.label}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: 14,
            }}
          >
            <span
              aria-hidden
              style={{
                width: 10,
                height: 10,
                background: s.color,
                borderRadius: 2,
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontWeight: 500,
                color: "var(--ub-fg-strong)",
                minWidth: 56,
              }}
            >
              {s.label}
            </span>
            <span className="num">
              {s.value}
              {unit}
            </span>
            <span
              style={{
                fontFamily: "var(--ub-font-mono)",
                fontSize: 11,
                color: "var(--ub-fg-mutedXX)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {s.pct}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
