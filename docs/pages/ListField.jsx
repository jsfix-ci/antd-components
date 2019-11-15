import React from 'react';
import { Display2 } from '../../src';
import ListField from '../examples/Form/ListField';
import { Col, Row } from "antd";

/**
 * @return {React.Component}
 */
export const ListFieldComponent = () => {
    return (
        <Row>
            <Col xs={24} md={24}>
                <Display2>ListField</Display2>
                <ListField />
            </Col>
        </Row>
    );
};
