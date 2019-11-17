import React from 'react';
import { Layout } from "antd";
import {useTheme} from "../Themes";
const { Header: AntdHeader } = Layout;

export const Header = (props) => {
    const {children, ...restProps } = props;

    return (
        <AntdHeader
            style={{backgroundColor: useTheme().Header.background}}
            className={useTheme().Theme + '-header hangar-header'} {...restProps}
        >
            {children}
        </AntdHeader>
    )
};
