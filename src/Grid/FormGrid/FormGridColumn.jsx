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
        ...restProps
    } = props;


    if (!dataIndex) {
        return (
            <td>
                {children}
            </td>
        );
    }

    return (
        <td {...restProps}>
            {getDisplay(fieldType, record[dataIndex], dataIndex, children, maxLength)}
        </td>
    );
};

FormGridColumn.defaultProps = {
    type: 'text'
};

FormGridColumn.propTypes = {
    dataIndex: PropTypes.string,
    fieldType: PropTypes.oneOf(['string', 'object', 'boolean', 'image', 'html', 'list']),
};

