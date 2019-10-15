import {NotFound} from './pages/NotFound';
import {Home} from './pages/Home';
import {Form} from './pages/Form';
import {Grid} from './pages/Grid';
import {Navigation} from './pages/Navigation';

export const routes = [
    {
        key: 'home',
        label: 'Home',
        exact: true,
        path: '/',
        component: Home
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
