import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from 'antd/lib/table';
import { FormGridColumn } from './FormGridColumn';
import { message, Form } from 'antd';
import { AddButton, DeleteButton, EditButton, BackButton, SaveButton } from '../..';
import { renderForm } from '../renderer';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const FormGrid = Form.create()((props) => {
    const { idProperty, dataSource, onAddRowClick, onDeleteRowClick, onEditRowClick, toolbar, children, locale, ...restProps } = props;

    const [isEditing, setEditing] = useState(false);
    const [record, setRecord] = useState({});
    const [data, setData] = useState(dataSource);
    const [selected, setSelected] = useState([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);

    useEffect(() => {
        setData(dataSource);
    }, [dataSource]);

    const onRowSelection = (selectedRowKeys, selectedRows) => {
        setSelectedRowKeys(selectedRowKeys);
        setSelected(selectedRows);
    };

    const columns = React.Children.map(children, child => {
        return {
            title: child.props.title,
            dataIndex: child.props.dataIndex,
            config: child.props.config,
            onCell: record => ({
                record,
                ...child.props
            }),
        };
    });

    const components = {
        body: {
            cell: FormGridColumn,
        },
    };

    const onAddClick = () => {
        setEditing(true);
        onAddRowClick();
    };

    const onEditClick = () => {
        if (selected.length === 1) {
            setEditing(true);
            setRecord(selected[0]);
            onEditRowClick(selected[0])
        } else if (selected.length === 0) {
            message.error('You have to select one row at least');
        } else {
            message.error('You can edit only one row');
        }
    };

    const onDeleteClick = () => {
        if (selected.length > 0) {
            onDeleteRowClick(selected);
            setSelectedRowKeys([]);
        } else {
            message.error('You have to select one row at least');
        }
    };

    const getToolbar = () => {
        if (toolbar) {
            return () => (
                <Fragment>
                    <AddButton onClick={onAddClick} locale={locale} />
                    <EditButton onClick={onEditClick} locale={locale} />
                    <DeleteButton onClick={onDeleteClick} locale={locale} />
                </Fragment>
            );
        }
    };

    if (isEditing) {
        const FormWrapper = Form.create({
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

                const onBackButtonClick = () => {
                    setRecord({});
                    setEditing(false)
                };

                const hasErrors = (fieldsError) => {
                    return Object.keys(fieldsError).some(field => fieldsError[field]);
                };

                const handleSubmit = () => {
                    props.form.validateFields((error) => {
                        if (error) {
                            return message.error('form validation failed');
                        }
                    });
                };
                return (
                    <Fragment>
                        <BackButton locale={locale} onClick={onBackButtonClick}/>
                        <Form onSubmit={handleSubmit}>
                            {renderForm(props, children)}
                            <SaveButton locale={locale} disabled={hasErrors(getFieldsError())} htmlType="submit" />
                        </Form>
                    </Fragment>
                );
            }
        );

        return <FormWrapper {...record}/>;
    }

    return (
        <Table
            rowKey={idProperty}
            title={getToolbar()}
            {...restProps}
            components={components}
            dataSource={data}
            columns={columns}
            rowSelection={{
                selectedRowKeys,
                onChange: onRowSelection
            }}
        />
    );
});

FormGrid.defaultProps = {
    idProperty: 'id',
    onRecordCreate: (record) => (record),
};

FormGrid.propTypes = {
    idProperty: PropTypes.string,
    onRecordCreate: PropTypes.func,
    dataSource: PropTypes.array,
    locale: PropTypes.string
};
