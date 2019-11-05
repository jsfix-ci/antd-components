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

    let sizes = {
        1: [{lg: 3, xl: 3}, {lg: 13, xl: 13}, {lg: 3, xl: 3}],
        2: [{lg: 3, xl: 3}, {lg: 13, xl: 13}, {lg: 3, xl: 3}],
        3: [{lg: 3, xl: 3}, {lg: 13, xl: 13}, {lg: 3, xl: 3}],
        4: [{lg: 3, xl: 3}, {lg: 13, xl: 13}, {lg: 3, xl: 3}],
        5: [{lg: 3, xl: 3}, {lg: 13, xl: 13}, {lg: 3, xl: 3}],
        6: [{lg: 3, xl: 3}, {lg: 13, xl: 13}, {lg: 3, xl: 3}],
        7: [{lg: 3, xl: 3}, {lg: 13, xl: 13}, {lg: 3, xl: 3}]
    };

    if (modules.left > 0) {
        sum += LEFT;
    }

    if (modules.middle > 0) {
        sum += MIDDLE;
    }

    if (modules.right > 0) {
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