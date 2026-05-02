import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export type ButtonVariant = 'default' | 'primary' | 'ghost';
export type ButtonType = 'button' | 'submit' | 'reset';

/**
 * `<garden-button>` — action button with three visual variants.
 *
 * @slot - Button label / content
 * @slot icon-left - Optional leading icon
 * @csspart button - The native button element
 *
 * @example
 * <garden-button variant="primary">Publish note</garden-button>
 * <garden-button>Save draft</garden-button>
 * <garden-button variant="ghost">Cancel</garden-button>
 */
@customElement('garden-button')
export class GardenButton extends LitElement {
  @property({ reflect: true }) variant: ButtonVariant = 'default';
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() type: ButtonType = 'button';

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.5;
      }

      button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: var(--font-ui, system-ui, sans-serif);
        font-size: 13px;
        font-weight: 500;
        line-height: 1;
        padding: 7px 16px;
        border-radius: var(--radius-md, 8px);
        border: 1px solid var(--ds-border-strong, rgba(28, 26, 22, 0.25));
        background: var(--ds-surface, #fff);
        color: var(--ds-ink, #1c1a16);
        cursor: pointer;
        transition:
          background var(--transition-fast, 120ms ease),
          border-color var(--transition-fast, 120ms ease),
          color var(--transition-fast, 120ms ease);
        white-space: nowrap;
        letter-spacing: 0.01em;
      }

      button:hover {
        background: var(--ds-tag-bg, #eeeae0);
      }

      button:focus-visible {
        outline: 2px solid var(--ds-accent, #a85025);
        outline-offset: 2px;
      }

      button.primary {
        background: var(--ds-accent, #a85025);
        color: #fff;
        border-color: transparent;
      }

      button.primary:hover {
        background: var(--ds-accent-dark, #8b3e1f);
      }

      button.ghost {
        border-color: transparent;
        background: transparent;
        color: var(--ds-muted, #6b6860);
      }

      button.ghost:hover {
        color: var(--ds-ink, #1c1a16);
        background: var(--ds-tag-bg, #eeeae0);
      }
    `,
  ];

  render() {
    const classes = {
      primary: this.variant === 'primary',
      ghost: this.variant === 'ghost',
    };
    const classStr = Object.entries(classes)
      .filter(([, v]) => v)
      .map(([k]) => k)
      .join(' ');

    return html`
      <button part="button" class=${classStr} type=${this.type} ?disabled=${this.disabled}>
        <slot name="icon-left"></slot>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-button': GardenButton;
  }
}
