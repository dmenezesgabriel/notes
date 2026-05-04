import { describe, expect, it } from 'vitest';

import { GardenArticle } from './garden-article';

describe('garden-article', () => {
  describe('Properties', () => {
    it('should have empty title by default', () => {
      const el = new GardenArticle();
      expect(el.title).toBe('');
    });

    it('should have hasSidebar false by default', () => {
      const el = new GardenArticle();
      expect(el.hasSidebar).toBe(false);
    });

    it('should have hasBacklinks false by default', () => {
      const el = new GardenArticle();
      expect(el.hasBacklinks).toBe(false);
    });

    it('should accept title property', () => {
      const el = new GardenArticle();
      el.title = 'On building a second brain';
      expect(el.title).toBe('On building a second brain');
    });

    it('should accept hasSidebar property', () => {
      const el = new GardenArticle();
      el.hasSidebar = true;
      expect(el.hasSidebar).toBe(true);
    });

    it('should accept hasBacklinks property', () => {
      const el = new GardenArticle();
      el.hasBacklinks = true;
      expect(el.hasBacklinks).toBe(true);
    });
  });

  describe('CSS styles', () => {
    it('should use --font-display token for the h1', () => {
      const styles = GardenArticle.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);
      expect(styleText).toContain('--font-display');
    });

    it('should use --zine-ink for h1 colour (not --zine-paper)', () => {
      const styles = GardenArticle.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);
      // Title must be readable ink colour
      expect(styleText).toContain('--zine-ink');
      // Must NOT use paper colour for title (old bug)
      expect(styleText).not.toContain('color: var(--zine-paper');
    });

    it('should show sidebar column only when [has-sidebar] is set', () => {
      const styles = GardenArticle.styles;
      const styleText = Array.isArray(styles)
        ? styles.map((s) => (s as CSSStyleSheet).cssText || String(s)).join(' ')
        : String(styles);
      expect(styleText).toContain('has-sidebar');
    });
  });

  describe('Custom element registration', () => {
    it('should be registered as garden-article', () => {
      expect(customElements.get('garden-article')).toBeDefined();
    });
  });
});
