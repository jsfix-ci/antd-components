import React from 'react';
import { Layout } from "antd";
const { Header: AntdHeader } = Layout;

export const Header = (props) => {
    const {children, ...restProps } = props;

    return (
        <AntdHeader className={'hangar-header'} {...restProps}>
            {children}
        </AntdHeader>
    )
};
