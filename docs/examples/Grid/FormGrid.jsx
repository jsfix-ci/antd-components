import React, {useState} from 'react';
import {FormGrid, FormGridColumn} from '../../../src';
import {ComponentDisplay} from "../../components/ComponentDisplay";
import {message} from "antd";

const defaultData = [
    {
        id: 1,
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
        list: [
            'foo',
            'bar',
            'test'
        ],
        active: true
    },
    {
        id: 2,
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
        list: [
            'foo 2',
            'bar 2',
            'test 2'
        ],
        active: true
    },
    {
        id: 3,
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
        list: [
            'foo 3',
            'bar 3',
            'test 3'
        ],
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
        setData(data.filter( rec => !rows.includes(rec)))
    };

    const imageConfig = {
        action: 'http://www.mocky.io/v2/5daf53d53200006d00d961e1',
        type: {image: ['jpeg', 'png']},
        required: false
    };

    return (
        <FormGrid
            dataSource={data}
            pagination={true}
            onAddRowClick={onAdd}
            onEditRowClick={onEdit}
            onDeleteRowClick={onDelete}
            toolbar={true}
            locale={'en-EN'}
        >
            <FormGridColumn title={'Title'} dataIndex={'text'} fieldType={'string'} maxLength={30} config={{required: true}}/>
            <FormGridColumn title={'Content'} dataIndex={'html'} fieldType={'html'} config={{required: true}}/>
            <FormGridColumn title={'Image'} dataIndex={'image'} fieldType={'image'} config={imageConfig}/>
            <FormGridColumn title={'Settings'} dataIndex={'settings'} fieldType={'object'} config={{required: true}} />
            <FormGridColumn title={'List'} dataIndex={'list'} fieldType={'list'} config={{required: false}} />
            <FormGridColumn title={'Active'} dataIndex={'active'} fieldType={'boolean'} config={{required: true}} />
        </FormGrid>
    )
};

// Code example
// language=JS
const code = `
    import React from 'react';
    import {FormGrid, FormGridColumn} from '@react-hangar/antd-components'
    import axios from 'axios';
    
    const defaultData = [
        {
             id: 1,
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
            list: [
                'foo',
                'bar',
                'test'
            ],
            active: true
        },
        {
            id: 2,
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
            list: [
                'foo 2',
                'bar 2',
                'test 2'
            ],
            active: true
        },
        {
            id: 3,
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
            list: [
                'foo 3',
                'bar 3',
                'test 3'
            ],
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
        
       const imageConfig = {
            action: 'http://www.mocky.io/v2/5daf53d53200006d00d961e1',
            type: {image: ['jpeg', 'png']},
            required: false
        };
        
        return (
               <FormGrid
                    dataSource={data}
                    pagination={true}
                    onAddRowClick={onAdd}
                    onEditRowClick={onEdit}
                    onDeleteRowClick={onDelete}
                    selectedRowKeys={[]}
                    toolbar={true}                    
                    locale={'en-EN'}
                >
                    <FormGridColumn title={'Title'} dataIndex={'text'} fieldType={'string'} maxLength={30} config={{required: true}}/>
                    <FormGridColumn title={'Content'} dataIndex={'html'} fieldType={'html'} config={{required: true}}/>
                    <FormGridColumn title={'Image'} dataIndex={'image'} fieldType={'image'} config={imageConfig}/>
                    <FormGridColumn title={'Settings'} dataIndex={'settings'} fieldType={'object'} config={{required: true}} />
                    <FormGridColumn title={'List'} dataIndex={'list'} fieldType={'list'} config={{required: false}} />
                    <FormGridColumn title={'Active'} dataIndex={'active'} fieldType={'boolean'} config={{required: true}} />
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
    {property: 'locale', description: 'available locales: "en-EN", "de-DE", "sr-SP"', type: 'string', default: 'en-EN'}
];

export default () => (
    <ComponentDisplay title={'Form Grid'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
