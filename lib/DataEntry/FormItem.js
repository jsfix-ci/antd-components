"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormItem = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var getInput = function getInput(fieldType) {
  var fieldProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  switch (fieldType) {
    case 'boolean':
      return _react["default"].createElement(_antd.Switch, null);

    case 'image':
      return _react["default"].createElement(_.Upload, fieldProps);

    case 'html':
      return _react["default"].createElement(_.Editor, null);

    case 'object':
      return _react["default"].createElement(_.CodeMirror, null);

    case 'list':
      return _react["default"].createElement(_.ListField, null);

    case 'number':
      return _react["default"].createElement(_antd.InputNumber, null);

    case 'password':
      return _react["default"].createElement(_antd.Input.Password, null);

    case 'select':
      return _react["default"].createElement(_.Select, _extends({
        style: {
          width: '100%'
        }
      }, fieldProps));

    case 'checkbox':
      return _react["default"].createElement(_antd.Checkbox, null, " ", fieldProps.title, " ");

    case 'string':
    default:
      return _react["default"].createElement(_antd.Input, null);
  }
};

var getValuePropName = function getValuePropName(fieldType) {
  switch (fieldType) {
    case 'boolean':
      return 'checked';

    case 'image':
      return 'fileList';

    case 'checkbox':
      return 'checked';

    default:
      return 'value';
  }
};
/**
 * @return {React.Component}
 *
 * @constructor
 */


var FormItem = function FormItem(props) {
  var fieldType = props.fieldType,
      fieldProps = props.fieldProps,
      title = props.title,
      dataIndex = props.dataIndex,
      form = props.form,
      valuePropName = props.valuePropName,
      required = props.required,
      initialValue = props.initialValue,
      disableInitialError = props.disableInitialError,
      children = props.children,
      restProps = _objectWithoutProperties(props, ["fieldType", "fieldProps", "title", "dataIndex", "form", "valuePropName", "required", "initialValue", "disableInitialError", "children"]);

  var getFieldDecorator = form.getFieldDecorator,
      isFieldTouched = form.isFieldTouched,
      getFieldError = form.getFieldError;
  var rules = [{
    required: required
  }].concat(_toConsumableArray(props.rules));
  var statusProps = {};

  if (disableInitialError) {
    var validateStatus = isFieldTouched(dataIndex) && getFieldError(dataIndex);
    statusProps = {
      validateStatus: validateStatus ? 'error' : '',
      help: validateStatus || ''
    };
  }

  return _react["default"].createElement(_antd.Form.Item, _extends({
    label: title
  }, statusProps, restProps), getFieldDecorator(dataIndex, {
    initialValue: initialValue,
    valuePropName: valuePropName || getValuePropName(fieldType),
    rules: rules
  })(children || getInput(fieldType, fieldProps)));
};

exports.FormItem = FormItem;
FormItem.defaultProps = {
  disableInitialError: false,
  fieldProps: {},
  fieldType: 'string',
  required: false,
  show: true,
  rules: []
};
FormItem.propTypes = {
  dataIndex: _propTypes["default"].string.isRequired,
  disableInitialError: _propTypes["default"].bool,
  fieldProps: _propTypes["default"].object,
  fieldType: _propTypes["default"].oneOf(['boolean', 'image', 'html', 'object', 'list', 'number', 'string', 'select', 'checkbox', 'password']),
  form: _propTypes["default"].object,
  initialValue: _propTypes["default"].any,
  required: _propTypes["default"].bool,
  rules: _propTypes["default"].array,
  title: _propTypes["default"].string,
  valuePropName: _propTypes["default"].string
};
FormItem.displayName = 'FormItem';