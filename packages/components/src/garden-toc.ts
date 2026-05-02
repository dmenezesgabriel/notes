import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export interface TocEntry {
  id: string;
  label: string;
  /** Heading depth: 1 = top-level, 2 = sub-heading */
  depth?: number;
  active?: boolean;
}

/**
 * `<garden-toc>` — sticky table-of-contents sidebar.
 *
 * @csspart wrapper - Outer container
 * @csspart title   - "On this page" heading
 * @csspart list    - Ordered list
 * @csspart item    - Each list item
 *
 * @example
 * <garden-toc .items=${[
 *   { id: 'intro', label: 'Introduction', active: true },
 *   { id: 'capture', label: 'The capture habit', depth: 2 },
 * ]}></garden-toc>
 */
@customElement('garden-toc')
export class GardenToc extends LitElement {
  @property({ type: Array }) items: TocEntry[] = [];
  @property() heading = 'On this page';

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
      }

      [part='wrapper'] {
        background: var(--ds-surface, #fff);
        border: 1px solid var(--ds-border, rgba(28, 26, 22, 0.12));
        border-radius: var(--radius-lg, 12px);
        padding: 1rem;
      }

      [part='title'] {
        font-family: var(--font-ui, system-ui, sans-serif);
        font-size: 12px;
        font-weight: 500;
        color: var(--ds-muted, #6b6860);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        display: block;
        margin-bottom: 0.6rem;
      }

      [part='list'] {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1px;
      }

      [part='item'] {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      [part='item'].depth-2 {
        padding-left: 12px;
      }

      [part='item'] a {
        font-family: var(--font-ui, system-ui, sans-serif);
        font-size: 13px;
        color: var(--ds-muted, #6b6860);
        text-decoration: none;
        padding: 3px 0;
        display: flex;
        align-items: center;
        gap: 6px;
        transition: color var(--transition-fast, 120ms ease);
        width: 100%;
      }

      [part='item'].depth-2 a {
        font-size: 12px;
      }

      [part='item'] a:hover {
        color: var(--ds-ink, #1c1a16);
      }

      [part='item'] a[aria-current='true'] {
        color: var(--ds-accent, #a85025);
        font-weight: 500;
      }

      [part='item'] a:focus-visible {
        outline: 2px solid var(--ds-accent, #a85025);
        outline-offset: 2px;
        border-radius: 2px;
      }

      .dot {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: currentColor;
        flex-shrink: 0;
      }
    `,
  ];

  render() {
    return html`
      <nav aria-label="Table of contents">
        <div part="wrapper">
          <span part="title">${this.heading}</span>
          <ol part="list" role="list">
            ${this.items.map(
              (item) => html`
                <li part="item" class=${item.depth === 2 ? 'depth-2' : ''}>
                  <a href=${`#${item.id}`} aria-current=${item.active ? 'true' : nothing}>
                    <span class="dot" aria-hidden="true"></span>
                    ${item.label}
                  </a>
                </li>
              `,
            )}
          </ol>
        </div>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-toc': GardenToc;
  }
}
