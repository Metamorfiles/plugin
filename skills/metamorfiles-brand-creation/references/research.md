# Research and direction

Read this for the brief and the direction step of `SKILL.md`: what is true of the business, what
its category looks like, three paths into it, and the directions their references become.

## Contents
- The subject, first
- The brief
- Touchpoints
- Where ideas come from
- Three paths
- The reference hunt
- Directions

## The subject, first

Read everything the user gave about the brand itself before any reference: the brief's "Where it is
today" links, and any site, profile or handle in their words. Open each with
`metamorfiles_look_at_page { url: "<the page>" }` (it shares the daily page budget with the reference
searches) or a web fetch.
- **A person:** what they've made, the words they use about themselves, what they post and how their
  feed looks.
- **A business:** its offer and prices, its place, its reviews' phrases, its founders, one odd fact.
- **Behind a login or empty:** take what's public, never guess.

Never search for the brand or the person by name: a name finds namesakes, and what represents them is
theirs to give. With nothing given, write "Nothing public given" in the brief's Facts and build from
their words and the category.

## The brief

`brand/process/brief.md` starts with what the user said. Add below it, briefly, from the subject's
research:
- **Facts:** what it makes, for whom, where, at what price, the languages it speaks to its customers
  in, and anything true and specific: hours, process, tools, materials, founders, rituals, a word the
  customers use: three to five phrases from the subject's own pages or reviews, and one odd fact,
  each with its source and the date you read it ("(their menu page, 9 Oct)"): prices, hours and
  offers change. That fact is often the idea. A line that only repeats the user's request isn't a fact.
- **The place,** when there is one: its signs, materials, colours and light, and two or three things
  only it has. An online business has a world instead: its customers' homes, their commute, their
  feed.
- **The category's codes:** the colours, symbols, type, imagery and voice its businesses share. Mark
  each one to keep (it earns trust or helps a customer) or to break (room to be different). Break one
  to three, knowingly. A place has codes too: its tourist look is a cliché unless the idea changes it.

| Category | Codes to avoid by default |
|---|---|
| Bakery, café | wheat, rolling pins, whisks, coffee beans and steam, chalkboard lettering, kraft brown only, beige minimalism |
| Restaurant, bar | chef hats, crossed cutlery, red and yellow, faux-vintage "Est." badges |
| Retail boutique | thin spaced serif capitals with a line monogram, rose-gold foil, terracotta arches |
| Beauty, salon | scissors, a woman's profile, flowing scripts, blush pink with gold, marble |
| Health, wellness | hearts, crosses, leaves, lotus, stones, ensō circles, clinical blue, sage and beige |
| Fitness | dumbbells, flexed arms, lightning, italic capitals with speed lines, black with neon |
| Services, agency | scales, columns, lightbulbs, puzzle pieces, handshakes, rising arrows, navy and gold |
| E-commerce, DTC | pastel with a rounded sans, a lowercase wordmark with a dot, blobs, flat-lays on beige |
| App, software | purple-to-blue gradients, a geometric lowercase sans, nodes and orbits, glossy 3D blobs |
| Kids, education | crayon fonts, primary rainbow, apples, owls, pencils, handprints |

## Touchpoints

The objects and screens this business's customers really meet, moment by moment: finding it,
arriving or opening it, buying or signing up, using it, taking it home or receiving it, coming back.
Write them in the brief, specific to this business, never a category's stock list:

| Kind of business | Its touchpoints might be |
|---|---|
| A dog daycare | the collar tag, the pickup report card, the treat bag, the play room door, the booking message |
| An app | the store listing, the app icon, onboarding, a notification, the receipt email |
| A law firm | the proposal cover, the meeting room wall, the invoice, the email signature |
| A product | the pack, the shipping box, the insert card, the product page |
| A venue or event | the door, the ticket or wristband, the menu, the cup, the poster |

They decide what the kit shows the brand on (`mockups.md`) and which templates come first.

## Where ideas come from

A direction starts from something only this business has, never from a mood. "Warm and modern" gives
nothing to draw from; "the hour the first batch comes out is the brand's number" does.

| Source | Look for | It becomes |
|---|---|---|
| The name | its meaning, sound, letters, an accent, a word inside it | a wordmark with one tweak |
| The craft | the material, the tool, the process, the mark it leaves | a drawn part, a texture, a device |
| The place | its signs, streets, light, its own palette | named colours, lettering, a pattern |
| The people | who runs it, who comes in | a hand, a character, portraits, a voice |
| The moment | the hour, the ritual, the season, the queue | a number, a colour of that hour |
| A reversal | the category's habit, and its considered opposite | a palette or register nobody uses |

## Three paths

Before any search, end the brief with three paths: three ways into the brand, each from a different
source above, so each search looks for something different. They differ in feel, not in hue: in
register (vernacular, heritage, minimal, loud, hand-made, character-led, editorial, material), in how
the mark is made and in what the imagery is. Write each as a numbered line under `## Paths`: its
name, what it takes from the brief, which category codes it keeps or breaks, and the plain words to
search for it:

```markdown
## Paths

1. **Morning batch:** the hour the first loaves come out as the brand's number; breaks beige
   minimalism. Search: bakery opening hours poster.
```

A path is a guess the research tests: one that finds nothing good changes or gives way to a better
one the references show, and its line in the brief changes with it.

## The reference hunt

Designers start from the best of what exists, the way they browse it, one hunt for each path:
- **Search** with `metamorfiles_search_references { query: "bakery opening hours poster" }`, in the
  path's plain words. It returns the covers of the most viewed and the featured projects, numbered
  on one sheet.
- **Choose from the covers** the three projects worth opening, genuinely good whatever their
  category, and pass their links with the path's name as
  `metamorfiles_collect_references { links: [...], path: "Morning batch" }`, which keeps about eight
  images of each (the logo, lettering, mascot and palette pages come with them). Links the user
  pasted come first, with no path: they are their taste.
- `metamorfiles_look_at_page { url: "https://..." }` shows a single page when you need to read one
  more closely, such as a type specimen or the business's own website.

Each sort of a search and each project opened spends one of the project's 15 pages a day: three paths,
each one search (two sorts) and three projects, spend all 15, so pages spent on the subject come off
the projects.

## Directions

Look at everything you collected first, as the brief's frame shows it, under each path's name:
`metamorfiles_render_preview { item: "templates/brand-board", format: "process-brief" }`. Each path
that holds up becomes a direction, the references showing what it really is, and the best of any
path may serve another. A direction is one feeling a reference set agrees on ("drawn
neighbourhood", "quiet apothecary", "loud market stall"), and each is one option of the direction
step, with its palette and pairing from `look.md`:
- **Title:** the direction's name, in a few words.
- **Line:** why it serves the brief: what it would feel like to meet this brand, and where it takes
  a risk.
- **Files:** four to eight references chosen by attribute (a logo, type, imagery, a layout, an
  application), so the direction shows the whole brand, not eight logos.
- **Captions:** the project, then what to take from it: "Harbour Study · a loose, confident script as the
  hero". What to take is a principle, never the look to copy.

Recommend the direction that best fits the brief, and say why in its line. The user may mix two;
write down what they took from each.
