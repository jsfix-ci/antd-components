"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _renderer = require("./renderer");

var _BaseGrid = require("./BaseGrid");

var _DataEntry = require("../DataEntry");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @return {React.Component}
 *
 * @constructor
 */
var Column = function Column(props) {
  var children = props.children,
      dataIndex = props.dataIndex,
      editable = props.editable,
      fieldProps = props.fieldProps,
      fieldType = props.fieldType,
      hideInGrid = props.hideInGrid,
      isEditing = props.isEditing,
      maxLength = props.maxLength,
      record = props.record,
      required = props.required,
      rules = props.rules,
      restProps = _objectWithoutProperties(props, ["children", "dataIndex", "editable", "fieldProps", "fieldType", "hideInGrid", "isEditing", "maxLength", "record", "required", "rules"]);

  var form = (0, _react.useContext)(_BaseGrid.EditableContext);

  if (!dataIndex) {
    return _react["default"].createElement("td", restProps, children);
  }

  var value = record[dataIndex];

  if (isEditing && editable) {
    return _react["default"].createElement("td", _extends({}, restProps, {
      valign: 'top'
    }), _react["default"].createElement(_DataEntry.FormItem, {
      dataIndex: dataIndex,
      fieldProps: fieldProps,
      fieldType: fieldType,
      form: form,
      initialValue: value,
      required: required,
      rules: rules,
      style: {
        margin: 0
      }
    }));
  }

  return _react["default"].createElement("td", restProps, (0, _renderer.getDisplay)({
    children: children,
    fieldType: fieldType,
    maxLength: maxLength,
    value: value,
    fieldProps: fieldProps
  }));
};

exports.Column = Column;
Column.defaultProps = {
  editable: true,
  fieldType: 'string',
  fieldProps: {},
  hideInGrid: false,
  required: false,
  rules: []
};
Column.propTypes = {
  dataIndex: _propTypes["default"].string,
  editable: _propTypes["default"].bool,
  fieldProps: _propTypes["default"].object,
  fieldType: _propTypes["default"].oneOf(['boolean', 'image', 'html', 'object', 'list', 'number', 'string', 'select']),
  hideInGrid: _propTypes["default"].bool,
  isEditing: _propTypes["default"].bool,
  maxLength: _propTypes["default"].number,
  record: _propTypes["default"].object,
  required: _propTypes["default"].bool,
  rules: _propTypes["default"].array
};