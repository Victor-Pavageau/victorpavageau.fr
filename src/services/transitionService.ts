import { gsap } from 'gsap';

export const startAnimation = (
  loadScreen: HTMLDivElement | null,
  pageContainer: HTMLDivElement | null,
): void => {
  if (!loadScreen || !pageContainer) {
    return;
  }

  resetAnimation(loadScreen, pageContainer);
  playAnimation(gsap.timeline(), loadScreen, pageContainer);
};

const resetAnimation = (
  loadScreen: HTMLDivElement | null,
  pageContainer: HTMLDivElement | null,
) => {
  gsap.set(loadScreen, { height: '0', top: '0' });
  gsap.set(pageContainer, { opacity: '0', pointerEvents: 'none' });
};

const playAnimation = (
  tl: gsap.core.Timeline,
  loadScreen: HTMLDivElement | null,
  pageContainer: HTMLDivElement | null,
) => {
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
  gsap.to(pageContainer, {
    duration: 0.3,
    css: {
      opacity: '1',
      pointerEvents: 'auto',
    },
    ease: 'power4.inOut',
    delay: 2,
  });
};
