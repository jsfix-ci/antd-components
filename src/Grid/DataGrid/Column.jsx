import React from 'react';
import PropTypes from 'prop-types';
import { EditableContext } from './DataGrid';
import { getDisplay, getInput } from '../renderer';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const Column = (props) => {
    const renderCell = (form) => {

        const {
            editable,
            editing,
            dataIndex,
            title,
            fieldType,
            fieldProps,
            record,
            index,
            required,
            rules,
            maxLength,
            children,
            ...restProps
        } = props;

        if (editable && editing) {
            return (
                <td {...restProps} valign={'top'}>
                    {getInput({
                        fieldType,
                        dataIndex,
                        form,
                        required,
                        rules,
                        fieldProps,
                        initialValue: record[dataIndex],
                        style: { margin: 0 }
                    })}
                </td>
            );
        }

        if (!dataIndex) {
            return (
                <td {...restProps} valign={'top'}>
                    {children}
                </td>
            );
        }

        return (
            <td {...restProps} valign={'top'}>
                {getDisplay(fieldType, record[dataIndex], children, maxLength)}
            </td>
        );
    };

    return (
        <EditableContext.Consumer>{renderCell}</EditableContext.Consumer>
    );
};

Column.defaultProps = {
    editable: true,
    required: false,
    fieldType: 'string',
    rules: []
};

Column.propTypes = {
    title: PropTypes.string,
    dataIndex: PropTypes.string,
    required: PropTypes.bool,
    editable: PropTypes.bool,
    fieldType: PropTypes.oneOf(['string', 'number', 'object', 'boolean', 'image', 'html', 'list']),
};
