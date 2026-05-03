import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import { baseStyles } from '../styles/base';

/** Monotonic counter so every mermaid render call gets a unique id. */
let _counter = 0;

/**
 * `<garden-mermaid>` — renders a Mermaid diagram client-side.
 *
 * The component dynamically imports `mermaid` so it never blocks the initial
 * paint.  It observes `data-theme` on `<html>` and re-renders whenever the
 * colour-scheme changes so light ↔ dark transitions are seamless.
 *
 * @attr {string} diagram - Raw Mermaid source code.
 *
 * @example
 * <garden-mermaid diagram="graph TD
 *   A[Start] --> B{Decision}
 *   B -->|Yes| C[End]
 *   B -->|No|  A
 * "></garden-mermaid>
 */
@customElement('garden-mermaid')
export class GardenMermaid extends LitElement {
  /** Raw Mermaid source passed in as an HTML attribute. */
  @property() diagram = '';

  @state() private _svg = '';
  @state() private _error = '';
  @state() private _loading = false;

  private _themeObserver: MutationObserver | null = null;

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        margin: 1.25rem 0;
      }

      .wrap {
        overflow-x: auto;
        display: flex;
        justify-content: center;
        border: 1px solid var(--ds-border, rgb(28 26 22 / 12%));
        border-radius: var(--radius-md, 8px);
        padding: var(--space-5, 24px) var(--space-4, 16px);
        background: var(--ds-surface, #fff);
      }

      .wrap svg {
        max-width: 100%;
        height: auto;
      }

      .status {
        font-family: var(--font-ui, system-ui, sans-serif);
        font-size: 13px;
        color: var(--ds-muted, #6b6860);
        padding: var(--space-4, 16px);
        text-align: center;
      }

      .error-block {
        background: #fef2f2;
        border: 1px solid #fecaca;
        border-radius: var(--radius-sm, 4px);
        padding: var(--space-4, 16px);
        font-family: var(--font-mono, 'DM Mono', monospace);
        font-size: 12px;
        color: #b91c1c;
        white-space: pre-wrap;
        overflow-x: auto;
      }
    `,
  ];

  // ── Lifecycle ─────────────────────────────────────────────────────────────

  connectedCallback() {
    super.connectedCallback();
    this._renderDiagram();
    this._observeTheme();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._themeObserver?.disconnect();
    this._themeObserver = null;
  }

  updated(changed: Map<string | number | symbol, unknown>) {
    if (changed.has('diagram')) {
      this._renderDiagram();
    }
  }

  // ── Private helpers ───────────────────────────────────────────────────────

  /** Watch for light ↔ dark transitions and re-render the diagram. */
  private _observeTheme() {
    if (typeof MutationObserver === 'undefined') return;
    this._themeObserver = new MutationObserver(() => {
      if (this.diagram) this._renderDiagram();
    });
    this._themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
  }

  private async _renderDiagram() {
    if (!this.diagram) return;

    this._loading = true;
    this._error = '';

    try {
      // Dynamic import keeps mermaid out of the critical bundle.
      const { default: mermaid } = await import('mermaid');

      const isDark = document.documentElement.dataset['theme'] === 'dark';

      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        securityLevel: 'loose',
        fontFamily: 'var(--font-ui, system-ui, sans-serif)',
      });

      const id = `garden-mermaid-${++_counter}`;
      const { svg } = await mermaid.render(id, this.diagram);

      // Mermaid may leave a temporary element in <body> — clean it up.
      document.getElementById(id)?.remove();
      document.getElementById(`d${id}`)?.remove();

      this._svg = svg;
    } catch (err) {
      this._error = err instanceof Error ? err.message : String(err);
    } finally {
      this._loading = false;
    }
  }

  // ── Render ────────────────────────────────────────────────────────────────

  render() {
    if (this._loading && !this._svg) {
      return html`<p class="status" role="status" aria-live="polite">Loading diagram…</p>`;
    }
    if (this._error) {
      return html`<pre class="error-block" role="alert">${this._error}</pre>`;
    }
    if (!this._svg) return nothing;
    return html`<div class="wrap" aria-label="Diagram">${unsafeHTML(this._svg)}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'garden-mermaid': GardenMermaid;
  }
}
