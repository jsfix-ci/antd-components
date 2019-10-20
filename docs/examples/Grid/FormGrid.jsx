import React, {useState} from 'react';
import {FormGrid} from '../../../src';
import {Column} from "../../../src/Grid/FormGrid";
import {ComponentDisplay} from "../../components/ComponentDisplay";
import {message} from "antd";

const defaultData = [
    {
        text: 'You can adjust types',
        html: '<div style="background-color: #eee; color: #D20000">this is renderd html</div>',
        image: [
            {
                name: 'write.jpg',
                url: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593357_960_720.jpg'
            },
            {
                name: 'note.jpg',
                url: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg'
            }],
        settings: {
            lame: false,
            nasty: 'yes'
        },
        active: true
    },
    {
        text: 'for example string',
        html: '<div style="background-color: #000; color: #fff">this is renderd html</div>',
        image: {
            name: 'note.jpg',
            url: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg'
        },
        settings: {
            dope: true,
            crazy: 'yes'
        },
        active: true
    },
    {
        text: 'it will be shortened if its to long',
        html: '<div style="background-color: #fff; color: #000">this is renderd html</div>',
        image: {
            name: 'working.jpg',
            url: 'https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849805_960_720.jpg'
        },
        settings: {
            amazing: true,
            fancy: 'yes'
        },
        active: false
    }
];

const Example = () => {
    const [data, setData] = useState(defaultData);

    const onAdd = () => {
        message.info('add button clicked!');
    };

    const onEdit = (row) => {
        message.info('edit button clicked!');
    };

    const onDelete = (rows) => {
        setData(data.filter( rec => !rows.includes(rec)));
    };

    const imageConfig = {action: '/path/upload', type: {image: ['jpg', 'png']}};

    return (
        <FormGrid
            dataSource={data}
            pagination={true}
            onAddRowClick={onAdd}
            onEditRowClick={onEdit}
            onDeleteRowClick={onDelete}
            toolbar={true}
        >
            <Column title={'Title'} dataIndex={'text'} fieldType={'string'} maxLength={30}/>
            <Column title={'Content'} dataIndex={'html'} fieldType={'html'}/>
            <Column title={'Image'} dataIndex={'image'} fieldType={'image'} config={imageConfig}/>
            <Column title={'Settings'} dataIndex={'settings'} fieldType={'object'}/>
            <Column title={'Active'} dataIndex={'active'} fieldType={'boolean'}/>
        </FormGrid>
    )
};

// Code example
// language=JS
const code = `
    import React from 'react';
    import { AddButton, DeleteButton, EditButton } from '@react-hangar/antd-components';
    import axios from 'axios';
    
    const defaultData = [
        {
            text: 'You can adjust types',
            html: '<div style="background-color: #eee; color: #D20000">this is renderd html</div>',
            image: {
                name: 'write.jpg',
                url: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593357_960_720.jpg'
            },
            settings: {
                lame: false,
                nasty: 'yes'
            },
            active: true
        },
        {
            text: 'for example string',
            html: '<div style="background-color: #000; color: #fff">this is renderd html</div>',
            image: {
                name: 'note.jpg',
                url: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg'
            },
            settings: {
                dope: true,
                crazy: 'yes'
            },
            active: true
        },
        {
            text: 'it will be shortened if its to long',
            html: '<div style="background-color: #fff; color: #000">this is renderd html</div>',
            image: {
                name: 'working.jpg',
                url: 'https://cdn.pixabay.com/photo/2015/07/17/22/42/startup-849805_960_720.jpg'
            },
            settings: {
                amazing: true,
                fancy: 'yes'
            },
            active: false
        }
    ];
   
    const Example = () => {
    
        const [data, setData] = useState(defaultData);
        
        const onAdd = () => {
            message.info('add button clicked!');
        };
        
        const onEdit = (row) => {
            message.info('edit button clicked!');
        };
        
        const onDelete = (rows) => {           
            return axios({
                method: 'post',
                url: '/path/delete',
                data: rows,
            }).then(() => {     
                setData(data.filter( rec => !rows.includes(rec)));                
            })
        };
        
        const imageConfig = {action: '/path/upload', type: {image: ['jpg', 'png']}};
        
        return (
               <FormGrid
                    dataSource={data}
                    pagination={true}
                    onAddRowClick={onAdd}
                    onEditRowClick={onEdit}
                    onDeleteRowClick={onDelete}
                    toolbar={true}
                >
                    <Column title={'Title'} dataIndex={'text'} fieldType={'string'} maxLength={30}/>
                    <Column title={'Content'} dataIndex={'html'} fieldType={'html'}/>
                    <Column title={'Image'} dataIndex={'image'} fieldType={'image'} config={imageConfig}/>
                    <Column title={'Settings'} dataIndex={'settings'} fieldType={'object'}/>
                    <Column title={'Active'} dataIndex={'active'} fieldType={'boolean'}/>
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
    <ComponentDisplay title={'Form Grid'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
