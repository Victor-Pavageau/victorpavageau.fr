import React, { useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import Navbar from './components/Navbar';
import {
  AboutPage,
  ContactPage,
  HomePage,
  NotFoundPage,
  ProjectsPage,
} from './pages';
import { goToPath, startAnimation } from './services';

function RouteHandler(): React.JSX.Element {
  const location = useLocation();
  const transitionRef = useRef(null);

  const loadScreen: HTMLDivElement | null =
    document.querySelector('.load-screen');
  const pageContainer: HTMLDivElement | null =
    document.querySelector('.page-container');

  const onEnterHandler = (): void => {
    startAnimation(loadScreen, pageContainer);
  };

  return (
    <>
      <div className='load-container'>
        <div className='load-screen'></div>
      </div>
      <div className='page-container'>
        <TransitionGroup>
          <Transition
            key={location.pathname}
            timeout={0}
            onEnter={onEnterHandler}
            nodeRef={transitionRef}
          >
            <div className='pb-12 pt-0 md:pb-0 md:pt-12'>
              <Navbar />
              <div className='p-2'>
                <Routes>
                  <Route path={goToPath('/')} element={<HomePage />} />
                  <Route path={goToPath('/about')} element={<AboutPage />} />
                  <Route
                    path={goToPath('/projects')}
                    element={<ProjectsPage />}
                  />
                  <Route
                    path={goToPath('/contact')}
                    element={<ContactPage />}
                  />
                  <Route path={goToPath('*')} element={<NotFoundPage />} />
                </Routes>
              </div>
            </div>
          </Transition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default RouteHandler;
