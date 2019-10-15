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
    const {routes, location} = props;

    return (
        <StyledMenu
            mode="horizontal"
            selectedKeys={getActiveRoutes(routes, location)}
        >
            {renderMenu(routes)}
        </StyledMenu>
    );
});

Flyout.defaultProps = {
    routes: []
};

Flyout.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object)
};
