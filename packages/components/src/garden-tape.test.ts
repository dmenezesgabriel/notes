import { describe, expect, it } from 'vitest';

import { GardenTape } from './garden-tape';

describe('garden-tape', () => {
  describe('Properties', () => {
    it('should render with default variant "default"', () => {
      const el = new GardenTape();
      expect(el.variant).toBe('default');
    });

    it('should accept valid variants: default, red, blue, white', () => {
      const el = new GardenTape();
      const variants: Array<'default' | 'red' | 'blue' | 'white'> = [
        'default',
        'red',
        'blue',
        'white',
      ];

      variants.forEach((v) => {
        el.variant = v;
        expect(el.variant).toBe(v);
      });
    });

    it('should have default text empty', () => {
      const el = new GardenTape();
      expect(el.text).toBe('');
    });

    it('should accept text property', () => {
      const el = new GardenTape();
      el.text = 'PAINT SWATCHES';
      expect(el.text).toBe('PAINT SWATCHES');
    });

    it('should have default rotation of -1.5deg', () => {
      const el = new GardenTape();
      expect(el.rotation).toBe(-1.5);
    });
  });

  describe('CSS styles', () => {
    it('should use rgba for default background with yellow tint', () => {
      const styles = GardenTape.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('245, 200, 0');
    });

    it('should use rgba for red variant', () => {
      const styles = GardenTape.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('212, 43, 43');
    });

    it('should use --font-mono token for font-family', () => {
      const styles = GardenTape.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--font-mono');
    });
  });
});
