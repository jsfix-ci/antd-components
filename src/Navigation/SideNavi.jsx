import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from './Navigation';

export const SideNavi = (props) => {
    const {...restProps} = props;

    return (
        <Navigation
            mode="inline"
            {...restProps}
        />
    );
};

SideNavi.defaultProps = {};

SideNavi.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
    openSubmenus: PropTypes.oneOf(['selected', 'all'])
};

