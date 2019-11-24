"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _helper = require("../helper");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AntdHeader = _antd.Layout.Header;

var Header = function Header(props) {
  var extra = props.extra,
      extraBreakpoints = props.extraBreakpoints,
      logo = props.logo,
      menu = props.menu,
      menuBreakpoints = props.menuBreakpoints,
      version = props.version,
      onBurgerClick = props.onBurgerClick,
      children = props.children,
      restProps = _objectWithoutProperties(props, ["extra", "extraBreakpoints", "logo", "menu", "menuBreakpoints", "version", "onBurgerClick", "children"]);

  var _useContext = (0, _react.useContext)(_.ThemeContext),
      theme = _useContext.theme;

  var renderBurgerIcon = function renderBurgerIcon() {
    return logo ? _react["default"].createElement(_antd.Col, {
      xs: 2,
      md: 0,
      xl: 0,
      xxl: 0
    }, _react["default"].createElement(_antd.Icon, {
      className: "burger-icon",
      type: "menu",
      onClick: onBurgerClick
    })) : null;
  };

  var renderLogo = function renderLogo() {
    return logo ? _react["default"].createElement(_antd.Col, {
      xs: 18,
      md: 8,
      xl: 5,
      xxl: 4
    }, logo) : null;
  };

  var renderMenu = function renderMenu() {
    return menu ? _react["default"].createElement(_antd.Col, menuBreakpoints, menu) : null;
  };

  var renderExtra = function renderExtra() {
    return extra ? _react["default"].createElement(_antd.Col, extraBreakpoints, extra) : null;
  };

  var renderVersion = function renderVersion() {
    return version ? _react["default"].createElement(_antd.Col, {
      xs: 4,
      md: 3,
      xl: 1,
      xxl: 1
    }, _react["default"].createElement("div", {
      className: 'version'
    }, version)) : null;
  };

  return _react["default"].createElement(AntdHeader, _extends({
    className: "".concat(theme, "-header hangar-header")
  }, restProps), _react["default"].createElement(_antd.Row, null, renderBurgerIcon(), renderLogo(), renderMenu(), renderExtra(), renderVersion(), children));
};

exports.Header = Header;
Header.defaultProps = {
  onBurgerClick: _helper.emptyFn,
  menuBreakpoints: {
    xs: 0,
    md: 13,
    xl: 12,
    xxl: 13
  },
  extraBreakpoints: {
    xs: 0,
    md: 0,
    xl: 6,
    xxl: 6
  }
};
Header.propTypes = {
  extra: _propTypes["default"].element,
  extraBreakpoints: _propTypes["default"].object,
  logo: _propTypes["default"].element,
  menu: _propTypes["default"].element,
  menuBreakpoints: _propTypes["default"].object,
  version: _propTypes["default"].string,
  onBurgerClick: _propTypes["default"].func
};