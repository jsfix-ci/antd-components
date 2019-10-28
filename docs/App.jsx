import React, { useState } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { CustomCol, Wrapper } from './components/utils';
import { routes } from './routes';
import { Menu } from './Menu';
import { Display1, DEFAULT_LOCALE, LocaleProvider } from '../src';
import { renderRoutes } from '../src/Navigation/routing';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const App = () => {
    const [locale, setLocale] = useState(DEFAULT_LOCALE);

    return (
        <Router>
            <LocaleProvider locale={locale} setLocale={setLocale}>
                <Row>
                    <Col><Display1 className={'text-center'}>Ant Design Components</Display1></Col>
                </Row>
                <Row>
                    <Col
                        xs={24}
                        md={5}>
                        <Menu/>
                    </Col>
                    <CustomCol>
                        <Wrapper className={'markdown-body'}>
                            <Switch>
                                {renderRoutes(routes)}
                            </Switch>
                        </Wrapper>
                    </CustomCol>
                </Row>
            </LocaleProvider>
        </Router>
    );
};
