import React, { LegacyRef, Ref, useRef } from 'react';
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

  const loadScreenRef: LegacyRef<HTMLDivElement> = useRef(null);
  const pageContainerRef: LegacyRef<HTMLDivElement> = useRef(null);

  const onEnterHandler: () => void = (): void => {
    startAnimation(loadScreenRef.current, pageContainerRef.current);
  };

  return (
    <>
      <div className='load-container'>
        <div className='load-screen' ref={loadScreenRef} />
      </div>
      <div className='page-container' ref={pageContainerRef}>
        <TransitionGroup appear>
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
