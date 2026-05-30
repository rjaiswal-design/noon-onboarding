import Link from "next/link";
import { modules, resources, packs } from "../content";

/**
 * Left rail for module pages. Mirrors the in-doc nav pattern from
 * the Liveline reference: `← Index` at the top, then a list of
 * sibling modules under the current group, with the active page
 * highlighted. Stays sticky so the reader can jump without losing
 * scroll position on a long page.
 */
export default function ModuleSidebar({
  currentSlug,
}: {
  currentSlug: string;
}) {
  // Resolve which group the current module sits in. Packs are their
  // own thing — separate from the index page's Ways/Reference framing.
  let siblings = modules;
  let groupLabel = "How we work";
  if (resources.some((m) => m.slug === currentSlug)) {
    siblings = resources;
    groupLabel = "Culture";
  } else if (packs.some((m) => m.slug === currentSlug)) {
    siblings = packs;
    groupLabel = "POD packs";
  }

  return (
    <nav className="module-rail" aria-label="Module navigation">
      <Link href="/" className="plain nav-index rail-index">
        ← Index
      </Link>

      <div className="rail-eyebrow">{groupLabel}</div>
      <div className="rail-group">
        {siblings.map((m) => {
          const isCurrent = m.slug === currentSlug;
          return (
            <Link
              key={m.slug}
              href={`/m/${m.slug}`}
              className={
                isCurrent ? "plain rail-item is-current" : "plain rail-item"
              }
              aria-current={isCurrent ? "page" : undefined}
            >
              {m.title}
              {m.wip && <span className="wip-chip">WIP</span>}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
