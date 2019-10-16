import React from 'react';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import { Side } from '../../../src';

// Example implementation
const Example = () => {
    const routes = [
        {
            key: 'side-home',
            label: 'Home',
            icon: 'home',
            path: '/Navigation/Side/Home',
            submenu: [
                {
                    key: '11',
                    label: 'Submenu',
                    icon: 'usb',
                    path: '/Navigation/Side/Home/Submenu',
                    submenu: [
                        {
                            key: '111',
                            label: 'Sub-Submenu',
                            path: '/Navigation/Side/Home/Submenu/1',
                            submenu: [
                                {
                                    key: '1111',
                                    label: 'Sub-Sub-Submenu',
                                    path: '/Navigation/Side/Home/Submenu/1/1',
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '12',
                    label: 'Highlights',
                    icon: 'highlight',
                    path: '/Navigation/Side/Home/Highlights',
                },
                {
                    key: '13',
                    label: 'Products',
                    group: [
                        {
                            key: '131',
                            label: 'Product 1',
                            path: '/Navigation/Side/Home/Product1',
                        },
                        {
                            key: '132',
                            label: 'Product 2',
                            path: '/Navigation/Side/Home/Product2',
                        }
                    ]
                }
            ]
        },
        {
            key: 'side-contact',
            label: 'Contact',
            icon: 'contacts',
            path: '/Navigation/Side/Contact',
        },
        {
            key: 'side-about',
            label: 'About Us',
            path: '/Navigation/Side/About-Us',
        },
        {
            key: 'side-hidden',
            label: 'I am hidden',
            path: '/Navigation/Side/Hidden',
            hideInMenu: true
        }
    ];

    return (
        <Side routes={routes} openSelected/>
    );
};

// Code example
// language=JS
const code = `
    import React from 'react';
    import { Side } from '@react-hangar/antd-components';

    const Example = () => {
        const routes = [
            {
                key: 'side-home',
                label: 'Home',
                icon: 'home',
                path: '/Navigation/Side/Home',
                submenu: [
                    {
                        key: '11',
                        label: 'Submenu',
                        icon: 'usb',
                        path: '/Navigation/Side/Home/Submenu',
                        submenu: [
                            {
                                key: '111',
                                label: 'Sub-Submenu',
                                path: '/Navigation/Side/Home/Submenu/1',
                                submenu: [
                                    {
                                        key: '1111',
                                        label: 'Sub-Sub-Submenu',
                                        path: '/Navigation/Side/Home/Submenu/1/1',
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        key: '12',
                        label: 'Highlights',
                        icon: 'highlight',
                        path: '/Navigation/Side/Home/Highlights',
                    },
                    {
                        key: '13',
                        label: 'Products',
                        group: [
                            {
                                key: '131',
                                label: 'Product 1',
                                path: '/Navigation/Side/Home/Product1',
                            },
                            {
                                key: '132',
                                label: 'Product 2',
                                path: '/Navigation/Side/Home/Product2',
                            }
                        ]
                    }
                ]
            },
            {
                key: 'side-contact',
                label: 'Contact',
                icon: 'contacts',
                path: '/Navigation/Side/Contact',
            },
            {
                key: 'side-about',
                label: 'About Us',
                path: '/Navigation/Side/About-Us',
            },
            {
                key: 'side-hidden',
                label: 'I am hidden',
                path: '/Navigation/Side/Hidden',
                hideInMenu: true
            }
        ];

        return (
            <Side routes={routes} openSelected/>
        );
    };

    export default Example;

`;

// Component props
const properties = [
    {property: 'routes', description: 'routes config', type: 'object[]', default: '[]'},
    {property: 'openSelected', description: 'open selected menu items after page reload', type: 'boolean', default: 'false'}
];

export default () => (
    <ComponentDisplay title={'Side'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
