import React, { useState } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Wrapper } from './components/utils';
import { routes } from './routes';
import { Menu } from './Menu';
import { DEFAULT_LOCALE, LocaleProvider, Flyout, getGridTemplate} from '../src';
import { renderRoutes } from '../src/Navigation/routing';
import {Header} from "../src/Header/Header";

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const App = () => {
    const [locale, setLocale] = useState(DEFAULT_LOCALE);

    const headerRoutes = [
        {
            key: 'home',
            label: 'Home',
            icon: 'home',
            path: '/',
        },
        {
            key: 'contact',
            label: 'Contact',
            icon: 'edit',
            path: '/Navigation/Contact/Home',
        },
        {
            key: 'Impressum',
            label: 'Impressum',
            icon: 'setting',
            path: '/Navigation/Impressum/Home',
        }
    ];

    let logo = (
        <div className="logo">
                <span>
                    <a href="/" >
                        <img src='data:image/png;base64,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' />
                       test
                    </a>
                </span>
        </div>
    );

    const template = {
        left: true,
        middle: true,
        right: false
    };

    let grid = getGridTemplate(template);

    return (
        <Router>
            <LocaleProvider locale={locale} setLocale={setLocale}>
                <Row>
                    <Col>
                        <Header
                            theme={'light'}
                            offcanvas={<div> offcanvas </div>}
                            logo={logo}
                            navigation={<Flyout routes={headerRoutes} openSubmenus='selected'/>}
                            extra={<div> extra </div>}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col {...grid.left}>
                        <Menu/>
                    </Col>
                    <Col {...grid.middle}>
                        <Wrapper className={'markdown-body'}>
                            <Switch>
                                {renderRoutes(routes)}
                            </Switch>
                        </Wrapper>
                    </Col>
                </Row>
            </LocaleProvider>
        </Router>
    );
};
