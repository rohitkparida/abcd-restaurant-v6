# ABCD Restaurant V6

Ground-up, fidelity-first Astro implementation of the ABCD Restaurant website and prototype flows. V5 is a read-only design, content, and behavior reference; approved mockups take visual precedence.

## Architecture

- Astro 7 static output and strict TypeScript
- React only for the reservation wizard island
- Flow-based sections, shared containers, Grid/Flexbox, and scoped CSS
- No whole-page scaling, fixed canvas heights, or screenshot-backed UI
- Typed menu, reservation, success, exception, and KDS state
- Permanent visual-reference manifest and automated side-by-side/overlay/diff generation

## Commands

```bash
npm install
npm run dev
npm run check
npm run build
npm run test:links
npm run test:e2e
npm run test:a11y
npm run test:visual
npm test
```

Generate QA artifacts:

```bash
npm run visual:compare -- reference.png render.png homepage reference/comparisons
```

## Routes

Public: `/`, `/menu/`, `/our-story/`, `/gallery/`, `/contact/`, `/reserve/`.

Ordering: `/order/cart/`, `/order/checkout/`, `/order/payment/`, `/order/processing/`, `/order/success/?screen=...`, `/order/payment-exception/?state=...`.

Operations and states: `/kds/`, `/exceptions/*`, `/menu/variants/1/` through `/menu/variants/5/`, and `/screens/`.

## Visual QA

Reference sources and native viewport metadata live in `reference/manifest.json`. Approved mockups are immutable acceptance references. V5 baselines are secondary evidence for routes without a newer approved mockup.

See [`docs/QA.md`](docs/QA.md) for the responsive, accessibility, and visual gate definitions and the explicit approved-palette contrast exception.
