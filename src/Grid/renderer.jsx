import React, {Fragment} from 'react';
import Switch from 'antd/lib/switch';
import Popover from 'antd/lib/popover';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import { Editor, Upload } from '../../src';

export const getDisplay = (fieldType, record, dataIndex, children, maxLength) => {
    if (fieldType === 'boolean') {
        return <Switch disabled={true} checked={record}/>
    }

    if (fieldType === 'object') {
        const content = (
            <pre className="language-bash">
                {JSON.stringify(record, null, 2)}
            </pre>
        );

        return (
            <Popover content={content} title={dataIndex}>
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                    object
                </span>
            </Popover>
        );
    }

    if (fieldType === 'html') {
        const content = (
            <pre className="language-bash">
                <div dangerouslySetInnerHTML={{ __html: record }}/>
            </pre>
        );

        return (
            <Popover content={content} title={dataIndex}>
                <span style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                    html
                </span>
            </Popover>);
    }

    if (fieldType === 'image') {
        if (record.length > 0) {

            return (
                <Fragment>
                    <Popover content={<img height={150} src={record[0].url}/>} title={record[0].name}>
                        <span style={{ cursor: 'pointer', padding: 2 }}>
                            <img height={40} src={record[0].url}/>
                        </span>
                    </Popover>

                    ({record.length -1} more)

                </Fragment>
            );

        }
        return (
            <Popover content={<img height={150} src={record.url}/>} title={record.name}>
                <span style={{ cursor: 'pointer' }}>
                    <img height={40} src={record.url}/>
                </span>
            </Popover>
        );
    }

    if (fieldType === 'string') {
        if (record.length > maxLength) {
            return record.substring(0, maxLength) + '...';
        }
    }

    return children;
};

export const renderForm = (props, columns) => {
    const { getFieldDecorator } = props.form;

    return React.Children.map(columns, child => {
        const { title, dataIndex, fieldType, config} = child.props;

        switch (fieldType) {
            case 'string':
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex)(<Input/>)}
                    </Form.Item>
                );
            case 'boolean':
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex, { valuePropName: 'checked' })(<Switch/>)}
                    </Form.Item>
                );
            case 'image':
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex,{ valuePropName: 'defaultFileList' })(<Upload {...config} />)}
                    </Form.Item>
                );
            case 'html':
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex)(<Editor/>)}
                    </Form.Item>
                );
            default:
                return (
                    <Form.Item label={title}>
                        {getFieldDecorator(dataIndex)(<Input/>)}
                    </Form.Item>
                );
        }
    });
};
