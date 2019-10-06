import React from 'react';
import '../dist/prism';
import '../dist/prism.css';
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
        md={{ span: 18 }}
        lg={{ span: 12}}
        {...props}
    />
);

export const Code = (props) => (
    <PrismCode component="pre" className="language-jsx" {...props} />
);

