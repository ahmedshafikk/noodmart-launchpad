# Future Plan

Ideas to connect this landing page to the real NoodMart Flutter app once it's ready to launch.

## Done

- **Hosting migration** — moved from GitHub Pages to Render, `noodmart.com` + `www` verified and live.
- **Countdown bar** — live countdown bar (`src/components/landing/CountdownBar.tsx`) shows time remaining until launch, bilingual (AR/EN), fixed above the navbar. Currently targets a **placeholder date 30 days out** (`LAUNCH_DATE` constant in that file) — **update this to the real launch date once confirmed.**

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

## SEO pass
Add an Open Graph image (`og:image`, currently missing), a `sitemap.xml`, and proper meta descriptions per language for better link previews and search indexing.

## CI auto-deploy
Add a GitHub Action so pushes to `main` auto-trigger a Render deploy instead of relying on Render's own webhook/manual deploy.

## Waitlist count display
"X people already joined" social-proof counter on the waitlist section. Needs a count source — Google Form doesn't expose response count via API, so this would need a small backend or manual updates.

## Post-launch redirect plan
Once the Flutter app is live, decide whether this landing page stays as marketing or redirects/adds a "we're live" banner pointing to the store listings.
