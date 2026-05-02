import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * `<garden-breadcrumb>` — accessible navigation trail.
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
        font-family: var(--font-ui, system-ui, sans-serif);
      }

      ol {
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        align-items: center;
        padding: 0;
        margin: 0;
      }

      li {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        color: var(--ds-muted, #6b6860);
      }

      li:not(:last-child)::after {
        content: '/';
        opacity: 0.4;
        margin-left: 4px;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      a:hover {
        color: var(--ds-ink, #1c1a16);
      }

      li[aria-current='page'] {
        color: var(--ds-ink, #1c1a16);
      }

      a:focus-visible {
        outline: 2px solid var(--ds-accent, #a85025);
        outline-offset: 2px;
        border-radius: 2px;
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
