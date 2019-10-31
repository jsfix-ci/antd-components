"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocaleProvider = exports.LocaleContext = exports.DEFAULT_LOCALE = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
    var antdL10n = require("antd/lib/locale/".concat(locale, ".js"))["default"];

    var localL10n = require("./Locales/".concat(locale, ".js"));

    l10n = _objectSpread({}, antdL10n, {}, localL10n);
  } catch (e) {
    console.error("locale \"".concat(locale, "\" not exist. fallback to \"").concat(DEFAULT_LOCALE, "\""));

    var _antdL10n = require("antd/lib/locale/".concat(DEFAULT_LOCALE, ".js"))["default"];

    var _localL10n = require("./Locales/".concat(DEFAULT_LOCALE, ".js"));

    l10n = _objectSpread({}, _antdL10n, {}, _localL10n);
    locale = DEFAULT_LOCALE;
  }

  return _react["default"].createElement(_antd.ConfigProvider, {
    locale: l10n
  }, _react["default"].createElement(LocaleContext.Provider, {
    value: {
      l10n: l10n,
      locale: locale,
      setLocale: setLocale
    }
  }, children));
};

exports.LocaleProvider = LocaleProvider;