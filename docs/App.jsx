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
import {Logo} from "../src/Logo/Logo";

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
                            logo={<Logo text={'HANGAR'} textColor={'#1b1b1b'} textFontSize={'20px'} />}
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
