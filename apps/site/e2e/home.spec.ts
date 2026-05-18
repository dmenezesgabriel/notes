import type { Page } from '@playwright/test';
import { expect, test } from '@playwright/test';

const HOME_PATH = '/notes';

/**
 * Home page tests — all assertions run against a single page load.
 * Using `mode: 'serial'` + `beforeAll` means we navigate to `/` exactly
 * once, removing 8 redundant navigations and cutting wall-clock time
 * significantly on a slow dev server.
 */
test.describe('Home page', () => {
  test.describe.configure({ mode: 'serial' });

  let page: Page;

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto(HOME_PATH);
  });

  test.afterAll(async () => {
    await page.close();
  });

  test('has correct page title', async () => {
    await expect(page).toHaveTitle(/Digital Garden/);
  });

  test('renders the site navigation', async () => {
    const nav = page.getByTestId('site-nav');
    await expect(nav).toBeVisible();
  });

  test('skip-to-content link is in the DOM but off-screen', async () => {
    const skip = page.locator('.skip-link');
    // The skip link must exist in the DOM …
    await expect(skip).toBeAttached();
    // … but must not be visible in the viewport until focused.
    await expect(skip).not.toBeInViewport();
    await expect(skip).toHaveAttribute('href', '#main-content');
  });

  test('renders the hero tags row', async () => {
    await expect(page.locator('garden-tag').first()).toBeVisible();
  });

  test('renders the search bar', async () => {
    const search = page.getByTestId('site-search');
    await expect(search).toBeVisible();
  });

  test('renders at least one note card', async () => {
    const cards = page.locator('garden-card');
    await expect(cards.first()).toBeVisible();
  });

  test('note cards have headline and href attributes', async () => {
    const card = page.locator('garden-card').first();
    await expect(card).toHaveAttribute('headline');
    await expect(card).toHaveAttribute('href');
  });

  test('has at least one category section heading', async () => {
    const headings = page.locator('h2[id^="cat-"]');
    await expect(headings.first()).toBeVisible();
  });

  test('main landmark is present', async () => {
    await expect(page.locator('main')).toBeVisible();
  });
});

test.describe('Home page — search states', () => {
  test('search shows matching results and a clear no-results state', async ({ page }) => {
    await page.goto(HOME_PATH);

    const search = page.getByTestId('site-search').getByRole('searchbox');

    await search.fill('software');
    await expect(page).toHaveURL(/\?q=software/);
    await expect(page.getByTestId('site-search')).toBeVisible();
    await expect(page.getByTestId('site-search').getByRole('searchbox')).toHaveValue('software');
    await expect(page.getByText(/RESULTS FOR/i)).toBeVisible();
    await expect(page.getByLabel(/search results/i)).toBeVisible();
    await expect(page.locator('garden-card').first()).toBeVisible();

    await page.getByRole('link', { name: /clear/i }).click();
    await expect(page).toHaveURL(/\/notes\/?$/);

    const searchAgain = page.getByTestId('site-search').getByRole('searchbox');
    await searchAgain.fill('definitely-no-home-search-hit');
    await expect(page).toHaveURL(/\?q=definitely-no-home-search-hit/);
    await expect(page.getByTestId('site-search')).toBeVisible();
    await expect(searchAgain).toHaveValue('definitely-no-home-search-hit');
    await expect(page.getByText(/No notes found for/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /clear/i })).toBeVisible();
  });
});
