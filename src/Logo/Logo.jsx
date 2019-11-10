import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useTheme as theme } from '..';

export const Logo = (props) => {
    const { image, text, ...restProps } = props;
    let src = image || theme().Logo.src;

    const StyledLogo = styled('span')`                      
        background-color: ${theme().Logo.backgroundColor};
        a {
            color: ${theme().Logo.color};
            font-size: ${theme().Logo.fontSize};
            font-weight: ${theme().Logo.fontWeight};
        }                
        padding-left: 5px;
        cursor: pointer;
    `;

    return (
        <StyledLogo {...restProps}>
            <a href="/" >
                <img src={src} />  {text}
            </a>
        </StyledLogo>
    );
    
};

Logo.defaultProps = {
    text: 'Logo Text',
    textColor: '#000'
};

Logo.propTypes = {
    text: PropTypes.string,
    image: PropTypes.string
};

Logo.displayName = 'Logo';
