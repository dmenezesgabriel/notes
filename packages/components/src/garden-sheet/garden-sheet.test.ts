import { describe, expect, it } from 'vitest';

import { GardenSheet } from './garden-sheet';

describe('garden-sheet', () => {
  describe('Properties', () => {
    it('should render with default pinColor "red"', () => {
      const el = new GardenSheet();
      expect(el.pinColor).toBe('red');
    });

    it('should accept valid pinColor values: red, yellow, blue, green', () => {
      const el = new GardenSheet();
      const colors: Array<'red' | 'yellow' | 'blue' | 'green'> = ['red', 'yellow', 'blue', 'green'];

      colors.forEach((c) => {
        el.pinColor = c;
        expect(el.pinColor).toBe(c);
      });
    });

    it('should have default heading empty', () => {
      const el = new GardenSheet();
      expect(el.heading).toBe('');
    });

    it('should accept heading property', () => {
      const el = new GardenSheet();
      el.heading = 'COLOUR TOKENS';
      expect(el.heading).toBe('COLOUR TOKENS');
    });
  });

  describe('CSS tokens', () => {
    it('should use --zine-paper token for background', () => {
      const styles = GardenSheet.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-paper');
    });

    it('should use --zine-shadow-lg token for box-shadow', () => {
      const styles = GardenSheet.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-shadow-lg');
    });

    it('should use --zine-ink token for border', () => {
      const styles = GardenSheet.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-ink');
    });
  });
});
