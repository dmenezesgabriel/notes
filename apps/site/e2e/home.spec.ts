import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle(/Digital Garden/);
  });

  test('renders the site navigation', async ({ page }) => {
    const nav = page.getByTestId('site-nav');
    await expect(nav).toBeVisible();
  });

  test('skip-to-content link is in the DOM', async ({ page }) => {
    const skip = page.locator('.skip-link');
    await expect(skip).toBeInViewport({ ratio: 0 }); // initially off-screen
    await expect(skip).toHaveAttribute('href', '#main-content');
  });

  test('renders the hero badge', async ({ page }) => {
    await expect(page.locator('garden-badge').first()).toBeVisible();
  });

  test('renders the search bar', async ({ page }) => {
    const search = page.getByTestId('site-search');
    await expect(search).toBeVisible();
  });

  test('renders at least one note card', async ({ page }) => {
    const cards = page.locator('garden-card');
    await expect(cards.first()).toBeVisible();
  });

  test('note cards have headline and href attributes', async ({ page }) => {
    const card = page.locator('garden-card').first();
    await expect(card).toHaveAttribute('headline');
    await expect(card).toHaveAttribute('href');
  });

  test('has at least one category section heading', async ({ page }) => {
    const headings = page.locator('h2[id^="cat-"]');
    await expect(headings.first()).toBeVisible();
  });

  test('main landmark is present', async ({ page }) => {
    await expect(page.locator('main')).toBeVisible();
  });
});
