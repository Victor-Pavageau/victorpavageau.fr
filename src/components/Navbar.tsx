import React from 'react';
import { FiMessageSquare, FiUser } from 'react-icons/fi';
import { IoCodeSlash, IoHomeOutline } from 'react-icons/io5';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';
import { goToPath } from '../services';
import { Path } from '../types';

type NavbarItem = {
  path: Path;
  icon: React.JSX.Element;
  text: string;
};

function Navbar(): React.JSX.Element {
  const location = useLocation();
  const navigate: NavigateFunction = useNavigate();

  const iconClass = 'text-3xl sm:text-xl';

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
      icon: <IoCodeSlash className={iconClass} />,
      text: 'Projects',
    },
    {
      path: '/contact',
      icon: <FiMessageSquare className={iconClass} />,
      text: 'Contact',
    },
  ];

  function getNavbarItemClass(path: string): string {
    return `flex gap-2 items-center align-middle cursor-pointer
    ${location.pathname === path && 'text-yellow-400'}`;
  }

  return (
    <nav className='fixed bottom-0 md:top-0 md:bottom-auto left-0 w-full bg-slate-800 text-white shadow-md rounded-t-3xl md:rounded-none'>
      <div className='flex justify-evenly md:gap-10 py-3'>
        {navbarItems.map((item) => (
          <div
            key={item.path}
            className={getNavbarItemClass(item.path)}
            onClick={() => {
              navigate(goToPath(item.path));
            }}
          >
            {item.icon}
            <div className='hidden sm:flex'>{item.text}</div>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
