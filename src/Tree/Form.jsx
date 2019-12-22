import { Modal } from 'antd';
import React from "react";
import { Form, FormItem } from '@root/DataEntry';
import { SaveButton } from '@root/Buttons';
import { useL10n as l10n } from '@root/Locales';

export const TreeFormModal = (props) => {

    const {visible, record, formItems, onCancel, onSubmit} = props;

    const handleSubmit = (data) => {
        onSubmit(data, record);
    };

    return (
        <Modal
            title={(!record.label) ? l10n().Tree.newNode : l10n().Tree.editNode}
            visible={visible}
            onCancel={onCancel}
            cancelButtonProps={{ hidden: true }}
        >
            <Form record={record} onSubmit={handleSubmit} >
                <FormItem key={1} fieldType={'string'} label='Label' dataIndex={'label'} required/>
                <FormItem key={2} fieldType={'string'} label='Path' dataIndex={'path'} required/>
                {formItems}
                <SaveButton htmlType="submit"/>
            </Form>
        </Modal>
    );
};
