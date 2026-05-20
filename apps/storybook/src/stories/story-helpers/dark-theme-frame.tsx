import { type CSSProperties, type PropsWithChildren, useLayoutEffect } from 'react';

interface DarkThemeFrameProps extends PropsWithChildren {
  label: string;
  style?: CSSProperties;
}

const darkThemeTokens = {
  '--ds-page': '#11111b',
  '--zine-paper': '#1e1e2e',
  '--zine-paper-alt': '#181825',
  '--zine-ink': '#cdd6f4',
  '--zine-muted': '#a6adc8',
} as CSSProperties;

export const darkFilledComponentTokens = {
  '--zine-ink': '#cdd6f4',
  '--zine-red': '#f38ba8',
  '--zine-red-dark': '#eba0ac',
  '--zine-yellow': '#f9e2af',
  '--zine-blue': '#89b4fa',
  '--zine-green': '#a6e3a1',
  '--zine-filled-text': '#1e1e2e',
  '--zine-light-fill-text': '#1e1e2e',
} as CSSProperties;

export const darkBannerTokens = {
  '--zine-ink': '#cdd6f4',
  '--zine-red': '#f38ba8',
  '--zine-blue': '#89b4fa',
  '--zine-banner-text': '#1e1e2e',
} as CSSProperties;

export const darkNavTokens = {
  '--zine-red': '#f38ba8',
  '--zine-yellow': '#f9e2af',
  '--zine-blue-lt': '#74c7ec',
  '--nav-bg': '#313244',
  '--nav-border': '#45475a',
  '--nav-link-color': '#bac2de',
  '--nav-active-bg': '#f9e2af',
  '--nav-active-text': '#1e1e2e',
  '--nav-toggle-border': 'rgb(186 194 222 / 42%)',
  '--nav-toggle-icon': '#bac2de',
} as CSSProperties;

export function DarkThemeFrame({ children, label, style }: DarkThemeFrameProps) {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const previousTheme = root.getAttribute('data-theme');

    root.setAttribute('data-theme', 'dark');

    return () => {
      if (previousTheme === null) {
        root.removeAttribute('data-theme');
        return;
      }

      root.setAttribute('data-theme', previousTheme);
    };
  }, []);

  return (
    <main data-theme="dark" aria-label={label} style={{ ...darkThemeTokens, ...style }}>
      {children}
    </main>
  );
}
