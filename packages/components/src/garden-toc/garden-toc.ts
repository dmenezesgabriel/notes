import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from '../styles/base';

export interface TocEntry {
  id: string;
  label: string;
  /** Heading depth: 1 = top-level, 2 = sub-heading */
  depth?: number;
  active?: boolean;
}

/**
 * `<garden-toc>` — Zine-edition table-of-contents sidebar.
 * Hand-drawn checklist vibe — rotated, marker title, checkbox items.
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
        background: var(--zine-paper-alt, #ede5c8);
        border: 3px solid var(--zine-ink, #0e0c07);
        border-right: 5px solid var(--zine-ink, #0e0c07);
        border-bottom: 5px solid var(--zine-ink, #0e0c07);
        padding: 1rem;
        transform: rotate(0.7deg);
      }

      [part='title'] {
        font-family: var(--font-marker, 'Permanent Marker', cursive);
        font-size: 15px;
        color: var(--zine-ink, #0e0c07);
        display: block;
        margin-bottom: 0.8rem;
        border-bottom: 3px solid var(--zine-ink, #0e0c07);
        padding-bottom: 6px;
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
        align-items: flex-start;
        gap: 6px;
      }

      [part='item'].depth-2 {
        padding-left: 16px;
      }

      [part='item'] a {
        font-family: var(--font-body, 'Special Elite', serif);
        font-size: 12px;
        color: var(--zine-ink-faded, #2c2820);
        text-decoration: none;
        padding: 4px 0;
        display: flex;
        align-items: flex-start;
        gap: 6px;
        line-height: 1.4;
        width: 100%;
        border-bottom: 1px dashed rgb(14 12 7 / 20%);
        transition: color 0.1s;
      }

      [part='item']:last-child a {
        border-bottom: none;
      }

      [part='item'].depth-2 a {
        font-size: 11px;
      }

      [part='item'] a:hover {
        color: var(--zine-red, #d42b2b);
      }

      [part='item'] a[aria-current='true'] {
        color: var(--zine-red, #d42b2b);
        font-family: var(--font-marker, 'Permanent Marker', cursive);
      }

      [part='item'] a:focus-visible {
        outline: 2px solid var(--zine-yellow, #f5c800);
        outline-offset: 2px;
      }

      /* Checkbox / tick box */
      .toc-box {
        width: 10px;
        height: 10px;
        border: 2px solid currentcolor;
        flex-shrink: 0;
        margin-top: 3px;
        display: inline-block;
        position: relative;
      }

      a[aria-current='true'] .toc-box {
        background: var(--zine-red, #d42b2b);
        border-color: var(--zine-red, #d42b2b);
      }

      a[aria-current='true'] .toc-box::after {
        content: '✕';
        position: absolute;
        top: -4px;
        left: 0;
        font-size: 12px;
        color: #fff;
        line-height: 1;
        font-family: var(--font-mono, 'Cutive Mono', monospace);
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
                    <span class="toc-box" aria-hidden="true"></span>
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
