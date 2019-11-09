import React, { useState } from 'react';
import { HashRouter as Router, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Row, Col, Select } from 'antd';
import { Wrapper } from './components/utils';
import { routes } from './routes';
import { Menu } from './Menu';
import { DEFAULT_LOCALE, LocaleProvider, Flyout } from '../src';
import { renderRoutes } from '../src/Navigation/routing';
import { Header } from "../src/Header/Header";
import { Logo } from "../src/Logo/Logo";
import { Container } from "../src/Template";

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
        <Container type={'4x20'} align={'top'}>
            <div>V.1.0.0</div>
            <Select size={'small'} defaultValue={locale} onChange={onLocaleChange}>
                <Select.Option value="en_US">English</Select.Option>
                <Select.Option value="de_DE">Deutsch</Select.Option>
                <Select.Option value="sr_RS">Srpski</Select.Option>
            </Select>
        </Container>
    );

    return (
        <Router>
            <LocaleProvider locale={locale} setLocale={setLocale}>

                <Container>
                    <Header theme={'light'}>
                        <Container type={'4x16x4'}>
                            <Logo text={'React Antd Hangar'} textColor={'#1b1b1b'} textFontSize={'20px'}/>
                            <Flyout routes={headerRoutes} openSubmenus='selected'/>
                            {Extra}
                        </Container>
                    </Header>
                </Container>

                <Container type={'4x20'} align={'top'}>
                    <Menu />
                    <Wrapper className={'markdown-body'}>
                        <Switch>
                            {renderRoutes(routes)}
                        </Switch>
                    </Wrapper>
                </Container>

            </LocaleProvider>
        </Router>
    );
};
