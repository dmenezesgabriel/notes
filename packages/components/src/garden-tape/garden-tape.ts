import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from '../styles/base';

export type TapeVariant = 'default' | 'red' | 'blue' | 'white';

/**
 * `<garden-tape>` — Zine-edition decorative tape strip.
 * Diagonal tape element for scrapbook/decorative effect.
 *
 * @slot - Tape text content
 * @csspart base - The tape span element
 *
 * @example
 * <garden-tape text="DESIGN SYSTEM · V0.1"></garden-tape>
 * <garden-tape variant="red" text="CUT HERE ✂"></garden-tape>
 */
@customElement('garden-tape')
export class GardenTape extends LitElement {
  @property({ reflect: true }) variant: TapeVariant = 'default';
  @property() text = '';
  @property() rotation = -1.5;

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
      }

      [part='base'] {
        display: inline-block;
        background: rgba(245, 200, 0, 0.75);
        padding: 3px 18px;
        font-size: 10px;
        font-family: var(--font-mono, 'Cutive Mono', monospace);
        letter-spacing: 0.08em;
        color: var(--zine-ink, #0e0c07);
        transform: rotate(var(--tape-rotation, -1.5deg));
        position: absolute;
        z-index: 20;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
      }

      [part='base'].red {
        background: rgba(212, 43, 43, 0.8);
        color: #fff;
      }

      [part='base'].blue {
        background: rgba(26, 60, 143, 0.85);
        color: #fff;
      }

      [part='base'].white {
        background: rgba(255, 255, 255, 0.85);
      }
    `,
  ];

  render() {
    const variantMap: Record<TapeVariant, string> = {
      default: '',
      red: 'red',
      blue: 'blue',
      white: 'white',
    };
    const cls = variantMap[this.variant] ?? '';

    return html`
      <span part="base" class=${cls} style="--tape-rotation: ${this.rotation}deg">
        <slot>${this.text}</slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-tape': GardenTape;
  }
}
