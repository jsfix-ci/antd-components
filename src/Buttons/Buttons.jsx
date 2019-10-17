import React from 'react';
import AntdButton from 'antd/lib/button/button';

import './Buttons.scss';

export const Button = (props) => {
    const { color } = props;
    return (
        <AntdButton
            className={'btn btn-color-' + color}
            {...props}
        >
            {props.children}
        </AntdButton>
    );
};

export const AddButton = (props) => {
    const { icon = 'plus', color = 'default' } = props;
    return <Button icon={icon} color={color} {...props} >Add</Button>
};

export const EditButton = (props) => {
    const { color = 'blue', icon = 'edit' } = props;
    return <Button icon={icon} color={color}  {...props} >Edit</Button>
};

export const DeleteButton = (props) => {
    const { color = 'red', icon = 'delete' } = props;
    return <Button icon={icon} color={color} {...props}>Delete</Button>
};