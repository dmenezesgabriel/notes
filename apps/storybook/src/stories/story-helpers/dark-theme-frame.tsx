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
  '--zine-ink-faded': '#bac2de',
  '--zine-muted': '#a6adc8',
  '--zine-red': '#f38ba8',
  '--zine-yellow': '#f9e2af',
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
