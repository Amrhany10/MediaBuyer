# Amr Hany — Portfolio

Static site, three pages. No build step, no dependencies.

```
index.html          home: hero, stats, services, process, contact
media-buying.html   ad case studies + messaging campaigns
stores.html         Shopify stores with scrollable phone mockups
assets/site.css     all styling
assets/site.js      all content, both languages, effects
assets/img/         screenshots
```

## Publish with GitHub Pages
Settings → Pages → Source: Deploy from a branch → Branch: `main` + `/ (root)` → Save.

## Publish on Hostinger
Upload everything into `public_html`, keeping `assets/` next to the HTML files.

## Edit the colours
Top of `assets/site.css`:

```css
--wine:#6E1420;    /* dark burgundy blocks */
--cream:#F7EFE0;   /* page background */
--mustard:#F2B32C; /* buttons and highlights */
```

## Edit the text
Everything lives in `assets/site.js`:
- `CASES` — ad case studies
- `MSGS` — messaging campaign cards
- `STORES` — Shopify projects (screens, tags, feature list)
- `T.ar` — the Arabic copy. English copy sits in the HTML files.

## The phone mockups
Rebuild projects show two phones side by side, labelled BEFORE and AFTER above
the screens. Projects built from scratch show one phone labelled BUILT BY ME.

Each screen scrolls on its own and the visitor can drag inside it. Touching it
pauses the auto-scroll for a couple of seconds, then it resumes. The ⤢ button
opens the full screenshot.

Screens live in `assets/img` as `<project>-before.jpg` / `<project>-after.jpg`.
