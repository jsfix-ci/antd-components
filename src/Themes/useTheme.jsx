/* global require */
import React, { useContext } from 'react';
import { DEFAULT_THEME, ThemeContext } from './ThemeContext';

export const useTheme = () => {
    let { theme } = useContext(ThemeContext);
    let themes;

    try {
        let localTheme = require(`./${theme}.js`);
        themes = { ...localTheme };
    } catch (e) {
        console.error(`locale "${theme}" not exist. fallback to "${DEFAULT_THEME}"`);
    }

    return themes;
};
