import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Form } from './pages/Form';

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
        key: 'notfound',
        component: NotFound,
        hideInMenu: true
    }
];
