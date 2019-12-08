import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { withRouter } from 'react-router';
import { getActiveRoutes, getAllSubmenuRoutes } from '@root/Navigation/routing';
import { renderMenu } from '@root/Navigation/menu';

export const Navigation = withRouter((props) => {

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
        <Menu
            selectedKeys={activeRoutes}
            defaultOpenKeys={defaultOpenKeys}
            {...restProps}
        >
            {renderMenu(routes)}
        </Menu>
    );
});

Navigation.defaultProps = {
    routes: []
};

Navigation.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
    openSubmenus: PropTypes.oneOf(['selected', 'all'])
};
