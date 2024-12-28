import { useState } from 'react';
import { FiMessageSquare, FiUser } from 'react-icons/fi';
import { IoCodeSlash, IoHomeOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { goToPath } from '../services';

function Navbar(): JSX.Element {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>(
    window.location.pathname,
  );

  return (
    <div className='flex justify-evenly items-center align-middle w-full bg-slate-800 text-white sticky bottom-0 sm:top-0 rounded-t-2xl py-2 sm:py-3 sm:rounded-none'>
      <div
        className={`flex gap-2 items-center align-middle cursor-pointer ${
          selectedTab === '/' && 'text-yellow-400'
        }`}
        onClick={() => {
          navigate(goToPath('/'));
          setSelectedTab('/');
        }}
      >
        <IoHomeOutline className='text-3xl sm:text-xl' />
        <div className='hidden sm:flex'>Home</div>
      </div>
      <div
        className={`flex gap-2 items-center align-middle cursor-pointer ${
          selectedTab === '/about' && 'text-yellow-400'
        }`}
        onClick={() => {
          navigate(goToPath('/about'));
          setSelectedTab('/about');
        }}
      >
        <FiUser className='text-3xl sm:text-xl' />
        <div className='hidden sm:flex'>About</div>
      </div>
      <div
        className={`flex gap-2 items-center align-middle cursor-pointer ${
          selectedTab === '/projects' && 'text-yellow-400'
        }`}
        onClick={() => {
          navigate(goToPath('/projects'));
          setSelectedTab('/projects');
        }}
      >
        <IoCodeSlash className='text-3xl sm:text-xl' />
        <div className='hidden sm:flex'>Projets</div>
      </div>
      <div
        className={`flex gap-2 items-center align-middle cursor-pointer ${
          selectedTab === '/contact' && 'text-yellow-400'
        }`}
        onClick={() => {
          navigate(goToPath('/contact'));
          setSelectedTab('/contact');
        }}
      >
        <FiMessageSquare className='text-3xl sm:text-xl' />
        <div className='hidden sm:flex'>Contact</div>
      </div>
    </div>
  );
}

export default Navbar;
