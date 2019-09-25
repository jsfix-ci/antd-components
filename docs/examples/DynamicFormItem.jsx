import React, { Fragment } from 'react';
import { Form } from 'antd';
import { DynamicFormItem } from '../../src';
import { Code } from '../utils';
import { PropertyTable } from '../PropertyTable';

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

const ExampleForm = Form.create({ name: 'example-form' })(Example);

const props = [
    { property: 'form', description: 'form', type: 'object' },
    { property: 'addText', description: 'Button text', type: 'string', default: 'Add field' }
];

const Page = () => (
    <Fragment>
        <h2>DynamicFormItem</h2>
        <ExampleForm />
        <Code>
            {`
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

export default Form.create({ name: 'example-form' })(Example);
`}
        </Code>
        <PropertyTable dataSource={props} />
    </Fragment>
);

export default Page;
