import React from 'react';
import PropTypes from 'prop-types';

export const Logo = (props) => {
    const { text, ...restProps } = props;

    return (
        <div className={'logo'} {...restProps}>
            <a href="/" >
                <span className={'image'}> </span>
                <span className={'text'}>{text}</span>
            </a>
        </div>
    );
    
};

Logo.defaultProps = {
    text: 'Logo Text',
};

Logo.propTypes = {
    text: PropTypes.string
};

Logo.displayName = 'Logo';
