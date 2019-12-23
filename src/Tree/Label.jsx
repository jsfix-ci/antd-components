import React from 'react';
import PropTypes from 'prop-types';

/**
 * @return {React.Component}
 *
 * @constructor
 */
export const Label = (props) => {
    const { children, highlightedText } = props;

    const index = children.indexOf(highlightedText);
    const beforeStr = children.substr(0, index);
    const afterStr = children.substr(index + highlightedText.length);

    if (index > -1) {
        return (
            <span>
                {beforeStr}
                <span style={{ color: '#f50' }}>{highlightedText}</span>
                {afterStr}
            </span>
        );
    }

    return (<span>{children}</span>);
};

Label.defaultProps = {
    children: ''
};

Label.propTypes = {
    children: PropTypes.string,
    highlightedText: PropTypes.string
};
