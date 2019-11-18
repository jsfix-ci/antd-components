import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from './Navigation';
import {useTheme} from "..";

export const Flyout = (props) => {
    const {theme, ...restProps} = props;

    return (
        <Navigation
            theme={ useTheme().Theme || theme}
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
