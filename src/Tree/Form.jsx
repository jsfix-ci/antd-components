import { Modal } from "antd";
import React from "react";
import {Form, FormItem} from "@root/DataEntry";
import {SaveButton} from "@root/Buttons";

export const TreeForm = (props) => {

    const {visible, hideModal, selectedNode, formItems, onSubmit} = props;

    const handleSubmit = (data, form) => {
        onSubmit(data);
    };

    return (
        <Modal
            title="New Node"
            visible={visible}
            onOk={hideModal}
            onCancel={hideModal}
            okButtonProps={{ hidden: true }}
            cancelButtonProps={{ hidden: true }}
        >
            <Form record={selectedNode} onSubmit={handleSubmit} >
                <FormItem fieldType={'string'} label='Label' dataIndex={'label'} required/>
                <FormItem fieldType={'string'} label='Path' dataIndex={'path'} required/>
                {formItems}
                <SaveButton htmlType="submit"/>
            </Form>
        </Modal>
    );
};