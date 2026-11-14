import { useContext } from 'react';
import type { ThemeContextValue } from '../helpers/ThemeHelper';
import { ThemeContext } from '../themes/ThemeContext';

export const useTheme: () => ThemeContextValue = (): ThemeContextValue => {
  const context: ThemeContextValue | null = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within <ThemeProvider>');
  }
  return context;
};
