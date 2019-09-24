import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './prism';
import './prism.css';
import styled from 'styled-components';
import { PrismCode } from 'react-prism';
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
        <DynamicFormItem form={props.form} addText='Add new field'/>
    </Form>
);

const Form1 = Form.create({ name: 'example-form' })(ExampleForm);

ReactDOM.render(
    <Wrapper>
        <Row>
            <Col><Display1>Ant Design Components</Display1></Col>
            <CustomCol><Form1 /></CustomCol>
            <CustomCol>
                <PrismCode component="pre" className="language-jsx">
{`import React from 'react';
import {DynamicFormItem} from '@react-hangar/antd-components';

const Example = (props) => {
    return (
        <DynamicFormItem
            form={props.form}
            addText='Add new field'
        />
    );
};

export default Example;
`}
                </PrismCode>
                <PrismCode component="pre" className="language-jsx">
{`DynamicFormItem.defaultProps = {
    addText: 'Add field',
    keyFieldName: 'keys',
    valueFieldName: 'values'
};

DynamicFormItem.propTypes = {
    form: PropTypes.object.isRequired,
    addText: PropTypes.string,
    keyFieldName: PropTypes.string,
    valueFieldName: PropTypes.string
};
`}
                </PrismCode>
            </CustomCol>
        </Row>
    </Wrapper>,
    document.querySelector('#root')
);
