import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '..';

export const Logo = (props) => {
    const { children, image, ...restProps } = props;

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme} logo`} {...restProps}>
            <a href="/">
                {
                    image ? <div className={'image'}><img src={image}/></div> : null
                }
                <div className={'text'}>{children}</div>
            </a>
        </div>
    );
};

Logo.defaultProps = {};

Logo.propTypes = {
    children: PropTypes.string,
    image: PropTypes.string
};

Logo.displayName = 'Logo';
