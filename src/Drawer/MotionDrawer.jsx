import React from 'react';
import Drawer from "react-motion-drawer";
import PropTypes from "prop-types";
import {emptyFn} from "../helper";

export const MotionDrawer = (props) => {

    const {drawerStyle, position, open, onChange, width, children} = props;

    return (
        <Drawer
            className={'motion-drawer'}
            onChange={onChange}
            open={open}
            width={width}
            right={(position === 'right')}
            drawerStyle={drawerStyle}
        >
            {children}
        </Drawer>
    );
};

MotionDrawer.defaultProps = {
    width: 400,
    onChange: emptyFn,
    open: false,
    position: 'left',
    drawerStyle: {backgroundColor: '#fff'}
};

MotionDrawer.propTypes = {
    width: PropTypes.number,
    onChange: PropTypes.func,
    open: PropTypes.bool,
    position: PropTypes.string,
    drawerStyle: PropTypes.object
};
