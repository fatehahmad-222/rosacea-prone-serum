# Rosceaprone Serum — Murasaki Beauty

A standalone landing page for the Murasaki Beauty Rosacea-Prone Redness-Calming Serum.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — eslint

## Structure

- `app/page.js` — section order
- `app/layout.js` — root layout, metadata, and global font
- `app/globals.css` — design tokens
- `components/` — section components
- `public/images/` — product and lifestyle images

> This project lives under `app/components/Rosceaprone-serum/` in the parent
> repo so it is not treated as a route by the parent's App Router. To run it
> standalone, copy the folder elsewhere, run `npm install`, then `npm run dev`.
