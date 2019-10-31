"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderForm = exports.getInput = exports.getDisplay = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _antd = require("antd");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    text-decoration: underline;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Link = _styledComponents["default"].span(_templateObject());

var CodeSnippet = function CodeSnippet(_ref) {
  var html = _ref.html,
      link = _ref.link,
      children = _ref.children;

  var content = _react["default"].createElement("pre", {
    className: "language-bash"
  }, html ? _react["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: children
    }
  }) : children);

  return _react["default"].createElement(_antd.Popover, {
    content: content
  }, _react["default"].createElement(Link, null, link));
};

var ImagePreview = function ImagePreview(_ref2) {
  var data = _ref2.data;
  var url, title;
  var MoreLink = null;

  if (!data) {
    return null;
  }

  if (Array.isArray(data) && data.length > 0) {
    url = data[0].url;
    title = data[0].name;
    MoreLink = _react["default"].createElement("span", {
      style: {
        paddingLeft: '5px'
      }
    }, "(", data.length - 1, " ", (0, _.l10n)().Form.moreText, ")");
  } else {
    url = data.url;
    title = data.name;
  }

  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_antd.Popover, {
    content: _react["default"].createElement("img", {
      height: 150,
      src: url
    }),
    title: title
  }, _react["default"].createElement("span", {
    style: {
      cursor: 'pointer'
    }
  }, _react["default"].createElement("img", {
    height: 40,
    src: url
  }))), MoreLink);
};

var getDisplay = function getDisplay(_ref3) {
  var children = _ref3.children,
      fieldType = _ref3.fieldType,
      maxLength = _ref3.maxLength,
      value = _ref3.value;

  switch (fieldType) {
    case 'boolean':
      return _react["default"].createElement(_antd.Switch, {
        disabled: true,
        checked: value
      });

    case 'object':
      return _react["default"].createElement(CodeSnippet, {
        link: 'object'
      }, (0, _.prettifyJson)(value, 2));

    case 'html':
      return _react["default"].createElement(CodeSnippet, {
        link: 'html',
        html: true
      }, value);

    case 'list':
      return _react["default"].createElement(CodeSnippet, {
        link: 'list'
      }, (0, _.prettifyJson)(value, 2));

    case 'image':
      return _react["default"].createElement(ImagePreview, {
        data: value
      });

    case 'string':
      return (0, _.truncateText)(value, maxLength);

    case 'number':
      return value;

    default:
      return children;
  }
};

exports.getDisplay = getDisplay;

var getInput = function getInput(_ref4) {
  var fieldType = _ref4.fieldType,
      _ref4$fieldProps = _ref4.fieldProps,
      fieldProps = _ref4$fieldProps === void 0 ? {} : _ref4$fieldProps,
      restProps = _objectWithoutProperties(_ref4, ["fieldType", "fieldProps"]);

  switch (fieldType) {
    case 'boolean':
      return _react["default"].createElement(_.FormItem, _extends({}, restProps, {
        valuePropName: 'checked'
      }), _react["default"].createElement(_antd.Switch, null));

    case 'image':
      return _react["default"].createElement(_.FormItem, _extends({}, restProps, {
        valuePropName: 'fileList'
      }), _react["default"].createElement(_.Upload, fieldProps));

    case 'html':
      return _react["default"].createElement(_.FormItem, restProps, _react["default"].createElement(_.Editor, null));

    case 'object':
      return _react["default"].createElement(_.FormItem, restProps, _react["default"].createElement(_.CodeMirror, null));

    case 'list':
      return _react["default"].createElement(_.FormItem, restProps, _react["default"].createElement(_.ListField, null));

    case 'number':
      return _react["default"].createElement(_.FormItem, restProps, _react["default"].createElement(_antd.InputNumber, null));

    case 'string':
    default:
      return _react["default"].createElement(_.FormItem, restProps, _react["default"].createElement(_antd.Input, null));
  }
};

exports.getInput = getInput;

var renderForm = function renderForm(props, columns) {
  return _react["default"].Children.map(columns, function (child) {
    var _child$props = child.props,
        title = _child$props.title,
        dataIndex = _child$props.dataIndex,
        fieldType = _child$props.fieldType,
        required = _child$props.required,
        rules = _child$props.rules,
        fieldProps = _child$props.fieldProps;
    return getInput({
      fieldType: fieldType,
      dataIndex: dataIndex,
      title: title,
      form: props.form,
      required: required,
      rules: rules,
      fieldProps: fieldProps
    });
  });
};

exports.renderForm = renderForm;