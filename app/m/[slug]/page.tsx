import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { modules, getModule } from "../../content";
import { Rule, TopBar, Meta, SiteFooter } from "../../_components";

export function generateStaticParams() {
  return modules.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const m = getModule(slug);
  if (!m) return { title: "Not found · noon onboarding" };
  return {
    title: `${m.num} · ${m.title} — noon onboarding`,
    description: m.summary,
  };
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const m = getModule(slug);
  if (!m) notFound();

  const idx = modules.findIndex((x) => x.slug === m.slug);
  const prev = idx > 0 ? modules[idx - 1] : null;
  const next = idx < modules.length - 1 ? modules[idx + 1] : null;

  return (
    <div className="doc">
      <TopBar back />

      <span className="eyebrow">
        Module {m.num} · {m.when}
      </span>
      <h1 className="h-title" style={{ marginTop: 12 }}>
        {m.title}
      </h1>
      <p style={{ marginTop: 16 }}>{m.summary}</p>

      <div
        className="muted"
        style={{ fontSize: 12, marginTop: 14, display: "flex", gap: 8, flexWrap: "wrap" }}
      >
        <Meta label="when" value={m.when} />
        <span>·</span>
        <Meta label="format" value={m.format} />
        <span>·</span>
        <Meta label="owners" value={m.owners.join(", ")} />
      </div>

      <Rule />

      <section style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {m.sections.map((s) => (
          <div key={s.heading}>
            <h2 className="h-sec" style={{ marginBottom: 8 }}>
              {s.heading}
            </h2>
            <p style={{ margin: 0 }}>{s.body}</p>
          </div>
        ))}
      </section>

      <Rule />

      {/* prev / next */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 16,
          fontSize: 13,
        }}
      >
        {prev ? (
          <Link href={`/m/${prev.slug}`} className="plain">
            <span className="muted">← {prev.num}</span> {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link href={`/m/${next.slug}`} className="plain" style={{ textAlign: "right" }}>
            {next.title} <span className="muted">{next.num} →</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>

      <Rule />

      <SiteFooter />
    </div>
  );
}
