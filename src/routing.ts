const paths = ['/', '/about', '/projects', '/contact', '*'] as const;

export type Paths = (typeof paths)[number];

export const goTo = (path: Paths): Paths | string => {
  return path;
};
