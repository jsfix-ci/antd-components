"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _Navigation = require("../Navigation");

var _ = require("./");

var _Themes = require("../Themes");

var _2 = require("./..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AntdHeader = _antd.Layout.Header;
var BURGER_BREAKPOINTS = {
  xs: 2,
  md: 0,
  xl: 0,
  xxl: 0
};
var LOGO_BREAKPOINTS = {
  xs: 22,
  md: 11,
  xl: 6,
  xxl: 5
};
var MENU_BREAKPOINTS = {
  xs: 0,
  md: 13,
  xl: 12,
  xxl: 13
};
var EXTRA_BREAKPOINTS = {
  xs: 0,
  md: 0,
  xl: 6,
  xxl: 6
};

var Header = function Header(props) {
  var extra = props.extra,
      extraBreakpoints = props.extraBreakpoints,
      logo = props.logo,
      menuBreakpoints = props.menuBreakpoints,
      menuPosition = props.menuPosition,
      menuProps = props.menuProps,
      menuRoutes = props.menuRoutes,
      sider = props.sider,
      siderRoutes = props.siderRoutes,
      siderProps = props.siderProps,
      version = props.version,
      children = props.children,
      restProps = _objectWithoutProperties(props, ["extra", "extraBreakpoints", "logo", "menuBreakpoints", "menuPosition", "menuProps", "menuRoutes", "sider", "siderRoutes", "siderProps", "version", "children"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useContext = (0, _react.useContext)(_Themes.ThemeContext),
      theme = _useContext.theme;

  var extraBP = extraBreakpoints;
  var menuBP = menuBreakpoints;
  if (!menuRoutes) extraBP = (0, _.sumBreakPoints)(extraBP, menuBP);
  if (!extra) menuBP = (0, _.sumBreakPoints)(menuBP, extraBP);
  var burgerStyle = {
    color: theme === 'light' ? '#000' : '#FFF'
  };
  var menuStyle = {
    textAlign: menuPosition
  };

  var renderBurgerIcon = function renderBurgerIcon() {
    return _react["default"].createElement(_antd.Col, BURGER_BREAKPOINTS, _react["default"].createElement(_antd.Icon, {
      className: "burger-icon",
      type: "menu",
      style: burgerStyle,
      onClick: function onClick() {
        return setOpen(true);
      }
    }));
  };

  var renderLogo = function renderLogo() {
    return logo ? _react["default"].createElement(_antd.Col, LOGO_BREAKPOINTS, logo) : null;
  };

  var renderMenu = function renderMenu() {
    return menuRoutes ? _react["default"].createElement(_antd.Col, _extends({}, menuBP, {
      style: menuStyle
    }), _react["default"].createElement(_Navigation.Flyout, _extends({
      routes: menuRoutes
    }, menuProps))) : null;
  };

  var renderExtra = function renderExtra() {
    return extra ? _react["default"].createElement(_antd.Col, _extends({}, extraBP, {
      style: {
        textAlign: 'right'
      }
    }), extra) : null;
  };

  var sideNaviProps = siderProps || menuProps;
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_2.MotionDrawer, {
    className: "".concat(theme, "-sider"),
    width: 300,
    open: open,
    onChange: function onChange(v) {
      return setOpen(v);
    }
  }, _react["default"].createElement(_Navigation.SideNavi, _extends({
    routes: siderRoutes || menuRoutes
  }, sideNaviProps), sider || extra)), _react["default"].createElement(AntdHeader, _extends({
    className: "".concat(theme, "-header hangar-header")
  }, restProps), _react["default"].createElement(_antd.Row, null, renderBurgerIcon(), renderLogo(), renderMenu(), renderExtra(), children)));
};

exports.Header = Header;
Header.defaultProps = {
  extraBreakpoints: EXTRA_BREAKPOINTS,
  menuBreakpoints: MENU_BREAKPOINTS,
  menuPosition: 'left',
  menuProps: {}
};
Header.propTypes = {
  extra: _propTypes["default"].arrayOf(_propTypes["default"].element),
  extraBreakpoints: _propTypes["default"].object,
  logo: _propTypes["default"].element,
  menuBreakpoints: _propTypes["default"].object,
  menuPosition: _propTypes["default"].oneOf(['right', 'left']),
  menuProps: _propTypes["default"].object,
  menuRoutes: _propTypes["default"].array,
  sider: _propTypes["default"].arrayOf(_propTypes["default"].element),
  siderProps: _propTypes["default"].object,
  siderRoutes: _propTypes["default"].array,
  version: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string])
};