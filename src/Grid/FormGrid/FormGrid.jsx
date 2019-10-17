import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'antd/lib/table';
import Form from 'antd/lib/form';
import { Column } from './Column';
import {message} from "antd";
import {AddButton, DeleteButton, EditButton} from "../../Buttons/Buttons";
import Switch from "antd/lib/switch";
import InputNumber from "antd/lib/input-number";
import Input from "antd/lib/input";

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const FormGrid = Form.create()((props) => {
    const {idProperty, dataSource, onAddRowClick, onDeleteRowClick, onEditRowClick, toolbar, children, ...restProps} = props;
    const [data, setData] = useState(dataSource);


    /*let formData = props.children.map((column) => {
        switch (column.props.fieldType) {
            case 'string':
                return (
                    <Input />
                );
            case 'boolean':
                return <Switch />;
            default:
                return <Input />
        }
    });*/

    let selected = [];

    useEffect(() => {
        setData(dataSource);
    }, [dataSource]);

    const onRowSelection = (selectedRowKeys, selectedRows) => {
        selected = selectedRows;
    };

    const columns = React.Children.map(children, child => {
        return {
            title: child.props.title,
            dataIndex: child.props.dataIndex,
            onCell: record => ({
                record,
                ...child.props
            }),
        };
    });

    const components = {
        body: {
            cell: Column,
        },
    };

    const onEditClick = () => {
        if (selected.length === 1) {
            onEditRowClick(selected[0])
        } else if (selected.length === 0) {
            message.error('You have to select one row at least');
        } else {
            message.error('You can edit only one row');
        }
    };

    const onDeleteClick = () => {
        if (selected.length > 0) {
            onDeleteRowClick(selected)
        } else {
            message.error('You have to select one row at least');
        }
    };

    const getToolbar = () => {
        if (toolbar) {
            return () => (
                <Fragment>
                    <AddButton onClick={onAddRowClick}/>
                    <EditButton onClick={onEditClick}/>
                    <DeleteButton onClick={onDeleteClick}/>
                </Fragment>
            );
        }
    };

    return (
        <Fragment>
           {/* <Form>{formData.map((rec) => { return rec})} </Form>*/}
            <Table
                rowKey={idProperty}
                title={getToolbar()}
                {...restProps}
                components={components}
                dataSource={data}
                columns={columns}
                rowSelection={{
                    onChange: onRowSelection,
                }}
            />
        </Fragment>
    );
});

FormGrid.defaultProps = {
    idProperty: 'id',
    onRecordCreate: (record) => (record),
};

FormGrid.propTypes = {
    idProperty: PropTypes.string,
    onRecordCreate: PropTypes.func,
    dataSource: PropTypes.array
};
