"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadButton = exports.BasketButton = exports.SettingsButton = exports.UndoButton = exports.CloseButton = exports.CancelButton = exports.SaveButton = exports.SearchButton = exports.BackButton = exports.ReloadButton = exports.EditButton = exports.DeleteButton = exports.AddButton = exports.LoginButton = exports.IconButton = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("antd/lib/button/button"));

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _invertColor = _interopRequireDefault(require("invert-color"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    &:hover {\n      color: #3c3c3c;  \n    }\n    cursor: pointer;\n    color: #727272;\n    position: relative;\n    top: 4px;\n    font-size: 24px;\n    transition: all 0.3s;\n    margin-left: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                background-color: ", ";\n                color: ", ";\n                margin: 3px;\n                &:hover, &:focus {\n                    background-color: ", ";\n                    color: ", ";\n                    filter: brightness(90%);\n                    border: 1px solid ", "\n                }\n        "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var isHexCode = function isHexCode(color) {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color);
};

var Button = function Button(props) {
  var color = props.color,
      restProps = _objectWithoutProperties(props, ["color"]);

  if (isHexCode(color)) {
    var StyledButton = (0, _styledComponents["default"])(_button["default"])(_templateObject(), color, (0, _invertColor["default"])(color, true), color, (0, _invertColor["default"])(color, true), color);
    return _react["default"].createElement(StyledButton, restProps);
  } else {
    return _react["default"].createElement(_button["default"], _extends({
      className: "hangar-btn hangar-btn-color-".concat(color)
    }, restProps));
  }
};

exports.Button = Button;
Button.defaultProps = {
  color: 'default'
};
Button.propTypes = {
  color: _propTypes["default"].string
};
var IconButton = (0, _styledComponents["default"])(_icon["default"])(_templateObject2());
exports.IconButton = IconButton;

var LoginButton = function LoginButton(_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? 'user' : _ref$icon,
      children = _ref.children,
      restProps = _objectWithoutProperties(_ref, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.loginButton);
};

exports.LoginButton = LoginButton;

var AddButton = function AddButton(_ref2) {
  var _ref2$icon = _ref2.icon,
      icon = _ref2$icon === void 0 ? 'plus' : _ref2$icon,
      children = _ref2.children,
      restProps = _objectWithoutProperties(_ref2, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.addButton);
};

exports.AddButton = AddButton;

var DeleteButton = function DeleteButton(_ref3) {
  var _ref3$icon = _ref3.icon,
      icon = _ref3$icon === void 0 ? 'delete' : _ref3$icon,
      children = _ref3.children,
      restProps = _objectWithoutProperties(_ref3, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.deleteButton);
};

exports.DeleteButton = DeleteButton;

var EditButton = function EditButton(_ref4) {
  var _ref4$icon = _ref4.icon,
      icon = _ref4$icon === void 0 ? 'edit' : _ref4$icon,
      children = _ref4.children,
      restProps = _objectWithoutProperties(_ref4, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.editButton);
};

exports.EditButton = EditButton;

var ReloadButton = function ReloadButton(_ref5) {
  var _ref5$icon = _ref5.icon,
      icon = _ref5$icon === void 0 ? 'reload' : _ref5$icon,
      children = _ref5.children,
      restProps = _objectWithoutProperties(_ref5, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.reloadButton);
};

exports.ReloadButton = ReloadButton;

var BackButton = function BackButton(_ref6) {
  var _ref6$icon = _ref6.icon,
      icon = _ref6$icon === void 0 ? 'left' : _ref6$icon,
      children = _ref6.children,
      restProps = _objectWithoutProperties(_ref6, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.backButton);
};

exports.BackButton = BackButton;

var SearchButton = function SearchButton(_ref7) {
  var _ref7$icon = _ref7.icon,
      icon = _ref7$icon === void 0 ? 'search' : _ref7$icon,
      children = _ref7.children,
      restProps = _objectWithoutProperties(_ref7, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.searchButton);
};

exports.SearchButton = SearchButton;

var SaveButton = function SaveButton(_ref8) {
  var _ref8$icon = _ref8.icon,
      icon = _ref8$icon === void 0 ? 'save' : _ref8$icon,
      children = _ref8.children,
      restProps = _objectWithoutProperties(_ref8, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.saveButton);
};

exports.SaveButton = SaveButton;

var CancelButton = function CancelButton(_ref9) {
  var _ref9$icon = _ref9.icon,
      icon = _ref9$icon === void 0 ? 'close' : _ref9$icon,
      children = _ref9.children,
      restProps = _objectWithoutProperties(_ref9, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.cancelButton);
};

exports.CancelButton = CancelButton;

var CloseButton = function CloseButton(_ref10) {
  var _ref10$icon = _ref10.icon,
      icon = _ref10$icon === void 0 ? 'close' : _ref10$icon,
      children = _ref10.children,
      restProps = _objectWithoutProperties(_ref10, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.closeButton);
};

exports.CloseButton = CloseButton;

var UndoButton = function UndoButton(_ref11) {
  var _ref11$icon = _ref11.icon,
      icon = _ref11$icon === void 0 ? 'rollback' : _ref11$icon,
      children = _ref11.children,
      restProps = _objectWithoutProperties(_ref11, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.undoButton);
};

exports.UndoButton = UndoButton;

var SettingsButton = function SettingsButton(_ref12) {
  var _ref12$icon = _ref12.icon,
      icon = _ref12$icon === void 0 ? 'setting' : _ref12$icon,
      children = _ref12.children,
      restProps = _objectWithoutProperties(_ref12, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.settingsButton);
};

exports.SettingsButton = SettingsButton;

var BasketButton = function BasketButton(_ref13) {
  var _ref13$icon = _ref13.icon,
      icon = _ref13$icon === void 0 ? 'shopping-cart' : _ref13$icon,
      children = _ref13.children,
      restProps = _objectWithoutProperties(_ref13, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.basketButton);
};

exports.BasketButton = BasketButton;

var UploadButton = function UploadButton(_ref14) {
  var _ref14$icon = _ref14.icon,
      icon = _ref14$icon === void 0 ? 'upload' : _ref14$icon,
      children = _ref14.children,
      restProps = _objectWithoutProperties(_ref14, ["icon", "children"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || (0, _.useL10n)().Buttons.uploadButton);
};

exports.UploadButton = UploadButton;