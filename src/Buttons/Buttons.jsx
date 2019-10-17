import React from 'react';
import AntdButton from 'antd/lib/button/button';

import './Buttons.scss';

export const Button = (props) => {
    const { color = 'default' } = props;
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
    const { icon = 'plus', children = 'Add'} = props;
    return <Button icon={icon} {...props} >{children}</Button>
};

export const EditButton = (props) => {
    const { color = 'blue', icon = 'edit', children = 'Edit' } = props;
    return <Button icon={icon} color={color} {...props} >{children}</Button>
};

export const DeleteButton = (props) => {
    const { color = 'red', icon = 'delete', children = 'Delete' } = props;
    return <Button icon={icon} color={color} {...props}>{children}</Button>
};

export const ReloadButton = (props) => {
    const { icon = 'reload', children = 'Reload' } = props;
    return <Button icon={icon} {...props}>{children}</Button>
};

export const SearchButton = (props) => {
    const { icon = 'search', children = 'Search' } = props;
    return <Button icon={icon} {...props}>{children}</Button>
};