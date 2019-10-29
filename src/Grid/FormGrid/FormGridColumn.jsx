import React from 'react';
import PropTypes from 'prop-types';
import { getDisplay } from '../renderer';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const FormGridColumn = (props) => {
    const {
        dataIndex,
        fieldType,
        children,
        maxLength,
        record,
        fieldProps,
        rules,
        ...restProps
    } = props;

    if (!dataIndex) {
        return (
            <td {...restProps}>
                {children}
            </td>
        );
    }

    return (
        <td {...restProps}>
            {getDisplay(fieldType, record[dataIndex], children, maxLength)}
        </td>
    );
};

FormGridColumn.defaultProps = {
    required: false,
    fieldType: 'string',
    rules: []

};

FormGridColumn.propTypes = {
    dataIndex: PropTypes.string,
    required: PropTypes.bool,
    fieldType: PropTypes.oneOf(['string', 'number', 'object', 'boolean', 'image', 'html', 'list']),
    rules: PropTypes.array
};

