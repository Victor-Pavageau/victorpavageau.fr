/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line @typescript-eslint/typedef, @typescript-eslint/explicit-function-return-type
const withAlpha = (name) => `rgb(var(${name}) / <alpha-value>)`;

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
        'on-primary': withAlpha('--color-on-primary'),
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
};
