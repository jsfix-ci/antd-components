import React from 'react';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import { Form, SaveButton, FormItem } from '../../../src';
import { Input } from 'antd';
import faker from 'faker';
import { generateImages } from '../../components/utils';

const generateFakeData = () => ({
    company: faker.company.companyName(),
    product: faker.commerce.productName(),
    image: generateImages(),
});


// Example implementation
const Example = (props) => {
    const action = 'http://www.mocky.io/v2/5daf53d53200006d00d961e1';

    const onUploaded = (response) => {
        console.log(response);
    };

    const handleSubmit = (data, form) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit} {...generateFakeData()}>
            <FormItem label='Company Name' dataIndex={'company'} required>
                <Input/>
            </FormItem>

            <FormItem fieldType={'string'} label='Product Name' dataIndex={'product'} required />

            <FormItem fieldType={'string'} label='Text with Validator' dataIndex={'text'} rules={[
                { max: 10 }
            ]}/>

            <FormItem fieldType={'image'} dataIndex={'image'} label={'Upload Form Item'} required fieldProps={{
                type: { image: ['jpeg', 'png'] },
                action: action,
                onUploaded,
                multiple: true,
                customRequestData: {
                    whatever: 'extra data you want to pass'
                }
            }} />

            <SaveButton htmlType="submit"/>
        </Form>
    );
};


// Code example
// language=JS
const code = `
    import React, { Fragment } from 'react';
    import { Form, FormItem, SaveButton } from '@react-hangar/antd-components';

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

    const handleSubmit = (data, form) => {
        console.log(data);
    };
   
    const Example = () => {

        const action = '/path/upload';

        return (
            <Form onSubmit={handleSubmit} company={'Lindgren - Yundt'} product={'Unbranded Soft Chips'} image={fileList}>
                <FormItem label='Company Name' dataIndex={'company'} required>
                    <Input/>
                </FormItem>

                <FormItem fieldType={'string'} label='Product Name' dataIndex={'product'} required />

                <FormItem fieldType={'string'} label='Text' dataIndex={'text'} rules={[
                    { max: 10 }
                ]}/>

                <FormItem fieldType={'image'} dataIndex={'image'} label={'Upload Form Item'} required fieldProps={{
                    type: { image: ['jpeg', 'png'] },
                    action: action,
                    onUploaded,
                    multiple: true,
                    customRequestData: {
                        whatever: 'extra data you want to pass'
                    }
                }} />

                <SaveButton htmlType="submit"/>
            </Form>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    {
        property: 'type',
        description: '\'file\', \'image\' | {image: [\'jpeg\', \'png\']}, {file: [\'txt\', \'dll\']}',
        type: 'string | array[object]'
    },

];

export default () => (
    <ComponentDisplay title={'Form'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
