import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { CustomCol, Wrapper } from './utils';
import {
    Display1,
} from '../src';

import DynamicFormItemExample from './examples/DynamicFormItem';

ReactDOM.render(
    <Wrapper>
        <Row>
            <Col><Display1>Ant Design Components</Display1></Col>
            <CustomCol><DynamicFormItemExample /></CustomCol>
        </Row>
    </Wrapper>,
    document.querySelector('#root')
);
