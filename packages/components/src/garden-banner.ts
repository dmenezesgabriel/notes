import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

/**
 * `<garden-banner>` — Zine-edition misregistration banner.
 * Xerox artifact with scrolling marquee text and blue shadow offset.
 *
 * @slot - Banner text content (overrides text property)
 * @csspart wrapper - The outer banner div
 * @csspart text - The scrolling text span
 * @csspart shadow - The misregistered shadow text
 *
 * @example
 * <garden-banner text="NEU-BRUTALISM × PUNK ZINE · DESIGN SYSTEM V0.1"></garden-banner>
 */
@customElement('garden-banner')
export class GardenBanner extends LitElement {
  @property() text = 'BANNER';

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        overflow: hidden;
      }

      [part='wrapper'] {
        background: var(--zine-red, #d42b2b);
        padding: 10px 1.5rem;
        position: relative;
        overflow: hidden;
        border-top: 3px solid var(--zine-ink, #0e0c07);
        border-bottom: 3px solid var(--zine-ink, #0e0c07);
      }

      [part='wrapper']::before {
        content: attr(data-text);
        position: absolute;
        left: 3px;
        top: 3px;
        color: var(--zine-blue, #1a3c8f);
        font-family: var(--font-display, 'Bebas Neue', sans-serif);
        font-size: 15px;
        letter-spacing: 0.25em;
        opacity: 0.5;
        white-space: nowrap;
        pointer-events: none;
      }

      [part='text'] {
        font-family: var(--font-display, 'Bebas Neue', sans-serif);
        font-size: 15px;
        letter-spacing: 0.25em;
        color: var(--zine-yellow, #f5c800);
        text-transform: uppercase;
        white-space: nowrap;
        position: relative;
        z-index: 1;
        animation: marquee 18s linear infinite;
      }

      @keyframes marquee {
        from {
          transform: translateX(100vw);
        }
        to {
          transform: translateX(-100%);
        }
      }
    `,
  ];

  render() {
    return html`
      <div part="wrapper" data-text=${this.text}>
        <div part="text">${this.text}</div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-banner': GardenBanner;
  }
}
