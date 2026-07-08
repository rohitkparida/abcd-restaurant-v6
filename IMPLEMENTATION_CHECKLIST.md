# ABCD v6 Hybrid Implementation

Source priority: exported Figma mockups → Figma Make assets → v6-alt measurements → Astro v6 implementation.

## Sequence

- [x] Foundation: shared gutters, base-path helpers, trustworthy automated route QA
- [x] Homepage — broadly matched and responsive; pixel calibration deferred (normalized Figma MAE 24.82)
- [ ] Menu
- [ ] Reservation steps 1–3 and confirmation
- [ ] Cart → checkout → payment → processing → success/error states
- [ ] Our Story → gallery → contact
- [ ] Exceptions
- [ ] KDS
- [ ] Menu variants
- [ ] Screens launcher and documentation
- [ ] Full accessibility, responsive, E2E, link, asset, and visual validation

## Route completion gate

- [ ] Uses original Figma Make assets where available
- [ ] Desktop compared against the authoritative Figma export
- [ ] Tablet and mobile reflow reviewed
- [ ] No horizontal overflow or browser-console errors
- [ ] Keyboard, semantics, state, and clean route behavior preserved
- [ ] Build and targeted tests pass
- [ ] Remaining visual discrepancy recorded

## Automated QA

Run one or more routes:

```sh
npm run qa:route -- home
npm run qa:route -- home menu reserve-step1
npm run qa:route -- --all
```

Each route writes desktop/tablet/mobile screenshots, desktop side-by-side, 50% overlay, amplified diff, and `qa-summary.json` under `reference/comparisons/routes/<route-id>/`.
