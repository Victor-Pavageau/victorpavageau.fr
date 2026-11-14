import { flushSync } from 'react-dom';
import { ThemeColorVar } from '../types';

const readVar: (name: ThemeColorVar | ThemeFontVar) => string = (name: ThemeColorVar | ThemeFontVar): string =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export const cssColor: (name: ThemeColorVar) => string = (name: ThemeColorVar): string =>
  `rgb(${readVar(name).split(/\s+/).join(', ')})`;

export const cssFont: (name: ThemeFontVar) => string = (name: ThemeFontVar): string => readVar(name);
export const THEMES: [string, string] = ['light', 'dark'];
export type Theme = (typeof THEMES)[number];

export const THEME_STORAGE_KEY: string = 'theme';

export type ThemeFontVar = '--font-sans';

export interface ThemeContextValue {
  readonly theme: Theme;
  readonly setTheme: (theme: Theme) => void;
  readonly toggleTheme: (origin?: HTMLElement | null) => void;
}

export const isTheme: (value: string | Theme) => boolean = (value: string | Theme): value is Theme =>
  typeof value === 'string' && (THEMES as readonly string[]).includes(value);

interface Point {
  readonly x: number;
  readonly y: number;
}

interface ViewTransitionLike {
  readonly ready: Promise<unknown>;
}

type DocumentWithViewTransition = Document & {
  startViewTransition: (update: () => void) => ViewTransitionLike;
};

const DURATION_MS: number = 600;
const EASING: string = 'cubic-bezier(0.4, 0, 0.2, 1)';

function supportsViewTransition(doc: Document): doc is DocumentWithViewTransition {
  return 'startViewTransition' in doc;
}

const getCenter: (element: HTMLElement) => Point = (element: HTMLElement): Point => {
  const { left, top, width, height } = element.getBoundingClientRect();
  return { x: left + width / 2, y: top + height / 2 };
};

/** Distance from the point to the farthest viewport corner. */
const getCoverRadius: ({ x, y }: Point) => number = ({ x, y }: Point): number =>
  Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y),
  );

export const runThemeTransition: (origin: HTMLElement | null, update: () => void) => void = (
  origin: HTMLElement | null,
  update: () => void,
): void => {
  const prefersReducedMotion: boolean = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;

  if (origin === null || prefersReducedMotion || !supportsViewTransition(document)) {
    update();
    return;
  }

  const center: Point = getCenter(origin);
  const radius: number = getCoverRadius(center);

  // before the browser captures the "new" snapshot.
  const transition: ViewTransition = document.startViewTransition(() => flushSync(update));

  transition.ready
    .then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${center.x}px ${center.y}px)`,
            `circle(${radius}px at ${center.x}px ${center.y}px)`,
          ],
        },
        {
          duration: DURATION_MS,
          easing: EASING,
          pseudoElement: '::view-transition-new(root)',
        },
      );
    })
    .catch(() => {
      // Transition skipped: nothing to animate.
    });
};