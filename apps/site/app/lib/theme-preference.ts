export type ThemePreference = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

export const themeInitializationScript = `(function(){
  try {
    var theme = localStorage.getItem('${THEME_STORAGE_KEY}');
    if (theme === 'dark' || theme === 'light') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  } catch (error) {
    // Ignore storage failures, including private browsing restrictions.
  }
})();`;

interface ThemeStorageReader {
  getItem(key: string): string | null;
}

interface ThemeStorageWriter {
  setItem(key: string, value: string): void;
}

interface ThemeRootReader {
  getAttribute(name: string): string | null;
}

interface ThemeRootWriter {
  setAttribute(name: string, value: string): void;
}

export function isThemePreference(value: string | null | undefined): value is ThemePreference {
  return value === 'light' || value === 'dark';
}

export function readStoredTheme(storage: ThemeStorageReader): ThemePreference | null {
  try {
    const theme = storage.getItem(THEME_STORAGE_KEY);
    return isThemePreference(theme) ? theme : null;
  } catch {
    return null;
  }
}

export function writeStoredTheme(storage: ThemeStorageWriter, theme: ThemePreference): boolean {
  try {
    storage.setItem(THEME_STORAGE_KEY, theme);
    return true;
  } catch {
    return false;
  }
}

export function readDocumentTheme(root: ThemeRootReader): ThemePreference | null {
  const theme = root.getAttribute('data-theme');
  return isThemePreference(theme) ? theme : null;
}

export function applyDocumentTheme(root: ThemeRootWriter, theme: ThemePreference): void {
  root.setAttribute('data-theme', theme);
}
