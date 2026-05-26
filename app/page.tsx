import Link from "next/link";
import { modules } from "./content";
import { Rule, TopBar, SiteFooter } from "./_components";

export default function IndexPage() {
  return (
    <div className="doc">
      <TopBar />

      {/* header */}
      <span className="eyebrow">A note from Rahul · Designer onboarding</span>
      <h1 className="h-title" style={{ marginTop: 12 }}>
        Hey — this is Rahul.
      </h1>
      <p className="muted" style={{ margin: "6px 0 0", fontSize: 13 }}>
        Joined noon 3 March, 2025 · written for whoever joins next
      </p>

      <p style={{ marginTop: 28 }}>
        I joined noon on <span className="em">3 March, 2025</span>, and I&apos;m
        on a mission to make noon the{" "}
        <span className="em">best commerce app from a consumer&apos;s point of
        view</span>. Before you join the squad that{" "}
        <span className="em">Ayush and I</span> have built, I want to give you
        some highlights of how we go about it.
      </p>

      <p style={{ marginTop: 16 }}>
        This is the first two weeks for any new designer here — not a product
        tour, but enough context, language, exposure, and belonging to start
        contributing with confidence by the end of week 2. Seven modules, four
        themes, two principles.
      </p>

      <Rule />

      {/* the fold — 7 modules, each its own page */}
      <section id="modules">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 14,
          }}
        >
          <h2 className="h-sec">Seven modules</h2>
          <span className="muted" style={{ fontSize: 12 }}>
            wk1 → wk2
          </span>
        </div>

        <div>
          {modules.map((m) => (
            <Link key={m.num} href={`/m/${m.slug}`} className="mod-row">
              <span className="mod-num">{m.num}</span>
              <span className="mod-name">{m.title}</span>
              <span className="mod-when">{m.when}</span>
            </Link>
          ))}
        </div>
      </section>

      <Rule />

      {/* secondary index */}
      <section>
        <h2 className="h-sec" style={{ marginBottom: 14 }}>
          Also in here
        </h2>
        <div>
          <Link href="/principles" className="mod-row">
            <span className="mod-num">→</span>
            <span className="mod-name">Two principles</span>
            <span className="mod-when">why it’s built this way</span>
          </Link>
          <Link href="/workstreams" className="mod-row">
            <span className="mod-num">→</span>
            <span className="mod-name">Parallel workstreams</span>
            <span className="mod-when">3 dependencies</span>
          </Link>
        </div>
      </section>

      <Rule />

      <SiteFooter />
    </div>
  );
}
