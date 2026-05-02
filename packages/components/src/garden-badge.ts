import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export type BadgeVariant = 'accent' | 'sage' | 'muted';

/**
 * `<garden-badge>` — eyebrow / section-label text used above headings.
 * Small caps, letter-spaced, accent-coloured by default.
 *
 * @slot - Label text
 * @csspart base - The inner span element
 *
 * @example
 * <garden-badge>design system · v0.1</garden-badge>
 * <garden-badge variant="sage">pkm</garden-badge>
 */
@customElement('garden-badge')
export class GardenBadge extends LitElement {
  @property({ reflect: true }) variant: BadgeVariant = 'accent';

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
      }

      [part='base'] {
        font-size: 11px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        font-weight: 500;
        font-family: var(--font-ui, system-ui, sans-serif);
        color: var(--ds-accent, #a85025);
        display: inline-block;
      }

      [part='base'].sage {
        color: var(--ds-sage, #4d7350);
      }

      [part='base'].muted {
        color: var(--ds-muted, #6b6860);
      }
    `,
  ];

  render() {
    const cls = this.variant !== 'accent' ? this.variant : '';
    return html`
      <span part="base" class=${cls}>
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-badge': GardenBadge;
  }
}
