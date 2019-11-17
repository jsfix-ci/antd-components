/* global require */
import React from 'react';
import {ConfigProvider} from "antd";
import { emptyFn } from '..';

export const DEFAULT_THEME = 'light';

export const ThemeContext = React.createContext({
    theme: DEFAULT_THEME,
    setTheme: emptyFn
});

export const ThemeProvider = ({ theme = DEFAULT_THEME, setTheme = emptyFn, children}) => {
    require.resolve(`./${theme}.js`);

    return (
        <ConfigProvider theme={theme}>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemeContext.Provider>
        </ConfigProvider>
    );
};
