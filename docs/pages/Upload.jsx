import React, { Fragment } from 'react';
import { Display2 } from '../../src';
import ImageUploadComponent from "../examples/Upload/Upload";

/**
 * @return {React.Component}
 */
export const Upload = () => {
    return (
        <Fragment>
            <Display2>Buttons</Display2>
            <ImageUploadComponent />
        </Fragment>
    );
};
