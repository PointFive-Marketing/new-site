# Design system prompt — paste into v0 or Claude

Use this to match the **PointFive / DeepWaste** visual style when prototyping new pages. For **technical/engineering pages** (FinOps, dev docs), use the **Dark technical page style** section below.

---

## Visual style summary

Clean, professional B2B SaaS look: white backgrounds, dark navy text, strong blue primary and bright green accent. Geometric sans + monospace for labels/stats. Soft blue/green glows and light gray surfaces for cards. Pill buttons and rounded cards; no heavy shadows.

---

## Colors

- **Primary blue:** `#0000EE` (links, CTAs, key numbers). Darker variant `#0000AA`; light tint `#E8E8FF` for badges/backgrounds.
- **Accent green:** `#00E639` (success, savings, “live” indicators). Darker `#00C030`; muted text `#008a22`.
- **Neutrals:** Near-black text `#0A0A1A`; gray scale: `#111127`, `#3A3A5C`, `#6B6B8D`, `#B4B4D0`, `#F0F0F8`, `#F8F8FC`; white `#FFFFFF`.
- **Backgrounds:** Default white; subtle sections use `#F8F8FC` or `#F0F0F8`. Dark sections use `#0A0A1A` with blue/green radial glows.
- **Borders:** Light gray `#F0F0F8`; on dark backgrounds use `rgba(255,255,255,0.08)` to `0.12`.

---

## Typography

- **Sans:** DM Sans (400, 500, 600, 700). System fallback: `-apple-system, BlinkMacSystemFont, sans-serif`.
- **Mono:** Space Mono for stats, labels, tags, and technical copy.
- **Scale:** Hero headline `clamp(40px, 5.5vw, 72px)`; section titles `clamp(32px, 4vw, 48px)`; body 15–19px; captions 12–14px; overlines/labels 10–12px.
- **Weights:** Body 400; labels/buttons 600–700; numbers and section labels 700.
- **Letter-spacing:** Headlines -0.03em to -0.01em; uppercase labels 0.08em–0.15em.
- **Line-height:** Headlines ~1.08–1.12; body 1.6–1.65.

---

## Spacing & layout

- **Container:** max-width 1200px, centered.
- **Section padding:** 80–100px vertical; hero 60px top / 80px bottom (40px on small screens).
- **Gaps:** 8px (badges, tight UI), 12–16px (cards, tags), 24–32px (sections), 48px (stat groups, grids).
- **Card padding:** 28–44px; smaller blocks 20–24px.

---

## Border radius

- **Small:** 6px (icons, small chips).
- **Medium:** 12px (cards, inputs).
- **Large:** 20px (grids, big panels).
- **Pills:** 100px for badges, tabs, and primary buttons.

---

## Components

- **Badges:** Light blue background (`#E8E8FF`), blue text, 6–8px horizontal padding, pill radius; optional green dot for “live.”
- **Cards:** White or `#F8F8FC`, 1px gray border, 12px radius; hover: blue border and soft blue shadow `0 4px 16px rgba(0,0,238,0.08)`.
- **Tabs (on dark):** Pill shape, transparent by default with white border ~0.12 opacity; active: solid blue bg, white text.
- **Buttons (primary):** Solid blue; white text; pill radius; hover: slight lift and shadow. On blue CTA sections, inverse (white bg, blue text).
- **Stats:** Mono font, large blue numbers (42px desktop, 32px mobile), small gray uppercase labels.
- **Section labels:** Mono, 12px, uppercase, blue or green (on dark), 0.15em letter-spacing, bold.

---

## Dark sections

- Background `#0A0A1A`; text white and `#B4B4D0`.
- Radial gradients: blue `rgba(0,0,238,0.12)` and green `rgba(0,230,57,0.06)` for atmosphere.
- Cards: `rgba(255,255,255,0.04)` bg, border `rgba(255,255,255,0.08)`; hover border blue tint.
- Provider badges: AWS orange, Azure blue, GCP blue, K8s purple, Snowflake cyan — each with ~15% opacity background.

---

## Dark technical page style (DeepWaste / engineering aesthetic)

Use this for pages targeting **technical audiences** (engineers, FinOps).

- **Full dark background:** `#0A0A1A` — no alternating light sections; page stays dark.
- **Section labels:** Space Mono, green `#00E639`, uppercase, 0.15em letter-spacing. Use for overlines like "Detection catalog" or "How it works."
- **Marketing headlines:** DM Sans, white, large and tight (`letter-spacing: -0.03em`). Reserve white for headlines only.
- **Body copy:** `#B4B4D0` for all paragraphs and descriptions — never pure white for body text.
- **Code-style callouts:** Monospace (Space Mono), dark card background (`rgba(255,255,255,0.04)` or similar), green or blue **accent border on the left** (4px solid `#00E639` or `#0000EE`). Use for commands, config snippets, or technical one-liners.
- **Headline + technical detail:** Pair a bold human headline (DM Sans, white) with a technical line underneath — e.g. "We find what others miss" with `// 347 waste patterns detected` in mono, muted. Creates the engineer-friendly "claim + proof" pattern.
- **Opportunity / feature cards:** Dark card bg, subtle border (`rgba(255,255,255,0.08)`), 12px radius; **provider badge in corner** (AWS, Azure, GCP, K8s, etc.) with the existing provider colors. Title in white, body in `#B4B4D0`.

---

## Motion

- Transitions: 0.25s–0.35s ease for hover (background, border, transform).
- Hover: cards `translateY(-2px)`; buttons slight lift and shadow.
- Scroll reveal: fade-in-up (opacity 0→1, translateY 20px→0) with small stagger.

---

## Don’t

- Avoid heavy drop shadows and busy patterns.
- No neon or saturated purples/pinks as primary.
- Keep radius consistent (no mix of sharp and very round).
- Don’t use a second sans for body — stick to DM Sans + Space Mono.

---

When generating UI, prefer this palette, DM Sans + Space Mono, pill/rounded shapes, and the spacing/radius scale above so new pages feel like the same product.
