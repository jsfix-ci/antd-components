import React from 'react';
import {Button} from "./Button";

export const AddButton = (props) => {
    const {onClick, color = 'green', size = 'small', icon = 'plus', text = 'Add', restProps} = props;
    return <Button size={size} onClick={onClick} icon={icon} color={color} {...restProps} text={text} />
};

export const EditButton = (props) => {
    const {onClick, color = 'blue', size = 'small', icon = 'edit', text = 'Edit', restProps} = props;
    return <Button size={size} onClick={onClick} icon={icon} color={color} {...restProps} text={text} />
};

export const DeleteButton = (props) => {
    const {onClick, color = 'red', size = 'small', icon = 'delete', text = 'Delete', restProps} = props;
    return <Button size={size} onClick={onClick} icon={icon} color={color} {...restProps} text={text} />
};