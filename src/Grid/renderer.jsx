import React, { Fragment } from 'react';
import Switch from 'antd/lib/switch';
import Popover from 'antd/lib/popover';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import styled from 'styled-components';
import { Editor, CodeMirror, ListField, Upload, prettifyJson, truncateText } from '..';

const Link = styled.span`
    cursor: pointer;
    text-decoration: underline;
`;

const CodeSnippet = ({ html, link, children }) => {
    const content = (
        <pre className="language-bash">
            {html ? <div dangerouslySetInnerHTML={{ __html: children }}/> : children}
        </pre>
    );

    return (
        <Popover content={content}>
            <Link>{link}</Link>
        </Popover>
    );
};

const ImagePreview = ({ url, title }) => {
    return (
        <Popover content={<img height={150} src={url}/>} title={title}>
            <span style={{ cursor: 'pointer' }}>
                <img height={40} src={url}/>
            </span>
        </Popover>
    );
};

const renderImagePreview = (record) => {
    let url, title;
    let MoreLink = null;

    if (Array.isArray(record) && record.length > 0) {
        url = record[0].url;
        title = record[0].name;
        MoreLink = <span style={{ paddingLeft: '5px' }}>({record.length - 1} more)</span>;
    } else {
        url = record.url;
        title = record.name;
    }

    return (
        <Fragment>
            <ImagePreview url={url} title={title}/>
            {MoreLink}
        </Fragment>
    );
};

export const getDisplay = (fieldType, record, children, maxLength) => {
    switch (fieldType) {
        case 'boolean':
            return (<Switch disabled={true} checked={record}/>);

        case 'object':
            return (<CodeSnippet link={'object'}>{prettifyJson(record, 2)}</CodeSnippet>);

        case 'html':
            return (<CodeSnippet link={'html'} html>{record}</CodeSnippet>);

        case 'list':
            return (<CodeSnippet link={'list'}>{prettifyJson(record, 2)}</CodeSnippet>);

        case 'image':
            return renderImagePreview(record);

        case 'string':
            return truncateText(record, maxLength);

        case 'number':
            return record;

        default:
            return children;
    }
};

export const renderForm = (props, columns) => {
    const { getFieldDecorator } = props.form;

    return React.Children.map(columns, child => {
        const { title, dataIndex, fieldType, config } = child.props;

        switch (fieldType) {
            case 'string':
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex, {
                            initialValue: '',
                            rules: [{
                                required: config.required,
                                message: title + ' field is required'
                            }]
                        })(<Input/>)}
                    </Form.Item>
                );
            case 'boolean':
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex, {
                            valuePropName: 'checked',
                            initialValue: false,
                            rules: [{
                                required: config.required,
                                message: title + ' field is required'
                            }]
                        })(<Switch/>)}
                    </Form.Item>
                );
            case 'image':
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex, {
                            valuePropName: 'fileList',
                            rules: [{
                                required: config.required,
                                message: title + ' field is required'
                            }]
                        })(<Upload {...config} />)}
                    </Form.Item>
                );
            case 'html':
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex, {
                            initialValue: '',
                            rules: [{
                                required: config.required,
                                message: title + ' field is required'
                            }]
                        })(<Editor/>)}
                    </Form.Item>
                );
            case 'object':
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex, {
                            initialValue: '',
                            rules: [{
                                required: config.required,
                                message: title + ' field is required'
                            }]
                        })(<CodeMirror/>)}
                    </Form.Item>
                );
            case 'list':
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex, {
                            initialValue: [],
                            rules: [{
                                required: config.required,
                                message: title + ' field is required'
                            }]
                        })(<ListField/>)}
                    </Form.Item>
                );
            default:
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex, {
                            initialValue: '',
                            rules: [{
                                required: config.required,
                                message: title + ' field is required'
                            }]
                        })(<Input/>)}
                    </Form.Item>
                );
        }
    });
};
