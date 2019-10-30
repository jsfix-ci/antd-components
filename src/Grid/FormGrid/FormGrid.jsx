import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { message, Form } from 'antd';
import { SaveButton, emptyFn } from '../..';
import { renderForm } from '../renderer';
import { BaseGrid } from '../BaseGrid';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const FormGrid = Form.create()((props) => {
    const { idProperty, onSave, toolbar, children, ...restProps } = props;
    const [isEditing, setEditing] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const EditForm = Form.create({
        mapPropsToFields(props) {
            const data = {};
            Object.keys(props).forEach(field => {
                data[field] = Form.createFormField({
                    value: props[field]
                })
            });

            return data;
        }
    })
    (props => {

            const { getFieldsError } = props.form;

            const hasErrors = (fieldsError) => {
                return Object.keys(fieldsError).some(field => fieldsError[field]);
            };

            const handleSubmit = (e) => {
                e.preventDefault();
                props.form.validateFields((error, record) => {
                    if (error) {
                        return message.error('form validation failed');
                    }
                    setEditing(false);
                    record[idProperty] = props[idProperty];
                    onSave(record);
                });
            };
            return (
                <Form onSubmit={handleSubmit}>
                    {renderForm(props, children)}
                    <SaveButton disabled={hasErrors(getFieldsError())} htmlType='submit'/>
                </Form>
            );
        }
    );

    return (
        <BaseGrid
            rowKey={idProperty}
            editForm={<EditForm/>}
            isEditing={isEditing}
            setEditing={setEditing}
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={setSelectedRowKeys}
            {...restProps}
        >
            {children}
        </BaseGrid>
    );
});

FormGrid.defaultProps = {
    idProperty: 'id',
    onAdd: emptyFn,
    onEdit: emptyFn,
    onDelete: emptyFn,
    onSave: emptyFn,
    dataSource: []
};

FormGrid.propTypes = {
    idProperty: PropTypes.string,
    onAdd: PropTypes.func,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
    onSave: PropTypes.func,
    dataSource: PropTypes.array
};
