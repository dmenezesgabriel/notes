import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

const HOME_PATH = '/notes';
const NOTE_SLUG = '/notes/books/a-philosophy-of-software-design';

/**
 * Accessibility tests — grouped by the page they operate on so each URL is
 * loaded only once per group instead of once per individual test.
 */

test.describe('Accessibility — home page', () => {
  test.describe.configure({ mode: 'serial' });

  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(HOME_PATH);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('has a skip-to-content link that targets #main-content', async () => {
    const skip = page.locator('.skip-link');
    await expect(skip).toHaveAttribute('href', '#main-content');
    await expect(page.locator('#main-content')).toBeVisible();
  });

  test('html element has a lang attribute', async () => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('has a single <main> landmark', async () => {
    const mains = await page.locator('main').count();
    expect(mains).toBe(1);
  });
});

test.describe('Accessibility — note page', () => {
  test.describe.configure({ mode: 'serial' });

  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(NOTE_SLUG);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('html element has a lang attribute', async () => {
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('has a single <main> landmark', async () => {
    const mains = await page.locator('main').count();
    expect(mains).toBe(1);
  });

  test('note h1 has a stable id for breadcrumb targeting', async () => {
    await expect(page.locator('h1#note-title')).toBeVisible();
  });
});

test.describe('Accessibility — 404 page', () => {
  test('has descriptive h1', async ({ page }) => {
    await page.goto('/notes/xyz-not-real');
    await expect(page.locator('h1')).toContainText('not found');
  });
});
