import React from 'react';
import styled from 'styled-components';
import { Table } from 'antd';

const StyledTable = styled(Table)`
    margin: 15px 0;
`;

const columns = [
    {
        title: 'Property',
        dataIndex: 'property',
        key: 'property',
        className: 'text-monospace'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        className: 'text-monospace'
    },
    {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        className: 'text-monospace'
    },
    {
        title: 'Default',
        dataIndex: 'default',
        key: 'default',
        className: 'text-monospace'
    },
];

export const PropertyTable = ({ dataSource }) => (
    <StyledTable
        dataSource={dataSource}
        columns={columns}
        rowClassName={'text-monospace'}
        pagination={false}
    />
);
