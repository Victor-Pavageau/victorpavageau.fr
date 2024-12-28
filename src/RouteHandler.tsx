import { gsap } from 'gsap';
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import {
  AboutPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  ProjectsPage,
} from './pages';
import { goToPath } from './services';

function RouteHandler(): JSX.Element {
  const location = useLocation();

  let loadScreen: HTMLDivElement | null =
    document.querySelector('.load-screen');
  let pageContainer: HTMLDivElement | null =
    document.querySelector('.page-container');

  useEffect(() => {
    if (!loadScreen || !pageContainer) {
      return;
    }

    gsap.set(loadScreen, { height: '0', top: '0' });

    const tl = gsap.timeline();
    tl.to(loadScreen, {
      duration: 1.2,
      height: '100%',
      ease: 'power3.inOut',
    });
    tl.to(loadScreen, {
      duration: 1,
      top: '100%',
      ease: 'power3.inOut',
      delay: 0.3,
    });
    gsap.set(pageContainer, {
      css: {
        opacity: '0',
        pointerEvents: 'none',
      },
    });
    gsap.to(pageContainer, {
      duration: 0.3,
      css: {
        opacity: '1',
        pointerEvents: 'auto',
      },
      ease: 'power4.inOut',
      delay: 2,
    });
  }, [location, pageContainer, loadScreen]);

  return (
    <>
      <div className='load-container'>
        <div className='load-screen' ref={(el) => (loadScreen = el)}></div>
      </div>
      <div ref={(el) => (pageContainer = el)} className='page-container'>
        <div className='flex flex-col-reverse sm:flex-col'>
          <Navbar />
          <Routes>
            <Route path={goToPath('/')} element={<HomePage />} />
            <Route path={goToPath('/about')} element={<AboutPage />} />
            <Route path={goToPath('/projects')} element={<ProjectsPage />} />
            <Route path={goToPath('/contact')} element={<ContactPage />} />
            <Route path={goToPath('*')} element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default RouteHandler;
