import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export type PinColor = 'red' | 'yellow' | 'blue' | 'green';

/**
 * `<garden-sheet>` — Zine-edition paper sheet pinned to corkboard.
 * Simulates pinned paper with pushpin and optional heading.
 *
 * @slot - Sheet content
 * @csspart wrapper - The outer sheet div
 * @csspart heading - Optional heading element
 * @csspart pin - The pushpin circle
 *
 * @example
 * <garden-sheet heading="COLOUR TOKENS">
 *   <p>Sheet content here.</p>
 * </garden-sheet>
 * <garden-sheet pinColor="yellow" heading="SECTION">
 *   <p>Yellow pin variant.</p>
 * </garden-sheet>
 */
@customElement('garden-sheet')
export class GardenSheet extends LitElement {
  @property({ reflect: true }) pinColor: PinColor = 'red';
  @property() heading = '';

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        margin-top: 2.5rem;
      }

      [part='wrapper'] {
        background: var(--zine-paper, #f2edd7);
        border: var(--zine-border, 3px solid #0e0c07);
        border-right: 5px solid var(--zine-ink, #0e0c07);
        border-bottom: 5px solid var(--zine-ink, #0e0c07);
        padding: 1.5rem;
        position: relative;
        box-shadow: var(--zine-shadow-lg, 6px 6px 0 #0e0c07);
      }

      [part='pin'] {
        position: absolute;
        top: -10px;
        left: 24px;
        width: 18px;
        height: 18px;
        background: var(--pin-bg, var(--zine-red, #d42b2b));
        border: 2px solid var(--pin-border, var(--zine-red-dark, #8a0000));
        border-radius: 50%;
        color: var(--pin-border, var(--zine-red-dark, #8a0000));
        font-size: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
      }

      [part='wrapper'].pin-yellow {
        --pin-bg: var(--zine-yellow, #f5c800);
        --pin-border: #a08800;
      }

      [part='wrapper'].pin-blue {
        --pin-bg: var(--zine-blue-lt, #4a80d4);
        --pin-border: var(--zine-blue, #1a3c8f);
      }

      [part='wrapper'].pin-green {
        --pin-bg: var(--zine-green-lt, #a8d8a0);
        --pin-border: var(--zine-green, #1d6b2e);
      }

      [part='heading'] {
        font-family: var(--font-display, 'Bebas Neue', sans-serif);
        font-size: 22px;
        color: var(--zine-ink, #0e0c07);
        letter-spacing: 0.08em;
        margin-bottom: 1.25rem;
        display: flex;
        align-items: center;
        gap: 10px;
      }

      [part='heading'] .slash {
        color: var(--zine-red, #d42b2b);
      }

      [part='heading']::after {
        content: '';
        flex: 1;
        height: 3px;
        background: var(--zine-ink, #0e0c07);
        margin-left: 8px;
      }
    `,
  ];

  render() {
    const pinClass = this.pinColor !== 'red' ? `pin-${this.pinColor}` : '';
    const slash = this.heading ? html`<span class="slash">//</span>` : '';

    return html`
      <div part="wrapper" class=${pinClass}>
        <div part="pin">●</div>
        ${this.heading ? html`<div part="heading">${slash} ${this.heading}</div>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-sheet': GardenSheet;
  }
}
