import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export type CardVariant = 'default' | 'featured' | 'wiki';

/**
 * `<garden-card>` — Zine-edition note/wiki card.
 * Thick right+bottom border, slight rotation, scrapbook feel.
 *
 * When `href` is provided the headline becomes a stretched link.
 *
 * @slot footer - Slot for tags (garden-tag elements)
 * @slot thumb  - Optional thumbnail override (wiki variant)
 * @csspart article  - Root article element
 * @csspart headline - Title element
 * @csspart meta     - Metadata line
 * @csspart excerpt  - Excerpt paragraph
 * @csspart footer   - Footer area
 *
 * @example
 * <garden-card
 *   headline="On building a second brain"
 *   meta="3 DAYS AGO · 8 MIN READ"
 *   excerpt="The goal is to think better."
 *   href="/notes/second-brain"
 *   variant="featured"
 * >
 *   <garden-tag slot="footer" variant="accent">PKM</garden-tag>
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
        /* Use CSS custom property so grid containers can set alternating rotations */
        transform: rotate(var(--card-rotate, -0.5deg));
        transition: transform 0.15s ease;
      }

      :host(:hover) {
        transform: rotate(0deg) scale(1.01) !important;
        z-index: 10;
        position: relative;
      }

      article {
        position: relative;
        background: var(--zine-paper, #f2edd7);
        border: 3px solid var(--zine-ink, #0e0c07);
        border-right: 5px solid var(--zine-ink, #0e0c07);
        border-bottom: 5px solid var(--zine-ink, #0e0c07);
        padding: 1rem;
        height: 100%;
      }

      /* Featured — yellow tint + red top border */
      article.featured {
        background: var(--zine-yellow-lt, #fdf0a0);
        border-top: 5px solid var(--zine-red, #d42b2b);
      }

      article.featured::after {
        content: '★ FEATURED';
        position: absolute;
        top: -16px;
        right: 10px;
        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);
        font-size: 10px;
        background: var(--zine-red, #d42b2b);
        color: #fff;
        padding: 2px 8px;
        letter-spacing: 0.08em;
        z-index: 5;
        border: 2px solid var(--zine-ink, #0e0c07);
      }

      /* Wiki variant */
      article.wiki {
        overflow: hidden;
        padding-top: 0;
      }

      /* Wiki thumb */
      .wiki-thumb {
        height: 80px;
        background: var(--zine-blue, #1a3c8f);
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 3px solid var(--zine-ink, #0e0c07);
        position: relative;
        overflow: hidden;
      }

      .wiki-thumb::after {
        content: '';
        position: absolute;
        inset: 0;
        background-image: repeating-linear-gradient(
          45deg,
          transparent,
          transparent 4px,
          rgba(14, 12, 7, 0.08) 4px,
          rgba(14, 12, 7, 0.08) 5px
        );
      }

      .wiki-thumb-text {
        font-family: var(--font-display, 'Bebas Neue', sans-serif);
        font-size: 28px;
        color: var(--zine-paper, #f2edd7);
        letter-spacing: 0.04em;
        z-index: 1;
        text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.4);
      }

      /* Headline */
      [part='headline'] {
        font-family: var(--font-display, 'Bebas Neue', sans-serif);
        font-size: 18px;
        color: var(--zine-ink, #0e0c07);
        letter-spacing: 0.03em;
        margin-bottom: 5px;
        line-height: 1.2;
        display: block;
        text-decoration: none;
      }

      /* Scribble underline */
      [part='headline']::after {
        content: '';
        display: block;
        height: 3px;
        width: 60%;
        background: var(--zine-red, #d42b2b);
        margin-top: 3px;
        transform: rotate(-0.5deg);
      }

      /* Stretched link */
      a[part='headline']::before {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 1;
      }

      a[part='headline']:focus-visible::before {
        outline: 2px solid var(--zine-yellow, #f5c800);
        outline-offset: 3px;
      }

      [part='meta'] {
        font-family: var(--font-mono, 'Cutive Mono', monospace);
        font-size: 10px;
        color: var(--zine-muted, #6b6050);
        margin-bottom: 8px;
        display: block;
        letter-spacing: 0.05em;
      }

      [part='excerpt'] {
        font-family: var(--font-body, 'Special Elite', serif);
        font-size: 13px;
        color: var(--zine-ink-faded, #2c2820);
        line-height: 1.65;
        display: block;
        margin: 0;
      }

      [part='footer'] {
        position: relative;
        z-index: 2;
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: 10px;
      }
    `,
  ];

  private _renderThumb() {
    if (this.variant !== 'wiki') return nothing;
    const abbr = this.headline
      ? this.headline
          .split(/\s+/)
          .slice(0, 2)
          .map((w) => w[0])
          .join('')
          .toUpperCase()
      : 'WK';
    return html`
      <slot name="thumb">
        <div class="wiki-thumb" aria-hidden="true">
          <span class="wiki-thumb-text">${abbr}</span>
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
