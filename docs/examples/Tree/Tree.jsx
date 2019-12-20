import React, {Fragment, useState} from 'react';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import {FormItem, Tree} from '../../../src';
import { Divider } from 'antd';

// Example implementation
const Example = () => {

    const tree = [
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
                                    submenu: []
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
                    submenu: []
                },
                {
                    key: '13',
                    label: 'Products',
                    submenu: [
                        {
                            key: '131',
                            label: 'Product 1',
                            path: '/Product1',
                            submenu: []
                        },
                        {
                            key: '132',
                            label: 'Product 2',
                            path: '/Product2',
                            submenu: []
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
                    submenu: []

                },
                {
                    key: '22',
                    label: 'Person 2',
                    path: '/Person2',
                    submenu: []
                }
            ]
        },
        {
            key: 'side-about',
            label: 'About Us',
            path: '/Navigation/Side/About-Us',
            submenu: []
        },
        {
            key: 'side-hidden',
            label: 'I am hidden',
            path: '/Navigation/Side/Hidden',
            submenu: []
        }
    ];

    const [treeData, setTreeData] = useState(tree);

    const onChange = (routes) => {
        setTreeData(routes);
    };

    return (
        <Fragment>

            <Divider orientation="left">Draggable Tree</Divider>

            <Tree
                tree={treeData}
                onChange={onChange}
                draggable
                defaultExpandAll
            />

            <Divider orientation="left">Editable Tree</Divider>

            <Tree
                tree={treeData}
                onChange={onChange}
                draggable
                editable
                formItems={[<FormItem key={3} fieldType={'string'} label='Component' dataIndex={'component'} required/>]}
                defaultExpandAll
            />

            <Divider orientation="left">Searchable Tree</Divider>

            <Tree
                tree={treeData}
                onChange={onChange}
                checkable
                draggable
                searchable
            />
        </Fragment>
    );
};

// Code example
// language=JS
const code = `
    import React from 'react';
    import { Divider } from 'antd';
    import { Tree, FormItem } from '@react-hangar/antd-components';

    const tree = [
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

    const Example = () => {

        return (
            <Fragment>

                <Divider orientation="left">Draggable Tree</Divider>

                <Tree
                    tree={tree}
                    onChange={onChange}
                    draggable
                    defaultExpandAll
                 />

                <Divider orientation="left">Editable Tree</Divider>

                <Tree
                    tree={tree}
                    onChange={onChange}
                    draggable
                    editable
                    formItems={[<FormItem key={3} fieldType={'string'} label='Component' dataIndex={'component'} required/>]}
                    defaultExpandAll
                />

                <Divider orientation="left">Searchable Tree</Divider>

                <Tree
                    tree={tree}
                    onChange={onChange}
                    checkable
                    draggable
                    searchable
                />
            </Fragment>
        );
    }

    export default Example;

`;

// Component props
const properties = [
    {
        property: 'tree',
        description: 'tree object',
        type: 'object'
    },
    {
        property: 'onChange',
        description: 'Returns routes after tree changes',
        type: 'function'
    },
    {
        property: 'searchable',
        description: 'show search bar above the tree',
        type: 'boolean',
        default: 'false'
    },
    {
        property: 'formItems',
        description: 'you can pass formItems if you want to edit an attribute additionally',
        type: 'Array[FormItems]',
    },
    {
        property: '(Inherited)',
        description: 'Ant design properties are inherited (see: https://ant.design/components/tree/)'
    }
];

export default () => (
    <ComponentDisplay title={'Tree'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
