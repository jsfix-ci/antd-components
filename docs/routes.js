import { NotFound } from './pages/NotFound';
import { Home } from './pages/Home';
import { Typography } from './pages/Typography';
import { Form } from './pages/Form';
import {FlyoutNavigationComponent, SideNavigationComponent} from './pages/Navigation';
import {DataGridComponent, FormGridComponent} from './pages/Grid';
import {Upload} from './pages/Upload';
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
        key: 'upload',
        label: 'Upload',
        path: '/Upload',
        component: Upload
    },
    {
        key: 'grid',
        label: 'Grid',
        path: '/Grid',
        submenu: [
            {
                key: 'dataGrid',
                label: 'Data Grid',
                path: '/Navigation/DataGrid',
                component: DataGridComponent
            },
            {
                key: 'formGrid',
                label: 'Form Grid',
                path: '/Navigation/FormGrid',
                component: FormGridComponent
            }
        ],
    },
    {
        key: 'navigation',
        label: 'Navigation',
        path: '/Navigation',
        submenu: [
            {
                key: 'flyout',
                label: 'Flyout',
                path: '/Navigation/Flyout',
                component: FlyoutNavigationComponent
            },
            {
                key: 'side',
                label: 'Side Navi',
                path: '/Navigation/Side',
                component: SideNavigationComponent
            }
        ],
    },
    {
        key: 'notfound',
        component: NotFound,
        hideInMenu: true
    }
];
