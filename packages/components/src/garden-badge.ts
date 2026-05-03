import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export type BadgeVariant = 'accent' | 'sage' | 'muted' | 'yellow' | 'blue';

/**
 * `<garden-badge>` — Zine-edition rubber stamp eyebrow label.
 * Small caps, letter-spaced, stamp-coloured. Used above headings.
 *
 * @slot - Label text
 * @csspart base - The inner span element
 *
 * @example
 * <garden-badge>NEU-BRUTALISM × PUNK ZINE</garden-badge>
 * <garden-badge variant="sage">PKM</garden-badge>
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
        font-family: var(--font-mono, 'Cutive Mono', monospace);
        font-size: 11px;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--zine-red, #d42b2b);
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }

      [part='base']::before {
        content: '///';
        color: var(--zine-muted, #6b6050);
        font-size: 10px;
      }

      [part='base'].sage {
        color: var(--zine-green, #1d6b2e);
      }

      [part='base'].muted {
        color: var(--zine-muted, #6b6050);
      }

      [part='base'].yellow {
        color: var(--zine-yellow, #f5c800);
      }

      [part='base'].blue {
        color: var(--zine-blue, #1a3c8f);
      }
    `,
  ];

  render() {
    const variantMap: Record<BadgeVariant, string> = {
      accent: '',
      sage: 'sage',
      muted: 'muted',
      yellow: 'yellow',
      blue: 'blue',
    };
    const cls = variantMap[this.variant] ?? '';

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
