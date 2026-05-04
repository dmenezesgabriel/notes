import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from '../styles/base';

/**
 * `<garden-article>` — Zine-edition note / article page layout.
 *
 * Provides the structural shell for a rendered markdown note: title bar,
 * meta-tag row, prose area, optional sidebar (TOC), and backlinks section.
 * All content is injected via named slots so it lives in the light DOM —
 * prose styles from the host document's globals.css apply normally.
 *
 * ## Slots
 * | Name          | Purpose                                              |
 * |---------------|------------------------------------------------------|
 * | `breadcrumb`  | Breadcrumb trail (`<garden-breadcrumb>`)              |
 * | `meta`        | Category / status tags (`<garden-tag>` elements)     |
 * | `content`     | Rendered HTML prose — wrap in `<div class="prose">` |
 * | `sidebar`     | Sticky TOC (`<garden-toc>`) — shown when hasSidebar  |
 * | `backlinks`   | Linked-from tag list — shown when hasBacklinks       |
 *
 * ## Properties
 * | Property       | Type    | Default | Description                       |
 * |----------------|---------|---------|-----------------------------------|
 * | `title`        | string  | `''`    | Note title rendered as `<h1>`     |
 * | `hasSidebar`   | boolean | `false` | Enables two-column grid + sidebar |
 * | `hasBacklinks` | boolean | `false` | Shows the "Linked from" section   |
 *
 * @example
 * ```html
 * <garden-article title="On building a second brain" has-sidebar has-backlinks>
 *   <garden-breadcrumb slot="breadcrumb" ...></garden-breadcrumb>
 *   <garden-tag slot="meta" variant="sage">PKM</garden-tag>
 *   <div slot="content" class="prose">...rendered html...</div>
 *   <garden-toc slot="sidebar" .items=${toc}></garden-toc>
 *   <garden-tag slot="backlinks" href="/notes/pkm">PKM</garden-tag>
 * </garden-article>
 * ```
 */
@customElement('garden-article')
export class GardenArticle extends LitElement {
  @property() title = '';
  @property({ type: Boolean, reflect: true, attribute: 'has-sidebar' }) hasSidebar = false;
  @property({ type: Boolean, reflect: true, attribute: 'has-backlinks' }) hasBacklinks = false;

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
      }

      /* ── Breadcrumb row ─────────────────────────────────────────────── */
      .breadcrumb {
        margin-bottom: var(--space-4, 16px);
      }

      /* ── Two-column layout ──────────────────────────────────────────── */
      .layout {
        display: grid;
        grid-template-columns: 1fr;
        gap: var(--space-6, 32px);
        align-items: start;
        margin-top: var(--space-4, 16px);
      }

      :host([has-sidebar]) .layout {
        grid-template-columns: 1fr minmax(180px, 210px);
      }

      /* ── Article column ─────────────────────────────────────────────── */
      .article {
        min-width: 0; /* prevent grid blowout */
      }

      /* Meta tags row */
      .meta-row {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-3, 12px);
        align-items: center;
        margin-bottom: var(--space-3, 12px);
      }

      /* Note title */
      h1 {
        font-family: var(--font-display, 'Bebas Neue', sans-serif);
        font-size: clamp(28px, 4vw, 48px);
        letter-spacing: 0.03em;
        line-height: 1.1;
        /* Always use the primary ink colour — the previous code used
           --zine-paper which was invisible on a light background. */
        color: var(--zine-ink, #0e0c07);
        margin: 0 0 1.5rem;
        overflow-wrap: break-word;
        word-break: break-word;
      }

      /* Prose slot wrapper (the actual .prose div is in the light DOM so
         globals.css styles apply to its children without any special tricks) */
      .content {
        display: block;
      }

      /* ── Backlinks section ──────────────────────────────────────────── */
      .backlinks {
        margin-top: var(--space-7, 48px);
        padding-top: var(--space-5, 24px);
        border-top: 3px solid var(--ds-border, rgba(14, 12, 7, 0.2));
      }

      .backlinks-heading {
        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--zine-muted, #6b6050);
        margin: 0 0 var(--space-3, 12px);
      }

      .backlinks-list {
        display: flex;
        flex-wrap: wrap;
        gap: var(--space-2, 8px);
        list-style: none;
        padding: 0;
        margin: 0;
      }

      /* ── Sidebar column ─────────────────────────────────────────────── */
      .sidebar {
        position: sticky;
        top: 72px; /* below the sticky nav */
      }

      :host(:not([has-sidebar])) .sidebar {
        display: none;
      }
    `,
  ];

  render() {
    return html`
      <div class="breadcrumb">
        <slot name="breadcrumb"></slot>
      </div>

      <div class="layout">
        <!-- ── Article column ──────────────────────────────────────── -->
        <article class="article" aria-labelledby="garden-article-title">
          <div class="meta-row">
            <slot name="meta"></slot>
          </div>

          <h1 id="garden-article-title" part="title">${this.title}</h1>

          <div class="content">
            <slot name="content"></slot>
          </div>

          ${this.hasBacklinks
            ? html`
                <aside class="backlinks" aria-label="Notes that link here">
                  <h2 class="backlinks-heading" part="backlinks-heading">Linked from</h2>
                  <ul class="backlinks-list" part="backlinks-list">
                    <slot name="backlinks"></slot>
                  </ul>
                </aside>
              `
            : nothing}
        </article>

        <!-- ── Sidebar column ─────────────────────────────────────── -->
        <aside class="sidebar" aria-label="Table of contents">
          <slot name="sidebar"></slot>
        </aside>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-article': GardenArticle;
  }
}
