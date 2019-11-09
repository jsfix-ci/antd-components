import React from 'react';

export const emptyFn = () => {
};

export const truncateText = (text = '', maxLength) => {
    if (!maxLength) return text;

    if (text.length > maxLength) {
        let index = maxLength;
        while (text.charAt(index) !== ' ') {
            index--;
        }

        return text.substring(0, index) + ' ...';
    }

    return text;
};

export const prettifyJson = (json, space = 4) => (typeof json === 'object')
    ? JSON.stringify(json, undefined, space)
    : json;

export const getGridTemplate = (modules) => {

    const LEFT = 1;
    const MIDDLE = 2;
    const RIGHT = 4;

    let sum = 0;

    let sizes = [
        [{lg: 0, xl: 0}, {lg: 0, xl: 0}, {lg: 0, xl: 0}],
        [{lg: 4, xl: 4}, {lg: 0, xl: 0}, {lg: 0, xl: 0}],
        [{lg: 0, xl: 0}, {lg: 24, xl: 24}, {lg: 0, xl: 0}],
        [{lg: 4, xl: 4}, {lg: 20, xl: 20}, {lg: 0, xl: 0}],
        [{lg: 0, xl: 0}, {lg: 0, xl: 0}, {lg: 24, xl: 24}],
        [{lg: 0, xl: 0}, {lg: 0, xl: 0}, {lg: 0, xl: 0}],
        [{lg: 0, xl: 0}, {lg: 0, xl: 0}, {lg: 0, xl: 0}],
        [{lg: 4, xl: 4}, {xs: 12, md: 13, lg: 14, xl: 15, xxl: 16}, {lg: 4, xl: 4}],
    ];

    if (modules.left) {
        sum += LEFT;
    }

    if (modules.middle) {
        sum += MIDDLE;
    }

    if (modules.right) {
        sum += RIGHT;
    }

    if (sum > 0) {
        return {
            left: sizes[sum][0],
            middle: sizes[sum][1],
            right: sizes[sum][2]
        };
    } else {
        return {
            left: [{xs: 3}, {lg: 13, xl: 13}, {lg: 3, xl: 3}],
            middle: [{xs: 3}, {lg: 13, xl: 13}, {lg: 3, xl: 3}],
            right: [{xs: 3}, {lg: 13, xl: 13}, {lg: 3, xl: 3}]
        };
    }
};