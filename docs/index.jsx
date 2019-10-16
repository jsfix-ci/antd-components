import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { CustomCol, Wrapper } from './components/utils';
import { routes } from './routes';
import { Sider } from './Menu';
import { Display2 } from '../src';

export const renderRoutes = (routesArr) => (
    routesArr.map(route => {
        const {submenu} = route;

        if (submenu) {
            return renderRoutes(submenu);
        }

        return <Route {...route} />;
    })
);

ReactDOM.render(
    <Router>
        <Row>
            <Col><Display2 className={'text-center'}>Ant Design Components</Display2></Col>
        </Row>
        <Row>
            <Col
                xs={24}
                md={5}>
                <Sider/>
            </Col>
            <CustomCol>
                <Wrapper className={'markdown-body'}>
                    <Switch>
                        {renderRoutes(routes)}
                    </Switch>
                </Wrapper>
            </CustomCol>
        </Row>
    </Router>,
    document.querySelector('#root')
);
