import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon, Menu } from 'antd';

const renderLabel = (label, icon) => {
    return (
        <Fragment>
            {icon ? <Icon type={icon}/> : null}{label}
        </Fragment>
    );
};

export const renderMenuItem = ({key, label, path, icon}) => (
    <Menu.Item key={key}>
        <NavLink to={path}>{renderLabel(label, icon)}</NavLink>
    </Menu.Item>
);

export const renderMenu = routes => (
    routes.map(route => {
        const {key, label, path, icon, hideInMenu, submenu, group} = route;

        if (hideInMenu) return null;

        if (group) {
            return (
                <Menu.ItemGroup key={key} title={label}>
                    {renderMenu(group)}
                </Menu.ItemGroup>
            )
        }

        if (submenu) {
            return (
                <Menu.SubMenu key={key} title={renderLabel(label, icon)}>
                    {renderMenu(submenu)}
                </Menu.SubMenu>
            )
        }

        return renderMenuItem({key, label, path, icon});
    })
);
