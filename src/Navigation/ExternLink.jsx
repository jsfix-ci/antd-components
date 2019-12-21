import React from 'react';
import PropTypes from 'prop-types';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const ExternLink = (props) => {
    const { to, children } = props;

    return (
        <a href={to} target='_blank' rel='noopener noreferrer'>{children}</a>
    );
};

ExternLink.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    to: PropTypes.string
};
