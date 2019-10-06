import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Code, PropertyTable } from './utils';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const ComponentDisplay = ({title, code, properties, children}) => {
    return (
        <Fragment>
            <h3>{title}</h3>
            {children}
            <Code>
                {code}
            </Code>
            <PropertyTable dataSource={properties}/>
        </Fragment>
    );
};

ComponentDisplay.propTypes = {
    title: PropTypes.string,
    code: PropTypes.string,
    properties: PropTypes.arrayOf(PropTypes.object)
};
