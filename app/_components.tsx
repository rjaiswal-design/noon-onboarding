import Link from "next/link";
import { credentials, devmode } from "./content";

function Cell({ value, code }: { value: string; code?: boolean }) {
  if (!value) return <td className="dash">·</td>;
  return <td className={code ? "code" : undefined}>{value}</td>;
}

export function CredentialsTable() {
  return (
    <div>
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
          {credentials.map((c) => (
            <tr key={c.platform}>
              <td className="k">{c.platform}</td>
              <Cell value={c.account} code />
              <Cell value={c.password} code />
              <Cell value={c.ownership} />
              <Cell value={c.poc} />
            </tr>
          ))}
        </tbody>
      </table>

      <h3
        className="h-sec"
        style={{ fontSize: 14, margin: "28px 0 8px" }}
      >
        Dev mode
      </h3>
      <div className="cred-note">{devmode.note}</div>
      <table className="cred">
        <thead>
          <tr>
            <th>Account</th>
            <th>Password</th>
            <th>Design POC</th>
          </tr>
        </thead>
        <tbody>
          {devmode.accounts.map((a) => (
            <tr key={a}>
              <td className="code">{a}</td>
              <td className="code">{devmode.password}</td>
              <td>{devmode.poc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Rule() {
  return (
    <div className="rule" aria-hidden>
      * * *
    </div>
  );
}

export function TopBar({ back }: { back?: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        marginBottom: 56,
      }}
    >
      <Link href="/" className="plain nav-index">
        {back ? "[ ← Index ]" : "[ Index ]"}
      </Link>
      <span className="muted" style={{ fontSize: 12 }}>
        Rahul Jaiswal · noon
      </span>
    </div>
  );
}

export function Meta({ label, value }: { label: string; value: string }) {
  return (
    <span>
      <span className="muted">{label}:</span>{" "}
      <span className="fg">{value}</span>
    </span>
  );
}

export function SiteFooter() {
  return (
    <footer className="muted" style={{ fontSize: 12 }}>
      <p style={{ margin: 0 }}>
        Written by <span className="fg">Rahul Jaiswal</span>. Module owners:
        Ayaneshu, Tamanna, Saswata, Sid, design + team leads, POD seniors. Built
        on the{" "}
        <a href="https://github.com/rjaiswal-design/plot-ui">Plot UI kit</a>.
      </p>
      <p style={{ margin: "8px 0 0" }}>
        noon / design / onboarding · document v1
      </p>
    </footer>
  );
}
