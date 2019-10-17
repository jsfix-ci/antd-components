import React from 'react';
import { routes } from './routes';
import { SideNavi } from '../src/Navigation/SideNavi';

export class Sider extends React.Component {

    render() {
        const config = {
            defaultOpenKeys: [
                'grid',
                'navigation'
            ]
        };

        return <SideNavi routes={routes} {...config} openSubmenus='all'/>
    }
}
