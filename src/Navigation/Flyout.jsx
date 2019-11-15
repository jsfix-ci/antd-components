import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from './Navigation';

export const Flyout = (props) => {
    const {...restProps} = props;
    return (
        <Navigation
            className={'hangar-flyout'}
            mode="horizontal"
            {...restProps}
        />
    );
};

Flyout.defaultProps = {};

Flyout.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
    openSubmenus: PropTypes.oneOf(['selected', 'all'])
};

Flyout.displayName = 'Flyout';
