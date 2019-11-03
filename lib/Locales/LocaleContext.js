"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocaleProvider = exports.LocaleContext = exports.DEFAULT_LOCALE = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* global require */
var DEFAULT_LOCALE = 'en_US';
exports.DEFAULT_LOCALE = DEFAULT_LOCALE;

var LocaleContext = _react["default"].createContext({
  locale: DEFAULT_LOCALE,
  setLocale: _.emptyFn
});

exports.LocaleContext = LocaleContext;

var LocaleProvider = function LocaleProvider(_ref) {
  var locale = _ref.locale,
      setLocale = _ref.setLocale,
      children = _ref.children;
  var l10n;

  try {
    l10n = require("antd/lib/locale/".concat(locale, ".js"))["default"];

    require.resolve("./".concat(locale, ".js"));
  } catch (e) {
    console.error("locale \"".concat(locale, "\" not exist. fallback to \"").concat(DEFAULT_LOCALE, "\""));
    l10n = require("antd/lib/locale/".concat(DEFAULT_LOCALE, ".js"))["default"];
    locale = DEFAULT_LOCALE;
  }

  return _react["default"].createElement(_antd.ConfigProvider, {
    locale: l10n
  }, _react["default"].createElement(LocaleContext.Provider, {
    value: {
      locale: locale,
      setLocale: setLocale
    }
  }, children));
};

exports.LocaleProvider = LocaleProvider;