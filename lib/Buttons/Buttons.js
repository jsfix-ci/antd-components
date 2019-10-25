"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UploadButton = exports.BasketButton = exports.SettingsButton = exports.UndoButton = exports.CloseButton = exports.CancelButton = exports.SaveButton = exports.SearchButton = exports.BackButton = exports.ReloadButton = exports.EditButton = exports.DeleteButton = exports.AddButton = exports.IconButton = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _button = _interopRequireDefault(require("antd/lib/button/button"));

var _icon = _interopRequireDefault(require("antd/lib/icon"));

var _invertColor = _interopRequireDefault(require("invert-color"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var localeProvider = _interopRequireWildcard(require("../Locales"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Button = function Button(props) {
  var _props$color = props.color,
      color = _props$color === void 0 ? 'default' : _props$color,
      restProps = _objectWithoutProperties(props, ["color"]); //toDo validate hex color code


  if (color.indexOf('#') !== -1) {
    var StyledButton = (0, _styledComponents["default"])(_button["default"])(_templateObject(), color, (0, _invertColor["default"])(color, true), color, (0, _invertColor["default"])(color, true), color);
    return _react["default"].createElement(StyledButton, restProps);
  } else {
    return _react["default"].createElement(_button["default"], _extends({
      className: 'hangar-btn hangar-btn-color-' + color
    }, restProps));
  }
};

exports.Button = Button;
var IconButton = (0, _styledComponents["default"])(_icon["default"])(_templateObject2());
exports.IconButton = IconButton;

var AddButton = function AddButton(_ref) {
  var _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? 'plus' : _ref$icon,
      children = _ref.children,
      locale = _ref.locale,
      restProps = _objectWithoutProperties(_ref, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.addButton);
};

exports.AddButton = AddButton;

var DeleteButton = function DeleteButton(_ref2) {
  var _ref2$icon = _ref2.icon,
      icon = _ref2$icon === void 0 ? 'delete' : _ref2$icon,
      children = _ref2.children,
      locale = _ref2.locale,
      restProps = _objectWithoutProperties(_ref2, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.deleteButton);
};

exports.DeleteButton = DeleteButton;

var EditButton = function EditButton(_ref3) {
  var _ref3$icon = _ref3.icon,
      icon = _ref3$icon === void 0 ? 'edit' : _ref3$icon,
      children = _ref3.children,
      locale = _ref3.locale,
      restProps = _objectWithoutProperties(_ref3, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.editButton);
};

exports.EditButton = EditButton;

var ReloadButton = function ReloadButton(_ref4) {
  var _ref4$icon = _ref4.icon,
      icon = _ref4$icon === void 0 ? 'reload' : _ref4$icon,
      children = _ref4.children,
      locale = _ref4.locale,
      restProps = _objectWithoutProperties(_ref4, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.reloadButton);
};

exports.ReloadButton = ReloadButton;

var BackButton = function BackButton(_ref5) {
  var _ref5$icon = _ref5.icon,
      icon = _ref5$icon === void 0 ? 'left' : _ref5$icon,
      children = _ref5.children,
      locale = _ref5.locale,
      restProps = _objectWithoutProperties(_ref5, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.backButton);
};

exports.BackButton = BackButton;

var SearchButton = function SearchButton(_ref6) {
  var _ref6$icon = _ref6.icon,
      icon = _ref6$icon === void 0 ? 'search' : _ref6$icon,
      children = _ref6.children,
      locale = _ref6.locale,
      restProps = _objectWithoutProperties(_ref6, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.searchButton);
};

exports.SearchButton = SearchButton;

var SaveButton = function SaveButton(_ref7) {
  var _ref7$icon = _ref7.icon,
      icon = _ref7$icon === void 0 ? 'save' : _ref7$icon,
      children = _ref7.children,
      locale = _ref7.locale,
      restProps = _objectWithoutProperties(_ref7, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.saveButton);
};

exports.SaveButton = SaveButton;

var CancelButton = function CancelButton(_ref8) {
  var _ref8$icon = _ref8.icon,
      icon = _ref8$icon === void 0 ? 'close' : _ref8$icon,
      children = _ref8.children,
      locale = _ref8.locale,
      restProps = _objectWithoutProperties(_ref8, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.cancelButton);
};

exports.CancelButton = CancelButton;

var CloseButton = function CloseButton(_ref9) {
  var _ref9$icon = _ref9.icon,
      icon = _ref9$icon === void 0 ? 'close' : _ref9$icon,
      children = _ref9.children,
      locale = _ref9.locale,
      restProps = _objectWithoutProperties(_ref9, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.closeButton);
};

exports.CloseButton = CloseButton;

var UndoButton = function UndoButton(_ref10) {
  var _ref10$icon = _ref10.icon,
      icon = _ref10$icon === void 0 ? 'rollback' : _ref10$icon,
      children = _ref10.children,
      locale = _ref10.locale,
      restProps = _objectWithoutProperties(_ref10, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.undoButton);
};

exports.UndoButton = UndoButton;

var SettingsButton = function SettingsButton(_ref11) {
  var _ref11$icon = _ref11.icon,
      icon = _ref11$icon === void 0 ? 'setting' : _ref11$icon,
      children = _ref11.children,
      locale = _ref11.locale,
      restProps = _objectWithoutProperties(_ref11, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.settingsButton);
};

exports.SettingsButton = SettingsButton;

var BasketButton = function BasketButton(_ref12) {
  var _ref12$icon = _ref12.icon,
      icon = _ref12$icon === void 0 ? 'shopping-cart' : _ref12$icon,
      children = _ref12.children,
      locale = _ref12.locale,
      restProps = _objectWithoutProperties(_ref12, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.basketButton);
};

exports.BasketButton = BasketButton;

var UploadButton = function UploadButton(_ref13) {
  var _ref13$icon = _ref13.icon,
      icon = _ref13$icon === void 0 ? 'upload' : _ref13$icon,
      children = _ref13.children,
      locale = _ref13.locale,
      restProps = _objectWithoutProperties(_ref13, ["icon", "children", "locale"]);

  return _react["default"].createElement(Button, _extends({
    icon: icon
  }, restProps), children || localeProvider.get(locale).Buttons.uploadButton);
};

exports.UploadButton = UploadButton;