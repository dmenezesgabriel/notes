import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from '../styles/base';

/**
 * `<garden-search>` — Zine-edition typewriter search bar.
 * White bg, thick offset border, mono font, blinking cursor.
 *
 * @fires garden-search — Fired on every keystroke with `{ detail: { query: string } }`
 * @csspart wrapper - The container div
 * @csspart input   - The text input
 * @csspart kbd     - The keyboard shortcut badge
 *
 * @example
 * <garden-search placeholder="Search notes, wiki…" kbd="⌘K"></garden-search>
 */
@customElement('garden-search')
export class GardenSearch extends LitElement {
  @property() placeholder = 'Search notes, wiki, projects…';
  @property() kbd = '';
  @property() value = '';

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        width: 100%;
      }

      [role='search'] {
        background: var(--search-bg, #fff);
        border: 3px solid var(--zine-ink, #0e0c07);
        border-right: 5px solid var(--zine-ink, #0e0c07);
        border-bottom: 5px solid var(--zine-ink, #0e0c07);
        padding: 10px 14px;
        display: flex;
        align-items: center;
        gap: 10px;
        width: 100%;
        transition: transform 0.1s;
      }

      [role='search']:focus-within {
        transform: translate(-1px, -1px);
      }

      .icon {
        color: var(--zine-ink, #0e0c07);
        flex-shrink: 0;
        display: flex;
        align-items: center;
      }

      input {
        flex: 1;
        border: none;
        outline: none;
        background: transparent;
        font-family: var(--font-mono, 'Cutive Mono', monospace);
        font-size: 14px;

        /* Use ink-faded for typed text (readable), muted only for placeholder */
        color: var(--zine-ink-faded, #2c2820);
        min-width: 0;
      }

      input::placeholder {
        color: var(--zine-muted, #6b6050);
      }

      input:focus::placeholder {
        opacity: 0.5;
      }

      kbd {
        flex-shrink: 0;
        font-family: var(--font-mono, 'Cutive Mono', monospace);
        font-size: 11px;
        background: var(--zine-ink, #0e0c07);
        color: var(--zine-yellow, #f5c800);
        padding: 2px 7px;
        letter-spacing: 0.05em;
        border: none;
      }
    `,
  ];

  private _onInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dispatchEvent(
      new CustomEvent('garden-search', {
        detail: { query: this.value },
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    return html`
      <div role="search" part="wrapper">
        <span class="icon" aria-hidden="true">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <circle cx="8" cy="8" r="5" />
            <path d="m12 12 4 4" />
          </svg>
        </span>
        <input
          part="input"
          type="search"
          .value=${this.value}
          placeholder=${this.placeholder}
          aria-label=${this.placeholder}
          @input=${this._onInput}
        />
        ${this.kbd ? html`<kbd part="kbd">${this.kbd}</kbd>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-search': GardenSearch;
  }
}
