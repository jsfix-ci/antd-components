import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Form } from './pages/Form';
import { Grid } from './pages/Grid';
import { Typography } from './pages/Typography';

export const routes = [
    {
        key: 'home',
        label: 'Home',
        exact: true,
        path: '/',
        component: Home
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
    },
    {
        key: 'notfound',
        component: NotFound,
        hideInMenu: true
    }
];
