import { describe, expect, it } from 'vitest';

import { GardenMermaid } from './garden-mermaid';

describe('garden-mermaid', () => {
  describe('CSS tokens usage', () => {
    it('should use --ds-border token', () => {
      const styles = GardenMermaid.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--ds-border');
    });

    it('should use --ds-surface token for background', () => {
      const styles = GardenMermaid.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--ds-surface');
    });

    it('should use --ds-muted token', () => {
      const styles = GardenMermaid.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--ds-muted');
    });

    it('should use --font-mono with DM Mono', () => {
      const styles = GardenMermaid.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('DM Mono');
    });
  });
});
