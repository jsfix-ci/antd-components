import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { getDisplay, getInput } from './renderer';
import { EditableContext } from './BaseGrid';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const Column = (props) => {

    const {
        dataIndex,
        fieldType,
        maxLength,
        record,
        fieldProps,
        rules,
        editable,
        required,
        isEditing,
        children,
        ...restProps
    } = props;

    if (!dataIndex) {
        return (
            <td {...restProps}>{children}</td>
        );
    }

    const form = useContext(EditableContext);
    const value = record[dataIndex];

    if (isEditing && editable) {
        return (
            <td {...restProps} valign={'top'}>
                {
                    getInput({
                        fieldType,
                        dataIndex,
                        form,
                        required,
                        rules,
                        fieldProps,
                        initialValue: value,
                        style: { margin: 0 }
                    })
                }
            </td>
        );
    }

    return (
        <td {...restProps}>
            {getDisplay(fieldType, value, children, maxLength)}
        </td>
    );
};

Column.defaultProps = {
    required: false,
    editable: true,
    fieldType: 'string',
    rules: []
};

Column.propTypes = {
    dataIndex: PropTypes.string,
    required: PropTypes.bool,
    isEditing: PropTypes.bool,
    editable: PropTypes.bool,
    fieldType: PropTypes.oneOf(['string', 'number', 'object', 'boolean', 'image', 'html', 'list']),
    rules: PropTypes.array
};

