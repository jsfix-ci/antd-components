import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from "antd";
import {Template} from "../Template";
const {Header: AntdHeader} = Layout;

export const Header = (props) => {
    const {theme, children, ...restProps } = props;

    return (
        <AntdHeader id={'hangar-header'} className={theme} {...restProps}>
                {children}
        </AntdHeader>
    )

};

Header.defaultProps = {

};

Header.propTypes = {

};
