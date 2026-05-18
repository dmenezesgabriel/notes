import 'react';

import type {
  BreadcrumbItem as GardenBreadcrumbItem,
  NavLink as GardenNavLink,
  TocEntry as GardenTocEntry,
} from '@notes/components';

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
        items?: GardenBreadcrumbItem[];
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
        items?: GardenTocEntry[];
      };

      'garden-nav': React.HTMLAttributes<HTMLElement> & {
        brand?: string;
        homeHref?: string;
        links?: GardenNavLink[];
      };

      'garden-tape': React.HTMLAttributes<HTMLElement> & {
        variant?: 'default' | 'red' | 'blue' | 'white';
        text?: string;
        rotation?: number;
      };

      'garden-mermaid': React.HTMLAttributes<HTMLElement> & {
        diagram?: string;
      };

      'garden-article': React.HTMLAttributes<HTMLElement> & {
        title?: string;
        'has-sidebar'?: string;
        'has-backlinks'?: string;
      };
    }
  }
}
