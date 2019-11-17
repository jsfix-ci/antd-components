import React from 'react';
import Drawer from "react-motion-drawer";
import PropTypes from "prop-types";
import {emptyFn} from "../helper";

export const MotionDrawer = (props) => {

    const {open, onChange, width, children} = props;

    return (
        <Drawer
            className={'motion-drawer'}
            onChange={onChange}
            open={open}
            width={width}
        >
            {children}
        </Drawer>
    );
};

MotionDrawer.defaultProps = {
    width: '80%',
    onChange: emptyFn,
    open: false
};

MotionDrawer.propTypes = {
    width: PropTypes.number,
    onChange: PropTypes.func,
    open: PropTypes.bool
};
