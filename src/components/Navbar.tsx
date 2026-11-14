import React from 'react';
import { FiUser } from 'react-icons/fi';
import { IoGitBranchOutline, IoHomeOutline, IoNewspaperOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';
import { ThemeContextValue } from '../helpers/ThemeHelper';
import { useTheme } from '../hooks/useTheme';
import { goToPath } from '../services';
import { NavbarItem } from '../types';
import ThemeToggle from './ThemeToggle';

const navbarItems: NavbarItem[] = [
  { path: '/', icon: IoHomeOutline, text: 'Home' },
  { path: '/about', icon: FiUser, text: 'About' },
  { path: '/projects', icon: IoGitBranchOutline, text: 'Projects' },
  { path: '/articles', icon: IoNewspaperOutline, text: 'Articles' },
];

function itemClassName(isActive: boolean): string {
  return isActive ? 'text-primary' : 'text-text hover:text-primary';
}

function Navbar(): React.JSX.Element {
  const { theme }: ThemeContextValue = useTheme();

  return (
    <>
      <header className='fixed inset-x-0 top-0 z-30 bg-bg'>
        <div className='mx-auto select-none flex h-14 max-w-5xl items-center justify-between px-4 md:grid md:h-16 md:grid-cols-[1fr_auto_1fr] md:px-8'>
          <NavLink to={goToPath('/')} end className='shrink-0 md:justify-self-start'>
            <img
              src={`./assets/logo_${theme}.png`}
              alt='Victor Pavageau logo'
              className='h-6 w-auto md:h-8'
            />
          </NavLink>

          <nav className='hidden items-center gap-8 md:flex'>
            {navbarItems.map((item: NavbarItem) => (
              <NavLink
                key={item.path}
                to={goToPath(item.path)}
                end
                className={({ isActive }) => `text-base no-underline font-medium ${itemClassName(isActive)}`}
              >
                {item.text}
              </NavLink>
            ))}
          </nav>

          <div className='md:justify-self-end'>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <nav
        className='fixed inset-x-0 bottom-[max(1rem,env(safe-area-inset-bottom))] z-20 mx-auto flex w-3/4 items-center justify-evenly rounded-3xl bg-surface px-3 py-3 text-xs md:hidden'>
        {navbarItems.map((item: NavbarItem) => (
          <NavLink
            key={item.path}
            to={goToPath(item.path)}
            end
            className={({ isActive }) => `flex flex-col no-underline items-center gap-1 ${itemClassName(isActive)}`}
          >
            <item.icon className='text-2xl' />
            <span>{item.text}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}

export default Navbar;
