import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'antd/lib/switch';
import Popover from "antd/lib/popover";

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const Column = (props) => {
    const renderCell = () => {

        const {
            dataIndex,
            inputType,
            children,
            ...restProps
        } = props;

        const getDisplay = () => {
            if (inputType === 'boolean') {
                return <Switch disabled={true} checked={props.record[dataIndex]}/>
            }

            if (inputType === 'object') {
                const string = JSON.stringify(props.record[dataIndex]);
                if (string.length > 5) {
                    const content =
                        <pre className="language-bash">
                            {JSON.stringify(props.record[dataIndex], null, 2)}
                        </pre>;

                    return (
                        <Popover content={content} title={dataIndex}>
                            <span style={{cursor: 'pointer', textDecoration: 'underline'}}>
                                object
                            </span>
                        </Popover> );
                } else {
                    return JSON.stringify(props.record[dataIndex])
                }
            }

            return children;
        };

        return (
            <td {...restProps}>
                {getDisplay()}
            </td>
        );
    };

    return (
        renderCell()
    );
};

Column.defaultProps = {
    inputType: 'text'
};

Column.propTypes = {
    dataIndex: PropTypes.string,
    inputType: PropTypes.oneOf(['string', 'object', 'switch']),
};

