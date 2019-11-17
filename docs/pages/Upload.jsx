import React from 'react';
import { Display2 } from '../../src';
import Upload from '../examples/Form/Upload';
import { Col, Row } from "antd";

/**
 * @return {React.Component}
 */
export const UploadComponent = () => {
    return (
        <Row>
            <Col xs={24} md={24}>
                <Display2>Upload</Display2>
                <Upload />
            </Col>
        </Row>
    );
};
