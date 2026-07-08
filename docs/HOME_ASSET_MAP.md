# Homepage high-resolution asset map

Source: `Create Landing Page.zip` → `src/imports/AbcdHome`.

The untouched, hash-named originals have been copied to `public/assets/home/source-hq` under semantic names. Production derivatives must be generated from these files; the originals remain available for re-cropping.

| Production role | Semantic source | Treatment |
| --- | --- | --- |
| Header/brand logo | `logo.png` | Transparent mark only; tagline remains HTML or uses the existing approved lockup. |
| Hero bowl | `hero-bowl-transparent.png` | Transparent bowl; use with independent Taj/decorative artwork. |
| Hero photographic background | `hero-bowl-background.png` | Crop to the approved hero bounds; contains excess cream canvas and a sparkle. |
| Hero Taj/leaf artwork | `hero-taj-decoration.png` | Position independently; crop transparent/cream margins, never use as UI. |
| Signature dishes | `signature-biryani.png`, `signature-curry.png`, `signature-dal.png` | Use `object-fit: cover` with per-card focal positions. |
| Experience image | `interior.png` | Crop to the approved landscape frame. |
| Polaroid gallery | `gallery-*.png` | Crop each independently to the approved square/portrait frames. |
| Menu categories | `category-*.png` | Source files include labels and large cream margins; derive icon-only crops because labels are real HTML. |
| Why-dine icons | `why-icons-strip.png` | Split into four icon-only derivatives; headings/copy remain HTML. |
| CTA/section decoration | `taj-divider.png`, `leaf-left.png`, `leaf-right.png` | Crop to artwork bounds and position decoratively with CSS. |

No source image may be used to reproduce text, buttons, cards, labels, or other interface elements.
