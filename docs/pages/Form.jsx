import React, { Fragment } from 'react';
import { Display3 } from '../../src';
import DynamicFormItem from '../examples/Form/DynamicFormItem';

/**
 * @return {React.Component}
 */
export const Form = () => {
    return (
        <Fragment>
            <Display3>Form</Display3>
            <DynamicFormItem/>
        </Fragment>
    );
};
