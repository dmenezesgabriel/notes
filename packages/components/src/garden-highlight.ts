import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export type HighlightVariant = 'default' | 'blue' | 'red' | 'green';

/**
 * `<garden-highlight>` — Zine-edition text highlighter.
 * Background highlight with inline display. Supports multiple color variants.
 *
 * @slot - Highlighted text content
 * @csspart base - The inner span element
 *
 * @example
 * <garden-highlight>raw, loud, opinionated</garden-highlight>
 * <garden-highlight variant="blue">thinking better</garden-highlight>
 * <garden-highlight variant="red">Breaking change</garden-highlight>
 */
@customElement('garden-highlight')
export class GardenHighlight extends LitElement {
  @property({ reflect: true }) variant: HighlightVariant = 'default';

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline;
      }

      [part='base'] {
        background: var(--zine-yellow, #f5c800);
        padding: 0 3px;
        display: inline;
        box-decoration-break: clone;
      }

      [part='base'].blue {
        background: var(--zine-blue-lt, #4a80d4);
        color: #fff;
      }

      [part='base'].red {
        background: var(--zine-red, #d42b2b);
        color: #fff;
      }

      [part='base'].green {
        background: var(--zine-green-lt, #a8d8a0);
      }
    `,
  ];

  render() {
    const variantMap: Record<HighlightVariant, string> = {
      default: '',
      blue: 'blue',
      red: 'red',
      green: 'green',
    };
    const cls = variantMap[this.variant] ?? '';

    return html`<span part="base" class=${cls}><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-highlight': GardenHighlight;
  }
}
