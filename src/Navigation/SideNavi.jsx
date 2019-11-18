import React from 'react';
import PropTypes from 'prop-types';
import {Navigation} from './Navigation';
import {useTheme} from "../Themes/useTheme";

export const SideNavi = (props) => {
    const {theme, ...restProps} = props;
    return (
        <Navigation
            theme={ useTheme().Theme || theme}
            className={'hangar-side-navi'}
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

