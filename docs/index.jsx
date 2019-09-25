import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles.css';
import { Row, Col } from 'antd';
import { CustomCol, Wrapper } from './utils';

import DynamicFormItemExample from './examples/DynamicFormItem';

ReactDOM.render(
    <Wrapper className={'markdown-body'}>
        <Row>
            <Col><h1 className={'text-center'}>Ant Design Components</h1></Col>
            <CustomCol><DynamicFormItemExample /></CustomCol>
        </Row>
    </Wrapper>,
    document.querySelector('#root')
);
