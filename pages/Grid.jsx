import React, { Fragment } from 'react';
import { Display2 } from '../../src';
import DataGrid from '../examples/Grid/DataGrid';
import FormGrid from '../examples/Grid/FormGrid';

/**
 * @return {React.Component}
 */
export const DataGridComponent = () => {
    return (
        <Fragment>
            <Display2>Grid / Data Grid</Display2>
            <DataGrid />
        </Fragment>
    );
};

/**
 * @return {React.Component}
 */
export const FormGridComponent = () => {
    return (
        <Fragment>
            <Display2>Grid / Form Grid</Display2>
            <FormGrid />
        </Fragment>
    );
};
