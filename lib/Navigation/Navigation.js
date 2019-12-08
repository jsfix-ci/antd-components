"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navigation = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _reactRouter = require("react-router");

var _routing = require("@root/Navigation/routing");

var _menu = require("@root/Navigation/menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Navigation = (0, _reactRouter.withRouter)(function (props) {
  var routes = props.routes,
      openSubmenus = props.openSubmenus,
      location = props.location,
      staticContext = props.staticContext,
      history = props.history,
      match = props.match,
      restProps = _objectWithoutProperties(props, ["routes", "openSubmenus", "location", "staticContext", "history", "match"]);

  var activeRoutes = (0, _routing.getActiveRoutes)(routes, location);
  var defaultOpenKeys = [];

  switch (openSubmenus) {
    case 'selected':
      defaultOpenKeys = activeRoutes;
      break;

    case 'all':
      defaultOpenKeys = (0, _routing.getAllSubmenuRoutes)(routes);
      break;
  }

  return _react["default"].createElement(_antd.Menu, _extends({
    selectedKeys: activeRoutes,
    defaultOpenKeys: defaultOpenKeys
  }, restProps), (0, _menu.renderMenu)(routes));
});
exports.Navigation = Navigation;
Navigation.defaultProps = {
  routes: []
};
Navigation.propTypes = {
  routes: _propTypes["default"].arrayOf(_propTypes["default"].object),
  openSubmenus: _propTypes["default"].oneOf(['selected', 'all'])
};