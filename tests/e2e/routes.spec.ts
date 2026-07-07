import { expect, test } from '@playwright/test';

const routes = [
  '/', '/menu/', '/our-story/', '/gallery/', '/contact/',
  '/reserve/?step=1', '/reserve/?step=2', '/reserve/?step=3',
  '/reserve/?step=confirmed', '/order/cart/', '/order/checkout/', '/order/payment/',
  '/order/processing/', '/order/success/?screen=dinein',
  '/order/success/?screen=delivery', '/order/success/?screen=reservation',
  '/order/payment-exception/?state=failed',
  '/order/payment-exception/?state=cancelled', '/kds/',
  '/exceptions/invalid-link/', '/exceptions/closed/',
  '/exceptions/table-ordering-paused/', '/menu/variants/1/', '/menu/variants/2/',
  '/menu/variants/3/', '/menu/variants/4/', '/menu/variants/5/', '/screens/',
];

for (const route of routes) {
  test(`${route} loads without page errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    const response = await page.goto(route, { waitUntil: 'domcontentloaded' });
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('main')).toBeVisible();
    expect(errors).toEqual([]);
  });
}

test('contact validates then announces success', async ({ page }) => {
  await page.goto('/contact/');
  await page.getByRole('button', { name: 'Send Message →' }).click();
  await expect(page.locator('[name=name]')).toBeFocused();
  await page.locator('[name=name]').fill('Guest');
  await page.locator('[name=email]').fill('guest@example.com');
  await page.locator('[name=message]').fill('Table availability question');
  await page.getByRole('button', { name: 'Send Message →' }).click();
  await expect(page.getByRole('status')).toContainText('received');
});

test('reservation preserves query step and focuses first invalid detail', async ({ page }) => {
  await page.goto('/reserve/?step=3');
  await expect(page).toHaveURL(/step=3/);
  await page.getByRole('button', { name: 'Confirm Reservation' }).click();
  await expect(page.getByPlaceholder('Enter your full name')).toBeFocused();
});

test('reservation confirmation is directly addressable', async ({ page }) => {
  await page.goto('/reserve/?step=confirmed');
  await expect(page.getByRole('heading', { level: 2, name: /table is waiting/i })).toBeVisible();
  await expect(page).toHaveURL(/step=confirmed/);
});

test('KDS filters order cards', async ({ page }) => {
  await page.goto('/kds/');
  await page.getByRole('button', { name: 'Pickup' }).click();
  await expect(page.locator('[data-order-type]:visible')).toHaveCount(2);
});

test('unsupported state query falls back safely', async ({ page }) => {
  await page.goto('/order/success/?screen=unsupported');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('table order');
  await page.goto('/order/payment-exception/?state=unsupported');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('complete your payment');
});
