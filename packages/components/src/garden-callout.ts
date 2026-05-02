import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from './styles/base';

export type CalloutVariant = 'note' | 'tip' | 'warning';

/**
 * `<garden-callout>` — inline highlighted block for notes, tips, and warnings.
 *
 * @slot - Body content
 * @csspart base  - Outer container
 * @csspart heading - Optional heading text
 *
 * @example
 * <garden-callout heading="Tip">Start with a weekly review.</garden-callout>
 * <garden-callout variant="tip" heading="Related">Zettelkasten, PARA.</garden-callout>
 * <garden-callout variant="warning">Breaking change ahead.</garden-callout>
 */
@customElement('garden-callout')
export class GardenCallout extends LitElement {
  @property({ reflect: true }) variant: CalloutVariant = 'note';
  @property() heading = '';

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
      }

      [part='base'] {
        border-left: 3px solid var(--ds-accent, #a85025);
        background: var(--ds-accent-light, #f5e8e1);
        border-radius: 0 var(--radius-md, 8px) var(--radius-md, 8px) 0;
        padding: 0.75rem 1rem;
        font-family: var(--font-body, 'Lora', serif);
        font-size: 13px;
        color: var(--ds-ink, #1c1a16);
        line-height: 1.7;
      }

      [part='base'].tip {
        border-left-color: var(--ds-sage, #4d7350);
        background: var(--ds-sage-light, #e6eee6);
      }

      [part='base'].warning {
        border-left-color: #b45309;
        background: #fef3c7;
      }

      [part='heading'] {
        font-weight: 600;
        margin-bottom: 4px;
        display: block;
        font-size: 13px;
      }
    `,
  ];

  render() {
    const cls = this.variant !== 'note' ? this.variant : '';
    return html`
      <div part="base" class=${cls} role="note">
        ${this.heading ? html`<span part="heading">${this.heading}</span>` : ''}
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-callout': GardenCallout;
  }
}
