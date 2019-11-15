"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flyout = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Navigation = require("./Navigation");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Themes = require("../Themes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n            background-color: ", ";\n            color: ", ";            \n            \n             li.ant-menu-item-selected {           \n                border-bottom: ", "!important;\n             }\n                \n            li {            \n                &:hover {           \n                    border-bottom: ", "!important;\n                }\n                                        \n                a {\n                    color: ", " !important;\n                }\n                a:hover {             \n                    color: ", " !important;            \n                } \n            }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Flyout = function Flyout(props) {
  var restProps = _extends({}, props);

  var StyledNavigation = (0, _styledComponents["default"])(_Navigation.Navigation)(_templateObject(), (0, _Themes.useTheme)().Flyout.backgroundColor, (0, _Themes.useTheme)().Flyout.color, (0, _Themes.useTheme)().Flyout.borderBottom, (0, _Themes.useTheme)().Flyout.borderBottom, (0, _Themes.useTheme)().Flyout.color, (0, _Themes.useTheme)().Flyout.hoverColor);
  return _react["default"].createElement(StyledNavigation, _extends({
    mode: "horizontal"
  }, restProps));
};

exports.Flyout = Flyout;
Flyout.defaultProps = {};
Flyout.propTypes = {
  routes: _propTypes["default"].arrayOf(_propTypes["default"].object),
  openSubmenus: _propTypes["default"].oneOf(['selected', 'all'])
};
Flyout.displayName = 'Flyout';