import React from 'react';
import AntdButton from 'antd/lib/button/button';
import invert from 'invert-color';
import styled from 'styled-components';
import './Buttons.scss';

export const Button = (props) => {
    const { color = 'default', ...restProps } = props;

    //toDo validate hex color code
    if (color.indexOf('#') !== -1) {

        const StyledButton = styled(AntdButton)`
                background-color: ${color};
                color: ${invert(color, true)};
                margin: 3px;
                &:hover {
                    background-color: ${color};
                    color: ${invert(color, true)};
                    filter: brightness(90%);
                    border: 1px solid ${color}
                }
                &:focus {
                    background-color: ${color};
                    color: ${invert(color, true)};
                    filter: brightness(90%);
                    border: 1px solid ${color}
                }
        `;

        return (
            <StyledButton
                {...restProps}
            />
        );

    } else {
        return (
            <AntdButton
                className={'hangar-btn hangar-btn-color-' + color}
                {...restProps}
            />
        );
    }
};

export const AddButton = (props) => {
    const { icon = 'plus', children = 'Add' } = props;
    return <Button icon={icon} {...props} >{children}</Button>
};

export const DeleteButton = (props) => {
    const { icon = 'delete', children = 'Delete' } = props;
    return <Button icon={icon} {...props}>{children}</Button>
};

export const EditButton = (props) => {
    const { icon = 'edit', children = 'Edit' } = props;
    return <Button icon={icon} {...props} >{children}</Button>
};

export const ReloadButton = (props) => {
    const { icon = 'reload', children = 'Reload' } = props;
    return <Button icon={icon} {...props}>{children}</Button>
};

export const SearchButton = (props) => {
    const { icon = 'search', children = 'Search' } = props;
    return <Button icon={icon} {...props}>{children}</Button>
};

export const SaveButton = (props) => {
    const { icon = 'save', children = 'Save' } = props;
    return <Button icon={icon} {...props}>{children}</Button>
};

export const CancelButton = (props) => {
    const { icon = 'close', children = 'Cancel' } = props;
    return <Button icon={icon} {...props}>{children}</Button>
};

export const CloseButton = (props) => {
    const { icon = 'close', children = 'Close' } = props;
    return <Button icon={icon} {...props}>{children}</Button>
};

export const UndoButton = (props) => {
    const { icon = 'rollback', children = 'Undo' } = props;
    return <Button icon={icon} {...props}>{children}</Button>
};

export const SettingsButton = (props) => {
    const { icon = 'setting', children = 'Settings' } = props;
    return <Button icon={icon} {...props}>{children}</Button>
};

export const BasketButton = (props) => {
    const { icon = 'shopping-cart', children = 'Add To Basket' } = props;
    return <Button icon={icon} {...props}>{children}</Button>
};