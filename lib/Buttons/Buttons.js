"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchButton = exports.ReloadButton = exports.DeleteButton = exports.EditButton = exports.AddButton = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("antd/lib/button/button"));

require("./Buttons.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      restProps = _objectWithoutProperties(props, ["color"]);

  return _react["default"].createElement(_button["default"], _extends({
    className: 'hangar-btn hangar-btn-color-' + color
  }, restProps));
};

exports.Button = Button;

var AddButton = function AddButton(props) {
  var _props$icon = props.icon,
      icon = _props$icon === void 0 ? 'plus' : _props$icon,
      _props$children = props.children,
      children = _props$children === void 0 ? 'Add' : _props$children;
  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, props), children);
};

exports.AddButton = AddButton;

var EditButton = function EditButton(props) {
  var _props$color2 = props.color,
      color = _props$color2 === void 0 ? 'blue' : _props$color2,
      _props$icon2 = props.icon,
      icon = _props$icon2 === void 0 ? 'edit' : _props$icon2,
      _props$children2 = props.children,
      children = _props$children2 === void 0 ? 'Edit' : _props$children2;
  return _react["default"].createElement(Button, _extends({
    icon: icon,
    color: color
  }, props), children);
};

exports.EditButton = EditButton;

var DeleteButton = function DeleteButton(props) {
  var _props$color3 = props.color,
      color = _props$color3 === void 0 ? 'red' : _props$color3,
      _props$icon3 = props.icon,
      icon = _props$icon3 === void 0 ? 'delete' : _props$icon3,
      _props$children3 = props.children,
      children = _props$children3 === void 0 ? 'Delete' : _props$children3;
  return _react["default"].createElement(Button, _extends({
    icon: icon,
    color: color
  }, props), children);
};

exports.DeleteButton = DeleteButton;

var ReloadButton = function ReloadButton(props) {
  var _props$icon4 = props.icon,
      icon = _props$icon4 === void 0 ? 'reload' : _props$icon4,
      _props$children4 = props.children,
      children = _props$children4 === void 0 ? 'Reload' : _props$children4;
  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, props), children);
};

exports.ReloadButton = ReloadButton;

var SearchButton = function SearchButton(props) {
  var _props$icon5 = props.icon,
      icon = _props$icon5 === void 0 ? 'search' : _props$icon5,
      _props$children5 = props.children,
      children = _props$children5 === void 0 ? 'Search' : _props$children5;
  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, props), children);
};

exports.SearchButton = SearchButton;