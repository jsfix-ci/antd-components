import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { renderMenu } from './menu';
import {Navigation} from "./Navigation";

export const Flyout = withRouter((props) => {
    const {routes} = props;

    return (
        <Navigation
            mode="horizontal"
            routes={routes}
        >
            {renderMenu(routes)}
        </Navigation>
    );
});

Flyout.defaultProps = {
    routes: [],
};

Flyout.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
};
