import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import { Form, Row, Col } from 'antd';
import {
    DynamicFormItem
} from '../src';

const Wrapper = styled.div`
    margin: 0 15px;
`;

const Display1 = styled.h1`
    text-align: center;
    font-size: 6rem;
    font-weight: 300;
    line-height: 1.2;
`;

const CustomCol = (props) => (
    <Col
        xs={24}
        md={{ span: 18, offset: 3 }}
        lg={{ span: 12, offset: 6 }}
        xl={{ span: 8, offset: 8 }}
        {...props}
    />
);

const ExampleForm = (props) => (
    <Form>
        <DynamicFormItem form={props.form} />
    </Form>
);

const Form1 = Form.create({ name: 'example-form' })(ExampleForm);

ReactDOM.render(
    <Wrapper>
        <Row>
            <Col><Display1>Ant Design Components</Display1></Col>
            <CustomCol><Form1 /></CustomCol>
        </Row>
    </Wrapper>,
    document.querySelector('#root')
);
