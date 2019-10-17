import React from 'react';
import { Form } from 'antd';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import { DynamicFormItem } from '../../../src';

// Example implementation
const Example = Form.create({name: 'example-form'})
((props) => {
        return (
            <Form>
                <DynamicFormItem
                    form={props.form}
                    addText='Add new field'
                />
            </Form>
        );
    }
);

// Code example
// language=JS
const code = `
    import React from 'react';
    import { Form } from 'antd';
    import { DynamicFormItem } from '@react-hangar/antd-components';

    const Example = (props) => {
        return (
            <Form>
                <DynamicFormItem
                    form={props.form}
                    addText='Add new field'
                />
            </Form>
        );
    };

    export default Form.create({name: 'example-form'})(Example);

`;

// Component props
const properties = [
    {property: 'form', description: 'form', type: 'object'},
    {property: 'addText', description: 'Buttons text', type: 'string', default: 'Add field'}
];

export default () => (
    <ComponentDisplay title={'DynamicFormItem'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
