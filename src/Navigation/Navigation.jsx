import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Menu } from 'antd';
import { withRouter } from 'react-router';
import { getActiveRoutes, getAllSubmenuRoutes } from './routing';
import { renderMenu } from './menu';
import { useTheme as theme } from '..';

export const Navigation = withRouter((props) => {

    const StyledMenu = styled(Menu)`
        background: ${theme().Header.backgroundColor};
        line-height: 64px !important;
        border: 0;
        display: inline-block;
    `;

    const {routes, openSubmenus, location, staticContext, history, match, ...restProps} = props;
    const activeRoutes = getActiveRoutes(routes, location);
    let defaultOpenKeys = [];

    switch (openSubmenus) {
        case 'selected':
            defaultOpenKeys = activeRoutes;
            break;
        case 'all':
            defaultOpenKeys = getAllSubmenuRoutes(routes);
            break;
    }

    return (
        <StyledMenu
            selectedKeys={activeRoutes}
            defaultOpenKeys={defaultOpenKeys}
            {...restProps}
        >
            {renderMenu(routes)}
        </StyledMenu>
    );
});

Navigation.defaultProps = {
    routes: []
};

Navigation.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
    openSubmenus: PropTypes.oneOf(['selected', 'all'])
};
