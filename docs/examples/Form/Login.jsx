import React, { Fragment } from 'react';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import { Login } from '../../../src';
import { message } from 'antd';

// Example implementation
const Example = () => {

    const handleSubmit = (data, form) => {
        message.success('valid form');
        console.log(data);
    };

    return (
        <Login onSubmit={handleSubmit}/>
    );
};

// Code example
// language=JS
const code = `
    import React from 'react';
    import { message } from 'antd';
    import { Login } from '@react-hangar/antd-components';

    const Example = () => {
    
        const handleSubmit = (data, form) => {
            message.success('valid form');
            console.log(data);
        };
    
        return (
            <Login onSubmit={handleSubmit}/>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    {
        property: 'onSubmit',
        description: 'Callback function if form is submited and valid',
        type: 'function'
    },{
        property: 'rememberMe',
        description: 'Show remember me checkbox',
        type: 'boolean',
        default: 'true'
    },{
        property: 'forgotPassword',
        description: 'Show forgot password link',
        type: 'boolean',
        default: 'true'
    },{
        property: 'forgotPasswordUrl',
        description: 'Forgot password Url',
        type: 'string',
        default: '/forgot-password'
    },
];

export default () => (
    <Fragment>
        <ComponentDisplay title={'Form'} code={code} properties={properties}>
            <Example/>
        </ComponentDisplay>
    </Fragment>
);
