export const themes = [
  { tag: "01", title: "Context & tools", desc: "Case studies from four designers, and a map of the Figma file directory." },
  { tag: "02", title: "Design language", desc: "Self-study on the design system + archetype; deep sessions in UI, visual, motion." },
  { tag: "03", title: "Research & product", desc: "POD resource packs and a lived product experience, with the team lead." },
  { tag: "04", title: "Community", desc: "Exposure to noon’s offline events and the visibility of its design leads." },
];

export type Section = { heading: string; body: string };

export type Link = { label: string; href: string };

export type Module = {
  num: string;
  slug: string;
  title: string;
  when: string;
  format: string;
  owners: string[];
  summary: string;
  sections: Section[];
  links?: Link[];
};

export const modules: Module[] = [
  {
    num: "01",
    slug: "real-life-case-studies",
    title: "Real-life case studies",
    when: "WK1 · D1–2",
    format: "Produced video + live panel",
    owners: ["Ayaneshu", "Tamanna", "Sid", "Saswata"],
    summary:
      "Four designers, four lenses. Produced case-study videos plus a 30-minute live panel. Peer onboarding, not top-down.",
    sections: [
      {
        heading: "Intent",
        body: "The first thing you encounter at noon shouldn’t be a presentation about noon. It should be four real designers, from different seniorities and disciplines, talking about real work they’ve done. Peer onboarding, not top-down. It sets the tone that this is a place where craft is shared openly.",
      },
      {
        heading: "The produced videos",
        body: "Each of the four records one filmed-and-edited case study, reused for every future joiner, so it becomes a permanent artifact. Every video answers the same five questions: a project worth knowing about; the problem and how it was framed; the hardest decision and why; what it taught them about working at noon specifically; and what they’d do differently starting it today.",
      },
      {
        heading: "The live panel",
        body: "30 minutes, all four together. Roughly 2 min of intros, 20 min of one rotating anchor question each, and 8 min of open Q&A. The videos are one-way; the session is where you get to ask the question that’s actually on your mind.",
      },
    ],
  },
  {
    num: "02",
    slug: "file-directory-access",
    title: "File directory access",
    when: "WK1 · D1",
    format: "Convention + 15-min walkthrough",
    owners: ["Ayaneshu"],
    summary:
      "Figma access on Day 1, plus a 15-minute walkthrough. The structure should be self-explanatory in 15 minutes.",
    sections: [
      {
        heading: "What needs to exist",
        body: "A documented Figma structure: folder hierarchy (by POD, project, status), file-cover naming convention, internal naming (frames, components, versions), and status tags for exploration, in review, and shipped. Finalised with Ayaneshu.",
      },
      {
        heading: "Access process",
        body: "Day 1: you’re added to the workspace and your POD-specific projects. Day 2: a 15-minute live walkthrough where Ayaneshu shows the structure and points to anchor files in each POD. If a new joiner needs more than 15 minutes to navigate the directory, the structure itself needs work.",
      },
    ],
  },
  {
    num: "03",
    slug: "design-system-archetype",
    title: "Design system & archetype",
    when: "WK1 · D3–4",
    format: "Playground + Storybook",
    owners: ["Ayaneshu", "Rahul"],
    summary:
      "Field DS is noon’s design system. It was built by Ayaneshu and Rahul, with contributors across the team. It ships with a live playground and a Storybook.",
    sections: [],
    links: [
      {
        label: "Field Design System (Figma)",
        href: "https://www.figma.com/design/wFRKiKskxZ4vjIHbDVvngJ/Field-Design-System?node-id=105-6659&t=gatOrYtUx4gx8NQU-1",
      },
      { label: "Field DS playground", href: "https://field-ds-playground.vercel.app/" },
    ],
  },
  {
    num: "04",
    slug: "ui-visual-motion",
    title: "UI, visual & motion sessions",
    when: "WK2 · D6–8",
    format: "3 sessions + 3 deliverables",
    owners: ["Ayaneshu", "Tamanna", "Saswata"],
    summary:
      "Three deep dives into how noon thinks about UI, visual, and motion, each ending with a deliverable.",
    sections: [
      {
        heading: "Intent",
        body: "Not generic craft sessions. You could learn UI principles from any course. What you need is how noon thinks about UI, how noon thinks about visual, how noon thinks about motion. Each session ends with one tangible deliverable, because theory without application doesn’t stick.",
      },
      {
        heading: "The three sessions",
        body: "UI (Ayaneshu): composition, hierarchy, density, decision-making at the screen level; deliverable: a small flow using noon’s UI framework. Visual (Tamanna): colour, type, imagery, illustration, layout; deliverable: a composition exercise. Motion (Saswata): when motion clarifies, when it delights, when it gets in the way; deliverable: a small motion study.",
      },
      {
        heading: "On grading",
        body: "The deliverables aren’t graded. They’re conversation starters. You review each one with the session owner, and that conversation is the actual learning.",
      },
    ],
  },
  {
    num: "05",
    slug: "pod-research",
    title: "POD user research packs",
    when: "WK2 · D6–10",
    format: "Resource pack per POD",
    owners: ["POD seniors"],
    summary:
      "For your POD: existing features, PRDs, and 3 to 5 benchmark companies. A light-touch scan of the others.",
    sections: [
      {
        heading: "Intent",
        body: "Most onboarding says ‘go do competitive research.’ This one says: for the problem space you’re about to work in, here are the companies worth studying, the PRDs that explain the thinking, and the existing features, so you don’t redesign what already exists. It’s a shortcut to being productive in your POD by week 3.",
      },
      {
        heading: "The four PODs",
        body: "Storefront, Monetization, Cart & Checkout, Customer. Each pack contains: existing features (navigate the product with context), PRDs (how product and design conversations happen at noon), and 3 to 5 benchmark companies with a short note on what each does well.",
      },
      {
        heading: "Depth strategy",
        body: "Go deep on the POD you’re placed in; light-touch scan the other three so you can hold a conversation about any of them. Designers here work across POD boundaries, and an onboarding that produces silos is a failed onboarding. Each pack is owned by someone inside that POD, so it stays living and accurate.",
      },
    ],
  },
  {
    num: "06",
    slug: "events-buzz",
    title: "Offline events & buzz",
    when: "WK2 · ongoing",
    format: "Exposure (passive)",
    owners: ["Parallel program"],
    summary:
      "Hosted events and PR for design leads. You walk in to a team that’s already known.",
    sections: [
      {
        heading: "Intent",
        body: "A broader program with two pillars: hosted events bringing industry leaders into the noon design space alongside noon designers showing their own work; and PR for design leads through talks, articles, podcasts, and social presence. Both point the same way: the noon design team is known, and you feel it the moment you arrive.",
      },
      {
        heading: "Your role here",
        body: "Passive. If an event happens in your first two weeks, you attend. You observe how the leads you’ll work with show up in industry conversations. No prescribed homework, no ‘follow people on LinkedIn’ checklist. Buzz that has to be manufactured by the new joiner isn’t real buzz.",
      },
    ],
  },
  {
    num: "07",
    slug: "affinity",
    title: "Affinity for product & craft",
    when: "WK2 + ongoing",
    format: "Lived experience + a rhythm",
    owners: ["Team lead"],
    summary:
      "Place a real order, complete one full POD loop, then talk it through with your team lead. The conversation is the point.",
    sections: [
      {
        heading: "Lived product experience",
        body: "Place an order on noon and complete one full loop for your POD. For Storefront that’s browse → discover → purchase; for Customer it includes hitting a real friction point and going through resolution. Then talk it through with your team lead. The lead asks, you observe, they push back, you refine. That dialogue is where affinity forms. For senior joiners this may extend to a Dubai trip.",
      },
      {
        heading: "Craft as a continuous practice",
        body: "This doesn’t end with onboarding. A shared resource program, on a regular cadence, with everyone contributing and consuming: books on product and design, podcasts (including outside the discipline), long-form on how product companies made specific decisions, and internal references. It answers a quiet question: what does it look like to grow at noon? You don’t stop learning.",
      },
    ],
  },
];

export const resources: Module[] = [
  {
    num: "08",
    slug: "toolkit",
    title: "Toolkit",
    when: "reference",
    format: "Setup + access",
    owners: ["Design ops"],
    summary:
      "Everything you need installed and licensed on day one: the tool suite, the plugins we rely on, and where to get credentials.",
    sections: [
      {
        heading: "Licenses & credentials",
        body: "Where to request paid seats (Figma, plugins, stock, illustration, fonts), who approves them, and where shared credentials live. Ask in the design ops channel. Don’t buy personal seats and expense them, and don’t share logins outside the vault.",
      },
    ],
  },
  {
    num: "09",
    slug: "tech-understanding",
    title: "Tech understanding",
    when: "reference",
    format: "Primer",
    owners: ["Eng partners"],
    summary:
      "noon’s app is React Native. A designer who knows what the platform can and can’t do designs faster and ships cleaner.",
    sections: [
      {
        heading: "The stack",
        body: "The app is React Native, with a shared component library, native modules where it matters, and a design system (Plot / Field DS) that maps directly to code. Knowing this means your designs map to real components, not just rectangles, and handoff stops being a translation step.",
      },
      {
        heading: "What we support",
        body: "Target platforms and minimum versions, the libraries we standardise on (navigation, lists, gestures, and Reanimated for motion), and the easing and duration tokens that already exist in code. Design within these and handoff is trivial; design outside them and you’re asking eng to build new primitives.",
      },
      {
        heading: "Designing for RN",
        body: "Constraints worth internalising: safe areas, iOS vs Android differences, performance on long lists, and which animations are cheap versus expensive. Talk to your POD’s engineers early. A five-minute question before you design saves a redesign after.",
      },
    ],
  },
  {
    num: "10",
    slug: "taste",
    title: "taste.md",
    when: "living",
    format: "Living doc",
    owners: ["The team"],
    summary:
      "What good looks like to us right now, and who we look up to. A living snapshot of the team’s taste.",
    sections: [
      {
        heading: "What we look up to",
        body: "The products, studios, and people whose craft sets our bar. Not to copy, but to calibrate against. We keep this current; as the team’s taste moves, the list moves with it.",
      },
      {
        heading: "What we value",
        body: "Clarity over decoration. Flat surfaces and honest hierarchy. Motion that means something. Restraint. The kind of detail you only notice when it’s missing. If a screen feels loud, it probably is.",
      },
      {
        heading: "How to use it",
        body: "Read it to calibrate your eye to where the team is now. Then add to it: when something raises the bar for you, drop it in with a line on why. taste.md is only useful if it stays alive.",
      },
    ],
  },
  {
    num: "11",
    slug: "beyond-pixels",
    title: "Beyond pixels",
    when: "the team",
    format: "Shared doc",
    owners: ["Everyone"],
    summary:
      "We’re more than our Figma files. Bring what you’re into: movies, sports, the places you love.",
    sections: [
      {
        heading: "Why this exists",
        body: "The best teams know each other as people, not just collaborators. Affinity isn’t only for the product; it’s for each other. This is the part of onboarding that has nothing to do with work, which is exactly why it matters.",
      },
      {
        heading: "Bring yours",
        body: "Films you rewatch, the sport or team you follow, your favourite travel destination, the hobby nobody asked about. Add yours to the team doc. It’s how we find the overlaps, and there are always more than you’d expect.",
      },
      {
        heading: "What it unlocks",
        body: "Better conversations, easier trust, and small talk that turns into real talk. Also, surprisingly good travel and watchlist recommendations from people who actually know your taste.",
      },
    ],
  },
];

export const allModules = [...modules, ...resources];

export function getModule(slug: string) {
  return allModules.find((m) => m.slug === slug);
}

export type Credential = {
  platform: string;
  account: string;
  password: string;
  ownership: string;
  poc: string;
};

export const credentials: Credential[] = [
  { platform: "Adobe", account: "product@noon.com", password: "NoonDesign@123", ownership: "Rahul / Saswata", poc: "Rahul / Ayush" },
  { platform: "Adobe 2", account: "aykapoor@noon.com", password: "NoonDesign@123", ownership: "Sanket / Tamanna", poc: "Rahul / Ayush" },
  { platform: "Freepik", account: "product@noon.com", password: "NoonDesign@123", ownership: "Everyone", poc: "Rahul / Ayush" },
  { platform: "Mobbin", account: "mhusni@noon.com", password: "NoMoreDribbble123", ownership: "Everyone", poc: "Rahul / Ayush" },
  { platform: "ProtoPie", account: "aykapoor@noon.com", password: "NoonDesign@123", ownership: "", poc: "Rahul / Ayush" },
  { platform: "Envato Elements", account: "", password: "", ownership: "", poc: "Rahul / Ayush" },
  { platform: "Iconscout", account: "", password: "", ownership: "", poc: "" },
  { platform: "60fps.com", account: "", password: "1FFA9753-EE0E4D23-B824DE7B-D5646CC7", ownership: "", poc: "Rahul / Ayush" },
];

export const devmode = {
  note: "Do not give dev mode access to individual accounts. Instead ask them to sign in using one of these credentials.",
  password: "&&@WmfiZpvuEw7G",
  poc: "Husni",
  accounts: [
    "uaedevmode@noon.com",
    "sldevmode@noon.com",
    "egdevmode@noon.com",
    "figmadevmode@noon.com",
  ],
};

export const principles = [
  {
    title: "Affinity for product and craft is built, not assigned.",
    body: "Every module reinforces it. The new joiner places real orders, has real conversations, and reads real PRDs. Not a curriculum about noon, but exposure to how noon actually works.",
  },
  {
    title: "The new joiner is the audience in week 1, a contributor by week 2.",
    body: "Week 1 is for receiving: videos, walkthroughs, the design system. Week 2 is for producing: three deliverables, a POD deep-read, a soft hand-off. The arc is deliberate.",
  },
];

export const dependencies = [
  {
    num: "01",
    title: "Archetype self-study doc",
    body: "The Day 3 reading. Module 03 depends on this existing; the live session on Day 4 builds directly on top of it.",
  },
  {
    num: "02",
    title: "Events and PR program",
    body: "Hosted events, talks, articles, podcasts. Module 06 references this; it’s a broader, separate initiative building the team’s public presence.",
  },
  {
    num: "03",
    title: "Shared resource program",
    body: "Books, podcasts, references on a regular cadence the whole team contributes to and consumes. Module 07’s craft-as-practice layer depends on this rhythm existing.",
  },
];
