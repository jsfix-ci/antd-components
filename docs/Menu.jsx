import React from 'react';
import { routes } from './routes';
import { SideNavi } from '../src/Navigation/SideNavi';

export const Menu = () => <SideNavi routes={routes} openSubmenus='all'/>
