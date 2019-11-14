/* global require */
import React from 'react';
import { emptyFn } from '..';

export const DEFAULT_THEME = 'light';

export const ThemeContext = React.createContext({
    theme: DEFAULT_THEME,
    setTheme: emptyFn
});

export const ThemeProvider = ({ theme = DEFAULT_THEME, setTheme = emptyFn, children }) => {
    try {
        require(`./${theme}.css`);
    } catch (e) {
        console.error(`theme "${theme}" not exist. fallback to "${DEFAULT_THEME}"`);
    }
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
