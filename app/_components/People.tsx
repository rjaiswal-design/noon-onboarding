import type { Person } from "../content";

/**
 * Designer/people table. Three columns: name, X (Twitter), portfolio.
 * Reuses the `.cred-wrap` shell so it slots into the visual system.
 */
export default function People({ people }: { people: Person[] }) {
  return (
    <div className="cred-wrap" style={{ marginTop: 16 }}>
      <table className="cred">
        <thead>
          <tr>
            <th>Designer</th>
            <th>X</th>
            <th>Portfolio</th>
          </tr>
        </thead>
        <tbody>
          {people.map((p) => {
            const xHandle = p.x
              ? "@" + p.x.replace(/\/$/, "").split("/").pop()
              : null;
            const portfolioHost = p.portfolio
              ? p.portfolio
                  .replace(/^https?:\/\//, "")
                  .replace(/^www\./, "")
                  .replace(/\/$/, "")
              : null;
            return (
              <tr key={p.name}>
                <td className="k">
                  {p.name}
                  {p.note && (
                    <span
                      className="muted"
                      style={{ marginLeft: 8, fontSize: 12 }}
                    >
                      {p.note}
                    </span>
                  )}
                </td>
                <td>
                  {p.x ? (
                    <a href={p.x} target="_blank" rel="noreferrer">
                      {xHandle}
                    </a>
                  ) : (
                    <span className="muted">—</span>
                  )}
                </td>
                <td>
                  {p.portfolio ? (
                    <a href={p.portfolio} target="_blank" rel="noreferrer">
                      {portfolioHost}
                    </a>
                  ) : (
                    <span className="muted">—</span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
