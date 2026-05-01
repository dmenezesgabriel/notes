import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook/nextjs-vite';

// __dirname is not available in ESM — reconstruct it from import.meta.url
const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs-vite',
    options: {
      // resolve Next.js config from apps/site
      nextConfigPath: resolve(__dirname, '../../site/next.config.ts'),
    },
  },
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-themes',
    '@storybook/addon-vitest',
    '@storybook/addon-mcp',
  ],
  features: {
    // ensures React `act` runs before a11y checks — prevents false negatives
    // on async / RSC components
    developmentModeForBuild: true,
  },
  viteFinal: async (config) => {
    config.resolve ??= {};

    // deduplicate Lit so only one version is loaded across all packages
    config.resolve.dedupe = ['lit', '@lit/reactive-element', 'lit-html', 'lit-element'];

    // pre-bundle @notes/components and its Lit deps so Vite does not try to
    // serve raw TypeScript source files from outside the server root
    config.optimizeDeps ??= {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include ?? []),
      '@notes/components',
      'lit',
      'lit/decorators.js',
      '@lit/reactive-element',
    ];

    return config;
  },
};

export default config;
