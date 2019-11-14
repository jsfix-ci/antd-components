import React from 'react';
import Drawer from "react-motion-drawer";
import {useTheme as theme} from "../Themes";
import PropTypes from "prop-types";
import {emptyFn} from "../helper";

export const MotionDrawer = (props) => {

    const {open, onChange, width, children} = props;

    const drawerStyle = {
        backgroundColor: theme().Offcanvas.backgroundColor,
        color: theme().Header.color,
        boxShadow: "rgba(0, 0, 0, 0.188235) 0px 10px 20px, rgba(0, 0, 0, 0.227451) 0px 6px 6px",
    };

    return (
        <Drawer
            onChange={onChange}
            open={open}
            drawerStyle={drawerStyle}
            width={width}
        >
            {children}
        </Drawer>
    );
};

MotionDrawer.defaultProps = {
    width: '80%',
    onChange: emptyFn,
    collapsed: false
};

MotionDrawer.propTypes = {
    onChange: PropTypes.func,
    collapsed: PropTypes.bool
};
