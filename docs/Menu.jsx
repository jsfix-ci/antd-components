import React from 'react';
import { routes } from './routes';
import { SideNavi } from '../src/Navigation/SideNavi';

export const Menu = (props) => <SideNavi {...props} routes={routes} openSubmenus='all'/>
