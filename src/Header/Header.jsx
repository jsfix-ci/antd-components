import React from 'react';
import { Layout } from "antd";
const { Header: AntdHeader } = Layout;
import { useTheme as theme } from '..';
import styled from "styled-components";

export const Header = (props) => {
    const {children, ...restProps } = props;

    const StyledHeader = styled(AntdHeader)`
            background-color: ${theme().Header.backgroundColor};
            color: ${theme().Header.color};
            border-bottom: ${theme().Header.color};
            padding: 0;
            -webkit-box-shadow: 0 2px 8px #f0f1f2;
            box-shadow: 0 2px 8px #f0f1f2;
        
            @media (min-width: 768px) {
                .show-mobile-hide-desktop {
                    display: none;
                }
            }
        
            @media (max-width: 768px) {
                .show-desktop-hide-mobile {
                    display: none;
                }
            }
        `;

    return (
        <StyledHeader id={'hangar-header'} {...restProps}>
            {children}
        </StyledHeader>
    )
};
