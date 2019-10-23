import React from 'react';
import AntdButton from 'antd/lib/button/button';
import AntIcon from 'antd/lib/icon';
import invert from 'invert-color';
import styled from 'styled-components';
import './Buttons.scss';
import * as localeProvider from '../Locales';

export const Button = (props) => {
    const { color = 'default', ...restProps } = props;
    //toDo validate hex color code
    if (color.indexOf('#') !== -1) {

        const StyledButton = styled(AntdButton)`
                background-color: ${color};
                color: ${invert(color, true)};
                margin: 3px;
                &:hover, &:focus {
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

export const IconButton = styled(AntIcon)`
    &:hover {
      color: #3c3c3c;  
    }
    cursor: pointer;
    color: #727272;
    position: relative;
    top: 4px;
    font-size: 24px;
    transition: all 0.3s;
    margin-left: 8px;
`;

export const AddButton = ({ icon = 'plus', children = 'AddButton', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.addButton : children}</Button>;

export const DeleteButton = ({ icon = 'delete', children = 'Delete', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.deleteButton : children}</Button>;

export const EditButton = ({ icon = 'edit', children = 'Edit', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.editButton : children}</Button>;

export const ReloadButton = ({ icon = 'reload', children = 'Reload', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.reloadButton : children}</Button>;

export const BackButton = ({ icon = 'left', children = 'Back', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.backButton : children}</Button>;

export const SearchButton = ({ icon = 'search', children = 'Search', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.searchButton : children}</Button>;

export const SaveButton = ({ icon = 'save', children = 'Save', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.saveButton : children}</Button>;

export const CancelButton = ({ icon = 'close', children = 'Cancel', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.cancelButton : children}</Button>;

export const CloseButton = ({ icon = 'close', children = 'Close', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.closeButton : children}</Button>;

export const UndoButton = ({ icon = 'rollback', children = 'Undo', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.undoButton : children}</Button>;

export const SettingsButton = ({ icon = 'setting', children = 'Settings', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.settingsButton : children}</Button>;

export const BasketButton = ({ icon = 'shopping-cart', children = 'Add To Basket', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.basketButton : children}</Button>;

export const UploadButton = ({ icon = 'upload', children = 'Upload', locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{(locale) ? localeProvider.get(locale).Buttons.uploadButton : children}</Button>;

