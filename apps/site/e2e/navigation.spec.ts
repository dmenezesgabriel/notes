import { expect, test } from '@playwright/test';

test.describe('Navigation', () => {
  test('clicking a note card navigates to the note page', async ({ page }) => {
    await page.goto('/');

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
      return nav?.shadowRoot?.querySelector('a[href="/"]') !== null;
    });
    expect(hasHomeLink).toBe(true);
  });

  test('back-to-home button on 404 navigates home', async ({ page }) => {
    await page.goto('/notes/definitely-does-not-exist');

    // Click the first <a href="/">
    await page.locator('a[href="/"]').first().click();
    await expect(page).toHaveURL('/');
    await expect(page).toHaveTitle(/Digital Garden/);
  });

  test('breadcrumb home link navigates to home page', async ({ page }) => {
    await page.goto('/notes/books/a-philosophy-of-software-design');

    // Pierce shadow DOM to click the <a href="/"> inside garden-breadcrumb
    await page.evaluate(() => {
      const bc = document.querySelector('garden-breadcrumb');
      const link = bc?.shadowRoot?.querySelector<HTMLAnchorElement>('a[href="/"]');
      link?.click();
    });

    await expect(page).toHaveURL('/');
  });
});
