import { nextjs } from '@notes/eslint-config';
import type { Linter } from 'eslint';

const config: Linter.Config[] = [
  ...nextjs,
  {
    // next-env.d.ts uses triple-slash references managed by Next.js — exclude from lint
    ignores: ['next-env.d.ts'],
  },
];

export default config;
