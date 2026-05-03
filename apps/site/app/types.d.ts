import 'react';

/**
 * JSX intrinsic element declarations for Garden Design System Lit web components.
 *
 * Uses the same `React.DetailedHTMLProps` pattern as built-in HTML elements so
 * that `key`, `ref`, `className`, `style`, and all standard HTML attributes are
 * available automatically.
 */
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'garden-nav': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { brand?: string },
        HTMLElement
      >;
      'garden-tag': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          variant?: 'default' | 'accent' | 'sage' | 'yellow' | 'blue' | 'green';
          href?: string;
        },
        HTMLElement
      >;
      'garden-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          variant?: 'default' | 'primary' | 'ghost' | 'yellow' | 'blue';
          disabled?: boolean;
          type?: 'button' | 'submit' | 'reset';
        },
        HTMLElement
      >;
      'garden-badge': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          variant?: 'accent' | 'sage' | 'muted' | 'yellow' | 'blue';
        },
        HTMLElement
      >;
      'garden-breadcrumb': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'garden-callout': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          variant?: 'note' | 'tip' | 'warning' | 'info';
          heading?: string;
        },
        HTMLElement
      >;
      'garden-card': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          variant?: 'default' | 'featured' | 'wiki';
          headline?: string;
          meta?: string;
          excerpt?: string;
          href?: string;
        },
        HTMLElement
      >;
      'garden-search': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          placeholder?: string;
          kbd?: string;
          value?: string;
        },
        HTMLElement
      >;
      'garden-toc': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { heading?: string },
        HTMLElement
      >;
    }
  }
}
