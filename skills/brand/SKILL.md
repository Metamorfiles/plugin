---
name: brand
description: Translates an existing brand into brand/DESIGN.md (the design.md format) in a Metamorfiles project, from which Studio generates the brand tokens and the brand board. Use when the user wants to set up, import or change a brand, for example from their website, their app's theme or styles, a brand guidelines PDF, logos, fonts or reference images, to change its colours, type, voice or logo files, or to have the team make a translated brand's first imagery and mockups. A brand made from nothing is the new-brand skill.
license: MIT
---

# Translate the brand

A brand made from nothing follows the `new-brand` skill (the user asks for one, there is nothing to translate, or the project has `brand/process/brief.md`).

The brand kit is `brand/DESIGN.md`, in Google Labs' design.md format (github.com/google-labs-code/design.md). Studio checks it, runs the official design.md linter on it, and generates from it the `--brand-*` tokens in `brand/brand.css` and the `brand-board`: one item whose frames are the pages of the brand's guideline document: logo, colour, type, voice, a page or more for each asset folder it lists, and the brand in use last.

Your goal is a complete board the user can use, quickly. Four principles:
- **What the brand defines is exact.** Copy an observed color, size or file as it is. Never adjust, round or replace it to fit a scale you like better.
- **What the brand leaves open, you supply.** A kit with no radii, no dark theme or no component pairs isn't faithful, it just moves the guessing into every template. Derive the missing part from what the brand does show, mark it `proposed` in Sources, and tell the user what to look at.
- **Never invent a fact.** Claims, prices, awards, positioning and logos are not yours to make up.
- **Record where everything came from**, in `## Sources`, and what you still need from the user, in `## Known gaps`.

## Steps

1. Call `metamorfiles_get_project` and read `brand` (another brand gets its own project: the `studio` skill, Start every session). Rebuild a kit only for the same brand; then take every value again from the brand's sources as below, never from the previous DESIGN.md.
2. Gather the sources. Start with the brand's own website and profiles: `metamorfiles_look_at_page { url: "https://example.com", collect: true }` for each address, which reads the colours and fonts the page really renders and saves its screens, logo candidates, icons and share image into `brand/sources/<site>/` with where each came from. Files the user gave are in `brand/sources/yours/`. Then the app's theme (for example a shadcn or Tailwind `globals.css`), the logo files or logo component, the live website, guidelines, fonts and reference images. **Go and find the imagery, don't wait to be handed it:** the code's image folders and what its image components reference, the live site's hero bands and product shots. A share image (a card of the logo and words), screenshots of the site or app, icons, favicons, UI chrome and framework defaults (`next.svg`, `vercel.svg`) are not imagery. Ask only for what you cannot find and cannot do without, such as the font files or the logo. A face the brand uses that the project can't have (not one `metamorfiles_add_font` takes, which is only OFL Google Fonts families, and no file from the user) gets an open stand-in: read [references/licensed-faces.md](references/licensed-faces.md) when you meet one.
3. Copy the files into the project, unchanged:
   - fonts: a Google Fonts family with `metamorfiles_add_font { family: "Fraunces" }`; any other face is the user's own file, left where it is under `brand/sources/` and listed in DESIGN.md's fonts by that path (`sources/yours/Brand-Regular.otf`);
   - official logos in `brand/logos/`, each from the user's files: `metamorfiles_import_image { path: "brand/sources/yours/logo.svg", name: "logo", folder: "brand/logos" }`;
   - reference images in `brand/refs/` (or the asset folders the kit lists);
   - the files you translate from (theme CSS, a logo component, a guidelines PDF) in `brand/sources/`, so the values can be checked later.
4. Take the values from each source as described below.
5. Write `brand/DESIGN.md` with `metamorfiles_write_file { path: "brand/DESIGN.md", content }`, following [references/design-md.md](references/design-md.md) (read it before writing). If `metamorfiles.json` names the brand differently from DESIGN.md (other spelling or capitals), write it with the brand's own name, so the control panel and the kit agree.
6. Read the check in the result. Fix every error and write again. Warnings starting with `design.md lint` come from the official linter: fix them, or leave them only when the Sources explain why.
7. Render each page of the brand's guidelines with `metamorfiles_render_preview { item: "templates/brand-board", format: "cover" }`: Studio draws them from DESIGN.md and the folders, one 16:9 page each. The write that changes DESIGN.md lists them. Fix every check error through DESIGN.md and the folders.
8. Get the independent review of the kit with the `review` skill (the `handover` queue) before you present anything: it catches a logo on the wrong background or a pairing that reads badly. Fix what it marks **must fix** through DESIGN.md or the files.
9. Ask what the team should make, before any image is generated, as "What the team makes next" says. Make what the user chooses, and have it reviewed.
10. Present it as [references/presenting.md](references/presenting.md) says; read it before you write the message.

## What the team makes next

Most brands come in without imagery of their own, and the posts and ads Studio makes need it. Once
the kit has passed its review, ask what to make with
`metamorfiles_ask_user { task, question: "Lumen Skincare has no imagery of its own yet. What should the team make?", options: [{ label: "Imagery and mockups", recommended: true }, { label: "Mockups only" }, { label: "Nothing for now" }] }`,
the question in the brand's name. A brand with imagery of its own is asked whether to grow it: "More
imagery and mockups", "Mockups only", "Nothing for now". Generate nothing before the answer. A user who
asked for imagery or mockups in their request has answered, and so has "make imagery for my brand"
on a brand already in Studio. Make imagery first, then the mockups.

### Imagery

The imagery step of a new brand, on the same board and question: follow `references/imagery.md` of
the `new-brand` skill (`metamorfiles_get_guide { name: "new-brand", file: "references/imagery.md" }`)
and its step file, `brand/process/imagery.md` (the `new-brand` skill, "The steps' files"). What
differs:
- It starts from the brand as it is, in place of a brief and a chosen direction: DESIGN.md (Overview,
  Colors, Audience), what the business makes and uses as its site shows it, and its own pictures.
- Each seed's first reference is the brand's own picture when it has one ("Image 1 is the brand's own
  imagery: take its medium, light and palette"), else its colour page
  `templates/brand-board#colour` ("Image 1 is the brand's palette: take its colours, never its
  layout"). The logo never goes in.
- Its own pictures stay its anchors: the seeds are new pictures in their look, never its products
  made up.

Ask with `metamorfiles_ask_user { task, step: "imagery" }` once the `imagery` queue has passed. Then
the library, `brand/imagery-guide.md`, the folder in `assets` and DESIGN.md's Imagery section, as
"In the kit" of that file says.

### The brand in use

Three mockups, chosen as `references/mockups.md` of the `new-brand` skill says
(`metamorfiles_get_guide { name: "new-brand", file: "references/mockups.md" }`), from the brand's own
touchpoints: what it makes and where its customers meet it, read from its site and DESIGN.md. A
brand with a site or an app shows its real screens, the ones `metamorfiles_look_at_page` saved, as
the `mockup` skill says for a screen. The other shots are objects it really uses (merch, a sign, its packaging), made with the
`mockup` skill. They're reviewed in the `handover` queue.

## Taking values from each source

| Source | How | Confidence |
|---|---|---|
| Code theme: shadcn or Tailwind CSS, CSS variables, `tokens.json`, Figma variables | Read the exact values, following `var()` chains to the literal value. Keep the original variable names in Sources. | exact |
| Website | `metamorfiles_look_at_page { collect: true }`: the computed colours of its body, headings, links, buttons and bands, and the fonts it renders, with whether each is on Google Fonts. Its saved logo candidates and icons read with `metamorfiles_extract_brand_values`. | exact |
| Guidelines PDF | Values as stated. A CMYK or Pantone value without its RGB or hex goes to Known gaps. | exact |
| Images, screenshots, logo files | `metamorfiles_extract_brand_values { path: "brand/refs/serum-morning.jpg" }`: exact pixel colors with their coverage, and SVG fill and stroke values. Never pick a color by eye. | exact for flat files, sampled for paintings and photos |
| Fonts recognized by eye | "Looks like X". Ask for the files. | inferred |

Evidence rules:
- A value seen once is a value. A literal color in a component (for example `text-[#eef0ea]` on a band) belongs in `components`.
- Take the whole scale a source defines, not only the steps it happens to use. A radius scale with a step missing is a hole a template will fill badly.
- What the source leaves open, derive in proportion to what it shows and mark `proposed`. What the source contradicts, don't.
- When sources disagree, the brand's own files win over the website, and the website over screenshots. Note the other value in Sources.
- Overview, Voice and Audience may be interpreted from the brand's own copy and code comments; mark them inferred in Sources.
- Leave out interface plumbing with no brand meaning, such as shadcn's `--ring`, `--input`, `--popover`, `--sidebar-*`, `--chart-*` and its hover `--accent`. List them in Sources as not carried over.

## Complete the kit

A finished kit defines colors (with the role keys), typography, rounded and components, plus fonts and at least one logo. Studio warns when one of those areas is neither defined nor listed in `omitted`, so each one is a decision rather than an oversight.

When the source is thin — a photograph, a screenshot, a one-page brief, a site built without tokens — take what it gives exactly, then derive the rest in proportion and mark it `proposed`:

- one radius on a card → the scale around it, at the source's own ratio;
- two type sizes → the roles between them on the same ratio, and the roles the templates need above and below;
- a light palette only → a dark theme, every `on-` pair at 4.5:1 or more;
- an action color with no text pair → the pair, at 4.5:1 or more.

## Logos

- Use only official files, copied unchanged. Never recolor, redraw, retype, stretch or crop a logo, add effects, or place it on a background it isn't made for.
- A colour an official file paints is the brand's, even when another file has a near one (a favicon's off-white beside the logo's): name it in `colors` with its source in Sources, and never recolour a file to match another.
- **Variants the brand defines are official.** For example, a logo component drawn with CSS variables (`fill="var(--clay)"`, `currentColor`) has one version per theme: call `metamorfiles_make_logo_variant { file: "brand/sources/logo.tsx", output: "brand/logos/logo-dark.svg", colors: { "var(--clay)": "#e39a7f" }, background: "#1f1a17" }` with that theme's exact values, one file per theme, and record it as the brand's own variant.
- **Generated variants need the user's approval, each one, before you make it.** Offer only what's missing:
  - one-color black and white versions (map `"*"` to the color, and paper-colored inner shapes to `"knockout"`);
  - a dark or light version from the brand's palette;
  - a derived dark palette, when the brand has no dark theme, with every on-* pair at 4.5:1 or more.

  Show the preview from `metamorfiles_make_logo_variant`, check that its colors meeting the background reach 3:1, and wait for a yes. Then write `generated from <file>, approved by the user on <date>` in the logo's `source` and in Sources.
- When no file suits a background and the user declines a variant, the official logo sits on a plate of its own background color.
- A logo the brand has only as a picture (a PNG or JPEG) stays as it is: the kit gives it no print file. Offer once to trace it into a vector for print; on a yes, `metamorfiles_import_image { path: "brand/sources/yours/logo.png", name: "logo", folder: "brand/logos", trace: { colors: ["#1f1a17"] } }` with the logo's exact colours, show the result beside the original, and record `traced from the user's <file>, approved on <date>` in its `source` and in Sources.
- A brand with no logo at all gets one designed with the `logo` skill, only when the user asks for it.
- The clear space is the brand's own rule; when its guidelines give none, propose one and mark it `proposed` in Sources, as a guide for layouts rather than a rule of the brand.

## Rules

- Put the brand's own CSS, such as textures and logo lockups, in `brand.css` below the `metamorfiles:tokens` markers.
- Fix every check error on the brand board before moving on. One you can't fix through DESIGN.md is a Studio defect: tell the user plainly, don't walk past it.
- Changing DESIGN.md changes every template and every page, since they all use `brand/brand.css`. Tell the user which will look different, and re-render them.
