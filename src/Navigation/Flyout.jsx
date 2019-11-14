import React from 'react';
import PropTypes from 'prop-types';
import { Navigation } from './Navigation';
import styled from "styled-components";
import {useTheme as theme} from "../Themes";

export const Flyout = (props) => {
    const {...restProps} = props;

    const StyledNavigation = styled(Navigation)`
            background-color: ${theme().Flyout.backgroundColor};
            color: ${theme().Flyout.color};            
            
             li.ant-menu-item-selected {           
                border-bottom: ${theme().Flyout.borderBottom}!important;
             }
                
            li {            
                &:hover {           
                    border-bottom: ${theme().Flyout.borderBottom}!important;
                }
                                        
                a {
                    color: ${theme().Flyout.color} !important;
                }
                a:hover {             
                    color: ${theme().Flyout.hoverColor} !important;            
                } 
            }
        `;

    return (
        <StyledNavigation
            mode="horizontal"
            {...restProps}
        />
    );
};

Flyout.defaultProps = {};

Flyout.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.object),
    openSubmenus: PropTypes.oneOf(['selected', 'all'])
};

Flyout.displayName = 'Flyout';