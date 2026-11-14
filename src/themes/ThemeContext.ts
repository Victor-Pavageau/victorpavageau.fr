import { Context, createContext } from 'react';
import type { ThemeContextValue } from '../helpers/ThemeHelper';

export const ThemeContext: Context<ThemeContextValue | null> = createContext<ThemeContextValue | null>(null);