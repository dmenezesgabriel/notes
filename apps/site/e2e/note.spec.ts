import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

// Use a stable note that definitely exists in the vault
const STABLE_NOTE_SLUG = '/notes/books/a-philosophy-of-software-design';

/**
 * Note detail page tests — navigate once, assert many times.
 * All assertions run against the same page load; only the 404-handling
 * describe block creates its own navigations.
 */
test.describe('Note detail page', () => {
  test.describe.configure({ mode: 'serial' });

  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(STABLE_NOTE_SLUG);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('responds with 200', async () => {
    await expect(page).not.toHaveTitle(/404/);
  });

  test('renders the note title as h1', async () => {
    const h1 = page.locator('h1#note-title');
    await expect(h1).toBeVisible();
    await expect(h1).not.toBeEmpty();
  });

  test('renders the prose article body', async () => {
    await expect(page.locator('article')).toBeVisible();
    await expect(page.locator('.prose')).toBeVisible();
  });

  test('renders the breadcrumb', async () => {
    const crumb = page.getByTestId('site-breadcrumb');
    await expect(crumb).toBeVisible();
  });

  /**
   * `garden-breadcrumb` renders its links inside a Shadow DOM.
   * Playwright's locators auto-pierce shadow roots, so we use
   * `getByRole` instead of raw `shadowRoot.querySelector`.
   *
   * The items array is set via a React `useEffect`, which schedules
   * a Lit microtask render. `toBeVisible()` auto-waits until the
   * element appears, making the assertion race-free.
   */
  test('breadcrumb has a home link', async () => {
    const breadcrumb = page.getByTestId('site-breadcrumb');
    await expect(breadcrumb.getByRole('link', { name: 'home' })).toBeVisible();
  });

  test('renders the site navigation', async () => {
    await expect(page.getByTestId('site-nav')).toBeVisible();
  });

  test('renders a category tag', async () => {
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
    const homeLink = page.locator('a[href="/notes"], a[href="/notes/"]');
    await expect(homeLink.first()).toBeVisible();
  });
});
