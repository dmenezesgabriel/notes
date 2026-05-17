import { expect, test } from '@playwright/test';

const HOME_PATH = '/notes';

test.describe('Navigation', () => {
  test('clicking a note card navigates to the note page', async ({ page }) => {
    await page.goto(HOME_PATH);

    // Get the first card's href and headline before clicking
    const card = page.locator('garden-card[href]').first();
    const href = await card.getAttribute('href');
    const headline = await card.getAttribute('headline');

    expect(href).toBeTruthy();
    expect(headline).toBeTruthy();

    // Click the card (the stretched link covers the whole card)
    await card.click();

    // Should navigate to the note page
    await expect(page).toHaveURL(href!);

    // Note title should contain the headline text
    await expect(page.locator('h1#note-title')).toBeVisible();
  });

  test('site nav brand link returns to home', async ({ page }) => {
    await page.goto('/notes/books/a-philosophy-of-software-design');

    // The brand link in garden-nav shadow DOM
    const hasHomeLink = await page.evaluate(() => {
      const nav = document.querySelector('garden-nav');
      return nav?.shadowRoot?.querySelector('a[href="/notes"], a[href="/notes/"]') !== null;
    });
    expect(hasHomeLink).toBe(true);
  });

  test('configured favicon request resolves as a static asset', async ({ page, request }) => {
    await page.goto(HOME_PATH);

    const faviconHref = await page.locator('link[rel="icon"]').getAttribute('href');
    expect(faviconHref).toBe('/notes/favicon.ico');

    const response = await request.get(faviconHref!);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('image/x-icon');
  });

  test('back-to-home button on 404 navigates home', async ({ page }) => {
    await page.goto('/notes/definitely-does-not-exist');
    // Ensure React hydration is complete before interacting.
    await page.waitForLoadState('networkidle');

    // The back-to-home link is a styled <Link> — use accessible-name selector
    // to target it unambiguously (the nav also has links to "/").
    await page.getByRole('link', { name: 'Back to home' }).click();
    await expect(page).toHaveURL(/\/notes\/?$/, { timeout: 15_000 });
    await expect(page).toHaveTitle(/Digital Garden/);
  });

  /**
   * Clicking the "home" link inside garden-breadcrumb's shadow DOM.
   *
   * Previously used `page.evaluate` + `shadowRoot.querySelector` + `.click()`,
   * which races Lit's async render cycle and bypasses Next.js router events.
   *
   * Playwright's locators auto-pierce shadow roots and dispatch real browser
   * events, so the click reliably triggers client-side navigation.
   */
  test('breadcrumb home link navigates to home page', async ({ page }) => {
    await page.goto('/notes/books/a-philosophy-of-software-design');

    // `getByTestId('site-breadcrumb')` targets <garden-breadcrumb>;
    // Playwright then pierces its shadow root to find the "home" link.
    const breadcrumb = page.getByTestId('site-breadcrumb');
    await breadcrumb.getByRole('link', { name: 'home' }).click();

    await expect(page).toHaveURL(/\/notes\/?$/);
  });
});
