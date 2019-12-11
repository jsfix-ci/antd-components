import React, {Fragment} from 'react';
import {ComponentDisplay} from '../../components/ComponentDisplay';
import {Tree} from '../../../src';
import {Divider, Tree as AntdTree} from "antd";

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
                    path: '/Submenu',
                    submenu: [
                        {
                            key: '111',
                            label: 'Sub-Submenu',
                            path: '/1',
                            submenu: [
                                {
                                    key: '1111',
                                    label: 'Sub-Sub-Submenu',
                                    path: '/1',
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '12',
                    label: 'Highlights',
                    icon: 'highlight',
                    path: '/Highlights',
                },
                {
                    key: '13',
                    label: 'Products',
                    group: [
                        {
                            key: '131',
                            label: 'Product 1',
                            path: '/Product1',
                        },
                        {
                            key: '132',
                            label: 'Product 2',
                            path: '/Product2',
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
            submenu: [
                {
                    key: '21',
                    label: 'Person 1',
                    path: '/Person1',

                },
                {
                    key: '22',
                    label: 'Person 2',
                    path: '/Person2',
                }
            ]
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

    const onChange = (routes) => {
        console.log(routes);
    };

    return (
        <Fragment>
            <Tree
                routes={routes}
                onChange={onChange}
                draggable
                defaultExpandAll
            />

            <Divider />

            <Tree
                routes={routes}
                onChange={onChange}
                checkable
                draggable
                defaultExpandAll
            />

            <Divider />

            <Tree
                routes={routes}
                onChange={onChange}
                checkable
                draggable
                searchable
                defaultExpandAll
            />
        </Fragment>
    );
};

// Code example
// language=JS
const code = `
    import React from 'react';
    import { DragableTree } from '@react-hangar/antd-components';

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
                    path: '/Submenu',
                    submenu: [
                        {
                            key: '111',
                            label: 'Sub-Submenu',
                            path: '/1',
                            submenu: [
                                {
                                    key: '1111',
                                    label: 'Sub-Sub-Submenu',
                                    path: '/1',
                                }
                            ]
                        }
                    ]
                },
                {
                    key: '12',
                    label: 'Highlights',
                    icon: 'highlight',
                    path: '/Highlights',
                },
                {
                    key: '13',
                    label: 'Products',
                    group: [
                        {
                            key: '131',
                            label: 'Product 1',
                            path: '/Product1',
                        },
                        {
                            key: '132',
                            label: 'Product 2',
                            path: '/Product2',
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
            submenu: [
                {
                    key: '21',
                    label: 'Person 1',
                    path: '/Person1',

                },
                {
                    key: '22',
                    label: 'Person 2',
                    path: '/Person2',
                }
            ]
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

    const onChange = (routes) => {
        console.log(routes);
    };

    return (
        <Fragment>
            <Tree
                routes={routes}
                onChange={onChange}
                draggable
                defaultExpandAll
             />

            <Divider />

            <Tree
                routes={routes}
                onChange={onChange}
                checkable
                draggable
            />

            <Divider />

            <Tree
                routes={routes}
                onChange={onChange}
                checkable
                draggable
                searchable
                defaultExpandAll
            />
        </Fragment>
    );
    
    export default Example;

`;

// Component props
const properties = [
    {
        property: 'onChange',
        description: 'Returns routes after tree changes',
        type: 'function'
    },{
        property: '(Inherited)',
        description: 'Ant design properties are inherited (see: https://ant.design/components/select/#Select-props)'
    }
];

export default () => (
    <ComponentDisplay title={'Tree'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
