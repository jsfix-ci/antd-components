import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Icon, Input } from 'antd';
import styled from 'styled-components';
import nanoid from 'nanoid';

const AddButton = styled(Button)`
    width: 100%;
`;

const DeleteButton = styled(Icon)`
    &:hover {
      color: #777;
    }
    cursor: pointer;
    position: relative;
    top: 4px;
    font-size: 24px;
    color: #999;
    transition: all 0.3s;
    margin-left: 8px;
`;

const firstKey = nanoid(10);

export const DynamicFormItem = (props) => {
    const { form, addText, label, keyFieldName, valueFieldName } = props;
    const { getFieldDecorator, getFieldValue } = form;

    getFieldDecorator(keyFieldName, { initialValue: [firstKey] });
    const keys = getFieldValue(keyFieldName);

    const formItems = keys.map((k, index) => (
        <Form.Item
            label={index === 0 ? label : ''}
            required={false}
            key={k}
        >
            <div style={{ display: 'flex' }}>
                {getFieldDecorator(`${valueFieldName}[${k}]`)(<Input />)}
                {keys.length > 1 ? (
                    <DeleteButton
                        type="minus-circle-o"
                        onClick={() => remove(k)}
                    />
                ) : null}
            </div>
        </Form.Item>
    ));

    const add = () => {
        const keys = form.getFieldValue(keyFieldName);
        const nextKeys = keys.concat(nanoid(10));
        form.setFieldsValue({
            [keyFieldName]: nextKeys,
        });
    };

    const remove = k => {
        const keys = form.getFieldValue(keyFieldName);
        if (keys.length === 1) {
            return;
        }

        form.setFieldsValue({
            [keyFieldName]: keys.filter(key => key !== k),
        });
    };

    return (
        <Fragment>
            {formItems}
            <Form.Item>
                <AddButton type="dashed" onClick={add}>
                    <Icon type="plus" /> {addText}
                </AddButton>
            </Form.Item>
        </Fragment>
    );
};

DynamicFormItem.defaultProps = {
    addText: 'Add field',
    keyFieldName: 'keys',
    valueFieldName: 'values'
};

DynamicFormItem.propTypes = {
    form: PropTypes.object.isRequired,
    addText: PropTypes.string,
    keyFieldName: PropTypes.string,
    valueFieldName: PropTypes.string
};
