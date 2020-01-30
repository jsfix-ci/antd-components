import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';
import { BaseGrid, EditableContext } from '@root/Grid/BaseGrid';
import { IconButton } from '@root/Buttons';
import { emptyFn } from '@root/helper';
import { withForm } from '@root/hoc';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const DataGrid = withForm((props) => {
    const { idProperty, onEdit, onSave, form, children, ...restProps } = props;
    const [isEditing, setEditing] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState(props.dataSource);

    const onChange = (data) => {
        setData(data);
    };

    const getRecord = () => data.find(record => record[idProperty] === selectedRowKeys[0]);

    const onSaveClick = () => {
        form.validateFields((error, formData) => {
            if (error) {
                return message.error('form validation failed');
            }

            let record = {
                ...getRecord(),
                ...formData
            };

            if (record.phantom) {
                delete record.phantom;
                delete record[idProperty];
            }

            setLoading(true);

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
        });
    };

    const onEditClick = (id) => {
        onEdit(id);
    };

    const onCancelClick = () => {
        setSelectedRowKeys([]);
        setEditing(false);
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
            className: 'hangar-min-td',
            render: actionRenderer
        }
    ];

    return (
        <EditableContext.Provider value={form}>
            <BaseGrid
                rowKey={idProperty}
                extraColumns={extraColumns}
                onChange={onChange}
                onEdit={onEditClick}
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
        </EditableContext.Provider>
    );
});

DataGrid.defaultProps = {
    idProperty: 'id',
    onAdd: (record) => (record),
    onDelete: () => Promise.resolve(),
    onEdit: emptyFn,
    onSave: () => Promise.resolve()
};

DataGrid.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
    dataSource: PropTypes.array,
    idProperty: PropTypes.string,
    onAdd: PropTypes.func,
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
    onSave: PropTypes.func
};
