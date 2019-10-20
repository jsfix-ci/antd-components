import React, { Fragment } from 'react';
import { Display2 } from '../../src';
import UploadComponent from "../examples/Upload/Upload";

/**
 * @return {React.Component}
 */
export const Upload = () => {
    return (
        <Fragment>
            <Display2>Upload</Display2>
            <UploadComponent />
        </Fragment>
    );
};
