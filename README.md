# PointFive marketing site (local)

Next.js 16 + Tailwind + shadcn-style UI. Run locally to edit messaging and layout before redeploying to Vercel.

## Run locally

```bash
cd pointfive-site
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

| Area | File | What to edit |
|------|------|--------------|
| **Hero** | `components/hero-section.tsx` | Headline, subcopy, badge, CTAs |
| **Stats** | `components/stats-section.tsx` | Numbers and labels |
| **Pillars** | `components/pillars-section.tsx` | InfraFabric, DeepWaste™, Agentic copy |
| **Testimonial** | `components/testimonial-section.tsx` | Nubank quote, G2 ratings |
| **CTA** | `components/cta-banner.tsx` | Bottom CTA headline and links |
| **Footer** | `components/footer.tsx` | Links, copyright |
| **Logo bar** | `components/logo-bar.tsx` | Logo strip (if used) |
| **Global** | `app/globals.css` | Design tokens (colors, radius) |
| **Meta** | `app/layout.tsx` | Title, description, theme color |

PointFive messaging and stats live in the project rule (`.cursor/rules/pointfive-messaging.mdc`) — use that for consistency when rewriting copy.
