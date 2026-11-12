import React from 'react';
import { FiUser } from 'react-icons/fi';
import { IoGitBranchOutline, IoHomeOutline, IoNewspaperOutline } from 'react-icons/io5';
import { Location, useLocation } from 'react-router-dom';
import { goToPath } from '../services';
import { NavbarItem } from '../types';

function Navbar(): React.JSX.Element {
  const location: Location = useLocation();

  const iconClass: string = 'text-2xl md:text-4xl';

  const navbarItems: NavbarItem[] = [
    {
      path: '/',
      icon: <IoHomeOutline className={iconClass} />,
      text: 'Home',
    },
    {
      path: '/about',
      icon: <FiUser className={iconClass} />,
      text: 'About',
    },
    {
      path: '/projects',
      icon: <IoGitBranchOutline  className={iconClass} />,
      text: 'Projects',
    },
    {
      path: '/articles',
      icon: <IoNewspaperOutline  className={iconClass} />,
      text: 'Articles',
    },
  ];

  function getNavbarItemClass(path: string): string {
    return `flex flex-col md:flex-row md:gap-2 items-center align-middle cursor-pointer no-underline
    ${location.pathname === path ? 'text-primary' : 'text-text'}`;
  }

  return (
    <>
      <div className='fixed flex justify-start z-30 w-1/3 lg:w-1/2 h-6 md:h-10 md:justify-center md:items-center'>
        <a className='mt-4 pl-4 h-full md:h-2/3' href={goToPath('/')}>
          <img className='h-full' src="./assets/logo.png" alt="logo" />
        </a>
      </div>
      <nav className='fixed flex bottom-4 left-0 right-0 mx-auto z-20 bg-surface w-3/4 text-xs rounded-3xl md:h-10 md:w-full md:left-0 md:shadow-xl md:text-base md:font-medium md:bg-bg md:top-0 md:bottom-auto md:rounded-none md:py-4'>
        <div className='flex w-full justify-evenly py-3 md:w-2/3 md:justify-end md:px-40 md:gap-8'>
          {navbarItems.map((item) => (
            <a
              key={item.path}
              className={getNavbarItemClass(item.path)}
              href={goToPath(item.path)}
            >
              <div className='md:hidden'>
                {item.icon}
              </div>
              <div>{item.text}</div>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
