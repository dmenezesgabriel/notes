import { expect, test } from '@playwright/test';

const HOME_PATH = '/notes';
const REGRESSION_NOTE_PATH = '/notes/books/14-habits-of-highly-productive-developers';
const STABLE_NOTE_PATH = '/notes/books/a-philosophy-of-software-design';
const INVALID_NOTE_PATH = '/notes/xyz-not-real';

test.describe('Site routing', () => {
  test('home page loads from the /notes public path', async ({ page }) => {
    await page.goto(HOME_PATH);

    await expect(page).toHaveTitle(/Digital Garden/);
    await expect(page.locator('garden-search')).toBeVisible();
  });

  test('valid note pages render from the public /notes URL', async ({ page }) => {
    await page.goto(STABLE_NOTE_PATH);

    await expect(page).toHaveTitle(/A Philosophy of Software Design/);
    await expect(page.locator('garden-article')).toHaveAttribute(
      'title',
      'A Philosophy of Software Design',
    );
  });

  test('regression: manifest-backed note routes no longer fail in dev', async ({ page }) => {
    await page.goto(REGRESSION_NOTE_PATH);

    await expect(page).toHaveTitle(/14 Habits of Highly Productive Developers/);
    await expect(page.locator('garden-article')).toHaveAttribute(
      'title',
      '14 Habits of Highly Productive Developers',
    );
  });

  test('invalid note pages still show the not-found experience', async ({ page }) => {
    await page.goto(INVALID_NOTE_PATH);

    await expect(page.getByRole('heading', { name: 'Note not found' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Back to home' })).toBeVisible();
  });

  test('configured favicon resolves from the base path', async ({ page, request }) => {
    await page.goto(HOME_PATH);

    const faviconHref = await page.locator('link[rel="icon"]').getAttribute('href');
    expect(faviconHref).toBe('/notes/favicon.ico');

    const response = await request.get(faviconHref!);
    expect(response.ok()).toBe(true);
    expect(response.headers()['content-type']).toContain('image/x-icon');
  });
});
