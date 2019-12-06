import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Navigation } from 'Navigation/Navigation';
import { ThemeContext } from 'Themes';

export const Flyout = (props) => {
    const { ...restProps } = props;

    const { theme } = useContext(ThemeContext);

    return (
        <Navigation
            theme={theme}
            className={'hangar-flyout'}
            mode="horizontal"
            {...restProps}
        />
    );
};

Flyout.defaultProps = {};

Flyout.propTypes = {
    openSubmenus: PropTypes.oneOf(['selected', 'all']),
    routes: PropTypes.arrayOf(PropTypes.object)
};

Flyout.displayName = 'Flyout';
