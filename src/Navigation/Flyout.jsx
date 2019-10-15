import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from 'antd/lib/menu';
import { withRouter, matchPath } from 'react-router';
import {NavLink} from 'react-router-dom';

const StyledMenu = styled(Menu)`
    background: transparent !important;
    line-height: 64px !important;
    display: inline-block;
`;

export const Flyout = withRouter((props) => {
    const {routes, location} = props;
    let activeRoute = '';

    routes.forEach(route => {
        const match = matchPath(location.pathname, {
            path: route.path,
            exact: route.exact || false,
            strict: route.strict || false
        });

        if (match) {
            activeRoute = route.key;
        }
    });

    return (
        <StyledMenu
            mode="horizontal"
            selectedKeys={[activeRoute]}
        >
            {
                routes.map(({key, path, label, hideInMenu}) => {
                    if (hideInMenu) return null;

                    return (
                        <Menu.Item key={key}>
                            <NavLink to={path}>{label}</NavLink>
                        </Menu.Item>
                    );
                })
            }
        </StyledMenu>
    );
});

Flyout.defaultProps = {

};

Flyout.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object)
};
