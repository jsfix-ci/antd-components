"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.ThemeContext = exports.DEFAULT_THEME = void 0;

var _react = _interopRequireDefault(require("react"));

var _helper = require("../helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DEFAULT_THEME = 'light';
exports.DEFAULT_THEME = DEFAULT_THEME;

var ThemeContext = _react["default"].createContext({
  theme: DEFAULT_THEME,
  setTheme: _helper.emptyFn
});

exports.ThemeContext = ThemeContext;

var ThemeProvider = function ThemeProvider(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? DEFAULT_THEME : _ref$theme,
      _ref$setTheme = _ref.setTheme,
      setTheme = _ref$setTheme === void 0 ? _helper.emptyFn : _ref$setTheme,
      children = _ref.children;
  return _react["default"].createElement(ThemeContext.Provider, {
    value: {
      theme: theme,
      setTheme: setTheme
    }
  }, children);
};

exports.ThemeProvider = ThemeProvider;