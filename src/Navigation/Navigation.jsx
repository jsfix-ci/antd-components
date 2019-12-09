import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { withRouter } from 'react-router';
import { getActiveRoutes, getAllSubmenuRoutes } from '@root/Navigation/routing';
import { renderMenu } from '@root/Navigation/menu';

export const Navigation = withRouter((props) => {
    const { children, routes, openSubmenus, extra, location, staticContext, history, match, ...restProps } = props;
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

    const renderExtra = () => {
        if (!children) return null;

        return React.Children.map(children, child => {
            return (
                <Menu.Item key={child.key}>
                    {React.cloneElement(child, { style: { width: '90%' } })}
                </Menu.Item>
            );
        });
    };

    return (
        <Menu
            selectedKeys={activeRoutes}
            defaultOpenKeys={defaultOpenKeys}
            {...restProps}
        >
            {renderExtra(extra)}
            {renderMenu(routes)}
        </Menu>
    );
});

Navigation.defaultProps = {
    routes: []
};

Navigation.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    openSubmenus: PropTypes.oneOf(['selected', 'all']),
    routes: PropTypes.arrayOf(PropTypes.object)
};
