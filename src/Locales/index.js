import {enEN} from './en_EN';
import {deDE} from './de_DE';
import {srSP} from './sr_SP';

export const get = (locale) => {
    switch (locale) {
        case 'de-DE':
            return deDE;
        case 'sr-SP':
            return srSP;
        default:
            return enEN;
    }
};