import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { renderMenu } from './menu';
import {Navigation} from "./Navigation";

export const SideNavi = withRouter((props) => {
    const {routes} = props;

    return (
        <Navigation
            mode="inline"
            routes={routes}
        >
            {renderMenu(routes)}
        </Navigation>
    );
});

SideNavi.defaultProps = {
    routes: [],
};

SideNavi.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
};

