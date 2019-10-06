import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { CustomCol, Wrapper } from './components/utils';
import { routes } from './routes';
import { Sider } from './Menu';
import { Display1 } from '../src';

ReactDOM.render(
    <Router basename={'/antd-components'}>
        <Row>
            <Col><Display1 className={'text-center'}>Ant Design Components</Display1></Col>
        </Row>
        <Row>
            <Col
                xs={24}
                md={{span: 6}}
                lg={{span: 6}}>
                <Sider/>
            </Col>
            <CustomCol>
                <Wrapper className={'markdown-body'}>
                    <Switch>
                        {
                            routes.map(route => (
                                <Route {...route} />
                            ))
                        }
                    </Switch>
                </Wrapper>
            </CustomCol>
        </Row>
    </Router>,
    document.querySelector('#root')
);
