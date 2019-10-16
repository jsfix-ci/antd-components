import React from 'react';
import {FormGrid} from '../../../src';
import {Column} from "../../../src/Grid/FormGrid";
import {ComponentDisplay} from "../../components/ComponentDisplay";
import {message} from "antd";

const data = [
    {
        bannerType: 'Image',
        html: 'test',
        image: {
            name: 'imagename',
            url: 'imageurl'
        },
        settings: {},
        active: true
    },
    {
        bannerType: 'Image2',
        html: 'test2',
        image: {
            name: 'imagename2',
            url: 'imageurl2'
        },
        settings: {},
        active: true
    },
    {
        bannerType: 'Image3',
        html: 'test3',
        image: {
            name: 'imagename3',
            url: 'imageurl3'
        },
        settings: {
            test: 'jo'
        },
        active: false
    }
];


const onAdd = () => {
    message.info('add button clicked!');
};

const onEdit = (row) => {
    message.info('edit button clicked!');
};

const onDelete = (row) => {
    message.info('delete button clicked!');
};

const Example = () => (
    <FormGrid
        dataSource={data}
        pagination={true}
        onAddRowClick={onAdd}
        onEditRowClick={onEdit}
        onDeleteRowClick={onDelete}
        toolbar={true}
    >
        <Column title={'Banner Type'} dataIndex={'bannerType'} inputType={'string'}/>
        <Column title={'Content'} dataIndex={'html'} inputType={'string'}/>
        <Column title={'Image'} dataIndex={'image'} inputType={'object'}/>
        <Column title={'Settings'} dataIndex={'settings'} inputType={'object'}/>
        <Column title={'Active'} dataIndex={'active'} inputType={'boolean'}/>
    </FormGrid>
);

// Code example
// language=JS
const code = `
    import React from 'react';
    import { AddButton, DeleteButton, EditButton } from '@react-hangar/antd-components';

    const onAdd = () => {
        message.info('add button clicked!');
    };

    const onEdit = (row) => {
        message.info('edit button clicked!');
    };

    const onDelete = (row) => {
        message.info('delete button clicked!');
    };

    const Example = () => {
        return (
               <FormGrid
                    dataSource={data}
                    pagination={true}
                    onAddRowClick={onAdd}
                    onEditRowClick={onEdit}
                    onDeleteRowClick={onDelete}
                    toolbar={true}
                >
                    <Column title={'Banner Type'} dataIndex={'bannerType'} inputType={'string'}/>
                    <Column title={'Content'} dataIndex={'html'} inputType={'string'}/>
                    <Column title={'Image'} dataIndex={'image'} inputType={'object'}/>
                    <Column title={'Settings'} dataIndex={'settings'} inputType={'object'}/>
                    <Column title={'Active'} dataIndex={'active'} inputType={'boolean'}/>
            </FormGrid>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    {property: 'idProperty', description: 'id field property of data source', type: 'string', default: 'id'},
    {property: 'onAddBtnClick', description: 'Function is called on add button click', type: 'function'},
    {property: 'onEditBtnClick', description: 'Function is called on edit button click', type: 'function'},
    {property: 'onDeleteBtnClick', description: 'Function is called on delete button click', type: 'function'},
    {property: 'dataSource', description: 'data source', type: 'object[]'},
];

export default () => (
    <ComponentDisplay title={'Types'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);