import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export type ButtonVariant = 'default' | 'primary' | 'ghost' | 'yellow' | 'blue';
export type ButtonType = 'button' | 'submit' | 'reset';

/**
 * `<garden-button>` — Zine-edition punk rubber stamp button.
 *
 * @slot - Button label / content
 * @slot icon-left - Optional leading icon
 * @csspart button - The native button element
 *
 * @example
 * <garden-button variant="primary">✦ PUBLISH NOTE</garden-button>
 * <garden-button variant="yellow">◆ SAVE DRAFT</garden-button>
 * <garden-button>✂ CLIP</garden-button>
 * <garden-button variant="ghost">✕ CANCEL</garden-button>
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
        opacity: 0.45;
      }

      button {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);
        font-size: 12px;
        letter-spacing: 0.06em;
        line-height: 1;
        padding: 9px 18px;
        /* Thick neubrutalist offset border */
        border: 3px solid var(--zine-ink, #0e0c07);
        border-right: 5px solid var(--zine-ink, #0e0c07);
        border-bottom: 5px solid var(--zine-ink, #0e0c07);
        cursor: pointer;
        background: var(--zine-paper, #f2edd7);
        color: var(--zine-ink, #0e0c07);
        white-space: nowrap;
        position: relative;
        transition:
          transform 0.1s,
          border-width 0.1s;
      }

      button:hover {
        transform: translate(-1px, -1px);
      }

      button:active {
        transform: translate(3px, 3px);
        border-right-width: 3px;
        border-bottom-width: 3px;
      }

      button:focus-visible {
        outline: 2px solid var(--zine-yellow, #f5c800);
        outline-offset: 2px;
      }

      /* Primary — red */
      button.primary {
        background: var(--zine-red, #d42b2b);
        color: #fff;
        border-color: var(--zine-red-dark, #8a0000);
      }

      button.primary:hover {
        background: var(--zine-red-dark, #8a0000);
      }

      /* Yellow */
      button.yellow {
        background: var(--zine-yellow, #f5c800);
        color: var(--zine-ink, #0e0c07);
        border-color: var(--zine-ink, #0e0c07);
      }

      /* Blue */
      button.blue {
        background: var(--zine-blue, #1a3c8f);
        color: #fff;
        border-color: var(--zine-ink, #0e0c07);
      }

      /* Ghost */
      button.ghost {
        border-color: var(--zine-muted, #6b6050);
        border-right-color: var(--zine-muted, #6b6050);
        border-bottom-color: var(--zine-muted, #6b6050);
        color: var(--zine-muted, #6b6050);
        background: transparent;
      }

      button.ghost:hover {
        border-color: var(--zine-ink, #0e0c07);
        color: var(--zine-ink, #0e0c07);
      }
    `,
  ];

  render() {
    const variantMap: Record<ButtonVariant, string> = {
      default: '',
      primary: 'primary',
      ghost: 'ghost',
      yellow: 'yellow',
      blue: 'blue',
    };
    const cls = variantMap[this.variant] ?? '';

    return html`
      <button part="button" class=${cls} type=${this.type} ?disabled=${this.disabled}>
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
