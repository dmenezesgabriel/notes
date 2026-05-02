import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

/**
 * `<garden-nav>` — site-level navigation bar with brand, links, and theme toggle.
 * Emits `garden-theme-change` with `{ detail: { theme: 'light' | 'dark' } }`.
 *
 * @slot brand-icon - Override the brand accent dot
 * @slot actions    - Slot after nav links (search, avatar, etc.)
 * @csspart nav        - The <nav> element
 * @csspart brand      - Brand/logo area
 * @csspart links      - Links wrapper
 * @csspart link       - Each nav link anchor
 * @csspart theme-light - Light theme toggle button
 * @csspart theme-dark  - Dark theme toggle button
 *
 * @fires garden-theme-change — When the user switches themes
 *
 * @example
 * <garden-nav brand="garden.dev" .links=${[
 *   { label: 'notes', href: '/notes', active: true },
 *   { label: 'wiki', href: '/wiki' },
 * ]}></garden-nav>
 */
@customElement('garden-nav')
export class GardenNav extends LitElement {
  @property() brand = 'garden.dev';
  @property({ type: Array }) links: NavLink[] = [];
  @state() private _theme: 'light' | 'dark' = 'light';

  override connectedCallback() {
    super.connectedCallback();
    // Initialise from whatever the document already has (set by the inline
    // script in layout.tsx that reads localStorage before hydration).
    const docTheme = document.documentElement.getAttribute('data-theme');
    if (docTheme === 'dark' || docTheme === 'light') {
      this._theme = docTheme;
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

      header {
        background: var(--ds-surface, #fff);
        border-bottom: 1px solid var(--ds-border, rgba(28, 26, 22, 0.12));
        padding: 0 1.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 52px;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        background: color-mix(in srgb, var(--ds-surface, #fff) 92%, transparent);
      }

      [part='brand'] {
        font-family: var(--font-ui, system-ui, sans-serif);
        font-size: 15px;
        font-weight: 500;
        color: var(--ds-ink, #1c1a16);
        letter-spacing: -0.01em;
        display: flex;
        align-items: center;
        gap: 8px;
        text-decoration: none;
      }

      [part='brand']:focus-visible {
        outline: 2px solid var(--ds-accent, #a85025);
        outline-offset: 3px;
        border-radius: 4px;
      }

      .brand-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--ds-accent, #a85025);
        flex-shrink: 0;
        animation: pulse 3s ease infinite;
      }

      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.6;
        }
      }

      .right {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      [part='links'] {
        display: flex;
        gap: 2px;
        align-items: center;
      }

      [part='link'] {
        font-family: var(--font-ui, system-ui, sans-serif);
        font-size: 13px;
        color: var(--ds-muted, #6b6860);
        padding: 4px 10px;
        border-radius: var(--radius-md, 8px);
        cursor: pointer;
        text-decoration: none;
        transition:
          background var(--transition-fast, 120ms ease),
          color var(--transition-fast, 120ms ease);
      }

      [part='link']:hover {
        background: var(--ds-tag-bg, #eeeae0);
        color: var(--ds-ink, #1c1a16);
      }

      [part='link'][aria-current='page'] {
        color: var(--ds-accent, #a85025);
        font-weight: 500;
      }

      [part='link']:focus-visible {
        outline: 2px solid var(--ds-accent, #a85025);
        outline-offset: 2px;
      }

      .theme-toggle {
        background: var(--ds-toggle-bg, #e8e4d8);
        border: 1px solid var(--ds-border, rgba(28, 26, 22, 0.12));
        border-radius: 20px;
        padding: 3px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 2px;
        margin-left: 8px;
      }

      .theme-btn {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        color: var(--ds-muted, #6b6860);
        font-size: 13px;
        transition:
          background var(--transition-fast, 120ms ease),
          color var(--transition-fast, 120ms ease);
      }

      .theme-btn.active {
        background: var(--ds-surface, #fff);
        color: var(--ds-ink, #1c1a16);
      }

      .theme-btn:focus-visible {
        outline: 2px solid var(--ds-accent, #a85025);
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

  /** Allow external code (site-nav) to imperatively sync the toggle UI. */
  setTheme(theme: 'light' | 'dark') {
    this._theme = theme;
  }

  render() {
    return html`
      <header>
        <a part="brand" href="/">
          <slot name="brand-icon">
            <span class="brand-dot" aria-hidden="true"></span>
          </slot>
          ${this.brand}
        </a>

        <div class="right">
          <nav part="links" aria-label="Main navigation">
            ${this.links.map(
              (link) => html`
                <a part="link" href=${link.href} aria-current=${link.active ? 'page' : nothing}>
                  ${link.label}
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
