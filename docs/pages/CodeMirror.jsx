import React from 'react';
import { Display2 } from '../../src';
import CodeMirror from '../examples/Form/CodeMirror';
import { Col, Row } from "antd";

/**
 * @return {React.Component}
 */
export const CodeMirrorComponent = () => {
    return (
        <Row>
            <Col xs={24} md={24}>
                <Display2>Code Mirror</Display2>
                <CodeMirror />
            </Col>
        </Row>
    );
};
