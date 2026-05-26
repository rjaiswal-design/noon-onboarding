export const themes = [
  {
    tag: "01",
    title: "Context & tools",
    desc: "Case studies from four designers, and a map of the Figma file directory.",
  },
  {
    tag: "02",
    title: "Design language",
    desc: "Self-study on the design system + archetype; deep sessions in UI, visual, motion.",
  },
  {
    tag: "03",
    title: "Research & product",
    desc: "POD resource packs and a lived product experience, with the team lead.",
  },
  {
    tag: "04",
    title: "Community",
    desc: "Exposure to noon’s offline events and the visibility of its design leads.",
  },
];

export type Module = {
  num: string;
  section: string;
  title: string;
  body: string;
  when: string;
  format: string;
  owners: string[];
};

export const modules: Module[] = [
  {
    num: "01",
    section: "S1",
    title: "Real-life case studies",
    body: "Four designers, four lenses. Produced case-study videos plus a 30-min live panel. Peer onboarding, not top-down — sets the tone that craft is shared openly here.",
    when: "WK1 · D1–2",
    format: "Video + live panel",
    owners: ["Ayaneshu", "Tamanna", "Sid", "Saswata"],
  },
  {
    num: "02",
    section: "S2",
    title: "File directory access",
    body: "Figma access on Day 1, plus a 15-min walkthrough of the folder hierarchy, file cover convention, internal naming, and status tags. Self-explanatory in 15 minutes.",
    when: "WK1 · D1",
    format: "Convention + walkthrough",
    owners: ["Ayaneshu"],
  },
  {
    num: "03",
    section: "S3",
    title: "Design system & archetype",
    body: "Why we reach for what we reach for. A bottom sheet isn’t one thing — it’s five, depending on intent. Self-study doc + a live session that takes the framework and applies it.",
    when: "WK1 · D3–4",
    format: "Self-study + live",
    owners: ["Design Lead"],
  },
  {
    num: "04",
    section: "S4",
    title: "UI, visual & motion sessions",
    body: "Three deep dives into how noon thinks about UI, visual, and motion — each ending with a deliverable. Not graded; the conversation with the session owner is the actual learning.",
    when: "WK2 · D6–8",
    format: "3 sessions + 3 deliverables",
    owners: ["Ayaneshu", "Tamanna", "Saswata"],
  },
  {
    num: "05",
    section: "S5",
    title: "POD user research packs",
    body: "For your POD: existing features, PRDs, and 3–5 benchmark companies that do this problem space well. Light-touch scan of the other three PODs so you can hold a conversation across boundaries.",
    when: "WK2 · D6–10",
    format: "Resource pack per POD",
    owners: ["POD seniors"],
  },
  {
    num: "06",
    section: "S6",
    title: "Offline events & buzz",
    body: "Hosted events with industry leaders alongside noon designers, and PR for design leads. New joiners walk in to a team that’s already known — exposure is passive, no homework.",
    when: "WK2 · ongoing",
    format: "Exposure (passive)",
    owners: ["Parallel program"],
  },
  {
    num: "07",
    section: "S7",
    title: "Affinity for product & craft",
    body: "Place a real order, complete one full POD loop, then talk it through with your team lead. The conversation is the point. A shared resource program keeps craft as a continuous practice.",
    when: "WK2 + ongoing",
    format: "Lived experience + rhythm",
    owners: ["Team lead"],
  },
];

export const principles = [
  {
    title: "Affinity for product and craft is built, not assigned.",
    body: "Every module reinforces it. The new joiner places real orders, has real conversations, and reads real PRDs — not a curriculum about noon, but exposure to how noon actually works.",
  },
  {
    title: "The new joiner is the audience in week 1, a contributor by week 2.",
    body: "Week 1 is for receiving — videos, walkthroughs, the design system. Week 2 is for producing — three deliverables, a POD deep-read, a soft hand-off. The arc is deliberate.",
  },
];

export const dependencies = [
  {
    num: "01",
    title: "Archetype self-study doc",
    body: "The Day-3 reading. Section 3 depends on this existing — the live session on Day 4 builds directly on top of it.",
  },
  {
    num: "02",
    title: "Events and PR program",
    body: "Hosted events, talks, articles, podcasts. Section 6 references this — it’s a broader, separate initiative building the team’s public presence.",
  },
  {
    num: "03",
    title: "Shared resource program",
    body: "Books, podcasts, references — a regular cadence the whole team contributes to and consumes. Section 7’s craft-as-practice layer depends on this rhythm existing.",
  },
];

export const ownerInitials: Record<string, string> = {
  Ayaneshu: "AY",
  Tamanna: "TA",
  Sid: "SI",
  Saswata: "SW",
  "Design Lead": "DL",
  "POD seniors": "PS",
  "Team lead": "TL",
  "Parallel program": "PP",
};
