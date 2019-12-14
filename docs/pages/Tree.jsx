import React from 'react';
import { Display2 } from '../../src';
import Tree from '../examples/Tree/Tree';
import { Col, Row } from 'antd';

/**
 * @return {React.Component}
 */
export const TreeComponent = () => {
    return (
        <Row>
            <Col xs={24} md={24}>
                <Display2>Tree</Display2>
                <Tree />
            </Col>
        </Row>
    );
};
