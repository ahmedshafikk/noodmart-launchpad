# Task: Add Legal Pages & Deploy

## Goal

Add four static legal pages to the NoodMart landing site (this repo) so they're live at `noodmart.com`, then deploy. These URLs are required for the NoodMart Flutter app's Google Play Console submission (Privacy Policy URL + Account Deletion URL fields), so they need to be public and stable.

## Source content

The legal text has already been drafted (as an individual developer based in Egypt, contact emails `support@noodmart.com` / `privacy@noodmart.com`). Read these four files from the sibling app repo before writing the pages — do not rewrite the legal content, just port it into React:

- `E:\projects\mobileapps\noodmartwebsite\node_app-main\legal\PRIVACY_POLICY.md`
- `E:\projects\mobileapps\noodmartwebsite\node_app-main\legal\ACCOUNT_DELETION.md`
- `E:\projects\mobileapps\noodmartwebsite\node_app-main\legal\TERMS_OF_SERVICE.md`
- `E:\projects\mobileapps\noodmartwebsite\node_app-main\legal\SELLER_AGREEMENT.md`

Two of these files cross-link each other with relative markdown links (`./ACCOUNT_DELETION.md`, `./TERMS_OF_SERVICE.md`, `./SELLER_AGREEMENT.md`) — when porting to React, rewrite those links to the actual site routes below instead.

## Routes to add

| Route | Source file | Nav label (EN / AR) |
|---|---|---|
| `/privacy-policy` | PRIVACY_POLICY.md | Privacy Policy / سياسة الخصوصية |
| `/terms-of-service` | TERMS_OF_SERVICE.md | Terms of Service / شروط الخدمة |
| `/delete-account` | ACCOUNT_DELETION.md | Delete Account / حذف الحساب |
| `/seller-agreement` | SELLER_AGREEMENT.md | Seller Agreement / اتفاقية البائع |

## Conventions to follow (read these files first)

- `src/App.tsx` — router setup (`react-router-dom`, `Routes`/`Route`). Add the four new routes here alongside the existing `/` and `*` routes.
- `src/contexts/LanguageContext.tsx` — bilingual pattern (`useLanguage()` → `{ lang, t, dir }`, translations keyed in a `Record<Lang, Record<string,string>>`). The legal *page content* itself can stay English-only (it's a legal document, not marketing copy — don't machine-translate it), but any UI chrome (nav label, back link, page title) should use `t()` with new keys added to both the `ar` and `en` blocks, same as existing keys.
- `src/components/landing/Footer.tsx` — currently has no working links (social links are `href="#"`). Add real links to `/privacy-policy`, `/terms-of-service`, and `/delete-account` here (Seller Agreement doesn't need a footer link — it's Seller-only, link it from `ForRestaurants.tsx` section instead, or from the Privacy Policy page itself).
- Tailwind + `@tailwindcss/typography` is already a devDependency — use the `prose` / `prose-invert` classes (site uses a dark `warm-dark` background per `Footer.tsx`) to style the long-form legal text instead of hand-styling every heading/paragraph.
- Match the site's existing font classes (`font-arabic` / `font-english` based on `lang`) and `dir` attribute handling used elsewhere (see `Footer.tsx` for the pattern).

## Implementation steps

1. Create a shared layout component, e.g. `src/components/legal/LegalLayout.tsx` — renders `Navbar`, a `prose prose-invert max-w-3xl mx-auto px-4 py-16` content container, and `Footer`, so all four pages look consistent and reuse the site chrome.
2. Create four page components under `src/pages/legal/`:
   - `PrivacyPolicy.tsx`
   - `TermsOfService.tsx`
   - `AccountDeletion.tsx`
   - `SellerAgreement.tsx`

   Each imports `LegalLayout` and renders the ported markdown content as JSX (headings → `<h2>`/`<h3>`, tables → `<table>`, etc.). Keep the content faithful to the source `.md` files — this is legal text, not something to summarize or reword.
3. Wire the four routes into `src/App.tsx`.
4. Add nav-label translation keys to `src/contexts/LanguageContext.tsx` (both `ar` and `en` blocks) — e.g. `legal.privacy`, `legal.terms`, `legal.deleteAccount`, `legal.sellerAgreement`.
5. Update `src/components/landing/Footer.tsx` to link to the three buyer-facing pages using `<Link>` from `react-router-dom` (not `<a href="#">`).
6. Verify locally:
   ```
   npm run dev
   ```
   Visit `/privacy-policy`, `/terms-of-service`, `/delete-account`, `/seller-agreement` and confirm they render, links work, and RTL/Arabic toggle doesn't break the layout (nav chrome should flip; legal body text can stay LTR English).
7. Run the build and lint to make sure nothing's broken:
   ```
   npm run build
   npm run lint
   ```

## Deploy

This repo (`ahmedshafikk/noodmart-launchpad` on GitHub) is connected to Render (`render.yaml`, static site, auto-deploys on push to `main` per Render's GitHub webhook — see `FUTURE_PLAN.md`). To ship:

```
git add -A
git commit -m "Add privacy policy, terms of service, account deletion, and seller agreement pages"
git push origin main
```

Pushing to `main` triggers a live production deploy to `noodmart.com` — confirm with the repo owner before pushing if running this unattended.

## After deploy — feed these URLs back into Play Console

- Privacy Policy URL (Play Console → Store presence → Privacy policy): `https://noodmart.com/privacy-policy`
- Account Deletion URL (Play Console → App content → Data safety → Account deletion): `https://noodmart.com/delete-account`

Also worth doing once live: add `/privacy-policy` and `/terms-of-service` links inside the Flutter app itself (e.g. Settings screen), pointing at these same URLs.
