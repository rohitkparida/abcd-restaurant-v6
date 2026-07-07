# Quality gates

## Accessibility

The Axe suite covers all 28 route and query-state combinations and fails on every serious or critical WCAG 2 A/AA structural violation. The `color-contrast` rule is deliberately tracked outside the blocking suite because the approved cream, gold, and muted-brown palette contains known contrast failures; changing those colors would alter the authoritative visual references. This exception does not imply WCAG color-contrast conformance and must be reviewed before a production launch.

## Responsive layout

Every route and supported query state is checked in Chromium/Pixel 5 and WebKit/iPhone 12 emulation. The document scroll width may not exceed the viewport width by more than one CSS pixel.

## Visual fidelity

Approved mockups are immutable. `scripts/visual-compare.mjs` writes a side-by-side image, a 50% overlay, and a four-times amplified pixel difference without modifying the reference. V5 captures are secondary references where no approved mockup exists.
