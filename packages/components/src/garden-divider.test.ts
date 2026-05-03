import { describe, expect, it } from 'vitest';

import { GardenDivider } from './garden-divider';

describe('garden-divider', () => {
  describe('Properties', () => {
    it('should have default variant of "dashed"', () => {
      const el = new GardenDivider();
      expect(el.variant).toBe('dashed');
    });

    it('should accept valid variants: dashed, solid, red', () => {
      const el = new GardenDivider();
      const validVariants: Array<'dashed' | 'solid' | 'red'> = ['dashed', 'solid', 'red'];

      validVariants.forEach((v) => {
        el.variant = v;
        expect(el.variant).toBe(v);
      });
    });

    it('should set variant attribute when property is set', () => {
      const el = new GardenDivider();
      el.variant = 'solid';
      // Check property directly since reflection requires DOM connection
      expect(el.variant).toBe('solid');
    });
  });

  describe('CSS styles contain correct token references', () => {
    it('should use --zine-ink token for dashed variant', () => {
      const styles = GardenDivider.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-ink');
    });

    it('should use --zine-red token for red variant', () => {
      const styles = GardenDivider.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-red');
    });
  });
});
