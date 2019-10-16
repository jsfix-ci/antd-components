import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Typography } from './pages/Typography';
import { Form } from './pages/Form';
import { Grid } from './pages/Grid';
import { Navigation } from './pages/Navigation';
import { Grid2 } from './pages/FormGrid';
import { Buttons } from './pages/Buttons';

export const routes = [
    {
        key: 'home',
        label: 'Home',
        exact: true,
        path: '/',
        component: Home
    },
    {
        key: 'buttons',
        label: 'Buttons',
        path: '/Buttons',
        component: Buttons
    },
    {
        key: 'typography',
        label: 'Typography',
        path: '/Typography',
        component: Typography
    },
    {
        key: 'form',
        label: 'Form',
        path: '/Form',
        component: Form
    },
    {
        key: 'grid',
        label: 'Grid',
        path: '/Grid',
        component: Grid
    },{
        key: 'formgrid',
        label: 'FormGrid',
        path: '/FormGrid',
        component: Grid2
    },
    {
        key: 'navigation',
        label: 'Navigation',
        path: '/Navigation',
        component: Navigation
    },
    {
        key: 'notfound',
        component: NotFound,
        hideInMenu: true
    }
];
