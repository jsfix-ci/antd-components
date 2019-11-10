import React, { useState } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Col, Icon, Select } from 'antd';
import { Wrapper } from './components/utils';
import { routes } from './routes';
import { Menu } from './Menu';
import {
    DEFAULT_LOCALE,
    LocaleProvider,
    DEFAULT_THEME,
    ThemeProvider,
    Flyout,
    Offcanvas,
    useTheme
} from '../src';
import { renderRoutes } from '../src/Navigation/routing';
import { Header } from "../src/Header/Header";
import { Logo } from "../src/Logo/Logo";

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const App = () => {
    const [locale, setLocale] = useState(DEFAULT_LOCALE);
    const [theme, setTheme] = useState(DEFAULT_THEME);
    const [collapsed, setCollapsed] = useState(false);

    const onLocaleChange = (value) => {
        setLocale(value);
    };

    const onThemeChange = (value) => {
        setTheme(value);
    };

    const onOffcanvasBtnClick = () => {
        setCollapsed(true);
    };

    const onOffcanvasChange = (e) => {
        setCollapsed(e);
    };

    const headerRoutes = [
        {
            key: 'home',
            label: 'Home',
            icon: 'home',
            path: '/',
            exact: true
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

    let Extra = (
        <div style={{textAlign: 'right', paddingRight: 5}}>
            <Select size={'small'} defaultValue={'1.0.0'} >
                <Select.Option value="1.0.0">V.1.0.0</Select.Option>
            </Select>
            <Select style={{padding: 5}} size={'small'} defaultValue={theme} onChange={onThemeChange}>
                <Select.Option value="light">Light</Select.Option>
                <Select.Option value="dark">Dark</Select.Option>
            </Select>
            <Select size={'small'} defaultValue={locale} onChange={onLocaleChange}>
                <Select.Option value="en_US">English</Select.Option>
                <Select.Option value="de_DE">Deutsch</Select.Option>
                <Select.Option value="sr_RS">Srpski</Select.Option>
            </Select>
        </div>
    );

    return (
        <Router>
            <ThemeProvider theme={theme} setTheme={setTheme}>
                <LocaleProvider locale={locale} setLocale={setLocale}>

                    <Offcanvas width={'80%'} collapsed={collapsed} onChange={onOffcanvasChange}>
                        <Menu />
                    </Offcanvas>

                    <Row>
                        <Header>
                            <Row>
                                <Col xs={2} md={0} xl={0} xxl={0}>
                                    <Icon
                                        className="show-mobile-hide-desktop"
                                        type='menu'
                                        style={{
                                            color: useTheme().Offcanvas.color,
                                            paddingLeft: 10,
                                            fontSize: '24px',
                                            lineHeight: '66px'
                                        }}
                                        onClick={onOffcanvasBtnClick}
                                    />
                                </Col>

                                <Col xs={22} md={6} xl={5} xxl={4}>
                                    <Logo text={'React Hangar'} textColor={'#1b1b1b'} textFontSize={'20px'}/>
                                </Col>

                                <Col xs={0} md={10} xl={14} xxl={15}>
                                    <Flyout routes={headerRoutes} openSubmenus='selected'/>
                                </Col>

                                <Col xs={0} md={8} xl={5} xxl={5}>
                                    {Extra}
                                </Col>
                            </Row>
                        </Header>
                    </Row>

                    <Row>
                        <Col xs={0} md={6} xl={5} xxl={4}>
                            <Menu />
                        </Col>
                        <Col xs={24} md={18} xl={19} xxl={20}>
                            <Wrapper className={'markdown-body'}>
                                <Switch>
                                    {renderRoutes(routes)}
                                </Switch>
                            </Wrapper>
                        </Col>
                    </Row>

                </LocaleProvider>
            </ThemeProvider>
        </Router>
    );
};
