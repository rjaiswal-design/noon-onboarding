"use client";
import { useState } from "react";
import { credentials, devmode } from "./content";

function Cell({ value, code, wrap }: { value: string; code?: boolean; wrap?: boolean }) {
  if (!value) return <td />;
  const cls = code ? (wrap ? "code wrap" : "code") : undefined;
  return <td className={cls}>{value}</td>;
}

export function CredentialsDisclosure({
  heading,
  body,
}: {
  heading: string;
  body: string;
}) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();

  const match = (...vals: string[]) =>
    !query || vals.some((v) => v.toLowerCase().includes(query));

  const rows = credentials.filter((c) =>
    match(c.platform, c.account, c.password, c.ownership, c.poc),
  );
  const devRows = devmode.accounts.filter((a) =>
    match(a, devmode.password, devmode.poc, "dev mode", "devmode"),
  );

  return (
    <div>
      <button
        type="button"
        className="disclosure"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="h-sec">{heading}</span>
        <span className="disclosure-ind">{open ? "[ − ]" : "[ + ]"}</span>
      </button>
      <p style={{ margin: "8px 0 0" }}>{body}</p>

      {open && (
        <div style={{ marginTop: 18 }}>
          <input
            className="cred-search"
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search platform, account, owner…"
            aria-label="Search credentials"
          />
          <p className="muted" style={{ fontSize: 12, margin: "0 0 10px" }}>
            Internal to the noon design team. Don’t share outside noon.
          </p>

          {rows.length > 0 && (
            <div className="cred-wrap">
              <table className="cred">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Account</th>
                    <th>Password</th>
                    <th>Ownership</th>
                    <th>Design POC</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((c) => (
                    <tr key={c.platform}>
                      <td className="k">{c.platform}</td>
                      <Cell value={c.account} code />
                      <Cell value={c.password} code wrap />
                      <Cell value={c.ownership} />
                      <Cell value={c.poc} />
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {devRows.length > 0 && (
            <>
              <h3 className="h-sec" style={{ fontSize: 14, margin: "28px 0 8px" }}>
                Dev mode
              </h3>
              <div className="cred-note">{devmode.note}</div>
              <div className="cred-wrap">
                <table className="cred">
                  <thead>
                    <tr>
                      <th>Account</th>
                      <th>Password</th>
                      <th>Design POC</th>
                    </tr>
                  </thead>
                  <tbody>
                    {devRows.map((a) => (
                      <tr key={a}>
                        <td className="code">{a}</td>
                        <td className="code">{devmode.password}</td>
                        <td>{devmode.poc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {rows.length === 0 && devRows.length === 0 && (
            <p className="muted" style={{ fontSize: 13 }}>
              No matches for “{q}”.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
