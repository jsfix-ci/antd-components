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
        className: 'hangar-text-monospace'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        className: 'hangar-text-monospace'
    },
    {
        title: 'Type',
        dataIndex: 'type',
        className: 'hangar-text-monospace'
    },
    {
        title: 'Default',
        dataIndex: 'default',
        className: 'hangar-text-monospace'
    }
];

export const PropertyTable = ({dataSource}) => (
    <StyledTable
        rowKey={'property'}
        dataSource={dataSource}
        columns={columns}
        rowClassName={'hangar-text-monospace'}
        pagination={false}
    />
);
