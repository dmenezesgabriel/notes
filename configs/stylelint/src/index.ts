import type { Config } from 'stylelint';

/**
 * Base Stylelint config — standard CSS rules
 * Used for regular CSS files and non-Lit projects
 */
export const base: Config = {
  extends: ['stylelint-config-standard'],
  rules: {
    'selector-class-pattern': null,
  },
};

/**
 * Lit Element config — extends base with postcss-lit syntax
 * For parsing CSS inside Lit's css template literals
 */
export const lit: Config = {
  ...base,
  customSyntax: 'postcss-lit',
} as Config;

/**
 * Next.js config — extends base for Next.js projects
 * Uses standard CSS (Tailwind, CSS Modules, etc.)
 */
export const nextjs: Config = {
  ...base,
} as Config;
