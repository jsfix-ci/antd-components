import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { message, Form } from 'antd';
import { BaseGrid, EditableContext } from '../BaseGrid';
import { IconButton, emptyFn } from '../..';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const DataGrid = Form.create()((props) => {
    const { idProperty, onAdd, onEdit, onSave, form, children, ...restProps } = props;
    const [isEditing, setEditing] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    const onSaveClick = () => {
        form.validateFields((error, record) => {
            if (error) {
                return message.error('form validation failed');
            }
            setEditing(false);
            onSave({
                [idProperty]: selectedRowKeys[0],
                ...record
            });
        });
    };

    const onAddClick = (rec) => {
        const record = onAdd(rec);
        setSelectedRowKeys([record[idProperty]]);
        return record;
    };

    const onEditClick = (id) => {
        onEdit(id);
    };

    const onCancelClick = () => {
        setSelectedRowKeys([]);
        setEditing(false)
    };

    const actionRenderer = (text, record) => {
        const id = record[idProperty];

        if (!isEditing || id !== selectedRowKeys[0]) {
            return null;
        }

        return (
            <div style={{ height: '40px', lineHeight: '40px' }}>
                <IconButton type="save" onClick={onSaveClick}/>
                <IconButton type="stop" onClick={onCancelClick}/>
            </div>
        );
    };

    const extraColumns = [
        {
            dataIndex: 'operation',
            className: 'min-td',
            render: actionRenderer
        }
    ];

    return (
        <EditableContext.Provider value={form}>
            <BaseGrid
                rowKey={idProperty}
                extraColumns={extraColumns}
                onAdd={onAddClick}
                onEdit={onEditClick}
                isEditing={isEditing}
                setEditing={setEditing}
                selectedRowKeys={selectedRowKeys}
                setSelectedRowKeys={setSelectedRowKeys}
                {...restProps}
            >
                {children}
            </BaseGrid>
        </EditableContext.Provider>
    );
});

DataGrid.defaultProps = {
    idProperty: 'id',
    onAdd: (record) => (record),
    onSave: () => Promise.resolve(),
    onDelete: () => Promise.resolve(),
    onEdit: emptyFn
};

DataGrid.propTypes = {
    idProperty: PropTypes.string,
    onRecordCreate: PropTypes.func,
    onSave: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    dataSource: PropTypes.array
};
