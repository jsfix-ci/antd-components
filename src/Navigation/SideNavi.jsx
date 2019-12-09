import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {Navigation} from '@root/Navigation/Navigation';
import { ThemeContext } from '@root/Themes';

export const SideNavi = (props) => {
    const {...restProps} = props;

    const { theme } = useContext(ThemeContext);

    return (
        <Navigation
            theme={theme}
            className={'hangar-side-navi'}
            mode="inline"
            {...restProps}
        />
    );
};

SideNavi.defaultProps = {};

SideNavi.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    openSubmenus: PropTypes.oneOf(['selected', 'all']),
    routes: PropTypes.arrayOf(PropTypes.object)
};

