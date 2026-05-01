import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import type { Linter } from 'eslint';
import litPlugin from 'eslint-plugin-lit';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

const ignores: Linter.Config = {
  ignores: ['**/dist/**', '**/node_modules/**', '**/.next/**', '**/.content/**', '**/coverage/**'],
};

/** Base config — shared by every TypeScript package and app */
export const base: Linter.Config[] = [
  ignores,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' },
      ],
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    },
  },
];

/** Lit config — extends base, adds Lit-specific rules for component authoring */
export const lit: Linter.Config[] = [
  ...base,
  litPlugin.configs['flat/recommended'] as Linter.Config,
];

/** Next.js config — extends base, adds Next.js core-web-vitals rules */
export const nextjs: Linter.Config[] = [
  ...base,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
];
