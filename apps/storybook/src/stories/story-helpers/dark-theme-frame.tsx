import { type CSSProperties, type PropsWithChildren, useLayoutEffect } from 'react';

interface DarkThemeFrameProps extends PropsWithChildren {
  label: string;
  style?: CSSProperties;
}

const darkThemeTokens = {
  '--ds-page': '#1d2021',
  '--zine-paper': '#282828',
  '--zine-paper-alt': '#1d2021',
  '--zine-ink': '#ebdbb2',
  '--zine-ink-faded': '#d5c4a1',
  '--zine-muted': '#bdae93',
  '--zine-red': '#fb4934',
  '--zine-yellow': '#fabd2f',
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
