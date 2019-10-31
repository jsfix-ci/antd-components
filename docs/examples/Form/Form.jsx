import React from 'react';
import {ComponentDisplay} from '../../components/ComponentDisplay';
import {SaveButton, Upload} from '../../../src/index';
import {message} from "antd";
import Form from "../../../src/DataEntry/Form";

const hasErrors = (fieldsError) => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
};

const fileList = [
    {
        name: 'xxx.png',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        name: 'yyy.png',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
];


// Example implementation
const Example = Form.create()((props) => {
    const onUploaded = (response) => {
        console.log(response);
    };

    const {getFieldsError, getFieldDecorator} = props.form;

    const handleSubmit = (e) => {
        e.preventDefault();
        props.form.validateFields((error, data) => {
            if (error) {
                return message.error('form validation failed');
            }
        });
    };

    const action = 'http://www.mocky.io/v2/5daf53d53200006d00d961e1';


    return (
        <Form onSubmit={handleSubmit}>

            <Form.Item label={'Upload Form Item'}>
                {getFieldDecorator('upload', {
                    valuePropName: 'fileList',
                    initialValue: fileList,
                    rules: [{
                        required: true,
                        message: 'upload field is required',
                    }]
                })(
                    <Upload
                        type={{image: ['jpeg', 'png']}}
                        action={action}
                        onUploaded={onUploaded}
                        multiple
                        customRequestData={{
                            whatever: 'extra data you want to pass'
                        }}
                    />
                )}
            </Form.Item>

            <SaveButton disabled={hasErrors(getFieldsError())} htmlType="submit"/>
        </Form>
    );
});


// Code example
// language=JS
const code = `
    import React, {Fragment} from 'react';
    import { Upload } from '@react-hangar/antd-components';

    const fileList = [
        {
            name: 'xxx.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
            name: 'yyy.png',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ];
    
    const onUploaded = (response) => {
        console.log(response);
    };

    const Example = () => {
    
        const action = '/path/upload';
    
        return (
            <Form onSubmit={handleSubmit}>

            <Form.Item label={'Upload Form Item'}>
                {getFieldDecorator('upload', {
                    valuePropName: 'fileList',
                    initialValue: fileList,
                    rules: [{
                        required: true,
                        message: 'upload field is required',
                    }]
                })(
                    <Upload
                        type={{image: ['jpeg', 'png']}}
                        action={action}
                        onUploaded={onUploaded}
                        multiple
                        customRequestData={{
                            whatever: 'extra data you want to pass'
                        }}
                    />
                )}
            </Form.Item>

            <SaveButton disabled={hasErrors(getFieldsError())} htmlType="submit"/>
        </Form>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    {
        property: 'type',
        description: "'file', 'image' | {image: ['jpeg', 'png']}, {file: ['txt', 'dll']}",
        type: 'string | array[object]'
    },

];

export default () => (
    <ComponentDisplay title={'Form'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
