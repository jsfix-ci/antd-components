"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withForm = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mapPropsToFields = function mapPropsToFields(_ref) {
  var _ref$record = _ref.record,
      record = _ref$record === void 0 ? {} : _ref$record;
  var data = {};
  Object.keys(record).forEach(function (field) {
    data[field] = _antd.Form.createFormField({
      value: record[field]
    });
  });
  return data;
};

var withForm = function withForm(Component) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _config$mapProps = config.mapProps,
      mapProps = _config$mapProps === void 0 ? false : _config$mapProps;
  return function (props) {
    var options = {
      validateMessages: (0, _.useL10n)().Validation
    };

    if (mapProps) {
      options = _objectSpread({}, options, {
        mapPropsToFields: mapPropsToFields
      });
    }

    var Form = _antd.Form.create(options)(Component);

    return _react["default"].createElement(Form, props);
  };
};

exports.withForm = withForm;