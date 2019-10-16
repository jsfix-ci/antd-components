import React, { Fragment } from 'react';
import { Display3 } from '../../src';
import DataGrid from '../examples/Grid/DataGrid';
import FormGrid from '../examples/Grid/FormGrid';

/**
 * @return {React.Component}
 */
export const DataGridComponent = () => {
    return (
        <Fragment>
            <Display3>Data Grid</Display3>
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
            <Display3>Form Grid</Display3>
            <FormGrid />
        </Fragment>
    );
};