import React, { Fragment } from 'react';
import { Display2 } from '../../src';
import DataGrid from '../examples/Grid/DataGrid';

/**
 * @return {React.Component}
 */
export const Grid = () => {
    return (
        <Fragment>
            <Display2>Grid</Display2>
            <DataGrid />
        </Fragment>
    );
};
