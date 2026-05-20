import '../src/register-components'; // registers all Lit custom elements globally from the built shared package
// Import Garden design tokens — CSS custom properties cascade into all shadow DOMs
import '../src/styles/tokens.css';

import { withThemeByDataAttribute } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
  decorators: [
    // Theme switcher: toggles data-theme="dark" on the story root element.
    withThemeByDataAttribute({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
      attributeName: 'data-theme',
    }),
  ],

  parameters: {
    nextjs: { appDirectory: true },

    backgrounds: {
      // Match the actual page background tokens so story canvas looks like the real site.
      // Light mode page: --ds-page = #ede5c8 (aged paper)
      // Dark mode page:  --ds-page = #11111b (Catppuccin Crust)
      default: 'paper',
      values: [
        { name: 'paper', value: '#ede5c8' },
        { name: 'paper-card', value: '#f2edd7' },
        { name: 'dark', value: '#11111b' },
        { name: 'dark-surface', value: '#1e1e2e' },
        { name: 'ink', value: '#0e0c07' },
      ],
    },

    // ---- Accessibility (axe-core) ------------------------------------------
    a11y: {
      // Axe context: audit the full body of the story iframe
      context: 'body',

      config: {
        rules: [
          // 'region': "all content must be inside a landmark region".
          // Irrelevant for isolated component stories — they aren't full pages.
          // Verify this at the app level, not in the component workbench.
          { id: 'region', enabled: false },

          // 'landmark-unique': fires when an autodocs page renders multiple
          // variants of the same component side-by-side (e.g. two <garden-breadcrumb>
          // each containing <nav aria-label="Breadcrumb">).
          // This is a false positive unique to Storybook's docs layout.
          { id: 'landmark-unique', enabled: false },
        ],
      },

      options: {
        runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
      },

      // Fail the test (and CI) on any remaining violation.
      test: 'error',
    },
  },
};

export default preview;
