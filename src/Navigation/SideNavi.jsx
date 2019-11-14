import React from 'react';
import PropTypes from 'prop-types';
import {Navigation} from './Navigation';
import styled from "styled-components";
import {useTheme as theme} from "../Themes";

export const SideNavi = (props) => {
    const {...restProps} = props;

    const StyledNavigation = styled(Navigation)`
            background: ${theme().SideNavi.backgroundColor}!important;
            color: ${theme().SideNavi.color};
            height: 100vh;
            z-index: 1;
            
            li {   
            
                &.ant-menu-item-selected {             
                    background: ${theme().SideNavi.selected}!important
                } 
                
               &.ant-menu-submenu > .ant-menu {
                background-color: ${theme().SideNavi.backgroundColor} !important
               }
                
              &.ant-menu-submenu-selected {
                color: ${theme().SideNavi.selectedColor} !important;                
              }
                                
                &:hover {           
                    border-bottom: ${theme().SideNavi.borderBottom}!important;
                }
                                        
                a {
                    color: ${theme().SideNavi.color} !important;
                }
                a:hover {             
                    color: ${theme().SideNavi.hoverColor} !important;            
                } 
            }
             li.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
                    background-color: #ccc !important
                }
            
            li.ant-menu-item-selected::after {
                    border-right: ${theme().SideNavi.borderRight}    
            }
        `;

    return (
        <StyledNavigation
            mode="inline"
            {...restProps}
        />
    );
};

SideNavi.defaultProps = {};

SideNavi.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
    openSubmenus: PropTypes.oneOf(['selected', 'all'])
};

