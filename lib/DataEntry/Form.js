"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("..");

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var hasErrors = function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(function (field) {
    return fieldsError[field];
  });
};
/**
 * @return {React.Component}
 *
 * @constructor
 */


var Form = function Form(props) {
  var record = props.record,
      onSubmit = props.onSubmit,
      disableSaveButtonOnError = props.disableSaveButtonOnError,
      children = props.children,
      restProps = _objectWithoutProperties(props, ["record", "onSubmit", "disableSaveButtonOnError", "children"]);

  var formValidationError = (0, _.useL10n)().Validation.form;
  var AntdFormWrapper = (0, _.withForm)(function (props) {
    var form = props.form;
    var getFieldsError = form.getFieldsError;
    (0, _react.useEffect)(function () {
      form.validateFields();
    }, []);

    var onHandleSubmit = function onHandleSubmit(e) {
      e.preventDefault();
      form.validateFieldsAndScroll(function (error, data) {
        if (error) {
          return _antd.message.error(formValidationError);
        }

        onSubmit(_objectSpread({}, record, {}, data), form);
      });
    };

    var formItems = _react["default"].Children.map(children, function (child) {
      if (disableSaveButtonOnError && 'submit' === child.props.htmlType) {
        return _react["default"].cloneElement(child, {
          disabled: hasErrors(getFieldsError())
        });
      }

      if ('FormItem' === child.type.displayName) {
        return _react["default"].createElement(_.FormItem, _extends({}, child.props, {
          form: form
        }));
      } else {
        return child;
      }
    });

    return _react["default"].createElement(_antd.Form, {
      onSubmit: onHandleSubmit
    }, formItems);
  }, {
    mapProps: true
  });
  return _react["default"].createElement(AntdFormWrapper, _extends({
    record: record
  }, restProps));
};

exports.Form = Form;
Form.defaultProps = {
  disableSaveButtonOnError: false,
  record: {},
  onSubmit: _.emptyFn
};
Form.propTypes = {
  disableSaveButtonOnError: _propTypes["default"].bool,
  record: _propTypes["default"].object,
  onSubmit: _propTypes["default"].func
};