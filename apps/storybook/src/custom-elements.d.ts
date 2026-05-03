import 'react';

/**
 * JSX type declarations for Garden Lit web components used in stories.
 * Augments React's IntrinsicElements so custom element tags are accepted in TSX.
 */
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      // Legacy
      'my-heading': React.HTMLAttributes<HTMLElement> & {
        text?: string;
      };

      // Garden Design System
      'garden-banner': React.HTMLAttributes<HTMLElement> & {
        text?: string;
      };

      'garden-blockquote': React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'accent';
        cite?: string;
      };

      'garden-tag': React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'accent' | 'sage' | 'yellow' | 'blue' | 'green';
        href?: string;
      };

      'garden-button': React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'primary' | 'ghost' | 'yellow' | 'blue';
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset';
      };

      'garden-badge': React.HTMLAttributes<HTMLElement> & {
        variant?: 'accent' | 'sage' | 'muted' | 'yellow' | 'blue';
      };

      'garden-breadcrumb': React.HTMLAttributes<HTMLElement> & {
        items?: Array<{ label: string; href?: string }>;
      };

      'garden-callout': React.HTMLAttributes<HTMLElement> & {
        variant?: 'note' | 'tip' | 'warning' | 'info';
        heading?: string;
      };

      'garden-card': React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'featured' | 'wiki';
        headline?: string;
        meta?: string;
        excerpt?: string;
        href?: string;
      };

      'garden-divider': React.HTMLAttributes<HTMLElement> & {
        variant?: 'dashed' | 'solid' | 'red';
      };

      'garden-highlight': React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'blue' | 'red' | 'green';
      };

      'garden-search': React.HTMLAttributes<HTMLElement> & {
        placeholder?: string;
        kbd?: string;
        value?: string;
      };

      'garden-sheet': React.HTMLAttributes<HTMLElement> & {
        pinColor?: 'red' | 'yellow' | 'blue' | 'green';
        heading?: string;
      };

      'garden-toc': React.HTMLAttributes<HTMLElement> & {
        heading?: string;
        items?: Array<{
          id: string;
          label: string;
          depth?: number;
          active?: boolean;
        }>;
      };

      'garden-nav': React.HTMLAttributes<HTMLElement> & {
        brand?: string;
        links?: Array<{
          label: string;
          href: string;
          active?: boolean;
        }>;
      };

      'garden-tape': React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'red' | 'blue' | 'white';
        text?: string;
        rotation?: number;
      };

      'garden-mermaid': React.HTMLAttributes<HTMLElement> & {
        diagram?: string;
      };
    }
  }
}
