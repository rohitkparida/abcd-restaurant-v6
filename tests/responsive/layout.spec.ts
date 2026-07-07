import { expect, test } from '@playwright/test';

const responsiveRoutes = [
  '/',
  '/menu/',
  '/our-story/',
  '/gallery/',
  '/contact/',
  '/reserve/?step=1',
  '/reserve/?step=2',
  '/reserve/?step=3',
  '/reserve/?step=confirmed',
  '/order/cart/',
  '/order/checkout/',
  '/order/payment/',
  '/order/processing/',
  '/order/success/?screen=dinein',
  '/order/success/?screen=delivery',
  '/order/success/?screen=reservation',
  '/order/payment-exception/?state=failed',
  '/order/payment-exception/?state=cancelled',
  '/kds/',
  '/exceptions/',
  '/exceptions/invalid-link/',
  '/exceptions/closed/',
  '/exceptions/table-ordering-paused/',
  '/menu/variants/1/',
  '/menu/variants/2/',
  '/menu/variants/3/',
  '/menu/variants/4/',
  '/menu/variants/5/',
  '/screens/',
];

for (const route of responsiveRoutes) {
  test(`${route} stays within the viewport`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('main')).toBeVisible();

    const overflow = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));

    expect(overflow.scrollWidth, `${route} has horizontal document overflow`).toBeLessThanOrEqual(
      overflow.clientWidth + 1,
    );
  });
}
