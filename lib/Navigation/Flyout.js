"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Flyout = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Navigation = require("./Navigation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Flyout = function Flyout(props) {
  var restProps = _extends({}, props);

  return _react["default"].createElement(_Navigation.Navigation, _extends({
    mode: "horizontal"
  }, restProps));
};

exports.Flyout = Flyout;
Flyout.defaultProps = {};
Flyout.propTypes = {
  routes: _propTypes["default"].arrayOf(_propTypes["default"].object),
  openSubmenus: _propTypes["default"].oneOf(['selected', 'all'])
};