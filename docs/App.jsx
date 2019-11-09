import React, {useContext, useState} from 'react';
import {HashRouter as Router, Switch} from 'react-router-dom';
import 'antd/dist/antd.css';
import {Row, Col, Select} from 'antd';
import {Wrapper} from './components/utils';
import {routes} from './routes';
import {Menu} from './Menu';
import {DEFAULT_LOCALE, LocaleProvider, Flyout, getGridTemplate, LocaleContext} from '../src';
import {renderRoutes} from '../src/Navigation/routing';
import {Header} from "../src/Header/Header";
import {Logo} from "../src/Logo/Logo";

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const App = () => {
    const [locale, setLocale] = useState(DEFAULT_LOCALE);

    const onLocaleChange = (value) => {
        setLocale(value);
    };

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

    let extra = (
        <Row style={{margin: '0 15px'}}>
            <Col xl={12}>
                V.1.0.0
            </Col>
            <Col xl={12}>
                <Select size={'small'} defaultValue={locale} onChange={onLocaleChange}>
                    <Select.Option value="en_US">English</Select.Option>
                    <Select.Option value="de_DE">Deutsch</Select.Option>
                    <Select.Option value="sr_RS">Srpski</Select.Option>
                </Select>
            </Col>
        </Row>
    );

    return (
        <Router>
            <LocaleProvider locale={locale} setLocale={setLocale}>
                <Row>
                    <Col>
                        <Header
                            theme={'light'}
                            offcanvas={<div> offcanvas </div>}
                            logo={<Logo text={'React Antd Hangar'} textColor={'#1b1b1b'} textFontSize={'20px'}/>}
                            navigation={<Flyout routes={headerRoutes} openSubmenus='selected'/>}
                            extra={extra}
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
