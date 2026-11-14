import type { MouseEvent } from 'react';
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { ThemeContextValue } from '../helpers/ThemeHelper';
import { useTheme } from '../hooks/useTheme';

function ThemeToggle(): React.JSX.Element {
  const { theme, toggleTheme }: ThemeContextValue = useTheme();

  function handleClick(event: MouseEvent<HTMLButtonElement>): void {
    toggleTheme(event.currentTarget);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex size-10 items-center justify-center border-none bg-transparent p-0 text-text"
    >
      {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ThemeToggle;