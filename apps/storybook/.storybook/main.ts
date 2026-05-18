import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import type { StorybookConfig } from '@storybook/nextjs-vite';

// __dirname is not available in ESM — reconstruct it from import.meta.url
const __dirname = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  framework: {
    name: '@storybook/nextjs-vite',
    options: {
      nextConfigPath: resolve(__dirname, '../../site/next.config.ts'),
      // Disable react-docgen: our stories use Lit web components,
      // not React components, so prop extraction is not needed.
      reactDocgen: false,
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

    // Deduplicate the public Lit entrypoint across workspaces.
    // Dedupe of nested packages such as `@lit/reactive-element` breaks
    // Storybook's production build under pnpm because those transitive
    // entries are not hoisted to a top-level node_modules location.
    config.resolve.dedupe = ['lit'];

    // Pre-bundle @notes/components and its Lit deps.
    // We intentionally resolve the package via its built dist/ output
    // (package.json "main" field) — NOT from raw TypeScript source.
    // Pointing Vite at the TS source triggers the Storybook Babel plugin
    // which uses stage-3 decorators and chokes on Lit's legacy decorator syntax.
    config.optimizeDeps ??= {};
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include ?? []),
      '@notes/components',
      'lit',
      'lit/decorators.js',
      'lit-html',
      '@lit/reactive-element',
    ];

    return config;
  },
};

export default config;
