import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Popover, Switch, Input, InputNumber } from 'antd';
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

    if (!record) {
        return null;
    }

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

export const getInput = ({ fieldType, fieldProps = {}, ...restProps }) => {

    switch (fieldType) {
        case 'boolean':
            return (<FormItem {...restProps} valuePropName={'checked'}><Switch/></FormItem>);
        case 'image':
            return (<FormItem {...restProps} valuePropName={'fileList'}><Upload {...fieldProps} /></FormItem>);
        case 'html':
            return (<FormItem {...restProps}><Editor/></FormItem>);
        case 'object':
            return (<FormItem {...restProps}><CodeMirror/></FormItem>);
        case 'list':
            return (<FormItem {...restProps}><ListField/></FormItem>);
        case 'number':
            return (<FormItem {...restProps}><InputNumber/></FormItem>);
        case 'string':
        default:
            return (<FormItem {...restProps} ><Input/></FormItem>);
    }
};

export const renderForm = (props, columns) => {
    return React.Children.map(columns, child => {
        const { title, dataIndex, fieldType, required, rules, fieldProps } = child.props;

        return getInput({ fieldType, dataIndex, title, form: props.form, required, rules, fieldProps });
    });
};
