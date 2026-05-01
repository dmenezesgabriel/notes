import '@notes/components'; // registers all Lit custom elements globally

import { withThemeByClassName } from '@storybook/addon-themes';
import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
  // ---------------------------------------------------------------------------
  // Global decorators
  // ---------------------------------------------------------------------------
  decorators: [
    // Themes addon — injects `dark` class on <html> to drive Tailwind dark mode.
    // Toggle with the palette icon in the Storybook toolbar.
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],

  // ---------------------------------------------------------------------------
  // Global parameters
  // ---------------------------------------------------------------------------
  parameters: {
    nextjs: {
      // all stories use the App Router
      appDirectory: true,
    },

    // ---- Accessibility (axe-core) ------------------------------------------
    a11y: {
      /**
       * DOM context passed to axe.run() — audit the full body by default.
       * Override per-story when scoping checks to a specific element.
       * https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#context-parameter
       */
      context: 'body',

      /**
       * axe.configure() options — enable / disable individual rules.
       * https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#api-name-axeconfigure
       */
      config: {},

      /**
       * axe.run() options — rule sets applied to every story.
       * Covers WCAG 2.0 A/AA + WCAG 2.1 A/AA + best practices.
       * https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter
       */
      options: {
        runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
      },

      /**
       * Fail the test (and CI) when violations are found.
       * Use `test: 'todo'` per-story for known issues not yet fixed.
       * Use `test: 'off'`  only for stories demonstrating anti-patterns.
       */
      test: 'error',
    },
  },
};

export default preview;
