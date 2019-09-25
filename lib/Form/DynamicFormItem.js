"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DynamicFormItem = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _antd = require("antd");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _nanoid = _interopRequireDefault(require("nanoid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    &:hover {\n      color: #777;\n    }\n    cursor: pointer;\n    position: relative;\n    top: 4px;\n    font-size: 24px;\n    color: #999;\n    transition: all 0.3s;\n    margin-left: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AddButton = (0, _styledComponents["default"])(_antd.Button)(_templateObject());
var DeleteButton = (0, _styledComponents["default"])(_antd.Icon)(_templateObject2());
var firstKey = (0, _nanoid["default"])(10);

var DynamicFormItem = function DynamicFormItem(props) {
  var form = props.form,
      addText = props.addText,
      label = props.label,
      keyFieldName = props.keyFieldName,
      valueFieldName = props.valueFieldName;
  var getFieldDecorator = form.getFieldDecorator,
      getFieldValue = form.getFieldValue;
  getFieldDecorator(keyFieldName, {
    initialValue: [firstKey]
  });
  var keys = getFieldValue(keyFieldName);
  var formItems = keys.map(function (k, index) {
    return _react["default"].createElement(_antd.Form.Item, {
      label: index === 0 ? label : '',
      required: false,
      key: k
    }, _react["default"].createElement("div", {
      style: {
        display: 'flex'
      }
    }, getFieldDecorator("".concat(valueFieldName, "[").concat(k, "]"))(_react["default"].createElement(_antd.Input, null)), keys.length > 1 ? _react["default"].createElement(DeleteButton, {
      type: "minus-circle-o",
      onClick: function onClick() {
        return remove(k);
      }
    }) : null));
  });

  var add = function add() {
    var keys = form.getFieldValue(keyFieldName);
    var nextKeys = keys.concat((0, _nanoid["default"])(10));
    form.setFieldsValue(_defineProperty({}, keyFieldName, nextKeys));
  };

  var remove = function remove(k) {
    var keys = form.getFieldValue(keyFieldName);

    if (keys.length === 1) {
      return;
    }

    form.setFieldsValue(_defineProperty({}, keyFieldName, keys.filter(function (key) {
      return key !== k;
    })));
  };

  return _react["default"].createElement(_react.Fragment, null, formItems, _react["default"].createElement(_antd.Form.Item, null, _react["default"].createElement(AddButton, {
    type: "dashed",
    onClick: add
  }, _react["default"].createElement(_antd.Icon, {
    type: "plus"
  }), " ", addText)));
};

exports.DynamicFormItem = DynamicFormItem;
DynamicFormItem.defaultProps = {
  addText: 'Add field',
  keyFieldName: 'keys',
  valueFieldName: 'values'
};
DynamicFormItem.propTypes = {
  form: _propTypes["default"].object.isRequired,
  addText: _propTypes["default"].string,
  keyFieldName: _propTypes["default"].string,
  valueFieldName: _propTypes["default"].string
};