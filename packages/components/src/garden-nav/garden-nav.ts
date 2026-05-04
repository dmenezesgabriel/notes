import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { baseStyles } from '../styles/base';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

/**
 * `<garden-nav>` — Zine-edition site navigation bar.
 * Thick black bar with misregistered red shadow, ransom-note brand,
 * and stamp-style nav links.
 *
 * Emits `garden-theme-change` with `{ detail: { theme: 'light' | 'dark' } }`.
 *
 * @slot brand-icon - Override the brand area
 * @slot actions    - Slot after nav links
 * @csspart nav        - The <nav> element
 * @csspart brand      - Brand/logo area
 * @csspart links      - Links wrapper
 * @csspart link       - Each nav link anchor
 *
 * @fires garden-theme-change — When the user switches themes
 *
 * @example
 * <garden-nav brand="GARDEN.DEV" .links=${[
 *   { label: 'NOTES', href: '/notes', active: true },
 *   { label: 'WIKI', href: '/wiki' },
 * ]}></garden-nav>
 */
@customElement('garden-nav')
export class GardenNav extends LitElement {
  @property() brand = 'GARDEN.DEV';
  @property({ type: Array }) links: NavLink[] = [];
  @state() private _theme: 'light' | 'dark' = 'light';

  private _observer?: MutationObserver;

  override connectedCallback() {
    super.connectedCallback();
    this._syncTheme();

    const observer = new MutationObserver(() => this._syncTheme());
    this._observer = observer;

    // Watch document root — handles the live site where SiteNav sets data-theme on <html>
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    // Also watch the nearest [data-theme] ancestor — handles Storybook's
    // withThemeByDataAttribute decorator which sets data-theme on a story wrapper element
    // (not on document.documentElement).
    // We use setTimeout(0) because Storybook may complete DOM setup after connectedCallback.
    setTimeout(() => {
      const storyHost = this.closest('[data-theme]');
      if (storyHost && storyHost !== document.documentElement) {
        observer.observe(storyHost, {
          attributes: true,
          attributeFilter: ['data-theme'],
        });
      }
      this._syncTheme();
    }, 0);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._observer?.disconnect();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this as any)._observer = undefined;
  }

  /** Read theme from nearest [data-theme] ancestor, fallback to document root. */
  private _syncTheme() {
    const host = this.closest('[data-theme]') ?? document.documentElement;
    const theme = host.getAttribute('data-theme');
    if (theme === 'dark' || theme === 'light') {
      this._theme = theme;
    } else {
      // No explicit data-theme means light (default)
      this._theme = 'light';
    }
  }

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        position: sticky;
        top: 0;
        z-index: 100;
      }

      /* ── The thick bar ───────────────────────────────────────────────── */
      header {
        background: var(--nav-bg, #0e0c07);
        border: 3px solid var(--nav-border, #0e0c07);
        border-bottom: 5px solid var(--nav-border, #0e0c07);
        padding: 0 1.25rem;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        overflow: visible;
        transition: background-color 0.2s ease;
      }

      /* Misregistered red shadow (xerox artifact) */
      header::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(--zine-red, #d42b2b);
        transform: translate(3px, 3px);
        z-index: -1;
      }

      /* ── Brand ────────────────────────────────────────────────────────── */
      [part='brand'] {
        font-family: var(--font-display, 'Bebas Neue', sans-serif);
        font-size: 28px;
        color: var(--zine-yellow, #f5c800);
        letter-spacing: 0.04em;
        line-height: 1;
        position: relative;
        text-decoration: none;
        cursor: pointer;
      }

      /* Blue ghost text behind brand (misregistration) */
      [part='brand']::after {
        content: attr(data-brand);
        position: absolute;
        left: 2px;
        top: 2px;
        color: var(--zine-blue-lt, #4a80d4);
        z-index: -1;
        opacity: 0.6;
        pointer-events: none;
      }

      [part='brand']:focus-visible {
        outline: 2px solid var(--zine-yellow, #f5c800);
        outline-offset: 4px;
      }

      /* ── Right side ───────────────────────────────────────────────────── */
      .right {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      /* ── Nav links ────────────────────────────────────────────────────── */
      [part='links'] {
        display: flex;
        gap: 2px;
        align-items: center;
      }

      [part='link'] {
        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);
        font-size: 12px;
        letter-spacing: 0.05em;
        color: var(--nav-link-color, #cccccc);
        padding: 5px 12px;
        border: 2px solid transparent;
        cursor: pointer;
        text-decoration: none;
        background: none;
        line-height: 1;
        transition: color 0.1s ease;
      }

      [part='link']:hover {
        border-color: var(--zine-yellow, #f5c800);
        color: var(--zine-yellow, #f5c800);
      }

      [part='link'][aria-current='page'] {
        background: var(--nav-active-bg, #f5c800);
        color: var(--nav-active-text, #0e0c07);
        border-color: var(--nav-active-bg, #f5c800);
      }

      [part='link']:focus-visible {
        outline: 2px solid var(--zine-yellow, #f5c800);
        outline-offset: 2px;
      }

      /* ── Theme toggle ─────────────────────────────────────────────────── */
      .theme-toggle {
        display: flex;
        align-items: center;
        gap: 2px;
        margin-left: 8px;
        border: 2px solid rgb(255 255 255 / 15%);
        padding: 2px;
      }

      .theme-btn {
        width: 26px;
        height: 22px;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: rgb(255 255 255 / 40%);
        font-size: 13px;
        font-family: var(--font-mono, 'Cutive Mono', monospace);
        letter-spacing: 0;
        transition:
          background-color 0.15s ease,
          color 0.15s ease;
      }

      .theme-btn.active {
        background: var(--nav-active-bg, #f5c800);
        color: var(--nav-active-text, #0e0c07);
      }

      .theme-btn:focus-visible {
        outline: 2px solid var(--zine-yellow, #f5c800);
        outline-offset: 2px;
      }
    `,
  ];

  private _setTheme(theme: 'light' | 'dark') {
    this._theme = theme;
    this.dispatchEvent(
      new CustomEvent('garden-theme-change', {
        detail: { theme },
        bubbles: true,
        composed: true,
      }),
    );
  }

  /** Allow external code to imperatively sync the toggle UI. */
  setTheme(theme: 'light' | 'dark') {
    this._theme = theme;
  }

  render() {
    return html`
      <header>
        <a part="brand" href="/" data-brand=${this.brand}>
          <slot name="brand-icon">${this.brand}</slot>
        </a>

        <div class="right">
          <nav part="links" aria-label="Main navigation">
            ${this.links.map(
              (link) => html`
                <a part="link" href=${link.href} aria-current=${link.active ? 'page' : nothing}>
                  ${link.label.toUpperCase()}
                </a>
              `,
            )}
          </nav>

          <slot name="actions"></slot>

          <div class="theme-toggle" role="group" aria-label="Theme">
            <button
              part="theme-light"
              class=${'theme-btn' + (this._theme === 'light' ? ' active' : '')}
              aria-pressed=${this._theme === 'light'}
              aria-label="Light theme"
              @click=${() => this._setTheme('light')}
            >
              ☀
            </button>
            <button
              part="theme-dark"
              class=${'theme-btn' + (this._theme === 'dark' ? ' active' : '')}
              aria-pressed=${this._theme === 'dark'}
              aria-label="Dark theme"
              @click=${() => this._setTheme('dark')}
            >
              ☽
            </button>
          </div>
        </div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-nav': GardenNav;
  }
}
