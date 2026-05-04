import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from '../styles/base';

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
        /* Uses token so dark mode can override */
        background: var(--breadcrumb-bg, #ffffff);
        border: 2px solid var(--zine-ink, #0e0c07);
        border-right: 3px solid var(--zine-ink, #0e0c07);
        border-bottom: 3px solid var(--zine-ink, #0e0c07);
      }

      li {
        display: flex;
        align-items: center;
        font-family: var(--font-mono, 'Cutive Mono', monospace);
        font-size: 12px;
        /* Use ink-faded for non-link crumbs — better contrast than muted */
        color: var(--zine-ink-faded, #2c2820);
      }

      li + li::before {
        content: '/';
        color: var(--zine-red, #d42b2b);
        font-weight: bold;
        padding: 0 6px;
      }

      /* Links are clearly interactive — use zine-red with underline */
      a {
        color: var(--zine-red, #d42b2b);
        text-decoration: underline;
        text-decoration-thickness: 1px;
        text-underline-offset: 2px;
      }

      a:focus-visible {
        outline: 2px solid var(--zine-yellow, #f5c800);
        outline-offset: 2px;
      }

      a:hover {
        color: var(--zine-red-dark, #8a0000);
        text-decoration-thickness: 2px;
      }

      /* Current page: bold stamp font, primary ink color */
      li:last-child span,
      li:last-child a {
        color: var(--zine-ink, #0e0c07);
        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);
        font-size: 11px;
        text-decoration: none;
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
