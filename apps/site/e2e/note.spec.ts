import { expect, test } from '@playwright/test';

// Use a stable note that definitely exists in the vault
const STABLE_NOTE_SLUG = '/notes/books/a-philosophy-of-software-design';

test.describe('Note detail page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(STABLE_NOTE_SLUG);
  });

  test('responds with 200', async ({ page }) => {
    await expect(page).not.toHaveTitle(/404/);
  });

  test('renders the note title as h1', async ({ page }) => {
    const h1 = page.locator('h1#note-title');
    await expect(h1).toBeVisible();
    await expect(h1).not.toBeEmpty();
  });

  test('renders the prose article body', async ({ page }) => {
    await expect(page.locator('article')).toBeVisible();
    await expect(page.locator('.prose')).toBeVisible();
  });

  test('renders the breadcrumb', async ({ page }) => {
    const crumb = page.getByTestId('site-breadcrumb');
    await expect(crumb).toBeVisible();
  });

  test('breadcrumb has a home link', async ({ page }) => {
    // garden-breadcrumb renders an <a href="/"> in its shadow DOM;
    // evaluate in the page context to pierce shadow roots
    const hasHomeLink = await page.evaluate(() => {
      const bc = document.querySelector('garden-breadcrumb');
      return bc?.shadowRoot?.querySelector('a[href="/"]') !== null;
    });
    expect(hasHomeLink).toBe(true);
  });

  test('renders the site navigation', async ({ page }) => {
    await expect(page.getByTestId('site-nav')).toBeVisible();
  });

  test('renders a category tag', async ({ page }) => {
    // At least one garden-tag should be visible in the article header
    const tag = page.locator('article garden-tag').first();
    await expect(tag).toBeVisible();
  });
});

test.describe('Note detail page — 404 handling', () => {
  test('shows 404 for a nonexistent note', async ({ page }) => {
    await page.goto('/notes/this-does-not-exist-at-all');
    await expect(page.locator('h1')).toContainText('Note not found');
  });

  test('404 page has a back-to-home link', async ({ page }) => {
    await page.goto('/notes/this-does-not-exist-at-all');
    const homeLink = page.locator('a[href="/"]');
    await expect(homeLink.first()).toBeVisible();
  });
});
