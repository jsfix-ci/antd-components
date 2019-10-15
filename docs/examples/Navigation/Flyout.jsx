import React from 'react';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import { Flyout } from '../../../src';

// Example implementation
const Example = () => {
    const routes = [
        {
            key: 'flyout-home',
            label: 'Home',
            icon: 'home',
            path: '/Navigation/Flyout/Home',
            submenu: [
                {
                    key: '11',
                    label: 'Submenu',
                    icon: 'usb',
                    path: '/Navigation/Flyout/Home/Submenu',
                    submenu: [
                        {
                            key: '111',
                            label: 'Sub-Submenu',
                            path: '/Navigation/Flyout/Home/Submenu/1',
                            submenu: [
                                {
                                    key: '1111',
                                    label: 'Sub-Sub-Submenu',
                                    path: '/Navigation/Flyout/Home/Submenu/1/1',
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '12',
                    label: 'Highlights',
                    icon: 'highlight',
                    path: '/Navigation/Flyout/Home/Highlights',
                },
                {
                    key: '13',
                    label: 'Products',
                    group: [
                        {
                            key: '131',
                            label: 'Product 1',
                            path: '/Navigation/Flyout/Home/Product1',
                        },
                        {
                            key: '132',
                            label: 'Product 2',
                            path: '/Navigation/Flyout/Home/Product2',
                        }
                    ]
                }
            ]
        },
        {
            key: 'flyout-contact',
            label: 'Contact',
            icon: 'contacts',
            path: '/Navigation/Flyout/Contact',
        },
        {
            key: 'flyout-about',
            label: 'About Us',
            path: '/Navigation/Flyout/About-Us',
        },
        {
            key: 'flyout-hidden',
            label: 'I am hidden',
            path: '/Navigation/Flyout/Hidden',
            hideInMenu: true
        }
    ];

    return (
        <Flyout routes={routes}/>
    );
};

// Code example
// language=JS
const code = `
    import React from 'react';
    import { Flyout } from '@react-hangar/antd-components';

    const Example = () => {
        const routes = [
            {
                key: 'flyout-home',
                label: 'Home',
                icon: 'home',
                path: '/Navigation/Flyout/Home',
                submenu: [
                    {
                        key: '11',
                        label: 'Submenu',
                        icon: 'usb',
                        path: '/Navigation/Flyout/Home/Submenu',
                        submenu: [
                            {
                                key: '111',
                                label: 'Sub-Submenu',
                                path: '/Navigation/Flyout/Home/Submenu/1',
                                submenu: [
                                    {
                                        key: '1111',
                                        label: 'Sub-Sub-Submenu',
                                        path: '/Navigation/Flyout/Home/Submenu/1/1',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        key: '12',
                        label: 'Highlights',
                        icon: 'highlight',
                        path: '/Navigation/Flyout/Home/Highlights',
                    },
                    {
                        key: '13',
                        label: 'Products',
                        group: [
                            {
                                key: '131',
                                label: 'Product 1',
                                path: '/Navigation/Flyout/Home/Product1',
                            },
                            {
                                key: '132',
                                label: 'Product 2',
                                path: '/Navigation/Flyout/Home/Product2',
                            }
                        ]
                    }
                ]
            },
            {
                key: 'flyout-contact',
                label: 'Contact',
                icon: 'contacts',
                path: '/Navigation/Flyout/Contact',
            },
            {
                key: 'flyout-about',
                label: 'About Us',
                path: '/Navigation/Flyout/About-Us',
            },
            {
                key: 'flyout-hidden',
                label: 'I am hidden',
                path: '/Navigation/Flyout/Hidden',
                hideInMenu: true
            }
        ];

        return (
            <Flyout routes={routes}/>
        );
    };

    export default Example;

`;

// Component props
const properties = [
    {property: 'routes', description: 'routes config', type: 'object[]', default: '[]'}
];

export default () => (
    <ComponentDisplay title={'Flyout'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
