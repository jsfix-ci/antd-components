import React from 'react';
import AntdButton from 'antd/lib/button/button';
import {GreenButton, RedButton, BlueButton, PurpleButton} from './styles/Styles'

export const Button = (props) => {

    const {onClick, size = 'default', icon = 'edit', color = 'red', type = 'default', text = '', restProps} = props;

    switch (color) {
        case 'green':
            return <GreenButton size={size} onClick={onClick} icon={icon} type={type} >{text}</GreenButton>;
        case 'red':
            return <RedButton size={size} onClick={onClick} icon={icon} type={type} >{text}</RedButton>;
        case 'blue':
            return <BlueButton size={size} onClick={onClick} icon={icon} type={type} >{text}</BlueButton>;
        case 'purple':
            return <PurpleButton size={size} onClick={onClick} icon={icon} type={type} >{text}</PurpleButton>;
        default:
            return <AntdButton size={size} onClick={onClick} icon={icon} type={type} {...restProps} >{text}</AntdButton>;
    }
};