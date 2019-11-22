import React from 'react';
import Drawer from 'react-motion-drawer';
import PropTypes from 'prop-types';
import {emptyFn} from '../helper';

export const MotionDrawer = (props) => {

    const { position, children, ...restProps} = props;

    return (
        <Drawer
            {...restProps}
            className={'motion-drawer'}
            right={(position === 'right')}
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
