import React from 'react';
import { NavLink } from 'react-router-dom'
import { Menu } from 'antd';
import { routes } from './routes';

export class Sider extends React.Component {
    render() {
        return (
            <Menu
                defaultSelectedKeys={['1']}
                mode="inline"
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
            </Menu>
        );
    }
}
