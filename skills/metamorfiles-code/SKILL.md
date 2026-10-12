---
name: metamorfiles-code
description: Applies a Metamorfiles brand to a website or app's codebase - colours, type, radii and spacing as the project's own theme (Tailwind v4, CSS variables, shadcn), the brand's fonts, the favicon and app icons, and the shared-link image - from the brand kit Studio exports. Use when the user asks to put their brand on their website or app, to theme a project with the brand, or to add its fonts, favicon or icons to their code.
license: MIT
---

# The brand in code

The brand's files come from its kit; the edits are yours, with your own file tools, in the user's codebase. Studio's tools only read and write the brand's project.

## Steps

```
- [ ] 1. Export the kit
- [ ] 2. Read the codebase's styling
- [ ] 3. The theme
- [ ] 4. The fonts
- [ ] 5. The icons and the shared-link image
- [ ] 6. Check it
```

1. **Export the kit**: `metamorfiles_export_kit {}`. Its `Website/` folder (in `kit/<Brand>/` of the brand's project) has everything this skill uses: `brand-web.css`, `tailwind.css`, `brand.tokens.json`, `fonts/`, the icons, `site.webmanifest`, `og-image.png` and `snippet.html`.
2. **Read the codebase's styling** before changing anything: Tailwind (v4 `@theme` in a CSS file, or v3 `tailwind.config`), plain CSS variables, a component library's theme (shadcn's `:root` variables), CSS-in-JS. Follow what it already uses; never add a second styling system.
3. **The theme**, by what the codebase uses:
   - **Tailwind v4**: copy `tailwind.css`'s `@theme` block into the project's main CSS after `@import "tailwindcss";`. It adds the brand's colours, fonts, type sizes, radii and spacing to Tailwind's own; never add `--*: initial`, which removes Tailwind's defaults.
   - **shadcn**: map the brand's roles onto its variables in `:root` (`--background`, `--foreground`, `--primary`, `--primary-foreground`, `--muted`, `--border`, `--radius`…) from `brand-web.css`'s `--brand-*` values, and keep its `@theme inline` mapping.
   - **CSS variables**: link or copy `brand-web.css` and use its `--brand-*` variables.
   - **Design tools that import tokens** (Figma variables, Style Dictionary): `brand.tokens.json`, in the W3C Design Tokens format.
   Use the brand's names for its colours in what you write (`--brand-cut`), never hex values in components.
4. **The fonts**: copy `Website/fonts/` into the project's public or assets folder and load them with `@font-face` (as in `brand-web.css`), or with the framework's own loader (`next/font/local` in Next.js). Fonts from the user's own files keep their own licence: say which ones you used.
5. **The icons and the shared-link image**: copy the icons, `site.webmanifest` and `og-image.png` to the site's root (`public/` in most frameworks), and add `snippet.html`'s lines to the page head (or the framework's metadata: Next.js's `metadata.icons` and `openGraph.images`). Replace any framework default icons they supersede.
6. **Check it**: build or run the project, open a page, and confirm the brand's fonts load (no fallback), the colours read, and the favicon shows. Tell the user what changed, in plain words, and what they should look at.

Never change the brand itself here: a colour or a font that doesn't work in the product goes back to the brand (`metamorfiles-brand`), so the kit and the code stay the same brand.
