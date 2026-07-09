# ABCD Restaurant — Migrated Screen Inventory

| Area | Clean route | State |
| --- | --- | --- |
| Home | `/` | Static Astro |
| Menu | `/menu` | Astro + typed menu script |
| Our Story | `/our-story` | Astro + scale script |
| Gallery | `/gallery` | Static Astro |
| Contact | `/contact` | Astro + typed form feedback |
| Reservation | `/reserve?step=1|2|3|confirmed` | React island |
| Cart | `/order/cart` | Static Astro |
| Checkout | `/order/checkout` | Static Astro |
| Payment | `/order/payment` | Static Astro |
| Processing | `/order/processing` | Static Astro |
| Success family | `/order/success?screen=dinein|delivery|reservation` | Typed state script |
| Payment exceptions | `/order/payment-exception?state=failed|cancelled` | Typed state script |
| KDS | `/kds` | Typed filtering script |
| Exception launcher | `/exceptions` | Static Astro |
| Exception states | `/exceptions/invalid-link`, `/exceptions/closed`, `/exceptions/table-ordering-paused` | Static Astro |
| Menu flags | `/menu/variants/1` through `/menu/variants/5` | Static Astro variants |
| Screen launcher | `/screens` | Static Astro |

All listed screens have behavior coverage where applicable and Chrome visual baselines under `reference/qa/migration-baselines/`.
