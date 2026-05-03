import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from '../styles/base';

export type BlockquoteVariant = 'default' | 'accent';

/**
 * `<garden-blockquote>` — Zine-edition xerox blockquote.
 * Left border, large quote mark, italic body, optional citation.
 *
 * @slot - Quote content
 * @csspart base - The blockquote element
 * @csspart cite - Optional attribution element
 *
 * @example
 * <garden-blockquote cite="Aristotle">
 *   We are what we repeatedly do. Excellence, then, is not an act, but a habit.
 * </garden-blockquote>
 */
@customElement('garden-blockquote')
export class GardenBlockquote extends LitElement {
  @property({ reflect: true }) variant: BlockquoteVariant = 'default';
  @property() cite = '';

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        margin: 1rem 0;
      }

      blockquote {
        border-left: 5px solid var(--zine-ink, #0e0c07);
        padding: 0.6rem 0 0.6rem 1rem;
        font-family: var(--font-body, 'Special Elite', serif);
        font-size: 14px;
        font-style: italic;
        color: var(--zine-muted, #6b6050);
        margin: 0;
        background: rgba(14, 12, 7, 0.04);
        position: relative;
      }

      blockquote::before {
        content: '"';
        font-family: var(--font-display, 'Bebas Neue', sans-serif);
        font-size: 48px;
        color: var(--zine-red, #d42b2b);
        position: absolute;
        top: -10px;
        left: -12px;
        line-height: 1;
        opacity: 0.5;
      }

      [part='cite'] {
        display: block;
        margin-top: 0.5rem;
        font-family: var(--font-mono, 'Cutive Mono', monospace);
        font-size: 11px;
        font-style: normal;
        color: var(--zine-muted, #6b6050);
        letter-spacing: 0.05em;
      }

      [part='cite']::before {
        content: '— ';
      }
    `,
  ];

  render() {
    return html`
      <blockquote part="base">
        <slot></slot>
        ${this.cite ? html`<cite part="cite">${this.cite}</cite>` : ''}
      </blockquote>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-blockquote': GardenBlockquote;
  }
}
