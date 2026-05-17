import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright E2E configuration for apps/site.
 *
 * Run:  pnpm e2e               (against already-running dev server)
 *       pnpm e2e:ci            (starts server automatically)
 */
export default defineConfig({
  testDir: './e2e',
  // The site dev server is memory-heavy during first compile; keep a single
  // browser worker so Playwright does not stampede Next.js with parallel page
  // compiles that push the process over its heap cap.
  fullyParallel: false,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 2 : 0,
  workers: 1,
  reporter: process.env['CI'] ? 'github' : 'list',

  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    // Fail fast – don't wait 30 s for individual actions / navigations.
    actionTimeout: 10_000,
    navigationTimeout: 20_000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Starts Next.js dev server before the tests; reuses it when already running.
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000/notes',
    reuseExistingServer: !process.env['CI'],
    timeout: 120_000,
    stdout: 'pipe',
    stderr: 'pipe',
  },
});
