"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useL10n = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useL10n = function useL10n() {
  var _useContext = (0, _react.useContext)(_.LocaleContext),
      locale = _useContext.locale;

  var l10n;

  try {
    var antdL10n = require("antd/lib/locale/".concat(locale, ".js"))["default"];

    var localL10n = require("./".concat(locale, ".js"));

    l10n = _objectSpread({}, antdL10n, {}, localL10n);
  } catch (e) {
    console.error("locale \"".concat(locale, "\" not exist. fallback to \"").concat(_.DEFAULT_LOCALE, "\""));

    var _antdL10n = require("antd/lib/locale/".concat(_.DEFAULT_LOCALE, ".js"))["default"];

    var _localL10n = require("./".concat(_.DEFAULT_LOCALE, ".js"));

    l10n = _objectSpread({}, _antdL10n, {}, _localL10n);
  }

  return l10n;
};

exports.useL10n = useL10n;