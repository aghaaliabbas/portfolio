# Agha Ali Abbas — Portfolio

Personal portfolio for a Senior AI & Full-Stack Engineer. Live at **https://aghaaliabbas.github.io/portfolio/**

Built with **React 19 · TypeScript · Vite · React Router · Framer Motion**, styled in the **Organic** design system (warm cream ground, terracotta and sage accents, Caprasimo + Figtree type). All content is hardcoded in typed data modules, so there is no backend and no API keys.

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173/portfolio/
```

| Script              | What it does                                  |
| ------------------- | --------------------------------------------- |
| `npm run dev`       | Start the dev server                          |
| `npm run typecheck` | Strict TypeScript check                       |
| `npm run build`     | Typecheck, then production build into `dist/` |
| `npm run preview`   | Serve the production build locally            |
| `npm run deploy`    | Build and publish `dist/` to `gh-pages`       |

Requires Node 20+ (Vite 6). Vite 7/8 need Node 20.19+.

## Pages

| Route                  | Page                                                                    |
| ---------------------- | ----------------------------------------------------------------------- |
| `/#/`                  | Home — hero, stats, selected work, roles, engagement, contact           |
| `/#/experience`        | Experience — job history, skills, shipped apps, education, Upwork record |
| `/#/services`          | Services — what I offer, rates, how an engagement starts                |

Routes use a hash router because GitHub Pages can't rewrite deep links.

## Project structure

```
src/
├── data/          Hardcoded content — edit these to update the site
│   ├── profile.ts       name, contact, socials, booking link, Upwork stats
│   ├── home.ts          home hero, stats, case studies, engagement cards
│   ├── experience.ts    career history
│   ├── services.ts      services, rates, engagement steps
│   ├── skills.ts · projects.ts · education.ts · experiencePage.ts · navigation.ts
├── types/         Shared TypeScript interfaces
├── pages/         Route components (Home, ExperiencePage, ServicesPage)
├── sections/      Page sections, grouped by page (home/, experience/, services/, skills/, projects/)
├── components/
│   ├── layout/        Layout, Header, Footer, ScrollManager
│   ├── ContactBand/   Terracotta closing band shared by every page
│   ├── PageHero/      Header used on Experience and Services
│   └── ui/            Primitives: Section, Card, Badge, Button, SoftCircle, Reveal, Container
├── hooks/         useScrolled, usePageTitle
├── lib/           Date helpers
└── styles/        Design tokens (tokens.css) and global styles
```

## Updating content

Edit the files in `src/data/`; the types in `src/types/index.ts` flag anything malformed.

- **Booking link:** `bookingUrl` in `src/data/profile.ts` (currently the Cal.com 15-minute event).
- **Rates:** `src/data/services.ts` (table) and `src/data/home.ts` (engagement cards).
- **Case studies:** `caseStudies` in `src/data/home.ts`. Each result line should be a verified outcome.

## Design

Tokens (colors, type, radii, shadows) live in `src/styles/tokens.css` and come from the design handoff. Component styles use CSS Modules.

- **Contrast:** the handoff's primary button colour (`#c67139`) only reaches 3.6:1 with white text, so buttons use the deeper `--color-action` (`#a85a28`, 5.05:1). Small text on the terracotta band sits on cream pills.
- **Type:** Caprasimo ships one weight; headings are forced to `font-weight: 400` to avoid a synthesized faux-bold.
- **Motion:** entrance animations and the smooth scroll respect `prefers-reduced-motion`.

## Deploying

`npm run deploy` publishes to the `gh-pages` branch. The Vite `base` is `/portfolio/` (see `vite.config.ts`), so change it if the repository name changes. A `Dockerfile` is included for serving the built site with nginx.

## License

See [LICENSE](LICENSE).
