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

**All site content lives in one file: [`lib/content.ts`](./lib/content.ts).**
Name, role, hero/about/contact copy, section headings, button labels, marquee
tech, projects (with `category` + optional `image`), journey, skills, soft
skills, interests, and social links — edit that one file and the pages update.
No component code to touch.

Leave any field blank (`""` or `[]`) and that piece is hidden automatically —
e.g. a blank `social.github` removes the GitHub link everywhere, and an empty
`journey` hides the whole "My Journey" section.

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
