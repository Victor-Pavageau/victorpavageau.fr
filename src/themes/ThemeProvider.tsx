import { theme as antdTheme, ConfigProvider, type ThemeConfig } from 'antd';
import { useCallback, useMemo, useState, type ReactElement, type ReactNode } from 'react';
import { cssColor, cssFont, isTheme, runThemeTransition, Theme, THEME_STORAGE_KEY, ThemeContextValue } from '../helpers/ThemeHelper';
import { ThemeContext } from './ThemeContext';

interface Props {
  readonly children: ReactNode;
}

const readInitialTheme: () => Theme = (): Theme => {
  const attribute: string | undefined = document.documentElement.dataset.theme;

  return attribute && isTheme(attribute) ? attribute : 'light';
};

const applyTheme: (theme: Theme) => void = (theme: Theme): void => {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage unavailable
  }
};

export const ThemeProvider: ({ children }: Props) => ReactElement = ({ children }: Props): ReactElement => {
  const [theme, setThemeState] = useState<Theme>(readInitialTheme);

  const setTheme: (next: string) => void = useCallback((next: Theme): void => {
    applyTheme(next);
    setThemeState(next);
  }, []);

  const toggleTheme: (origin?: HTMLElement | null | undefined) => void = useCallback(
    (origin?: HTMLElement | null): void => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark';
      runThemeTransition(origin ?? null, () => setTheme(next));
    },
    [theme, setTheme],
  );

  const antdConfig: ThemeConfig = useMemo<ThemeConfig>(
    () => ({
      algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
      cssVar: true,
      hashed: false,
      token: {
        colorPrimary: cssColor('--color-primary'),
        colorBgBase: cssColor('--color-bg'),
        colorTextBase: cssColor('--color-text'),
        fontFamily: cssFont('--font-sans'),
      },
    }),
    [theme],
  );

  const value: ThemeContextValue = useMemo<ThemeContextValue>(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  );

  return (
    <ThemeContext.Provider value={value}>
      <ConfigProvider theme={antdConfig}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};