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

export const Navigation = withRouter((props) => {
    const {routes, defaultOpenKeys, location, mode} = props;

    const activeRoutes = getActiveRoutes(routes, location);

    return (
        <StyledMenu
            mode={mode}
            selectedKeys={activeRoutes}
            defaultOpenKeys={defaultOpenKeys}
        >
            {renderMenu(routes)}
        </StyledMenu>
    );
});

Navigation.defaultProps = {
    routes: [],
    openSelected: false
};

Navigation.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
    openSelected: PropTypes.bool
};
