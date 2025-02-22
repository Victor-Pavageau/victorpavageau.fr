import React, { Ref, useRef } from 'react';
import { Location, Route, Routes, useLocation } from 'react-router-dom';
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
  const location: Location = useLocation();
  const transitionRef: Ref<HTMLElement | undefined> = useRef();

  const loadScreen: HTMLDivElement | null =
    document.querySelector('.load-screen');
  const pageContainer: HTMLDivElement | null =
    document.querySelector('.page-container');

  function onEnterHandler(): void {
    startAnimation(loadScreen, pageContainer);
  }

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
            <div className='flex flex-col-reverse sm:flex-col'>
              <Navbar />
              <Routes>
                <Route path={goToPath('/')} element={<HomePage />} />
                <Route path={goToPath('/about')} element={<AboutPage />} />
                <Route
                  path={goToPath('/projects')}
                  element={<ProjectsPage />}
                />
                <Route path={goToPath('/contact')} element={<ContactPage />} />
                <Route path={goToPath('*')} element={<NotFoundPage />} />
              </Routes>
            </div>
          </Transition>
        </TransitionGroup>
      </div>
    </>
  );
}

export default RouteHandler;
