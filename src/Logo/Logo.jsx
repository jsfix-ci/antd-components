import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Logo = (props) => {
    const { image, text, textColor, textFontSize, ...restProps } = props;

    const isHexCode = (textColor) => (/^#([0-9A-F]{3}){1,2}$/i.test(textColor));

    console.log(text, ' isHexCode <------------------------------');

    const Text = styled('span')`               
        cursor: pointer;
        color: ${textColor};
        font-size: ${textFontSize};
        padding-left: 5px;
        font-weight: 500;
    `;

    return (
        <div className="logo">
                <span>
                    <a href="/" >
                        <img src={image} />  <Text>{text}</Text>
                    </a>
                </span>
        </div>
    );
    
};

Logo.defaultProps = {
    text: 'HANGAR',
    textFontSize: '20px',
    textColor: '#000',
    image: './logo.png',
};

Logo.propTypes = {
    text: PropTypes.string,
    textColor: PropTypes.string,
    image: PropTypes.string
};

Logo.displayName = 'Logo';

