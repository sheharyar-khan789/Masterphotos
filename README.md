# Master Photos — Production Website

Photography, videography, cinematography, printing & scanning studio website for **Master Photos** (Jhelum, Punjab).

## Stack

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · self-hosted Inter / Playfair Display fonts

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Content & Assets

- All photos/videos in `public/media/` are the real supplied Master Photos assets (deduplicated, renamed, with generated video poster frames).
- Media placement, titles and categories are defined in `src/lib/media.ts`.
- Business info (phone, WhatsApp, email, Instagram, address, services) lives in `src/lib/site.ts` — edit there to update site-wide.
- Portfolio filtering, lightbox, and video showcase are plain React state — no external libraries.

## Known gaps (real assets/info needed)

- **Employment certificate image** for Faisal Suleman was not included in the asset upload. `src/components/CertificateViewer.tsx` currently shows a text-based placeholder. Drop the real file at `public/media/documents/` and set `CERTIFICATE_SRC` in that file to enable the image/PDF view.
- **Team portraits**: no real photos of Raheel Ali Butt or Faisal Suleman were supplied, so the Team section uses initials badges instead of fabricated photos.
- **Contact form**: client-side validation only, no backend configured. Wire `src/components/ContactForm.tsx`'s submit handler to a real endpoint (Formspree, Getform, custom API route, etc.) when one is available.
- **Studio address**: shown as supplied ("Opposite CMH, Jhelum, Punjab 49600") with an inline note that it's editable — confirm/update in `src/lib/site.ts`.
