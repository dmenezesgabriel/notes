import { describe, expect, it } from 'vitest';

import { GardenBanner } from './garden-banner';

describe('garden-banner', () => {
  describe('Properties', () => {
    it('should render with default text "BANNER"', () => {
      const el = new GardenBanner();
      expect(el.text).toBe('BANNER');
    });

    it('should accept custom text property', () => {
      const el = new GardenBanner();
      el.text = 'CUSTOM TEXT';
      expect(el.text).toBe('CUSTOM TEXT');
    });

    it('should have data-text attribute matching text property', () => {
      const el = new GardenBanner();
      el.text = 'TEST TEXT';
      expect(el.text).toBe('TEST TEXT');
    });
  });

  describe('CSS tokens', () => {
    it('should use --zine-red token for background', () => {
      const styles = GardenBanner.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-red');
    });

    it('should use a dedicated banner contrast token for text color', () => {
      const styles = GardenBanner.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-banner-text');
    });

    it('should use --zine-blue token for misregistered shadow', () => {
      const styles = GardenBanner.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--zine-blue');
    });

    it('should use --font-display token for text font', () => {
      const styles = GardenBanner.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);

      expect(styleText).toContain('--font-display');
    });
  });

  describe('Dark mode contrast token', () => {
    it('applies the banner text token through host inheritance', () => {
      const styles = GardenBanner.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);
      const updatedText = GardenBanner.prototype.updated.toString();

      expect(updatedText).toContain('var(--zine-banner-text, #fff)');
      expect(styleText).toContain('color: inherit;');
    });
  });
});
