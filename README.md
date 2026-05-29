# Portfolio — "Terminal Pristine"

A precision, light-mode developer portfolio built to the spec in [`/design`](./design).
Stack: **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**,
**Material Symbols** icons, and a working contact form powered by **Resend**.

Fully responsive (mobile → desktop) with a working mobile nav, and respects
`prefers-reduced-motion` for the animated background.

## Pages

| Route       | Content                                                            |
| ----------- | ------------------------------------------------------------------ |
| `/`         | Hero · tech marquee · featured work · CTA                          |
| `/projects` | Filterable, searchable project grid · GitHub CTA                   |
| `/about`    | Bio · journey timeline · skills bento · soft skills + interests    |
| `/contact`  | Working contact form · contact info · social links                |

## Getting started

```bash
nvm use 24.16.0   # this machine's default node is too old for Next 15
npm install
npm run dev       # http://localhost:3000
```

## Editing your content

Almost everything lives in **`lib/data.ts`** — name, role, hero copy, marquee
tech, projects (with `category` for the filter + optional `image`), journey,
skills, soft skills, interests, and social links. Edit that one file.

- **Hero portrait / About portrait:** set `site.portrait` to e.g. `/portrait.jpg`
  and drop the file in `/public`. Empty = gradient placeholder.
- **Project images:** add files under `public/projects/` and set `image` on a project.
- **Resume button:** set `site.resumeUrl` (e.g. `/resume.pdf`, file in `/public`).
- **Colors / type / spacing:** all design tokens are in `tailwind.config.ts`.
- **Icons:** `<Icon name="..." />` uses [Material Symbols](https://fonts.google.com/icons).

## Contact form (Resend)

Copy `.env.example` → `.env.local` and fill in `RESEND_API_KEY`,
`CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Until a key is set, the form runs in
**demo mode** (validates + logs to the server console) so it's testable now.

## Deploy (Vercel)

Push to GitHub, import at vercel.com/new, add the same env vars, deploy.
