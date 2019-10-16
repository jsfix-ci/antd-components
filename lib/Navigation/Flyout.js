"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flyout = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _antd = require("antd");

var _reactRouter = require("react-router");

var _routing = require("./routing");

var _menu = require("./menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: transparent !important;\n    line-height: 64px !important;\n    display: inline-block;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledMenu = (0, _styledComponents["default"])(_antd.Menu)(_templateObject());
var Flyout = (0, _reactRouter.withRouter)(function (props) {
  var routes = props.routes,
      openSelected = props.openSelected,
      location = props.location;
  var activeRoutes = (0, _routing.getActiveRoutes)(routes, location);
  return _react["default"].createElement(StyledMenu, {
    mode: "horizontal",
    selectedKeys: activeRoutes,
    defaultOpenKeys: openSelected ? activeRoutes : []
  }, (0, _menu.renderMenu)(routes));
});
exports.Flyout = Flyout;
Flyout.defaultProps = {
  routes: [],
  openSelected: false
};
Flyout.propTypes = {
  routes: _propTypes["default"].arrayOf(_propTypes["default"].object),
  openSelected: _propTypes["default"].bool
};