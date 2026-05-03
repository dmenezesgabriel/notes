import { describe, expect, it } from 'vitest';

import { GardenMermaid } from './garden-mermaid';

describe('garden-mermaid', () => {
  describe('CSS tokens usage', () => {
    it('should use --zine-border token (not --ds-border)', () => {
      const styles = GardenMermaid.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-border');
      expect(styleText).not.toContain('--ds-border');
    });

    it('should use --zine-paper token for background (not --ds-surface)', () => {
      const styles = GardenMermaid.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-paper');
      expect(styleText).not.toContain('--ds-surface');
    });

    it('should use --zine-muted token (not --ds-muted with typo #6b6860)', () => {
      const styles = GardenMermaid.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-muted');
      expect(styleText).not.toContain('#6b6860');
    });

    it('should use --font-mono with Cutive Mono (not DM Mono)', () => {
      const styles = GardenMermaid.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('Cutive Mono');
      expect(styleText).not.toContain('DM Mono');
    });
  });
});
