import { css } from 'lit';

/**
 * Base host styles shared by all Garden components.
 * CSS custom properties (--ds-*) are inherited from the document root,
 * so tokens cascade through shadow DOM boundaries automatically.
 */
export const baseStyles = css`
  :host {
    box-sizing: border-box;
    font-family: var(--font-ui, system-ui, sans-serif);
    color: var(--ds-ink, #1c1a16);
    -webkit-font-smoothing: antialiased;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;
