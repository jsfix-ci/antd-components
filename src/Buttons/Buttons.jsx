import React from 'react';
import AntdButton from 'antd/lib/button/button';
import AntIcon from 'antd/lib/icon';
import invert from 'invert-color';
import styled from 'styled-components';
import { l10n } from '../Locales';
import PropTypes from 'prop-types';

const isHexCode = (color) => (/^#([0-9A-F]{3}){1,2}$/i.test(color));

export const Button = (props) => {
    const { color, ...restProps } = props;

    if (isHexCode(color)) {
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
                className={`hangar-btn hangar-btn-color-${color}`}
                {...restProps}
            />
        );
    }
};

Button.defaultProps = {
    color: 'default',
};

Button.propTypes = {
    color: PropTypes.string
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

export const AddButton = ({ icon = 'plus', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'addButton')}</Button>;

export const DeleteButton = ({ icon = 'delete', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'deleteButton')}</Button>;

export const EditButton = ({ icon = 'edit', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'editButton')}</Button>;

export const ReloadButton = ({ icon = 'reload', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'reloadButton')}</Button>;

export const BackButton = ({ icon = 'left', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'backButton')}</Button>;

export const SearchButton = ({ icon = 'search', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'searchButton')}</Button>;

export const SaveButton = ({ icon = 'save', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'saveButton')}</Button>;

export const CancelButton = ({ icon = 'close', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'cancelButton')}</Button>;

export const CloseButton = ({ icon = 'close', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'closeButton')}</Button>;

export const UndoButton = ({ icon = 'rollback', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'undoButton')}</Button>;

export const SettingsButton = ({ icon = 'setting', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'settingsButton')}</Button>;

export const BasketButton = ({ icon = 'shopping-cart', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'basketButton')}</Button>;

export const UploadButton = ({ icon = 'upload', children, locale, ...restProps }) =>
    <Button icon={icon} {...restProps}>{children || l10n(locale, 'Buttons', 'uploadButton')}</Button>;

