import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const FormItem = (props) => {
    const { title, dataIndex, form, valuePropName, required, children } = props;
    const { getFieldDecorator } = form;

    const rules = [
        {
            required
        },
        ...props.rules
    ];

    return (
        <Form.Item label={title}>
            {getFieldDecorator(dataIndex, {
                valuePropName,
                rules
            })(children)}
        </Form.Item>
    );
};

FormItem.defaultProps = {
    valuePropName: 'value',
    required: false,
    rules: []
};

FormItem.propTypes = {
    title: PropTypes.string,
    dataIndex: PropTypes.string,
    form: PropTypes.object,
    required: PropTypes.bool,
    rules: PropTypes.array
};
