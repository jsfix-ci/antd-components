import React, { Fragment } from 'react';
import Switch from 'antd/lib/switch';
import Popover from 'antd/lib/popover';
import Input from 'antd/lib/input';
import styled from 'styled-components';
import { FormItem, Editor, CodeMirror, ListField, Upload, prettifyJson, truncateText } from '..';

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

export const getDisplay = (fieldType, value, children, maxLength) => {
    switch (fieldType) {
        case 'boolean':
            return (<Switch disabled={true} checked={value}/>);
        case 'object':
            return (<CodeSnippet link={'object'}>{prettifyJson(value, 2)}</CodeSnippet>);
        case 'html':
            return (<CodeSnippet link={'html'} html>{value}</CodeSnippet>);
        case 'list':
            return (<CodeSnippet link={'list'}>{prettifyJson(value, 2)}</CodeSnippet>);
        case 'image':
            return renderImagePreview(value);
        case 'string':
            return truncateText(value, maxLength);
        case 'number':
            return value;
        default:
            return children;
    }
};

export const getInput = (fieldType, dataIndex, title, form, required, rules, fieldProps = {}) => {

    const formItemProps = {
        title,
        dataIndex,
        form,
        rules,
        required
    };

    switch (fieldType) {
        case 'boolean':
            return (<FormItem {...formItemProps} valuePropName={'checked'}><Switch/></FormItem>);
        case 'image':
            return (<FormItem {...formItemProps} valuePropName={'fileList'}><Upload {...fieldProps} /></FormItem>);
        case 'html':
            return (<FormItem {...formItemProps}><Editor/></FormItem>);
        case 'object':
            return (<FormItem {...formItemProps}><CodeMirror/></FormItem>);
        case 'list':
            return (<FormItem {...formItemProps}><ListField/></FormItem>);
        case 'string':
        default:
            return (<FormItem {...formItemProps} ><Input/></FormItem>);
    }
};

export const renderForm = (props, columns) => {
    return React.Children.map(columns, child => {
        const { title, dataIndex, fieldType, required, rules, fieldProps } = child.props;

        return getInput(fieldType, dataIndex, title, props.form, required, rules, fieldProps);
    });
};
