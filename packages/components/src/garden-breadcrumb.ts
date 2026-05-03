import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * `<garden-breadcrumb>` — Zine-edition accessible navigation trail.
 * Mono font, white background, hard border, red separators.
 *
 * @example
 * <garden-breadcrumb .items=${[
 *   { label: 'home', href: '/' },
 *   { label: 'notes', href: '/notes' },
 *   { label: 'design system' }
 * ]}></garden-breadcrumb>
 */
@customElement('garden-breadcrumb')
export class GardenBreadcrumb extends LitElement {
  @property({ type: Array }) items: BreadcrumbItem[] = [];

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
      }

      nav {
        display: inline-block;
      }

      ol {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 0;
        align-items: center;
        padding: 5px 10px;
        margin: 0;
        background: #fff;
        border: 2px solid var(--zine-ink, #0e0c07);
        border-right: 3px solid var(--zine-ink, #0e0c07);
        border-bottom: 3px solid var(--zine-ink, #0e0c07);
      }

      li {
        display: flex;
        align-items: center;
        font-family: var(--font-mono, 'Cutive Mono', monospace);
        font-size: 11px;
        color: var(--zine-muted, #6b6050);
      }

      li + li::before {
        content: '/';
        color: var(--zine-red, #d42b2b);
        font-weight: bold;
        padding: 0 6px;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      a:hover {
        color: var(--zine-ink, #0e0c07);
      }

      li:last-child span,
      li:last-child a {
        color: var(--zine-ink, #0e0c07);
        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);
        font-size: 11px;
      }

      a:focus-visible {
        outline: 2px solid var(--zine-yellow, #f5c800);
        outline-offset: 2px;
      }
    `,
  ];

  render() {
    return html`
      <nav aria-label="Breadcrumb">
        <ol>
          ${this.items.map((item, i) => {
            const isCurrent = i === this.items.length - 1;
            return html`
              <li>
                ${isCurrent
                  ? html`<span aria-current="page">${item.label}</span>`
                  : item.href
                    ? html`<a href=${item.href}>${item.label}</a>`
                    : html`<span>${item.label}</span>`}
              </li>
            `;
          })}
        </ol>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-breadcrumb': GardenBreadcrumb;
  }
}
