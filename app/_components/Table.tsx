import type { TableData } from "../content";
import NumberText from "./NumberText";

/**
 * Generic table — reuses the `.cred-wrap` / `.cred` Notion-style shell
 * already used by credentials, libs, tools, and figma-files. First
 * column gets the bolder `k` treatment; every cell gets NumberText
 * so currencies, percentages, and counts auto-chip.
 */
export default function Table({ data }: { data: TableData }) {
  return (
    <div className="cred-wrap" style={{ marginTop: 16 }}>
      <table className="cred">
        <thead>
          <tr>
            {data.headers.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, ri) => (
            <tr key={ri}>
              {row.map((cell, ci) => (
                <td key={ci} className={ci === 0 ? "k" : undefined}>
                  <NumberText>{cell}</NumberText>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
