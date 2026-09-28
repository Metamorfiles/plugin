# Fonts

Type carries most of a new brand's personality, so it is chosen for the idea, never by habit. Use
only fonts under the SIL Open Font License, which allows logos, embedding in images and outlining
the letters. Every family here is on Google Fonts under that licence. Other free fonts often forbid
converting the files or offering them in a design tool, so leave them out unless the user brings
their own licensed files.

## Getting the files

- Add a family with `metamorfiles_add_font`, by its Google Fonts name, with `italic: true` when the
  design uses the italic.
- It writes complete WOFF2 files to `brand/fonts/`, one per style for a variable family and one per
  weight for a static one. It returns the `@font-face` rules for a template.
- Never download, subset or copy font files yourself. The tool refuses a family that isn't OFL.
- The render's font check says when a glyph falls back, so check the name, the place and the
  headline in the brief's language.

## Choosing

- Choose by what the idea needs. Then look at the face's skeleton (open and humanist, closed and
  rational, geometric), its contrast and serifs, and its details, and match them to the mark: round
  with round, sharp with sharp, the same stroke weight.
- Start from one family. Try its weights, widths, case and tracking first. Add a second face only
  for a job the first can't do: a display face for headlines, a workhorse for everything that
  informs, or a mono for data. Two faces at most.
- Pair faces that share a skeleton and differ in flesh, or contrast them on purpose. Never pair two
  faces that compete in contrast, width or personality.
- Pair the expressive with the plain: a display face with character over a quiet text face.
- The look step's options differ in type logic (`look.md`), so they never share a family.

## Overused

These are the most used families on Google Fonts, and the faces AI tools default to. A direction
uses one only when the idea needs it, and says why on its board:

Inter, Montserrat, Poppins, Roboto, Open Sans, Lato, DM Sans, Nunito, Playfair Display, Manrope,
Outfit, Plus Jakarta Sans, Figtree, Space Grotesk, Cormorant Garamond, Instrument Serif, Fraunces,
Geist, Bricolage Grotesque, Syne, Unbounded, Sora, Lexend, Urbanist, Work Sans, Archivo, Oswald,
Bebas Neue, Anton.

## By character

The number is the family's rank by use on Google Fonts, when it matters: higher is rarer.

**Neutral grotesques**
- Schibsted Grotesk: sturdy, newspaper-like; serious and editorial brands.
- Host Grotesk (#404): plain and current; product brands that shouldn't look like Inter.
- Mona Sans and Hubot Sans: width axis; engineering and technical brands.
- Zalando Sans: width axis; one family for a large system.
- Radio Canada Big: slightly quirky and civic.
- Golos Text: neutral, with strong Cyrillic.
- Funnel Sans and Funnel Display: a pair with a soft oddness.

**Warm and humanist sans**
- Albert Sans: calm, Scandinavian.
- Onest: friendly, for interfaces too.
- Rethink Sans: soft product brands.
- Reddit Sans: conversational.
- Afacad: geometric-humanist with flair.
- Inclusive Sans: made for accessibility; public services.
- Ysabeau: a humanist sans with calligraphic roots.
- Commissioner: flare and volume axes, from sober to flared.

**Geometric and rounded**
- Parkinsans: geometric with quirks; health and charity.
- Kumbh Sans: tidy geometry; startups avoiding the stock geometrics.
- Gabarito: chunky and friendly.
- Fredoka: rounded; kids and play.
- DynaPuff: soft and inflated; toys and treats.

**Character grotesques and display**
- Familjen Grotesk: odd Scandinavian details; studios and culture.
- Special Gothic, Special Gothic Condensed One and Expanded One: American gothic headlines.
- Anybody: extreme width axis; posters and motion.
- Darker Grotesque: elegant, thin display.
- Boldonse: ultra-wide and heavy; one loud word.
- National Park: signage from US park trails; outdoors and civic.
- Tektur: squared and technical.
- Stick No Bills: stencilled; street and industrial.
- Dela Gothic One: heavy and blunt; loud display in Latin and Japanese.

**Condensed**
- Big Shoulders (optical size axis): industrial and civic.
- Big Shoulders Stencil: its stencil cut.
- League Gothic: tall headlines.
- Antonio: compact impact.
- Sofia Sans Condensed and Extra Condensed: condensed systems.
- Pathway Extreme: width and optical size.

**Text serifs**
- Newsreader (optical sizes): editorial.
- Source Serif 4 (optical sizes): institutional.
- Literata: bookish.
- Petrona: warm and lively.
- Brygada 1918: a revival with gravitas.
- Gelasio: Georgia's metrics, fresher.
- Faustina: compact and sturdy.
- Imbue: condensed Didone with optical sizes.

**Display serifs**
- Young Serif: heavy old-style, one weight; food and craft.
- Gloock: high contrast; fashion.
- Bodoni Moda (optical sizes): Didone luxury.
- Libre Caslon Display: classic publishing.
- Hedvig Letters Serif: distinctive editorial.
- Kalnia: a wide Didone with a width axis.
- Ibarra Real Nova: Spanish Baroque.
- Castoro Titling: engraved capitals.
- Italiana: thin, high-waisted capitals.
- Rozha One: heavy high-contrast display.

**Slab**
- Besley: Clarendon, Victorian warmth.
- Montagu Slab (optical sizes): expressive.
- Epunda Slab: contemporary.
- Zilla Slab: sturdy utility.
- Alfa Slab One: a heavy poster slab.

**Loud and playful display**
- Shrikhand: a fat italic; food and fun.
- Bagel Fat One: a round heavyweight.
- Rammetto One: wide and blunt.
- Chango: fat and bouncy.
- Titan One: a rounded poster face.
- Climate Crisis: its weight falls with a year axis; statement pieces.
- Tilt Warp: letters tilted in 3D.
- Protest Strike: a protest-sign display face.
- Honk: morphing colour display, for single words only.

**Mono and technical**
- Martian Mono (width axis): developer brands.
- Sometype Mono: idiosyncratic.
- Fragment Mono: a Helvetica-flavoured mono.
- Chivo Mono: labels and data.
- Spline Sans Mono: soft technical.
- Red Hat Mono: clean and open.
- Geist Mono: tight UI mono.

**Pixel and screen**
- Silkscreen: pixel capitals.
- Pixelify Sans: pixel with weights.
- Tiny5 and Micro 5: tiny bitmap faces.
- Sixtyfour and Workbench: CRT faces with scanline axes.
- Jacquard 24: woven-pixel blackletter.
- Handjet: a dot-matrix face with element-shape axes.

**Scripts and brush, for a wordmark**
- Damion: a confident, rounded brush script; food and neighbourhood brands.
- Kaushan Script: a quick brush with bite.
- Leckerli One: a bold, bouncy script.
- Knewave: a heavy brush, loud and cheerful.
- Sedgwick Ave Display: a marker tag; street and youth.
- Caveat Brush: a casual brush hand.
- Sriracha: a light Thai-and-Latin hand.
- Pacifico and Lobster are OFL too, but seen everywhere; use them only when the idea needs them.

A script is set as the wordmark or one line, never as text.

**Hands**
- Nothing You Could Do: a loose, personal hand.
- Mynerve: a neat handwriting.
- Covered By Your Grace: a marker hand.
- Permanent Marker: bold marker.
- Reenie Beanie: a quick, light hand.

A handwritten face is for a line or a mark, never for text.

## Stand-ins for licensed faces

When translating an existing brand whose face can't be used, use the closest open alternative, never
the same face. Mark it `proposed` in Sources, name the real face in Known gaps, and never call the
stand-in by the brand's font's name.

| Licensed face | Open stand-in |
|---|---|
| Helvetica, Arial | Arimo (Arial's metrics), or Host Grotesk |
| Futura | Jost |
| Gotham, Proxima Nova | Montserrat |
| Avenir | Nunito Sans |
| Circular | Albert Sans or Figtree |
| Franklin Gothic | Libre Franklin |
| Acumin Pro Condensed, Trade Gothic Condensed | Archivo Narrow or Barlow Condensed |
| Garamond | EB Garamond |
| Baskerville | Libre Baskerville |
| Caslon | Libre Caslon Text |
| Didot, Bodoni | Bodoni Moda |
| Times | Tinos (Times's metrics) |
| Georgia | Gelasio (Georgia's metrics) |
