import React, { Fragment } from 'react';
import { Display2 } from '../../src';
import Flyout from '../examples/Navigation/Flyout';
import SideNavi from '../examples/Navigation/SideNavi';

/**
 * @return {React.Component}
 */
export const FlyoutNavigationComponent = () => {
    return (
        <Fragment>
            <Display2>Navigation / Flyout</Display2>
            <Flyout/>
        </Fragment>
    );
};

/**
 * @return {React.Component}
 */
export const SideNavigationComponent = () => {
    return (
        <Fragment>
            <Display2>Navigation / Side Navi</Display2>
            <SideNavi/>
        </Fragment>
    );
};
