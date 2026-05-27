"use client";
import { useState } from "react";
import { credentials, devmode } from "./content";

function Cell({ value, code, wrap }: { value: string; code?: boolean; wrap?: boolean }) {
  if (!value) return <td />;
  const cls = code ? (wrap ? "code wrap" : "code") : undefined;
  return <td className={cls}>{value}</td>;
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* clipboard unavailable */
    }
  };
  return (
    <button
      type="button"
      className={copied ? "copy-btn copied" : "copy-btn"}
      onClick={copy}
      aria-label={`Copy ${value}`}
      title={copied ? "Copied" : "Copy"}
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

function CopyCell({ value, wrap }: { value: string; wrap?: boolean }) {
  if (!value) return <td />;
  return (
    <td className={wrap ? "code wrap copycell" : "code copycell"}>
      <div className="copycell-inner">
        <span className="cred-val">{value}</span>
        <CopyButton value={value} />
      </div>
    </td>
  );
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
                  </tr>
                </thead>
                <tbody>
                  {rows.map((c) => (
                    <tr key={c.platform}>
                      <td className="k">{c.platform}</td>
                      <CopyCell value={c.account} />
                      <CopyCell value={c.password} wrap />
                      <Cell value={c.ownership} />
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
                    </tr>
                  </thead>
                  <tbody>
                    {devRows.map((a) => (
                      <tr key={a}>
                        <CopyCell value={a} />
                        <CopyCell value={devmode.password} />
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
