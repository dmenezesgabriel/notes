import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export type DividerVariant = 'dashed' | 'solid' | 'red';

/**
 * `<garden-divider>` — Zine-edition hand-drawn style divider.
 * Dashed (default), solid, or red variants.
 *
 * @csspart base - The divider hr element
 *
 * @example
 * <garden-divider></garden-divider>
 * <garden-divider variant="solid"></garden-divider>
 * <garden-divider variant="red"></garden-divider>
 */
@customElement('garden-divider')
export class GardenDivider extends LitElement {
  @property({ reflect: true }) variant: DividerVariant = 'dashed';

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        margin: 1.5rem 0;
      }

      [part='base'] {
        height: 4px;
        background: repeating-linear-gradient(
          90deg,
          var(--zine-ink, #0e0c07) 0px,
          var(--zine-ink, #0e0c07) 8px,
          transparent 8px,
          transparent 12px
        );
        opacity: 0.4;
        border: none;
      }

      [part='base'].solid {
        background: var(--zine-ink, #0e0c07);
        height: 3px;
        opacity: 1;
      }

      [part='base'].red {
        background: var(--zine-red, #d42b2b);
        height: 3px;
        opacity: 1;
      }
    `,
  ];

  render() {
    return html`<hr part="base" class=${this.variant === 'dashed' ? '' : this.variant} />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-divider': GardenDivider;
  }
}
