import { css } from 'lit';

/**
 * Base host styles shared by all Garden Zine components.
 * CSS custom properties (--zine-*, --ds-*) are inherited from the document root,
 * so tokens cascade through shadow DOM boundaries automatically.
 */
export const baseStyles = css`
  :host {
    box-sizing: border-box;
    font-family: var(--font-body, 'Special Elite', serif);
    color: var(--zine-ink, #0e0c07);
    -webkit-font-smoothing: antialiased;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
