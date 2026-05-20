import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from '../styles/base';

export type TagVariant = 'default' | 'accent' | 'sage' | 'yellow' | 'blue' | 'green';

/**
 * `<garden-tag>` — Zine-edition stamp tag chip.
 * Hard borders, flat color, slight rotation — hand-stamped feel.
 *
 * @slot - Tag text content
 * @csspart base - The inner span/anchor element
 *
 * @example
 * <garden-tag>PKM</garden-tag>
 * <garden-tag variant="accent">LIT ELEMENTS</garden-tag>
 * <garden-tag variant="blue">NEXT.JS SSG</garden-tag>
 */
@customElement('garden-tag')
export class GardenTag extends LitElement {
  @property({ reflect: true }) variant: TagVariant = 'default';
  @property() href?: string;

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
        color: var(--zine-ink, #0e0c07);
      }

      [part='base'] {
        display: inline-flex;
        align-items: center;
        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);
        font-size: 11px;
        letter-spacing: 0.06em;
        line-height: 1;
        padding: 4px 10px;
        border: 2px solid var(--zine-ink, #0e0c07);
        background: var(--zine-paper, #f2edd7);
        color: inherit;
        box-shadow: 2px 2px 0 var(--zine-ink, #0e0c07);
        white-space: nowrap;
        text-decoration: none;
        cursor: default;
        position: relative;
        transition: transform 0.1s;
      }

      /* Subtle rotation for handmade feel */
      :host(:nth-child(odd)) [part='base'] {
        transform: rotate(-0.6deg);
      }

      :host(:nth-child(even)) [part='base'] {
        transform: rotate(0.5deg);
      }

      a[part='base'] {
        cursor: pointer;
      }

      a[part='base']:hover {
        transform: rotate(0) translate(-1px, -1px);
      }

      a[part='base']:focus-visible {
        outline: 2px solid var(--zine-yellow, #f5c800);
        outline-offset: 2px;
      }

      /* Variants */
      [part='base'].accent {
        background: var(--zine-red, #d42b2b);
        border-color: var(--zine-ink, #0e0c07);
        box-shadow: 2px 2px 0 var(--zine-red-dark, #8a0000);
        color: var(--zine-filled-text, #fff);
      }

      [part='base'].sage,
      [part='base'].green {
        background: var(--zine-green, #1d6b2e);
        border-color: var(--zine-ink, #0e0c07);
        box-shadow: 2px 2px 0 var(--zine-ink, #0e0c07);
        color: var(--zine-filled-text, #fff);
      }

      [part='base'].yellow {
        background: var(--zine-yellow, #f5c800);
        color: var(--zine-light-fill-text, var(--zine-ink, #0e0c07));
        border-color: var(--zine-ink, #0e0c07);
        box-shadow: 2px 2px 0 var(--zine-ink, #0e0c07);
      }

      [part='base'].blue {
        background: var(--zine-blue, #1a3c8f);
        border-color: var(--zine-ink, #0e0c07);
        box-shadow: 2px 2px 0 var(--zine-ink, #0e0c07);
        color: var(--zine-filled-text, #fff);
      }
    `,
  ];

  override updated() {
    const hostColor =
      this.variant === 'accent' ||
      this.variant === 'sage' ||
      this.variant === 'green' ||
      this.variant === 'blue'
        ? 'var(--zine-filled-text, #fff)'
        : this.variant === 'yellow'
          ? 'var(--zine-light-fill-text, var(--zine-ink, #0e0c07))'
          : 'var(--zine-ink, #0e0c07)';

    this.style.color = hostColor;
  }

  render() {
    const variantMap: Record<TagVariant, string> = {
      default: '',
      accent: 'accent',
      sage: 'sage',
      yellow: 'yellow',
      blue: 'blue',
      green: 'green',
    };
    const cls = variantMap[this.variant] ?? '';

    if (this.href) {
      return html`<a part="base" class=${cls} href=${this.href}><slot></slot></a>`;
    }
    return html`<span part="base" class=${cls}><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-tag': GardenTag;
  }
}
