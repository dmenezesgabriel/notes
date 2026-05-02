import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export type CardVariant = 'default' | 'featured' | 'wiki';

/**
 * `<garden-card>` — note/wiki card for listing pages.
 *
 * When `href` is provided the headline becomes a stretched link
 * (CSS `::after` covers the entire card) so the whole card is clickable
 * while keeping valid semantic HTML — an `<article>` is never wrapped by `<a>`.
 *
 * @slot footer - Slot for tags (garden-tag elements)
 * @slot thumb  - Optional thumbnail override (wiki variant)
 * @csspart article  - Root article element
 * @csspart headline - Title element (a or span depending on href)
 * @csspart meta     - Metadata line (date, read time)
 * @csspart excerpt  - Excerpt paragraph
 * @csspart footer   - Footer area (tags)
 *
 * @example
 * <garden-card
 *   headline="On building a second brain"
 *   meta="3 days ago · 8 min read"
 *   excerpt="The goal is to think better."
 *   href="/notes/second-brain"
 *   variant="featured"
 * >
 *   <garden-tag slot="footer" variant="accent">pkm</garden-tag>
 * </garden-card>
 */
@customElement('garden-card')
export class GardenCard extends LitElement {
  @property({ reflect: true }) variant: CardVariant = 'default';
  @property() headline = '';
  @property() meta = '';
  @property() excerpt = '';
  @property() href = '';

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
      }

      article {
        position: relative;
        background: var(--ds-surface, #fff);
        border: 1px solid var(--ds-border, rgba(28, 26, 22, 0.12));
        border-radius: var(--radius-lg, 12px);
        padding: 1rem 1.1rem;
        transition: box-shadow var(--transition-base, 200ms ease);
        height: 100%;
      }

      article:hover {
        box-shadow: var(--shadow-md, 0 4px 12px rgba(28, 26, 22, 0.1));
      }

      article.featured {
        border-left: 3px solid var(--ds-accent, #a85025);
        border-radius: 0 var(--radius-lg, 12px) var(--radius-lg, 12px) 0;
      }

      article.wiki {
        overflow: hidden;
        padding-top: 0;
      }

      /* Pixel decorative thumbnail for wiki cards */
      .wiki-thumb {
        height: 80px;
        background: var(--ds-tag-bg, #eeeae0);
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid var(--ds-border, rgba(28, 26, 22, 0.12));
        margin: 0 -1.1rem 0.875rem;
        border-radius: var(--radius-lg, 12px) var(--radius-lg, 12px) 0 0;
      }

      .wiki-thumb-grid {
        display: grid;
        grid-template-columns: repeat(6, 8px);
        grid-template-rows: repeat(3, 8px);
        gap: 3px;
        opacity: 0.25;
      }

      .wiki-thumb-grid span {
        width: 8px;
        height: 8px;
        border-radius: 1px;
        background: var(--ds-accent, #a85025);
      }

      .wiki-thumb-grid span:nth-child(3n + 1) {
        background: var(--ds-sage, #4d7350);
      }

      .wiki-thumb-grid span:nth-child(3n + 2) {
        background: var(--ds-ink, #1c1a16);
        opacity: 0.4;
      }

      /* Headline — plain span by default */
      [part='headline'] {
        font-family: var(--font-body, 'Lora', serif);
        font-size: 14px;
        font-weight: 500;
        color: var(--ds-ink, #1c1a16);
        margin-bottom: 4px;
        letter-spacing: -0.01em;
        display: block;
        text-decoration: none;
      }

      /* Stretched link: the headline <a> expands to cover the whole card */
      a[part='headline'] {
        color: var(--ds-ink, #1c1a16);
      }

      a[part='headline']::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
        border-radius: inherit;
      }

      a[part='headline']:focus-visible {
        outline: none;
      }

      a[part='headline']:focus-visible::after {
        outline: 2px solid var(--ds-accent, #a85025);
        outline-offset: 3px;
      }

      [part='meta'] {
        font-family: var(--font-ui, system-ui, sans-serif);
        font-size: 12px;
        color: var(--ds-muted, #6b6860);
        margin-bottom: 0.6rem;
        display: block;
      }

      [part='excerpt'] {
        font-family: var(--font-body, 'Lora', serif);
        font-size: 13px;
        color: var(--ds-muted, #6b6860);
        line-height: 1.65;
        display: block;
        margin: 0;
      }

      /* Footer sits above the stretched link overlay */
      [part='footer'] {
        position: relative;
        z-index: 2;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: 0.75rem;
      }
    `,
  ];

  private _renderThumb() {
    if (this.variant !== 'wiki') return nothing;
    return html`
      <slot name="thumb">
        <div class="wiki-thumb" aria-hidden="true">
          <div class="wiki-thumb-grid">
            ${Array.from({ length: 18 }, () => html`<span></span>`)}
          </div>
        </div>
      </slot>
    `;
  }

  render() {
    const cls = this.variant !== 'default' ? this.variant : '';
    return html`
      <article part="article" class=${cls}>
        ${this._renderThumb()}
        ${this.headline
          ? this.href
            ? html`<a part="headline" href=${this.href}>${this.headline}</a>`
            : html`<span part="headline">${this.headline}</span>`
          : nothing}
        ${this.meta ? html`<span part="meta">${this.meta}</span>` : nothing}
        ${this.excerpt ? html`<p part="excerpt">${this.excerpt}</p>` : nothing}
        <div part="footer"><slot name="footer"></slot></div>
        <slot></slot>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-card': GardenCard;
  }
}
