import Link from "next/link";
import { modules, resources } from "./content";
import { Rule, TopBar, SiteFooter } from "./_components";
import StaggerList from "./_components/StaggerList";

export default function IndexPage() {
  return (
    <div className="doc">
      <TopBar />

      {/* header */}
      <h1 className="h-title">
        Hey, this is Rahul.
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
        This is the first two weeks for any new designer here. Not a product
        tour, but enough context, language, exposure, and belonging to start
        contributing with confidence by the end of week 2. Six ways of working,
        five reference and culture sections, two principles.
      </p>

      <Rule />

      {/* ways of working */}
      <section id="modules">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 14,
          }}
        >
          <h2 className="h-sec">Ways of working</h2>
          <span className="muted" style={{ fontSize: 12 }}>
            the basics
          </span>
        </div>

        <div>
          <StaggerList>
            {modules.map((m) => (
              <Link key={m.num} href={`/m/${m.slug}`} className="mod-row">
                <span className="mod-num">{m.num}</span>
                <span className="mod-name">{m.title}</span>
                <span className="mod-when">{m.when}</span>
              </Link>
            ))}
          </StaggerList>
        </div>
      </section>

      <Rule />

      {/* reference & culture group */}
      <section id="reference">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 14,
          }}
        >
          <h2 className="h-sec">Reference & culture</h2>
          <span className="muted" style={{ fontSize: 12 }}>
            living
          </span>
        </div>

        <div>
          <StaggerList>
            {resources.map((m) => (
              <Link key={m.num} href={`/m/${m.slug}`} className="mod-row">
                <span className="mod-num">{m.num}</span>
                <span className="mod-name">{m.title}</span>
                <span className="mod-when">{m.when}</span>
              </Link>
            ))}
          </StaggerList>
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
