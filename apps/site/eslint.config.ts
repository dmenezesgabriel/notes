import { base } from '@notes/eslint-config';
import type { Linter } from 'eslint';

const config: Linter.Config[] = [
  ...base,
  {
    ignores: ['.next/**', '.content/**'],
  },
];

export default config;
