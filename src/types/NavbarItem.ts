import React from 'react';
import { Path } from './Path';

export type NavbarItem = {
  path: Path;
  icon: React.JSX.Element;
  text: string;
};