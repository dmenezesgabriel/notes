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
      'garden-tag': React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'accent' | 'sage';
      };

      'garden-button': React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'primary' | 'ghost';
        disabled?: boolean;
        type?: 'button' | 'submit' | 'reset';
      };

      'garden-badge': React.HTMLAttributes<HTMLElement> & {
        variant?: 'accent' | 'sage' | 'muted';
      };

      'garden-breadcrumb': React.HTMLAttributes<HTMLElement> & {
        items?: Array<{ label: string; href?: string }>;
      };

      'garden-callout': React.HTMLAttributes<HTMLElement> & {
        variant?: 'note' | 'tip' | 'warning';
        heading?: string;
      };

      'garden-card': React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'featured' | 'wiki';
        headline?: string;
        meta?: string;
        excerpt?: string;
        href?: string;
      };

      'garden-search': React.HTMLAttributes<HTMLElement> & {
        placeholder?: string;
        kbd?: string;
        value?: string;
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

      'garden-mermaid': React.HTMLAttributes<HTMLElement> & {
        diagram?: string;
      };
    }
  }
}
