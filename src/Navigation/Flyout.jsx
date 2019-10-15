import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Menu } from 'antd';
import { withRouter } from 'react-router';
import { getActiveRoutes } from './routing';
import { renderMenu } from './menu';

const StyledMenu = styled(Menu)`
    background: transparent !important;
    line-height: 64px !important;
    display: inline-block;
`;

export const Flyout = withRouter((props) => {
    const {routes, openSelected, location} = props;

    const activeRoutes = getActiveRoutes(routes, location);

    return (
        <StyledMenu
            mode="horizontal"
            selectedKeys={activeRoutes}
            defaultOpenKeys={openSelected ? activeRoutes : []}
        >
            {renderMenu(routes)}
        </StyledMenu>
    );
});

Flyout.defaultProps = {
    routes: [],
    openSelected: false
};

Flyout.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
    openSelected: PropTypes.bool
};
