import { useContext } from 'react';
import { LocaleContext } from '..';

export const l10n = () => {
    return useContext(LocaleContext).l10n;
};
