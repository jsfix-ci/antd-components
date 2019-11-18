import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from "..";

export const Logo = (props) => {
    const { text, src, ...restProps } = props;

    return (
        <div className={useTheme().Theme + ' logo'} {...restProps}>
            <a href="/" >
                <span className={'image'}> <img src={useTheme().Logo.src || src} /> </span>
                <span className={'text'}>{useTheme().Logo.text || text}</span>
            </a>
        </div>
    );
    
};

Logo.defaultProps = {
    src: '/images/logo.png',
    text: 'Logo Text',
};

Logo.propTypes = {
    src: PropTypes.string,
    text: PropTypes.string
};

Logo.displayName = 'Logo';
