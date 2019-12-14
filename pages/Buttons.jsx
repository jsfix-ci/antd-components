import React, { Fragment } from 'react';
import { Display2 } from '../../src';
import ButtonsTypes from '../examples/Buttons/Types';
import ButtonsColors from '../examples/Buttons/Colors';

/**
 * @return {React.Component}
 */
export const Buttons = () => {
    return (
        <Fragment>
            <Display2>Buttons</Display2>
            <ButtonsTypes />
            <ButtonsColors />
        </Fragment>
    );
};
