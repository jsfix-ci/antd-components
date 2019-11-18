"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Logo = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Logo = function Logo(props) {
  var text = props.text,
      src = props.src,
      restProps = _objectWithoutProperties(props, ["text", "src"]);

  return _react["default"].createElement("div", _extends({
    className: (0, _.useTheme)().Theme + ' logo'
  }, restProps), _react["default"].createElement("a", {
    href: "/"
  }, _react["default"].createElement("span", {
    className: 'image'
  }, " ", _react["default"].createElement("img", {
    src: (0, _.useTheme)().Logo.src || src
  }), " "), _react["default"].createElement("span", {
    className: 'text'
  }, (0, _.useTheme)().Logo.text || text)));
};

exports.Logo = Logo;
Logo.defaultProps = {
  src: '/images/logo.png',
  text: 'Logo Text'
};
Logo.propTypes = {
  src: _propTypes["default"].string,
  text: _propTypes["default"].string
};
Logo.displayName = 'Logo';