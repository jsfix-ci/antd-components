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
        children,
        dataIndex,
        editable,
        fieldProps,
        fieldType,
        isEditing,
        maxLength,
        record,
        required,
        rules,
        ...restProps
    } = props;

    const form = useContext(EditableContext);

    if (!dataIndex) {
        return (
            <td {...restProps}>{children}</td>
        );
    }

    const value = record[dataIndex];

    if (isEditing && editable) {
        return (
            <td {...restProps} valign={'top'}>
                {
                    getInput({
                        dataIndex,
                        fieldProps,
                        fieldType,
                        form,
                        initialValue: value,
                        required,
                        rules,
                        style: { margin: 0 }
                    })
                }
            </td>
        );
    }

    return (
        <td {...restProps}>
            {getDisplay({ children, fieldType, maxLength, value })}
        </td>
    );
};

Column.defaultProps = {
    editable: true,
    fieldType: 'string',
    required: false,
    rules: []
};

Column.propTypes = {
    dataIndex: PropTypes.string,
    editable: PropTypes.bool,
    fieldProps: PropTypes.object,
    fieldType: PropTypes.oneOf(['string', 'number', 'object', 'boolean', 'image', 'html', 'list']),
    isEditing: PropTypes.bool,
    maxLength: PropTypes.number,
    record: PropTypes.object,
    required: PropTypes.bool,
    rules: PropTypes.array
};

