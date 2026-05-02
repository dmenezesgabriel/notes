import { expect, test } from '@playwright/test';

test.describe('Accessibility', () => {
  test('home page has a skip-to-content link that targets #main-content', async ({ page }) => {
    await page.goto('/');
    const skip = page.locator('.skip-link');
    await expect(skip).toHaveAttribute('href', '#main-content');
    await expect(page.locator('#main-content')).toBeVisible();
  });

  test('home page html element has a lang attribute', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('note page html element has a lang attribute', async ({ page }) => {
    await page.goto('/notes/books/a-philosophy-of-software-design');
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });

  test('home page has a single <main> landmark', async ({ page }) => {
    await page.goto('/');
    const mains = await page.locator('main').count();
    expect(mains).toBe(1);
  });

  test('note page has a single <main> landmark', async ({ page }) => {
    await page.goto('/notes/books/a-philosophy-of-software-design');
    const mains = await page.locator('main').count();
    expect(mains).toBe(1);
  });

  test('note h1 has a stable id for breadcrumb targeting', async ({ page }) => {
    await page.goto('/notes/books/a-philosophy-of-software-design');
    await expect(page.locator('h1#note-title')).toBeVisible();
  });

  test('404 page has descriptive h1', async ({ page }) => {
    await page.goto('/notes/xyz-not-real');
    await expect(page.locator('h1')).toContainText('not found');
  });
});
