import React from 'react';
import { Display2 } from '../../src';
import Editor from '../examples/Form/Editor';
import { Col, Row } from "antd";

/**
 * @return {React.Component}
 */
export const EditorComponent = () => {
    return (
        <Row>
            <Col xs={24} md={24}>
                <Display2>Editor</Display2>
                <Editor />
            </Col>
        </Row>
    );
};
