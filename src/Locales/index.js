export const get = (locale) => {
    let l10n;

    try {
        l10n = require(`./${locale}`)
    } catch(e) {
        console.error(`Locale "${locale}" not exist. fallback to "en-EN"`);
        l10n = require(`./en-EN`);
    }

    return l10n;
};
