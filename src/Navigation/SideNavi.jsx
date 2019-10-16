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

export const SideNavi = withRouter((props) => {
    const {routes, location, defaultOpenKeys} = props;

    const activeRoutes = getActiveRoutes(routes, location);

    return (
        <StyledMenu
            mode="inline"
            selectedKeys={activeRoutes}
            defaultOpenKeys={defaultOpenKeys}
        >
            {renderMenu(routes)}
        </StyledMenu>
    );
});

SideNavi.defaultProps = {
    routes: [],
    defaultOpenKeys: []
};

SideNavi.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
    defaultOpenKeys: PropTypes.arrayOf(PropTypes.string)
};
