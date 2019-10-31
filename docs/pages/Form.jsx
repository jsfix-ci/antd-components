import React from 'react';
import { Display2 } from '../../src';
import Form from '../examples/Form/Form';
import { Col, Row } from "antd";

/**
 * @return {React.Component}
 */
export const FormComponent = () => {
    return (
        <Row>
            <Col xs={24} md={20}>
                <Display2>Form</Display2>
                <Form />
            </Col>
        </Row>
    );
};
