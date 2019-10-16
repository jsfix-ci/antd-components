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
            fieldType,
            children,
            maxLength,
            ...restProps
        } = props;

        const getDisplay = () => {



            if (fieldType === 'boolean') {
                const record = props.record[dataIndex];
                return <Switch disabled={true} checked={record}/>
            }

            if (fieldType === 'object') {
                const record = props.record[dataIndex];
                const content = (
                    <pre className="language-bash">
                        {JSON.stringify(record, null, 2)}
                    </pre>
                );

                return (
                    <Popover content={content} title={dataIndex}>
                            <span style={{cursor: 'pointer', textDecoration: 'underline'}}>
                                object
                            </span>
                    </Popover> );
            }

            if (fieldType === 'html') {
                const record = props.record[dataIndex];
                const content = (
                    <pre className="language-bash">
                        <div dangerouslySetInnerHTML={{ __html: record }} />
                    </pre>
                );

                return (
                    <Popover content={content} title={dataIndex}>
                            <span style={{cursor: 'pointer', textDecoration: 'underline'}}>
                                html
                            </span>
                    </Popover> );
            }

            if (fieldType === 'image') {
                const record = props.record[dataIndex];
                return (
                    <Popover content={<img height={150} src={record.url} />} title={record.name}>
                        <span style={{cursor: 'pointer'}}>
                            <img height={40} src={record.url} />
                        </span>
                    </Popover>
                );
            }

            if (fieldType === 'string') {
                const record = props.record[dataIndex];
                if (record.length > maxLength) {
                    return record.substring(0, maxLength) + '...';
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
    type: 'text'
};

Column.propTypes = {
    dataIndex: PropTypes.string,
    fieldType: PropTypes.oneOf(['string', 'object', 'switch', 'image', 'html']),
};

