import React from 'react';
import { routes } from './routes';
import { Side } from '../src/Navigation/Side';

export class Sider extends React.Component {

    render() {
        const config = {
            defaultOpenKeys: [
                'grid',
                'navigation'
            ]
        };

        return <Side routes={routes} {...config} openSelected/>
    }
}
