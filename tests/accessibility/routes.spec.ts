import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
  '/', '/menu/', '/our-story/', '/gallery/', '/contact/',
  '/reserve/?step=1', '/reserve/?step=2', '/reserve/?step=3', '/reserve/?step=confirmed',
  '/order/cart/', '/order/checkout/', '/order/payment/', '/order/processing/',
  '/order/success/?screen=dinein', '/order/success/?screen=delivery',
  '/order/success/?screen=reservation',
  '/order/payment-exception/?state=failed',
  '/order/payment-exception/?state=cancelled',
  '/kds/', '/exceptions/', '/exceptions/invalid-link/', '/exceptions/closed/',
  '/exceptions/table-ordering-paused/', '/menu/variants/1/', '/menu/variants/2/',
  '/menu/variants/3/', '/menu/variants/4/', '/menu/variants/5/', '/screens/',
];

for (const route of routes) {
  test(`${route} has no serious or critical accessibility violations`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'domcontentloaded' });
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      // Approved brand colors are tracked separately because changing them alters visual fidelity.
      .disableRules(['color-contrast'])
      .analyze();
    expect(result.violations.filter(({ impact }) => impact === 'critical' || impact === 'serious')).toEqual([]);
  });
}
