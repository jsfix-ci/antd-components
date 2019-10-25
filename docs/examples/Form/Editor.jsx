import React, { Fragment } from 'react';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import { Editor } from '../../../src';

// Example implementation
const Example = () => {
    return (
        <Editor/>
    );
};

// Code example
// language=JS
const code = `
    import React from 'react';
    import { Form } from 'antd';
    import { Editor } from '@react-hangar/antd-components';

    const Example = () => {
        return (
            <Editor/>
        );
    };

    export default Example;

`;

// Component props
const properties = [
    {
        property: 'height',
        description: 'https://www.tiny.cloud/docs/configure/editor-appearance/#height',
        type: 'number/string',
        default: '500'
    },
    {
        property: 'menubar',
        description: 'https://www.tiny.cloud/docs/configure/editor-appearance/#menubar',
        type: 'string/boolean',
        default: 'false'
    },
    {
        property: 'plugins',
        description: 'https://www.tiny.cloud/docs/configure/integration-and-setup/#plugins',
        type: 'string/string[]',
        default: ''
    },
    {
        property: 'toolbar',
        description: 'https://www.tiny.cloud/docs/configure/editor-appearance/#toolbar',
        type: 'string',
        default: ''
    }
];
// const description = `You have to include this line of code in the <head> of your HTML page:
//                 cp -r node_modules/tinymce/skins skins`;


const description = (
    <Fragment>
        <div>You have to copy the skin that comes packaged with TinyMCE:</div>
        <a href='https://www.tiny.cloud/docs/advanced/usage-with-module-loaders/#gettingtheskin'>
            https://www.tiny.cloud/docs/advanced/usage-with-module-loaders/#gettingtheskin
        </a>
    </Fragment>
);

export default () => (
    <ComponentDisplay
        title={'Editor'}
        description={description}
        code={code}
        properties={properties}
    >
        <Example/>
    </ComponentDisplay>
);
