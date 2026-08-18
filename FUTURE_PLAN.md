# Future Plan

Ideas to connect this landing page to the real NoodMart Flutter app once it's ready to launch.

## Done

- **Hosting migration** — moved from GitHub Pages to Render, `noodmart.com` + `www` verified and live.
- **Countdown bar** — live countdown bar (`src/components/landing/CountdownBar.tsx`) shows time remaining until launch, bilingual (AR/EN), fixed above the navbar. Currently targets a **placeholder date 30 days out** (`LAUNCH_DATE` constant in that file) — **update this to the real launch date once confirmed.**
- **SEO pass (partial)** — added `og:image`/Twitter card meta tags (`public/og-image.jpg`, generated from the existing hero art as a stopgap until a designed asset exists), `apple-touch-icon.png`, `manifest.json`, `icon-192.png`/`icon-512.png`, `schema.org` Organization structured data, and `sitemap.xml` (referenced from `robots.txt`). Still open: real `/en` indexable routes / `hreflang` — the site is still client-side-only bilingual.
- **Waitlist form reliability (partial)** — added a `localStorage`-based duplicate-submission guard (`WaitlistSection.tsx`) so a returning visitor can't resubmit repeatedly. Still open: server-confirmed delivery — the Google Forms `no-cors` POST is still opaque, so a failed submission still shows success.
- **Performance — image optimization** — `hero-burger.png`/`hero-pizza.png` now have WebP versions served via `<picture>` (89% smaller, PNG kept as fallback) in `HeroSection.tsx`.
- **Accessibility — initial language flash** — added an inline script in `index.html` that sets `lang`/`dir` to English before paint for browsers with an English `navigator.language`, and `LanguageContext.tsx` now reads that same signal for its initial React state instead of hardcoding Arabic.

## Store badges / deep links
Once the App Store / Play Store listings exist (even as pre-launch pages), add "Download on the App Store" and "Get it on Google Play" buttons to the site, linking to the respective listings.

## Waitlist → launch notification
The Google Form waitlist is collecting emails now. When launch is ready, export that data and notify everyone on the list.

## Real launch date
Swap `LAUNCH_DATE` in `src/components/landing/CountdownBar.tsx` from the placeholder to the confirmed date. Highest priority — everything else assumes this is set.

## App screenshots / preview section
Once the Flutter app has real UI, add a section showing actual app screens instead of the generic burger/pizza hero art, so visitors see the real product.

## Basic analytics
Add Google Analytics or Cloudflare Web Analytics (free, privacy-friendlier) to see waitlist conversion and traffic sources before launch.

## SEO pass — remaining
Real `/en` indexable routes (or `hreflang` alternates), since the site is still bilingual client-side only. A proper designed `og:image` can also replace the generated stopgap whenever real brand assets exist.

## Waitlist form reliability — remaining
Server-confirmed delivery. `WaitlistSection.tsx` still posts to Google Forms with `mode: 'no-cors'`, so a failed submission (network error, wrong entry ID, form changed/deleted) still shows the success screen — real signup counts can't be fully trusted. Needs a small backend/serverless function that can confirm delivery, or periodic spot-checks of Form responses vs. site visits.

## Trust signals — social links
Footer (`Footer.tsx`) only links LinkedIn, which is a weak primary channel for a consumer food app. Add Instagram/Facebook/TikTok (more relevant to the Egypt consumer market) once those accounts exist.

## CI auto-deploy
Add a GitHub Action so pushes to `main` auto-trigger a Render deploy instead of relying on Render's own webhook/manual deploy.

## Waitlist count display
"X people already joined" social-proof counter on the waitlist section. Needs a count source — Google Form doesn't expose response count via API, so this would need a small backend or manual updates.

## Post-launch redirect plan
Once the Flutter app is live, decide whether this landing page stays as marketing or redirects/adds a "we're live" banner pointing to the store listings.
