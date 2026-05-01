import js from '@eslint/js';
import type { Linter } from 'eslint';
import litPlugin from 'eslint-plugin-lit';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

const ignores: Linter.Config = {
  ignores: [
    '**/dist/**',
    '**/node_modules/**',
    '**/.next/**',
    '**/.content/**',
    '**/coverage/**',
  ],
};

/** Base config for all TypeScript packages */
export const base: Linter.Config[] = [
  ignores,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // import ordering
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      // typescript
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      // general
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    },
  },
];

/** Config for Lit web components packages */
export const lit: Linter.Config[] = [
  ...base,
  litPlugin.configs['flat/recommended'] as Linter.Config,
];
