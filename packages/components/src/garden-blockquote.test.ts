import { describe, expect, it } from 'vitest';

import { GardenBlockquote } from './garden-blockquote';

describe('garden-blockquote', () => {
  describe('Properties', () => {
    it('should render with default variant "default"', () => {
      const el = new GardenBlockquote();
      expect(el.variant).toBe('default');
    });

    it('should accept valid variants: default, accent', () => {
      const el = new GardenBlockquote();
      const variants: Array<'default' | 'accent'> = ['default', 'accent'];

      variants.forEach((v) => {
        el.variant = v;
        expect(el.variant).toBe(v);
      });
    });

    it('should have cite property for attribution', () => {
      const el = new GardenBlockquote();
      el.cite = 'Aristotle';
      expect(el.cite).toBe('Aristotle');
    });
  });

  describe('CSS tokens', () => {
    it('should use --zine-ink token for border', () => {
      const styles = GardenBlockquote.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-ink');
    });

    it('should use --zine-red token for quote mark', () => {
      const styles = GardenBlockquote.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-red');
    });

    it('should use --font-display token for quote mark', () => {
      const styles = GardenBlockquote.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--font-display');
    });
  });
});
