import React, { useState } from 'react';
import faker from 'faker';
import { message } from 'antd';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import { FormGrid, Column } from '../../../src';

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
        return {
            text: faker.random.word()
        };
    };

    const onEdit = (id) => {
        message.info('edit button clicked!');
    };

    const onDelete = (rows) => {
        setData(data.filter(rec => !rows.includes(rec.id)))
    };

    const onSave = (record) => {
        const index = data.findIndex((r) => r.id === record.id);

        if (index === -1) {
            data.push(record);
        } else {
            data[index] = record;
        }

        setData(data);
    };

    const imageConfig = {
        action: 'http://www.mocky.io/v2/5daf53d53200006d00d961e1',
        type: { image: ['jpeg', 'png'] }
    };

    return (
        <FormGrid
            dataSource={data}
            pagination={true}
            onAdd={onAdd}
            onEdit={onEdit}
            onDelete={onDelete}
            onSave={onSave}
        >
            <Column title={'Title'} dataIndex={'text'} fieldType={'string'} rules={[{ max: 30 }]} required
                    maxLength={30}/>
            <Column title={'Content'} dataIndex={'html'} fieldType={'html'} required/>
            <Column title={'Image'} dataIndex={'image'} fieldType={'image'} fieldProps={imageConfig}/>
            <Column title={'Settings'} dataIndex={'settings'} fieldType={'object'} required/>
            <Column title={'List'} dataIndex={'list'} fieldType={'list'}/>
            <Column title={'Active'} dataIndex={'active'} fieldType={'boolean'}/>
        </FormGrid>
    )
};

// Code example
// language=JS
const code = `
    import React from 'react';
    import { FormGrid, Column } from '@react-hangar/antd-components'
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
                setData(data.filter(rec => !rows.includes(rec)));
            })
        };

        const onSave = (row, actionType) => {
            if (actionType === 'create') {
                // create action
                console.log('create');
            } else {
                // update action
                console.log('update');
            }
        };

        const imageConfig = {
            action: 'http://www.mocky.io/v2/5daf53d53200006d00d961e1',
            type: { image: ['jpeg', 'png'] }
        };

        return (
            <FormGrid
                dataSource={data}
                pagination={true}
                onAddRowClick={onAdd}
                onEditRowClick={onEdit}
                onDeleteRowClick={onDelete}
                onSaveRowClick={onSave}
                toolbar={true}
            >
                <Column title={'Title'} dataIndex={'text'} fieldType={'string'} required maxLength={30}/>
                <Column title={'Content'} dataIndex={'html'} fieldType={'html'} required/>
                <Column title={'Image'} dataIndex={'image'} fieldType={'image'} fieldProps={imageConfig}/>
                <Column title={'Settings'} dataIndex={'settings'} fieldType={'object'} required/>
                <Column title={'List'} dataIndex={'list'} fieldType={'list'} required/>
                <Column title={'Active'} dataIndex={'active'} fieldType={'boolean'}/>
            </FormGrid>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    { property: 'idProperty', description: 'id field property of data source', type: 'string', default: 'id' },
    { property: 'onAddBtnClick', description: 'Function is called on add button click', type: 'function' },
    { property: 'onEditBtnClick', description: 'Function is called on edit button click', type: 'function' },
    { property: 'onDeleteBtnClick', description: 'Function is called on delete button click', type: 'function' },
    { property: 'dataSource', description: 'data source', type: 'object[]' }
];

export default () => (
    <ComponentDisplay title={'Form Grid'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
