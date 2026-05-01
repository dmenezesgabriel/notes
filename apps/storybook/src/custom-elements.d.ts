import 'react';

/**
 * JSX type declarations for Lit web components used in stories.
 * Augments React's IntrinsicElements so custom element tags are accepted in TSX.
 * Add new entries here whenever a new component is published from packages/components.
 */
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'my-heading': React.HTMLAttributes<HTMLElement> & {
        text?: string;
      };
    }
  }
}
