import type { IconType } from 'react-icons';
import { Path } from './Path';

export type NavbarItem = {
  path: Path;
  icon: IconType;
  text: string;
};
