import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export type TagVariant = 'default' | 'accent' | 'sage';

/**
 * `<garden-tag>` — a compact label chip used for categories and metadata.
 *
 * @slot - Tag text content
 * @csspart base - The inner span element
 *
 * @example
 * <garden-tag>javascript</garden-tag>
 * <garden-tag variant="accent">featured</garden-tag>
 * <garden-tag variant="sage">pkm</garden-tag>
 */
@customElement('garden-tag')
export class GardenTag extends LitElement {
  @property({ reflect: true }) variant: TagVariant = 'default';

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
        font-family: var(--font-ui, system-ui, sans-serif);
      }

      [part='base'] {
        display: inline-flex;
        align-items: center;
        font-size: 12px;
        font-weight: 500;
        line-height: 1;
        padding: 3px 10px;
        border-radius: var(--radius-sm, 4px);
        border: 1px solid var(--ds-border, rgba(28, 26, 22, 0.12));
        background: var(--ds-tag-bg, #eeeae0);
        color: var(--ds-tag-text, #4a4640);
        letter-spacing: 0.01em;
        transition: background var(--transition-fast, 120ms ease);
        white-space: nowrap;
      }

      [part='base'].accent {
        background: var(--ds-accent-light, #f5e8e1);
        color: var(--ds-accent-dark, #8b3e1f);
        border-color: transparent;
      }

      [part='base'].sage {
        background: var(--ds-sage-light, #e6eee6);
        color: var(--ds-sage, #4d7350);
        border-color: transparent;
      }
    `,
  ];

  render() {
    const classes = {
      accent: this.variant === 'accent',
      sage: this.variant === 'sage',
    };
    const classStr = Object.entries(classes)
      .filter(([, v]) => v)
      .map(([k]) => k)
      .join(' ');

    return html`
      <span part="base" class=${classStr}>
        <slot></slot>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-tag': GardenTag;
  }
}
