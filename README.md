# Amr Hany — Portfolio

Static site. One HTML file + an images folder. No build step, no dependencies.

```
index.html
assets/img/...
```

## Edit the colours
Open `index.html`, top of the `<style>` block:
```
--wine:#6E1420;    /* dark burgundy blocks */
--cream:#F7EFE0;   /* page background */
--mustard:#F2B32C; /* buttons and highlights */
```

## Edit the text
- English text lives in the HTML itself.
- Arabic text lives in the `T.ar` object inside `<script>`.
- Project cards live in the `STORES` array, ad cards in the `MSGS` array.

## Add your photo
Save it as `assets/img/photo.jpg`, then replace this line:
```html
<div class="photo"><span data-i18n="photo">[ Your photo ]</span></div>
```
with:
```html
<div class="photo"><img src="assets/img/photo.jpg" alt="Amr Hany"></div>
```

## Publish on GitHub Pages (free)
1. Open github.com/Amrhany10/mediabuyer → "Add file" → "Upload files".
2. Drag in `index.html`, `README.md` and the whole `assets` folder → Commit changes.
3. Settings → Pages → Source: `Deploy from a branch` → Branch: `main` + `/ (root)` → Save.
4. Live at `https://Amrhany10.github.io/mediabuyer/` about a minute later.

## Publish on Hostinger
Upload the same files into `public_html` (File Manager → Upload). Keep `assets/` next to `index.html`.
