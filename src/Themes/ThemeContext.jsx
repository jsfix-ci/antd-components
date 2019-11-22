import React from 'react';
import { emptyFn } from '../helper';

export const DEFAULT_THEME = 'light';

export const ThemeContext = React.createContext({
    theme: DEFAULT_THEME,
    setTheme: emptyFn
});

export const ThemeProvider = ({ theme = DEFAULT_THEME, setTheme = emptyFn, children }) => (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
);
