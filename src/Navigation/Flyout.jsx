import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Navigation } from './Navigation';

export const Flyout = withRouter((props) => {
    const {...restProps} = props;

    return (
        <Navigation
            mode="horizontal"
            {...restProps}
        />
    );
});

Flyout.defaultProps = {};

Flyout.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
    openSubmenus: PropTypes.oneOf(['selected', 'all'])
};
