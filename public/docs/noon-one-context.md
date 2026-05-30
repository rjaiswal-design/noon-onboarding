# noon One — Product Context

*A single source of truth for the noon One subscription program: what it is, who it serves, how it's structured, the current numbers, who we compete with, and where the team is pushing. Built for fast onboarding and as a reference base for feature ideation.*

*Last refreshed: May 2026 · Mix of public information + internal docs (Sharing PRD, market FAQs, recent initiative notes) + the ONE Central dashboard.*

---

## 1. The one-liner

noon One is the paid membership program of **noon** — the Middle East's largest super app, spanning e-commerce, food delivery, and quick commerce. For a flat monthly or annual fee it converts a transactional shopper into a committed member through **unlimited free delivery, recurring member-only deals, and bundled entertainment**, deepening engagement across every noon vertical.

**Scale today:** ~1.2 million members (see §4 for the live dashboard breakdown).

**The job it does for the business:** noon One is the connective tissue of the super app. noon's revenue comes from three arms — e-commerce, food, and quick commerce — that a typical user touches in isolation. One membership that pays off across all three is the mechanism that turns a "noon.com shopper" or a "noon Food user" into a *noon* user. Every noon One feature is therefore evaluated against one of two mandates: **acquisition** (bring new paying members in) or **retention** (keep them, and lift their cross-vertical frequency).

---

## 2. Why a super-app subscription is different

This is the strategic backdrop worth internalizing before designing anything.

- **Multi-vertical payoff is the moat.** A standalone food-delivery sub (free delivery on food) or a retail sub (free shipping) is easy for a competitor to match. A membership whose value compounds across groceries *and* restaurant meals *and* 15-minute essentials *and* big-ticket retail *and* streaming is much harder to replicate and much stickier once a member has "activated" two or more verticals.
- **Frequency drives the unit economics.** Quick commerce (noon Minutes) and food (noon Food) are high-frequency, low-basket. E-commerce is low-frequency, high-basket. Free delivery is most "abused" exactly where we want behavior change — the small, frequent orders — which is the cost we pay to manufacture a daily habit. The retention math only works if that habit then carries the member into the high-margin verticals.
- **The savings narrative is the product.** Members don't experience "a subscription"; they experience a running tally of money saved. The in-app savings tracker (delivery saved + coupon value) is a core retention surface, not a nice-to-have — it's the argument against churn, made continuously.

---

## 3. Markets, plans & pricing

noon One runs in **UAE** and **KSA**, with market- and partner-specific plan structures. Pricing below is the *base / rack rate*; most members enter via a trial or a promotional/bundle/bank price, not the rack rate.

### Plan landscape

| Market | Plan | Base price | Notes |
|---|---|---|---|
| **UAE** | One Monthly | AED 24.99 / mo | Standard entry plan |
| UAE | One Annual | — (up to ~60% cheaper per month) | Best value; commitment play |
| UAE | Bundle Monthly (OSN+ & Yango) | Promotional | Membership + streaming |
| UAE | Duo Plan *(upcoming)* | TBD (~AED 39.99, 2 seats) | Sharing — see §9 |
| UAE | Family Plan *(upcoming)* | TBD (~AED 49.99, 5 seats) | Sharing — see §9 |
| **KSA** | One **Premium** Monthly | SAR 29.99 / mo | Major cities (Riyadh, Jeddah, Makkah, Madinah, Dammam, Al Khobar, Al Dhahran + nearby) |
| KSA | One **Standard** | — | All other regions of the Kingdom |
| KSA | **VIP core** | SAR 19.99 / mo | Lower price tier |
| KSA | OSN+ Monthly / Annual | Promotional | Streaming bundle |
| KSA | Duo / Family *(upcoming)* | TBD | Sharing — see §9 |

> **KSA's Premium vs. Standard split is geographic** — Premium (full quick-commerce + same-day coverage) is live in the big metros; Standard covers the rest of the Kingdom where the fast-delivery network is still expanding.

### Trial & billing mechanics
- **Free trial:** available to anyone who has never used noon One (matched on email + phone). Length varies by offer and is shown before confirmation; includes all paid benefits.
- **Auto-renewal:** charged at trial end on the selected plan, then at the start of each term.
- **Cancellation:** turn off auto-renew up to **24 hours** before renewal (My Account → noon One → Manage Membership). Access continues to end of cycle. **Non-refundable.**
- **Payment failure:** **3-day grace period** to update payment; unresolved → cancelled. Lapsing off a promo price means re-subscribing at then-current prices.
- **Termination for cause:** fraud, bulk/multi-account purchasing abuse, or loyalty-program misuse → membership can be terminated without notice, accrued benefits forfeited, no refund.

---

## 4. Program metrics — current snapshot

> Source: the **ONE Central** Looker dashboard, last-6-months view, Marketplace filter = "Yapp", read end of May 2026. Figures are dashboard readings (rounded as displayed) under that filter, so treat them as directional rather than audited finance numbers. KSA revenue cards are labelled "AED" in the dashboard — that appears to be a display artifact, since KSA pricing is set in SAR.

### Headline (as of yesterday)

| Metric | UAE | KSA |
|---|---|---|
| Acquisitions to date (cumulative) | 1,895 k | 2,376 k |
| Active members | 564 k | 338 k |
| Paid members | 494 k | 249 k |
| Trial members | 70 k | 89 k |

### Last 6 months

| Metric | UAE | KSA |
|---|---|---|
| New acquisitions | 318 k | 467 k |
| → of which paid | 107 k | 76 k |
| → of which trial | 35 k | 72 k |
| Entry vertical (where they joined) | Minutes 136k · Food 105k · Core/noon 72k | Core/noon ~329k (food & minutes smaller) |
| Plan mix | ~95% monthly | ~85–90% monthly |
| MTD acquisitions, Dec → May | 62k · 63k · 55k · 47k · 45k · 46k | 102k · 99k · 73k · 83k · 58k · 53k |

### Subscription economics

| Metric | UAE | KSA |
|---|---|---|
| Total subscriptions sold | 2.00 M | 0.65 M |
| Total subscription revenue | 52.0 M | 25.5 M |
| Avg. selling price (ASP) | 26 | 40 |
| Revenue per customer | 78 | 77 |
| Avg. customer life | 1.6 months | 1.4 months |
| Monthly sub revenue, Dec → May | 5.5M · 5.7M · 7.1M · 9.1M · 13.2M · 10.7M | 3.2M · 2.3M · 3.0M · 4.3M · 4.4M · 4.3M |

### Member value vs. regular shoppers

| Metric | UAE (One vs Regular) | KSA (One vs Regular) |
|---|---|---|
| TPC (transactions per customer) | ~1.3 vs ~1.1 | ~1.15 vs ~1.05 |
| AOV (avg order value) | ~80 vs ~67 | ~150 vs ~115 |
| One share of total GMV | ~40% | ~15% |
| One share of total orders | ~50–55% | ~20% |

### What the trend says (worth flagging)

- **The active base is contracting in both markets, KSA more sharply.** UAE active subs peaked ~671k in mid-Feb and have drifted to ~563k; KSA peaked ~561k in early Feb and fell to ~344k. Acquisition is still flowing, so over recent months **churn is outpacing new joins** — a direct retention signal that maps to the activation-cliff blind spot in §10.
- **New-acquisition momentum is softening** (MTD Dec→May falls in both markets) **even as subscription revenue climbs** (UAE Dec 5.5M → Apr 13.2M). Revenue is being carried by price / Annual mix and the existing base, not by accelerating new joins.
- **UAE is the deeper, more mature market; KSA is earlier but higher-basket.** UAE runs ~40% GMV share and ~50%+ order share vs KSA's ~15% / ~20% — but KSA's One AOV (~150) and ASP (40) sit well above UAE, so the KSA prize is *penetration*, not value-per-order.
- **Members out-transact and out-spend regular shoppers in both markets** (higher TPC and AOV) — the core "the membership works" proof point behind the savings narrative.

> Reconciliation note: the ~900k combined AE+KSA active members on this filter sits below the ~1.2M headline membership figure — likely a filter/definition difference (the dashboard view is scoped to the "Yapp" marketplace). Worth reconciling before quoting either number externally.

---

## 5. The benefits, vertical by vertical

noon One spans five surfaces. The defining benefit is **unlimited free delivery above a minimum order value (MOV)** per surface, plus member pricing.

### Free-delivery MOVs

| Surface | UAE MOV | KSA MOV | What it is |
|---|---|---|---|
| **noon** (e-commerce) | AED 50+ next-day · AED 100+ same-day | SAR 50+ / SAR 100+ | Core marketplace; Express items only, excludes bulky/seller-shipped |
| **noon Food** | AED 30+ | SAR 30+ | Restaurant delivery |
| **noon Minutes** | AED 25+ | SAR 30+ | 15-minute quick commerce |
| **Supermall** | AED 50+ | SAR 50+ | Curated/branded marketplace |
| **NowNow** | AED 50+ | SAR 150+ | Convenience / grocery delivery |

*Service fees, bulky-item fees, and cut-off times can still apply; eligibility is flagged on the product page at checkout.*

### Beyond free delivery
- **noon One Day** — the flagship recurring hook. A members-only mega-sale on the **1st of every month** with special prices, stacked coupons, and bank offers across all platforms. This is the program's heartbeat moment and a primary re-engagement trigger.
- **Member-only deals** — exclusive discounts and coupons year-round, amplified during major sale events (members often save AED/SAR 75+ per order).
- **Priority customer support** — faster, prioritized CS handling.
- **Streaming** — up to **50% off** (or bundled) entertainment via partners (see §6).
- **Savings tracker** — every free/discounted delivery and every coupon's full face value is logged to the member's running savings total.

---

## 6. Partnerships

Partnerships are how noon One extends value beyond noon's own verticals — the lever that makes the membership feel bigger than "free delivery."

### Streaming / entertainment
- **OSN+** — exclusive regional home of HBO, Discovery+, and Hollywood content. Offered as a discounted noon One bundle (save up to ~50% vs. buying separately).
- **Yango (Yango Play = Yango Plus)** — Yango's all-in-one entertainment app: movies, series, music, mini-games, and live TV, bundled into noon One. *Yango Play and Yango Plus are the same product — two names for one subscription.* The combined **Yango × noon One** push (~Nov 2025) ran an intro promo (≈AED 4.99/mo for the first 3 months) bundling ride cashback, music, video, and noon free delivery — signalling a move toward "everyday essentials" bundling, not just shopping.

### Banking / co-brand cards
Co-brand cards drive long-tenure acquisition by giving away long free-membership runways:
- **Emirates NBD noon One Visa Credit Card (UAE)** — **1 year free** noon One on activation, then **50% off monthly for the card's lifetime**; plus card-level perks (e.g., extra % off across noon surfaces, noon credits back).
- **SAB / SABB noon One Visa (KSA)** — **2 years free** noon One **Premium** on activation; existing members get the free run appended after their current cycle.

> Bank-card members are a structurally different cohort: they arrive pre-committed for 1–2 years and shouldn't be hit with the same trial/promo nudges as organic members (this is already an explicit segmentation rule in the plan-page logic).

---

## 7. Who we compete with

noon One sits in a crowded MENA subscription market and borrows playbooks from global super-app subs. Treat the items below as the *landscape* to benchmark properly in a dedicated pass — pricing and feature specifics move fast and should be re-verified before any competitive claim ships.

### Region (UAE / KSA)
- **Amazon Prime** — the direct e-commerce analog; free/fast shipping + Prime Video. The reference point for "shopping membership," strong on content, weaker on local food/quick-commerce integration.
- **talabat pro / talabat go** (Delivery Hero) — food + q-commerce delivery savings; the direct threat on the food/grocery frequency game.
- **Careem Plus** — super-app sub spanning rides, food (Careem), and more — the closest structural mirror to noon One's multi-vertical logic, anchored on mobility.
- **Deliveroo Plus**, **HungerStation / Jahez / Mrsool (KSA)** — category-specific delivery subs that compete for the same "free delivery" mental slot in food.

### Global super-app / membership inspiration
- **Amazon Prime / Walmart+** (US) — the canonical retail-membership + content flywheel.
- **Swiggy One / Zomato Gold** (India) — multi-vertical food + q-commerce subs; sharp at habit formation, gamified savings, and "unlock more by ordering more."
- **Meituan / 美团** (China) — the super-app membership benchmark for bundling food, retail, and services at scale.
- **Yandex Plus** (Russia) — the model for entertainment-led bundling (content + cashback + delivery) — directly relevant given the Yango/Yandex lineage of our streaming bundle.
- **Spotify Duo / Family** — the explicit reference for our upcoming sharing plans (separate accounts, no household lock) vs. Netflix's household-locked model.

---

## 8. Behavioral signals & data we've established

These are the validated signals currently shaping the roadmap (primarily from the sharing analysis):

- **48%** of noon One users share a payment method with another account (vs. **38%** of regular users) → value is already being shared informally.
- **35%** of UAE noon One accounts are logged in on **more than two devices** (vs. **18%** of the general cohort).
- **~90%** of users share Wi-Fi with a cluster of **2–10 people**; of the shared-Wi-Fi pairs, an estimated **~40% are 2-person clusters** (couples, flatmates, parent-and-child) — a segment a 5-seat family plan over-serves.

**Implication:** sharing happens at two distinct tiers (tight pairs vs. 3–5 groups), and there's a large pool of unpaid "gray-area" sharing that the right plan structure could convert into paid seats.

---

## 9. Active workstreams & roadmap

What the team is currently building or scoping:

- **One Sharing Plans — Duo (2 seats) + Family (5 seats).** Separate accounts, separate order payments, one billed owner. Positioned Spotify-style (no household lock). Goals: net-new member acquisition via groups, TPC lift across a member's network, better M1/M3 retention by making cancellation a *collective* decision. Open items: pricing floors (Duo cannibalizing Annual?), invite-link rules, rejoin cooldowns, receiver-side discovery (invite-request flows). *Status: PRD in review.*
- **Landing funnel / One revamp.** Reworking the noon One landing + plan-selection experience and the funnel instrumentation behind it.
- **noon One × Minutes & Foods initiatives.** Tightening the membership's pull into the high-frequency verticals — order notifications for retries, coupon integration, and the noon One toggle design (benchmarked against external platforms).

### Standing design/segmentation rules already in play
- Plan-page treatment differs by eligibility state: trial-eligible, bundle-only trial, ENBD trial vs. non-trial (no family promo, plans behind "view all"), and no-trial users each see a different promotion.
- Member-state matters everywhere: **Non / Past / On-trial / Active / Expiring-soon** users get different copy and CTAs on every discovery surface.

---

## 10. The strategic lens for new features

A working checklist when ideating any noon One feature, in the spirit of "every feature is acquisition or retention":

1. **Which mandate?** Be explicit — is this pulling new members in, or lifting frequency / cutting churn for existing ones? Features that try to do both vaguely usually do neither.
2. **Does it compound across verticals?** The defensible ideas make the *cross-vertical* payoff more visible or more rewarding (e.g., "you've saved X across food + groceries this month"), not just deepen a single vertical.
3. **Does it strengthen the savings narrative?** If a member can't see what the membership did for them, the renewal argument weakens.
4. **What's the cohort?** Organic, bank-card, bundle, trial, and shared-plan members behave differently and should rarely get identical treatment.
5. **Where's the blind spot?** Three recurring ones worth probing: (a) **receiver-side / inbound demand** — most discovery is sender-driven, but the person *asking to be added* is the more motivated party; (b) **the activation cliff** — a member who only ever uses one vertical is a churn risk dressed as an active user, and the §4 active-subs decline suggests this is biting now; (c) **KSA penetration** — strong AOV but low GMV/order share means the value is real but under-distributed.

---

## 11. Glossary

- **TPC** — transactions per customer; the cross-vertical frequency metric the program ultimately moves.
- **AOV** — average order value.
- **MOV** — minimum order value required to unlock free delivery on a given surface.
- **ASP** — average (subscription) selling price; blended price actually paid across plans/promos.
- **MTD / MAD** — month-to-date / month-average-day, the comparison basis on the acquisition and revenue graphs.
- **DOD / WOW** — day-on-day / week-on-week.
- **noon One Day** — the members-only mega-sale on the 1st of each month.
- **Premium / Standard (KSA)** — geographic plan split; Premium in major metros, Standard elsewhere.
- **VIP core (KSA)** — a lower-priced (SAR 19.99) plan tier.
- **Bundle plan** — noon One sold together with streaming (OSN+ / Yango).
- **Owner / member / seat** — terms for the upcoming Duo & Family sharing plans (owner is billed; members hold seats with their own accounts).

---

*Sources: the ONE Central Looker dashboard (May 2026, Marketplace = Yapp, last 6 months); noon One market FAQ docs (UAE / KSA); the One Sharing Plan PRD; recent Minutes & Foods initiative notes; and public launch/partnership communications. Dashboard figures are directional reads under one filter. Competitor pricing and feature specifics should be re-benchmarked in a dedicated pass before being used in any external or decision-grade artifact.*
