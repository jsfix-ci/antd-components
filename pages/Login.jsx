import React from 'react';
import { Display2 } from '../../src';
import Login from '../examples/Form/Login';
import { Col, Row } from "antd";

/**
 * @return {React.Component}
 */
export const LoginComponent = () => {
    return (
        <Row>
            <Col xs={24} md={20}>
                <Display2>Login</Display2>
                <Login />
            </Col>
        </Row>
    );
};
