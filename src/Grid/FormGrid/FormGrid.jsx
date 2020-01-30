import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {message} from 'antd';
import {Form} from '@root/DataEntry';
import {SaveButton} from '@root/Buttons';
import {renderForm} from '@root/Grid/renderer';
import {BaseGrid} from '@root/Grid/BaseGrid';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const FormGrid = (props) => {
    const { idProperty, onSave, children, ...restProps } = props;
    const [ isEditing, setEditing ] = useState(false);
    const [ selectedRowKeys, setSelectedRowKeys ] = useState([]);
    const [ isLoading, setLoading ] = useState(false);

    const EditForm = (props) => {
        const handleSubmit = (e, data) => {
            setLoading(true);
            let record = {...data};

            if (record.phantom) {
                delete record.phantom;
                delete record[idProperty];
            }

            onSave(record)
                .then(() => {
                    setSelectedRowKeys([]);
                    setLoading(false);
                    setEditing(false);
                })
                .catch(err => {
                    setLoading(false);
                    message.error(err.toString());
                });
        };

        return (
            <Form onSubmit={handleSubmit} {...props}>
                {renderForm(props, children)}
                <SaveButton htmlType='submit'/>
            </Form>
        );
    };

    return (
        <BaseGrid
            rowKey={idProperty}
            editForm={<EditForm/>}
            idProperty={idProperty}
            isEditing={isEditing}
            setEditing={setEditing}
            selectedRowKeys={selectedRowKeys}
            setSelectedRowKeys={setSelectedRowKeys}
            isLoading={isLoading}
            setLoading={setLoading}
            {...restProps}
        >
            {children}
        </BaseGrid>
    );
};

FormGrid.defaultProps = {
    dataSource: [],
    idProperty: 'id',
    onSave: () => Promise.resolve()
};

FormGrid.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
    dataSource: PropTypes.array,
    idProperty: PropTypes.string,
    onAdd: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onSave: PropTypes.func
};
