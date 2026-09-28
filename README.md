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

## Generating images (Nano Banana / Gemini 2.5 Flash Image)

`app-source/scripts/nano-banana.mjs` generates or edits photorealistic images (heroes,
product shots, banners) via the Gemini API. It needs `GEMINI_API_KEY` set in the
environment. Never commit the key or put it in any file under the published site.

```bash
cd app-source
node scripts/nano-banana.mjs "<prompt>" hero.png
ASPECT=16:9 node scripts/nano-banana.mjs "<prompt>" hero.png          # wide output (default is square)
node scripts/nano-banana.mjs "<edit instruction>" v2.png --ref hero.png  # edit an existing image
cwebp -q 82 hero.png -o public/hero.webp                                # web-optimize
```

Tips: ask for "photorealistic" and "no readable text", reuse one shared style suffix
across a set of images, and chain small `--ref` edits to keep a subject consistent.
A 429 "prepayment credits depleted" error means the account needs a top-up, not a code fix.
