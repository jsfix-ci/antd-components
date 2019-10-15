import React from 'react';
import {ComponentDisplay} from '../../components/ComponentDisplay';
import {Flyout} from '../../../src';

// Example implementation
const Example = () => {

    const routes = [
        {
            key: 'home',
            label: 'Home',
            exact: true,
            path: '/',
        },
        {
            key: 'form',
            label: 'Form',
            path: '/Form',
        },
        {
            key: 'grid',
            label: 'Grid',
            path: '/Grid',
        },
        {
            key: 'navigation',
            label: 'Navigation',
            path: '/Navigation',
        },
        {
            key: 'notfound',
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

    const Example = (props) => {
        const routes = [
        {
            key: 'home',
            label: 'Home',
            exact: true,
            path: '/',
        },
        {
            key: 'form',
            label: 'Form',
            path: '/Form',
        },
        {
            key: 'grid',
            label: 'Grid',
            path: '/Grid',
        },
        {
            key: 'navigation',
            label: 'Navigation',
            path: '/Navigation',
        },
        {
            key: 'notfound',
            hideInMenu: true
        }
    ];

    return (
        <Flyout routes={routes}/>
    );

    export default Form.create({name: 'example-form'})(Example);

`;

// Component props
const properties = [
    {property: 'form', description: 'form', type: 'object'},
    {property: 'addText', description: 'Button text', type: 'string', default: 'Add field'}
];

export default () => (
    <ComponentDisplay title={'Flyout'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
