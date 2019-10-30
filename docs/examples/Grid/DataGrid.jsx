import React, { useState } from 'react';
import faker from 'faker';
import { ComponentDisplay } from '../../components/ComponentDisplay';
import { DataGrid, Column } from '../../../src';
import { generateFakeDataArray } from '../../components/utils';
import nanoid from 'nanoid';
import { message } from 'antd';

const generateFakeData = () => ({
    id: nanoid(10),
    name: faker.name.findName(),
    age: faker.random.number({ min: 10, max: 99 }),
    active: faker.random.boolean()
});

const defaultData = generateFakeDataArray(5, generateFakeData);

// Example implementation
const Example = () => {
    const [data, setData] = useState(defaultData);

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

    return (
        <DataGrid
            dataSource={data}
            pagination={false}
            onAdd={() => {
                return generateFakeData();
            }}
            onEdit={onEdit}
            onDelete={onDelete}
            onSave={onSave}
        >
            <Column title={'Name'} dataIndex={'name'} fieldType={'string'}/>
            <Column title={'Age'} dataIndex={'age'} fieldType={'number'}/>
            <Column title={'Active'} dataIndex={'active'} fieldType={'boolean'}/>
        </DataGrid>
    );
};

// Code example
// language=JS
const code = `
    import React from 'react';
    import { DataGrid } from '@react-hangar/antd-components';

    const data = [
        {
            id: 1,
            name: 'Linda Collins',
            age: '61',
            active: true
        },
        {
            id: 2,
            name: 'Gerald Armstrong',
            age: '37',
            active: false
        }
    ];

    const Example = () => {
        return (
            <DataGrid
                dataSource={data}
                pagination={false}
            >
                <Column title={'Name'} dataIndex={'name'} fieldType={'string'}/>
                <Column title={'Age'} dataIndex={'age'} inputType={'number'}/>
                <Column title={'Active'} dataIndex={'active'} inputType={'switch'}/>
            </DataGrid>
        );
    };

    export default Example;
`;

// Component props
const properties = [
    { property: 'idProperty', description: 'id field property of data source', type: 'string', default: 'id' },
    { property: 'onRecordCreate', description: 'Hook function to manipulate new records', type: 'function' },
    { property: 'onSave', description: 'Function is called on new record added or save', type: 'function' },
    { property: 'onDelete', description: 'Function is called on record delete', type: 'function' },
    { property: 'dataSource', description: 'data source', type: 'object[]' },
];

export default () => (
    <ComponentDisplay title={'DataGrid'} code={code} properties={properties}>
        <Example/>
    </ComponentDisplay>
);
