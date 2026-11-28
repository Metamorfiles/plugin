# Writing the brand guideline

The examples come from Lumen Skincare, Studio's fictional example brand.

DESIGN.md is the brand's guideline, written the way a studio writes one for its client: for
whoever uses the brand (designers, staff, printers, partners) and for the agents that design with
it, who read it the same way. Its tokens are the values; its prose says what each one is and why. How a piece uses them is
decided when the piece is designed, for its own goal. The guideline pages print Overview, Imagery,
Voice and Messaging as you write them.

## How it sounds

- The brand as it is, in the present tense: "The logo sits on paper or on a plate of paper over a
  photograph."
- Each colour, face and part by what it is and where it comes from: "Clay is the amber of the
  bottles, the colour people know Lumen by."
- A concrete reference carries the look: "a bathroom shelf in early light".
- Colours and type named by their tokens, so values stay in one place: `**Clay** {colors.clay}`.
- Every measure a real one: a share of the logo's height, or px at a stated size.
- The brand's name is text wherever a sentence names it; only where the logo stands is it the logo.

## Each section

**Overview.** What the brand is, then how it looks and feels in one concrete reference, then one
paragraph for whoever uses it: what the logo and the look have to do, and what they leave out of
the category's usual look.

> A small skincare brand for people with a short morning routine. It looks like a bathroom shelf in
> early light: warm stone, linen, amber glass, and nothing on it that doesn't need to be there.

**Colors.** A line on the palette as a whole, where its colours come from and the one the brand is
known by, then one line per colour: its name in bold and its token first, then what it is and which
text reads on it. Give each colour a line, or its own clause when two share one.

> - **Clay** {colors.clay} is the amber of the bottles, the colour people know Lumen by. Ink reads
>   on it; on paper it is too light to be text.

**Typography.** Each face, the roles it sets and what it brings, in a sentence or two.

> **Fraunces**, a warm old-style serif, is Lumen when it speaks large. **Inter**, plain and even,
> sets everything read closely.

**Logo.** Each version by its name and the ground it's for, the clear space, and what never changes.
The files are in `logos`; the section names the versions, never their paths.

> - **The primary logo:** the rising sun and the Lumen wordmark in ink, on paper or sand.
> - **The dark logo:** the same lockup in paper, on the night range's dark grounds.
> - Clear space equal to the height of the sun on every side. Never recolour it, redraw it or
>   separate the sun from the word.

**Imagery.** The kind of image, the picture every other one follows (what's in it, its light, its
palette), and what never appears.

> Photographs, never illustrations: one product on warm stone, low morning sun from the side, long
> soft shadows. Always a muted warm palette, plain labels, no text, no people.

**Voice.** A chart: [voice-chart.md](voice-chart.md).

**Messaging.** The brand described, ready to copy into a shop, a profile or an About page: in one
line, one sentence and one paragraph, then up to three key messages, a line each. Only facts from
the sources or the brief; the brand's own description word for word where it has one. No claims,
prices, awards or tagline: a tagline is a piece, made when the user asks.

> **One line:** Skincare for a short morning routine.

## What goes elsewhere

| It's about | It goes in |
|---|---|
| What the team supplied or decided, and what it still needs from the user | the handover message (`references/presenting.md` of the `brand` skill) |
| A rule from guidelines the brand was brought in with, quoted as theirs | Do's and Don'ts |
| A file's path | `logos` and `assets` |
