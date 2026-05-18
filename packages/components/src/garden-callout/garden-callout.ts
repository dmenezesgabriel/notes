import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { baseStyles } from '../styles/base';

export type CalloutVariant = 'note' | 'tip' | 'warning' | 'info';

/**
 * `<garden-callout>` — Zine-edition xerox stamp callout block.
 * Hard borders, stamp label, flat background — rubber-stamp aesthetics.
 *
 * @slot - Body content
 * @csspart base    - Outer container
 * @csspart heading - Optional label/heading
 *
 * @example
 * <garden-callout heading="✦ TIP">Start with a weekly review.</garden-callout>
 * <garden-callout variant="info" heading="→ RELATED">Zettelkasten, PARA.</garden-callout>
 * <garden-callout variant="warning" heading="⚠ WARNING">Breaking change ahead.</garden-callout>
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
        border: 3px solid var(--zine-ink, #0e0c07);
        border-right: 4px solid var(--zine-ink, #0e0c07);
        border-bottom: 4px solid var(--zine-ink, #0e0c07);
        padding: 0.75rem 1rem;
        font-family: var(--font-body, 'Special Elite', serif);
        font-size: 13px;
        color: var(--zine-ink-faded, #2c2820);
        position: relative;

        /* Uses token — overridden to dark surface in dark mode */
        background: var(--callout-note-bg, #fdf0a0);
        line-height: 1.7;
      }

      [part='base'].info {
        background: var(--callout-info-bg, #eaf0ff);
        border-color: var(--callout-info-border, #1a3c8f);
        border-right-color: var(--callout-info-border, #1a3c8f);
        border-bottom-color: var(--callout-info-border, #1a3c8f);
      }

      [part='base'].warning {
        background: var(--callout-warning-bg, #fff3cc);
        border-color: var(--callout-warning-border, #e85d1a);
        border-right-color: var(--callout-warning-border, #e85d1a);
        border-bottom-color: var(--callout-warning-border, #e85d1a);
      }

      [part='base'].tip {
        background: var(--callout-tip-bg, #a8d8a0);
        border-color: var(--callout-tip-border, #1d6b2e);
        border-right-color: var(--callout-tip-border, #1d6b2e);
        border-bottom-color: var(--callout-tip-border, #1d6b2e);
      }

      [part='heading'] {
        font-family: var(--font-stamp, 'Black Han Sans', sans-serif);
        font-size: 10px;
        color: var(--zine-red, #d42b2b);
        letter-spacing: 0.1em;
        margin-bottom: 4px;
        display: block;
        text-transform: uppercase;
      }

      [part='base'].info [part='heading'] {
        color: var(--zine-blue, #1a3c8f);
      }

      [part='base'].warning [part='heading'] {
        color: var(--zine-orange, #e85d1a);
      }

      [part='base'].tip [part='heading'] {
        color: var(--zine-green, #1d6b2e);
      }
    `,
  ];

  render() {
    const variantMap: Record<CalloutVariant, string> = {
      note: '',
      tip: 'tip',
      warning: 'warning',
      info: 'info',
    };
    const cls = variantMap[this.variant] ?? '';

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
