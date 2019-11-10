import React from 'react';
import Drawer from "react-motion-drawer";
import {useTheme as theme} from "../Themes";
import PropTypes from "prop-types";
import {emptyFn} from "../helper";

export const Offcanvas = (props) => {

    const { collapsed, onChange, children, ...restProps} = props;

    const drawerStyle = {
        backgroundColor: theme().Offcanvas.backgroundColor,
        color: theme().Header.color,
        boxShadow: "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px",
    };

    return (
        <Drawer
            {...restProps}
            drawerStyle={drawerStyle}
            width={'80%'}
            className="show-mobile-hide-desktop"
            open={collapsed}
            onChange={onChange}
        >
            {children}
        </Drawer>
    );
};

Offcanvas.defaultProps = {
    width: '80%',
    onChange: emptyFn,
    collapsed: false
};

Offcanvas.propTypes = {
    width: PropTypes.string,
    onChange: PropTypes.func,
    collapsed: PropTypes.bool
};
