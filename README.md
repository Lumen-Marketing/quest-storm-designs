# Quest Storm: three website directions

Three independent, interactive homepage designs for an Arizona storm roofing campaign.

## View the designs

- [Compare all three](https://lumen-marketing.github.io/quest-storm-designs/)
- [Ridge](https://lumen-marketing.github.io/quest-storm-designs/direction-1-after-the-storm.html)
- [Fieldwork](https://lumen-marketing.github.io/quest-storm-designs/direction-2-roof-report.html)
- [Stormcut](https://lumen-marketing.github.io/quest-storm-designs/direction-3-stormline.html)

The comparison page includes real live previews, a desktop/mobile toggle, and a click-to-interact cover. Each design opens as a complete page.

## References and visual systems

- **Ridge:** the selected urban streetwear reference. Condensed type, a compact photo grid, white framing, dark blocks, and orange actions. Big Shoulders + Hanken Grotesk. White surfaces and photo trays. Native scrolling inspection sheets.
- **Fieldwork:** the DnD student workflow website and its existing code, adapted to roofing. An iridescent mint, lavender and pink light field, spacious type, word reveals, and unframed real photographs. Bricolage Grotesque + Sora. A drag-to-reveal photograph and an inspection lens.
- **Stormcut:** a cohesive combination of the supplied orange-and-black editorial references and asymmetric Valorant-style section boundaries. The second reference leads the hero: an Arizona home under storm skies blended into the moving ember background, with a bottom-anchored TechText headline. Outfit type, angular photos, and ruled interactions carry the system through the page.

The task management reference informed the desired polish. No task folders, dashboard furniture, or task management workflow is used.

## Same story, different furniture

| Section | Ridge | Fieldwork | Stormcut |
| --- | --- | --- | --- |
| Hero | Condensed masthead over a compact photo grid | Iridescent light field, spacious headline and unframed street/roof reveal | Bottom-anchored TechText headline over a full-bleed storm-home photograph and moving Grainient |
| Roof study | Numbered hotspots and a zoom slider | Movable magnifying window and inspection area tabs | Ruled inspection selectors beside an asymmetrically cut photograph |
| Inspection steps | React Bits ScrollStack during normal page scroll | Numbered tabbed photo viewer with previous/next controls | Staggered, angular photographic steps |
| Homeowner decision | Orange split statement with a dark action | Pastel Grainient surface and an offset storm photo | Oversized warm statement on an Aurora light field |
| Questions | Ruled list beside a condensed heading | Two-column question field | Numbered questions beside an editorial headline |
| Contact | Dark rectangular two-column invitation | Pale open band with ruled contact links | Angled inspection action beside oversized type |
| Footer | Compact white row | Open white wordmark row | Moving Grainient, stacked links, and a full-width wordmark |

## How the trade informs the interaction

| Roofing fact | Design / motion |
| --- | --- |
| Street views do not show every roof surface | Draggable exterior/roof photograph reveal |
| An inspection examines details | Hotspots, a magnifying window, and selectable inspection areas |
| Findings create a photographic record | Stacked sheets, a tabbed viewer, and a browsable photographic story |
| The homeowner chooses what comes next | Clear decision language and optional contact actions |

## Working interactions

All three include mobile navigation, expandable questions, phone links, and an inspection request panel. The request panel prepares an SMS draft addressed to the postcard's phone number. Visitors review and send it in their own text app.

Ridge uses the official React Bits ScrollStack. Fieldwork adapts the existing DnD Iridescence component and word reveals, plus the official React Bits Grainient with a pastel palette. Stormcut uses the official React Bits Grainient, Aurora, and TechText components. Grainient uses the requested five-color orange palette, angle 55, flow 0.8, silk 0.35, and grain amount 0.08; its speed is 1.35 with pointer interaction disabled. Aurora uses orange/yellow/orange color stops, amplitude 1, blend 0.5, height 0.45, speed 2.3, glow 0.6, and no pointer interaction. The TechText headline uses weight 600, size 150 (auto-fitted per line), letter reveal, 4/2 dashes, 15 specks, no intro, click kick, and no guides. Section content reveals through GSAP ScrollTrigger with a gentle fade and vertical movement. Reduced-motion preferences are respected; Stormcut also includes a pause/resume control in its footer. Animated backgrounds retain a CSS fallback if WebGL is unavailable.

## Scope

This is a design prototype. No lead database, payment collection, or insurance claim filing is connected. No guarantee of coverage, fabricated reviews, statistics, or credentials are included.

The phone number, no-cost inspection offer, and Arizona context come from the supplied Quest Roofing postcards. Confirm the final campaign presentation before customer launch.

No AI-generated raster imagery is used. All photographs are self-hosted and free to use under the licenses below.

## Photography

- [Arizona home under a storm](https://commons.wikimedia.org/wiki/File:A_House_in_Oro_Valley,_Arizona_With_A_Storm_In_The_Background.jpg): D&RG Railfan, CC BY 3.0.
- [Asphalt shingle damage](https://commons.wikimedia.org/wiki/File:Asphalt_shingles_damage.jpg): Samuel Bolton, CC BY-SA 4.0. Resized/compressed/cropped versions retain that license.
- [Phoenix roofing work](https://commons.wikimedia.org/wiki/File:LeBlanc_Roofing.jpg): NIOSH/CDC, public domain.

Full credits and license links are in public/PHOTO-CREDITS.html. Font and React Bits licenses are retained in licenses/.

## Development and publishing

    npm ci
    npm run dev
    npm run build

Vite builds the comparison page and three directions into dist/. Asset paths support a domain root and a GitHub Pages project subpath.

The GitHub repository contains the production build in docs/. GitHub Pages publishes main from /docs. To update it, build and replace docs/ with dist/, retaining docs/.nojekyll.
