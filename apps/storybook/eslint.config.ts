import { base } from '@notes/eslint-config';

// Storybook writes React TSX stories — use base TypeScript rules.
// Lit web components are imported here but not authored here,
// so the Lit-specific rules are not needed.
export default base;
