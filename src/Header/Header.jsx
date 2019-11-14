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
            -webkit-box-shadow: ${theme().Header.shadow};
            box-shadow: ${theme().Header.shadow};
            height: 67px;
            position: relative;
            z-index: 2;            
            
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
        <StyledHeader {...restProps}>
            {children}
        </StyledHeader>
    )
};
