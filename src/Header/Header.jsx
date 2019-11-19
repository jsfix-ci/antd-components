import React, { useContext } from 'react';
import { Layout } from 'antd';
import { ThemeContext } from '..';

const { Header: AntdHeader } = Layout;

export const Header = (props) => {
    const { children, ...restProps } = props;

    const { theme } = useContext(ThemeContext);

    return (
        <AntdHeader
            className={`${theme}-header hangar-header`}
            {...restProps}
        >
            {children}
        </AntdHeader>
    );
};
