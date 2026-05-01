import { base } from '@notes/eslint-config';
import type { Linter } from 'eslint';

const config: Linter.Config[] = [
  ...base,
  {
    // root-level ignores on top of those in the shared config
    ignores: ['notes/**', '.content/**', '.playwright-cli/**', '**/next-env.d.ts'],
  },
];

export default config;
