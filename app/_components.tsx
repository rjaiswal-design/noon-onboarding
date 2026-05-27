import Link from "next/link";

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
