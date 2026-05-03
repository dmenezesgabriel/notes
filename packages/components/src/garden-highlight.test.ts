import { describe, expect, it } from 'vitest';

import { GardenHighlight } from './garden-highlight';

describe('garden-highlight', () => {
  describe('Properties', () => {
    it('should render with default variant "default"', () => {
      const el = new GardenHighlight();
      expect(el.variant).toBe('default');
    });

    it('should accept valid variants: default, blue, red, green', () => {
      const el = new GardenHighlight();
      const variants: Array<'default' | 'blue' | 'red' | 'green'> = [
        'default',
        'blue',
        'red',
        'green',
      ];

      variants.forEach((v) => {
        el.variant = v;
        expect(el.variant).toBe(v);
      });
    });
  });

  describe('CSS tokens', () => {
    it('should use --zine-yellow token for default variant background', () => {
      const styles = GardenHighlight.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-yellow');
    });

    it('should use --zine-blue-lt token for blue variant', () => {
      const styles = GardenHighlight.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-blue-lt');
    });

    it('should use --zine-red token for red variant', () => {
      const styles = GardenHighlight.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-red');
    });

    it('should use --zine-green-lt token for green variant', () => {
      const styles = GardenHighlight.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-green-lt');
    });
  });
});
