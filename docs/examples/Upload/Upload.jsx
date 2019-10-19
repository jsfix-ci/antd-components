import React, { Fragment } from 'react';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import {Upload} from '../../../src/Upload/Upload';
import {Divider, message} from 'antd';

const data = [
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
    message.info(response);
};

// Example implementation
const Example = () => (
    <Fragment>
        <label>Image Upload</label><br />
        <Upload type='image' />
        <Divider dashed />
        <label>File Upload</label><br />
        <Upload />
        <Divider dashed />
        <label>Upload Multiple Images</label><br />
        <Upload type='image' multiple>Upload Images</Upload>
        <Divider dashed />
        <label>Whitelisted file types with default data</label><br />
        <Upload
            type='image[image/jpeg,image/png]'
            data={data}
            multiple
            action='https://garic.docker.local/upload/create'
            onUploaded={onUploaded}
            customRequestData={{
                whatever: 'extra data you want to pass'
            }}
        >
            Upload Images
        </Upload>
    </Fragment>
);

// Code example
// language=JS
const code = `
    import React, {Fragment} from 'react';
    import { Upload } from '@react-hangar/antd-components';

    const data = [
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
        return (
           <Fragment>
                <Upload type='image' />
                <Upload type='file' />                        
                <Upload type='image' multiple>Upload Images</Upload>
                <Upload 
                    type='image[image/jpeg,image/png]' 
                    data={data}
                    action='https://garic.docker.local/upload/create'
                    onUploaded={onUploaded}
                    multiple
                    customRequestData={{
                        whatever: 'extra data you want to pass'
                    }}               
                >
                    Upload Images
                </Upload>
           </Fragment>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    {property: 'type', description: 'file[file/txt,file/exe,...], image[image/jpeg,image/png,...]', type: 'string'},
    {property: 'data', description: 'sets default values', type: 'array'},
    {property: 'customRequestData', description: '(optional) passes custom data to request', type: 'object'},
    {property: 'action', description: 'api url e.g. /path/upload', type: 'string'},
    {property: 'multiple', description: 'for uploading multiple files or images', type: 'string'},
    {property: 'onUploaded', description: 'function that returns response after upload', type: 'function'},
];

export default () => (
    <Fragment>
        <ComponentDisplay title={'Files / Images'} code={code} properties={properties}>
            <Example/>
        </ComponentDisplay>
    </Fragment>
);
