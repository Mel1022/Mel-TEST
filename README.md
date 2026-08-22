# DoorChamp — Garage Door Service & Repair

This repo has two parts:

- **`app-source/`** — the Next.js + TypeScript + Tailwind source for the site. This is
  what you edit.
- **Repo root** (`index.html`, `_next/`, `about/`, etc.) — the static export built from
  `app-source/`. This is what actually gets served/published (e.g. by Hostinger). Do not
  hand-edit these files; they're regenerated from the source.

## Rebuilding and redeploying

```bash
cd app-source
npm install
npm run build          # outputs a static site to app-source/out/
cp -r out/. ../         # copy the fresh export over the published files at repo root
```

Then commit and push the updated root files (and any source changes in `app-source/`).

## Content that still needs real business details

Several placeholders are used throughout the site and are called out explicitly rather
than invented. Search for bracketed placeholders before launch:

- `[PHONE NUMBER]`, `[EMAIL ADDRESS]`, `[BUSINESS ADDRESS]`, `[BUSINESS HOURS]`
- `[CONFIRMED SERVICE AREAS]` — the Service Areas page uses example cities marked
  "Pending" until real coverage is confirmed
- `[LICENSE / CERTIFICATION INFORMATION]`, `[INSURANCE INFORMATION]`, `[WARRANTY DETAILS]`
  on the About page

These live in `app-source/lib/site-config.ts`, `app-source/app/service-areas/page.tsx`,
`app-source/app/about/page.tsx`, and `app-source/components/LocalBusinessSchema.tsx`.

The quote request form (`app-source/components/QuoteForm.tsx`) is not yet wired to a
backend, email service, or CRM — it currently just shows a confirmation message on
submit. Connect it to a real endpoint before launch.
