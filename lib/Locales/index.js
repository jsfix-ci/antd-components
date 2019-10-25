"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = void 0;

var get = function get(locale) {
  var l10n;

  try {
    l10n = require("./".concat(locale));
  } catch (e) {
    console.error("Locale \"".concat(locale, "\" not exist. fallback to \"en-EN\""));
    l10n = require("./en-EN");
  }

  return l10n;
};

exports.get = get;