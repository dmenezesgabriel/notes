import { describe, expect, it } from 'vitest';

import {
  applyDocumentTheme,
  isThemePreference,
  readDocumentTheme,
  readStoredTheme,
  THEME_STORAGE_KEY,
  themeInitializationScript,
  writeStoredTheme,
} from './theme-preference';

describe('theme preference helpers', () => {
  it('reads and writes supported theme values safely', () => {
    const storage = {
      value: 'light',
      getItem(key: string) {
        return key === THEME_STORAGE_KEY ? this.value : null;
      },
      setItem(key: string, value: string) {
        if (key === THEME_STORAGE_KEY) {
          this.value = value;
        }
      },
    };

    expect(readStoredTheme(storage)).toBe('light');
    expect(writeStoredTheme(storage, 'dark')).toBe(true);
    expect(readStoredTheme(storage)).toBe('dark');
  });

  it('ignores unsupported or unavailable stored values', () => {
    const invalidStorage = {
      getItem() {
        return 'sepia';
      },
      setItem() {
        throw new Error('storage disabled');
      },
    };

    const throwingStorage = {
      getItem() {
        throw new Error('storage disabled');
      },
    };

    expect(readStoredTheme(invalidStorage)).toBeNull();
    expect(readStoredTheme(throwingStorage)).toBeNull();
    expect(writeStoredTheme(invalidStorage, 'dark')).toBe(false);
  });

  it('reads and applies the document theme attribute', () => {
    const root = {
      theme: 'light',
      getAttribute(name: string) {
        return name === 'data-theme' ? this.theme : null;
      },
      setAttribute(name: string, value: string) {
        if (name === 'data-theme') {
          this.theme = value;
        }
      },
    };

    expect(readDocumentTheme(root)).toBe('light');

    applyDocumentTheme(root, 'dark');

    expect(readDocumentTheme(root)).toBe('dark');
  });

  it('keeps the bootstrap script aligned with the supported theme contract', () => {
    expect(themeInitializationScript).toContain(`localStorage.getItem('${THEME_STORAGE_KEY}')`);
    expect(themeInitializationScript).toContain("theme === 'dark' || theme === 'light'");
  });

  it('guards theme values with a dedicated type predicate', () => {
    expect(isThemePreference('light')).toBe(true);
    expect(isThemePreference('dark')).toBe(true);
    expect(isThemePreference('sepia')).toBe(false);
    expect(isThemePreference(null)).toBe(false);
  });
});
