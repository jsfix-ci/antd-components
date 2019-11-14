import React, { Fragment } from 'react';
import { Display2 } from '../../src';
import MotionDrawer from "../examples/Drawer/MotionDrawer";

/**
 * @return {React.Component}
 */
export const MotionDrawerComponent = () => {
    return (
        <Fragment>
            <Display2>Drawer</Display2>
            <MotionDrawer/>
        </Fragment>
    );
};
