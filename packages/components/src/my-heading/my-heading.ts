import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-heading')
export class MyHeading extends LitElement {
  @property({ type: String }) text = 'Hello';

  static styles = css`
    h1 {
      font-size: 1.4rem;
      margin: 0;
    }
  `;

  render() {
    return html`<h1>${this.text}</h1>`;
  }
}
