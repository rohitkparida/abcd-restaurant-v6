# ABCD Restaurant — Multi-Screen Recreation

## Context
The user attached a long pixel-perfect-recreation prompt plus a full set of Figma imports and reference screenshots for a restaurant site called "ABCD" (American Brand Culturally Desi). They want a real DOM/React implementation (no invisible-overlay hacks) matching the mockups at desktop viewport. It doesn't need to be responsive yet, but must be built cleanly enough to become responsive later. They explicitly told us to keep working autonomously.

The Figma imports are already in `/src/imports/` and are the pixel-perfect source of truth. Each screen was already imported by the Figma → React tool with correctly positioned nodes, colors, SVG paths, and image URLs. Our job is to wire them into a working multi-page app.

## Screens & Sources
- **Home** → `src/imports/AbcdHome/index.tsx`
- **Menu** → `src/imports/AbcdMenu/index.tsx` (default view) + `AbcdMenu-1` (variant / another tab)
- **Our Story** → `src/imports/AbcdAbout/index.tsx`
- **Reserve — step 1 Date** → `src/imports/AbcdReserve/index.tsx`
- **Reserve — step 2 Party Size** → `src/imports/AbcdReserve-1/index.tsx`
- **Reserve — step 3 Details** → `src/imports/AbcdReserve-2/index.tsx`
- **Cart drawer** → `src/imports/AbcdCart/index.tsx`
- **Order Received (dine-in)** → `src/imports/AbcdOrderSuccessfullDineIn/index.tsx`

## Approach
1. **Fonts** — add the union of imported font families (Outfit, Playfair Display, Inter, Lato, Poppins, Cinzel, Playfair, Noto Emoji) to `src/styles/fonts.css` via Google Fonts imports at the top of the file. Segoe UI Emoji falls back to system.
2. **Routing** — install/enable `react-router` (already in deps) and set up routes in `src/app/App.tsx`:
   - `/` → Home
   - `/menu` → Menu (with variant toggle for the two Menu imports)
   - `/story` → About
   - `/reserve` → 3-step reservation flow, local state moves between AbcdReserve → -1 → -2
   - `/order/success` → Order Received
   - Cart is a slide-over drawer triggered from any page (uses AbcdCart)
3. **Screen wrappers** — for each imported screen, create a thin wrapper component in `src/app/components/screens/` that:
   - renders the imported node from `src/imports/<Name>/index.tsx` as-is (do NOT edit the imports — they are the pixel-perfect layer)
   - overrides the internal nav links / buttons via event delegation or by copy-editing only interactive nodes to use `<Link>` and `navigate()`
   - Preferred: keep imports untouched; wrap them in a `<div>` that captures clicks on known-labelled nodes (Home / Menu / Our Story / Reserve / Book a Table / Cart / Next / Confirm Reservation / Back to Menu) and routes accordingly.
4. **Shared header/footer** — the imports already contain header + footer per screen (pixel-perfect). Do NOT extract them yet; leave duplicated for fidelity. A later pass can hoist them once responsive work begins.
5. **Cart drawer** — render `AbcdCart` inside a fixed-position overlay controlled by a `useState` in App; toggle open when the user clicks the cart icon on Menu.
6. **Reservation wizard state** — a small `useReducer` in `ReserveFlow.tsx` tracks step + date + partySize + seatingType + details; each step renders the matching AbcdReserve* import and the Next/Back buttons advance/retreat the step.
7. **Order Success wiring** — "Back to Menu" navigates to `/menu`; other buttons no-op.
8. **No overlay tricks** — everything renders from the imported DOM (real elements + SVG). No screenshot backgrounds.

## Files to create / edit
- edit `src/app/App.tsx` — install router, mount `<Routes>`, cart drawer state
- edit `src/styles/fonts.css` — add font @imports
- create `src/app/components/screens/HomeScreen.tsx`
- create `src/app/components/screens/MenuScreen.tsx`
- create `src/app/components/screens/StoryScreen.tsx`
- create `src/app/components/screens/ReserveFlow.tsx`
- create `src/app/components/screens/OrderSuccessScreen.tsx`
- create `src/app/components/CartDrawer.tsx`
- create `src/app/components/NavInterceptor.tsx` — wraps a screen and delegates clicks on `<a>`/button text to router navigation

Do NOT modify anything under `src/imports/**` — those are the pixel-perfect source of truth.

## Verification
1. Vite dev server is already running; open the preview.
2. Visually diff each route against the matching `.figma/attachments/image-*.png`:
   - `/` vs image (Home from AbcdHome)
   - `/menu` vs image-0
   - `/story` vs image-2
   - `/reserve` steps vs image-3, image-4, image-5
   - `/order/success` vs image-6
   - Open cart drawer, compare against image-7
3. Click through: header nav links, Book a Table CTA, reservation Next / Back / Confirm buttons, cart open/close, Back to Menu on success screen.
4. Confirm no console errors and no missing font warnings.

## Out of scope (for now)
- Responsive breakpoints (explicitly deferred by the user)
- Hoisting shared header/footer into components (defer until responsive pass)
- Real backend / persistence
- Side-by-side comparison PNGs and amplified-diff QA artifacts (the prompt requests them "when possible"; we cannot run Playwright/Chromium here, so we'll rely on the running dev server for visual review)
