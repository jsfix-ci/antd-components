export const l10n = (locale = 'en-EN', ...params) => {
    let translations;

    try {
        translations = require(`./${locale}`)
    } catch (e) {
        console.error(`locale "${locale}" not exist. fallback to "en-EN"`);
        translations = require(`./en-EN`);
    }

    let text = translations;

    try {
        params.forEach(t => {
            text = text[t];

            if (!text) {
                text = t;
                throw `translation ${t} not found`;
            }
        });
    } catch (err) {
        console.error(err);
    }

    return text;
};
