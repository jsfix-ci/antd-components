import React from 'react';
import PropTypes from 'prop-types';
import InputNumber from 'antd/lib/input-number';
import Input from 'antd/lib/input';
import Form from 'antd/lib/form';
import Switch from 'antd/lib/switch';
import { EditableContext } from './DataGrid';
import { getDisplay } from '../renderer';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const Column = (props) => {
    const renderCell = ({getFieldDecorator}) => {

        const {
            editable,
            editing,
            dataIndex,
            title,
            fieldType,
            record,
            index,
            maxLength,
            children,
            ...restProps
        } = props;

        const getInput = () => {
            if (fieldType === 'boolean') {
                return <Switch/>;
            }

            if (fieldType === 'number') {
                return <InputNumber/>;
            }

            return <Input/>;
        };

        if (editable && editing) {

            const options = {
                initialValue: record[dataIndex],
                valuePropName: fieldType === 'switch' ? 'checked' : 'value',
            };

            return (
                <td {...restProps}>
                    <Form.Item style={{margin: 0}}>
                        {getFieldDecorator(dataIndex, options)(getInput())}
                    </Form.Item>
                </td>
            );
        }

        if (!dataIndex) {
            return (
                <td {...restProps}>
                    {children}
                </td>
            );
        }

        return (
            <td {...restProps}>
                {getDisplay(fieldType, record[dataIndex], children, maxLength)}
            </td>
        );
    };

    return (
        <EditableContext.Consumer>{renderCell}</EditableContext.Consumer>
    );
};

Column.defaultProps = {
    editable: true,
    fieldType: 'string'
};

Column.propTypes = {
    title: PropTypes.string,
    dataIndex: PropTypes.string,
    editable: PropTypes.bool,
    fieldType: PropTypes.oneOf(['string', 'number', 'object', 'boolean', 'image', 'html', 'list']),
};
