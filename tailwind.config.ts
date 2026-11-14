/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';
import type { ThemeColorVar } from './src/types';

function withAlpha(theme: ThemeColorVar): string {
  return `rgb(var(${theme}) / <alpha-value>)`;
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: withAlpha('--color-bg'),
        'bg-inverse': withAlpha('--color-bg-inverse'),
        surface: withAlpha('--color-surface'),
        text: withAlpha('--color-text'),
        muted: withAlpha('--color-muted'),
        border: withAlpha('--color-border'),
        primary: withAlpha('--color-primary'),
        'primary-hover': withAlpha('--color-primary-hover'),
        'accent-2': withAlpha('--color-accent-2'),
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
        display: ['var(--font-display)'],
        read: ['var(--font-read)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
