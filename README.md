# beebid-landing

The public marketing site for BeeBid, deployed at [beebid.vip](https://beebid.vip).
Sign-in and sign-up both link out to the real product at
[app.beebid.vip](https://app.beebid.vip) (the `flybid-app` repo).

Built with Next.js App Router for per-section SEO: the homepage is a single
scrolling page, and every major section also has its own indexable route
with its own metadata (title/description/canonical/OG) so it can rank and be
shared independently, not just as an anchor on the homepage.

## Structure

```
app/
  page.tsx                 Homepage: condensed version of every section
  features/page.tsx        Feature hub
  features/[slug]/page.tsx One page per feature (ai-tailoring, autofill, resume-hub, teams)
  how-it-works/page.tsx
  for-teams/page.tsx
  pricing/page.tsx
  faq/page.tsx              + FAQPage JSON-LD
  privacy/  terms/
  sitemap.ts  robots.ts  opengraph-image.tsx
components/
  layout/   Header, Footer, Logo
  ui/       Button, Container, SectionHeading, AnimateIn (framer-motion scroll reveal)
  marketing/ HeroMockup, ResumeTailorDemo, DashboardPreview, TeamPreview,
             FeatureGrid, HowItWorks, PersonaScenarios, PricingTable,
             FaqAccordion, CtaBand, PageHero
lib/
  content.ts   All copy: nav, features, pricing tiers, FAQs. Single source of
               truth shared by the homepage and every deep page.
  site.ts      SITE_URL / APP_URL / SIGNUP_URL / LOGIN_URL constants.
```

All product visuals (hero browser mockup, resume before/after, dashboard and
team previews) are hand-built React/SVG components, not screenshots. No
external image hosting, fully theme-consistent, and animatable.

Pricing tiers (Free / Pro / Teams) are feature-gated with no invented dollar
amounts. Update `lib/content.ts` -> `PRICING_PLANS` once real prices are set.
The persona-scenario section intentionally replaces conventional
testimonials: there are no fabricated customer quotes or names anywhere on
the site; swap in real testimonials there once you have them.

## Development

```bash
npm run dev          # http://localhost:3000
npm run build         # next build (standalone output) + copies public/ and
                       # .next/static into .next/standalone for deploy
npm run start         # node .next/standalone/server.js, what pm2 runs
npm run lint
npm run type-check
```

## Deploy

Mirrors the `flybid-app` / `flybid-admin` pm2 + nginx convention:

- `ecosystem.config.cjs`: pm2 app `beebid-landing`, runs
  `.next/standalone/server.js` on `127.0.0.1:3400` (interpreter pinned to the
  server's nvm Node v22.23.1, since Next.js 16 needs Node >=20.9).
- `deploy/nginx-beebid.vip.conf`: HTTPS termination + reverse proxy for
  `beebid.vip`.
- `.github/workflows/deploy.yml`: auto-deploys on push to `main` via the
  `ENV` repo secret (SERVER_HOST/SERVER_USER/SERVER_PASSWORD).

```bash
npm ci
npm run build   # also runs the postbuild copy step
pm2 start ecosystem.config.cjs
```
