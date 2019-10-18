import React, { Fragment } from 'react';
import { Display2 } from '../../src';
import DynamicFormItem from '../examples/Form/DynamicFormItem';

/**
 * @return {React.Component}
 */
export const Form = () => {
    return (
        <Fragment>
            <Display2>Form</Display2>
            <DynamicFormItem/>
        </Fragment>
    );
};
