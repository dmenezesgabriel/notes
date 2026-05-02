import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

/**
 * `<garden-search>` — search bar with optional keyboard shortcut badge.
 * Emits a `garden-search` CustomEvent with `{ detail: { query: string } }` on input.
 *
 * @fires garden-search — Fired on every keystroke with the current query
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
        background: var(--ds-surface, #fff);
        border: 1px solid var(--ds-border-strong, rgba(28, 26, 22, 0.25));
        border-radius: var(--radius-md, 8px);
        padding: 8px 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        transition:
          box-shadow var(--transition-fast, 120ms ease),
          border-color var(--transition-fast, 120ms ease);
      }

      [role='search']:focus-within {
        border-color: var(--ds-accent, #a85025);
        box-shadow: 0 0 0 3px var(--ds-accent-light, #f5e8e1);
      }

      .icon {
        color: var(--ds-muted, #6b6860);
        flex-shrink: 0;
        display: flex;
        align-items: center;
      }

      input {
        flex: 1;
        border: none;
        outline: none;
        background: transparent;
        font-family: var(--font-ui, system-ui, sans-serif);
        font-size: 14px;
        color: var(--ds-ink, #1c1a16);
        min-width: 0;
      }

      input::placeholder {
        color: var(--ds-muted, #6b6860);
      }

      kbd {
        flex-shrink: 0;
        font-family: var(--font-mono, 'DM Mono', monospace);
        font-size: 11px;
        color: var(--ds-muted, #6b6860);
        background: var(--ds-tag-bg, #eeeae0);
        border: 1px solid var(--ds-border, rgba(28, 26, 22, 0.12));
        border-radius: var(--radius-sm, 4px);
        padding: 2px 6px;
        line-height: 1.5;
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
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <circle cx="7" cy="7" r="4.5" />
            <path d="m10.5 10.5 3 3" />
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
