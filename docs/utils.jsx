import React from 'react';
import './prism';
import './prism.css';
import styled from 'styled-components';
import { Col } from 'antd';
import { PrismCode } from 'react-prism';

export * from './PropertyTable';

export const Wrapper = styled.div`
    margin: 0 15px;
`;

export const CustomCol = (props) => (
    <Col
        xs={24}
        md={{ span: 18, offset: 3 }}
        lg={{ span: 12, offset: 6 }}
        xl={{ span: 8, offset: 8 }}
        {...props}
    />
);

export const Code = (props) => (
    <PrismCode component="pre" className="language-jsx" {...props} />
);

