"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderForm = exports.getDisplay = void 0;

var _react = _interopRequireWildcard(require("react"));

var _switch = _interopRequireDefault(require("antd/lib/switch"));

var _popover = _interopRequireDefault(require("antd/lib/popover"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _ = require("..");

var _helper = require("../helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var getDisplay = function getDisplay(fieldType, record, dataIndex, children, maxLength) {
  if (fieldType === 'boolean') {
    return _react["default"].createElement(_switch["default"], {
      disabled: true,
      checked: record
    });
  }

  if (fieldType === 'object') {
    var content = _react["default"].createElement("pre", {
      className: "language-bash"
    }, JSON.stringify(record, null, 2));

    return _react["default"].createElement(_popover["default"], {
      content: content,
      title: dataIndex
    }, _react["default"].createElement("span", {
      style: {
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }, "object"));
  }

  if (fieldType === 'html') {
    var _content = _react["default"].createElement("pre", {
      className: "language-bash"
    }, _react["default"].createElement("div", {
      dangerouslySetInnerHTML: {
        __html: record
      }
    }));

    return _react["default"].createElement(_popover["default"], {
      content: _content,
      title: dataIndex
    }, _react["default"].createElement("span", {
      style: {
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }, "html"));
  }

  if (fieldType === 'image') {
    if (record.length > 0) {
      return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(_popover["default"], {
        content: _react["default"].createElement("img", {
          height: 150,
          src: record[0].url
        }),
        title: record[0].name
      }, _react["default"].createElement("span", {
        style: {
          cursor: 'pointer',
          padding: 2
        }
      }, _react["default"].createElement("img", {
        height: 40,
        src: record[0].url
      }))), "(", record.length - 1, " more)");
    }

    return _react["default"].createElement(_popover["default"], {
      content: _react["default"].createElement("img", {
        height: 150,
        src: record.url
      }),
      title: record.name
    }, _react["default"].createElement("span", {
      style: {
        cursor: 'pointer'
      }
    }, _react["default"].createElement("img", {
      height: 40,
      src: record.url
    })));
  }

  if (fieldType === 'list') {
    var _content2 = _react["default"].createElement("pre", {
      className: "language-bash"
    }, JSON.stringify(record, null, 2));

    return _react["default"].createElement(_popover["default"], {
      content: _content2,
      title: dataIndex
    }, _react["default"].createElement("span", {
      style: {
        cursor: 'pointer',
        textDecoration: 'underline'
      }
    }, "list"));
  }

  if (fieldType === 'string') {
    return (0, _helper.truncateText)(record, maxLength);
  }

  return children;
};

exports.getDisplay = getDisplay;

var renderForm = function renderForm(props, columns) {
  var getFieldDecorator = props.form.getFieldDecorator;
  return _react["default"].Children.map(columns, function (child) {
    var _child$props = child.props,
        title = _child$props.title,
        dataIndex = _child$props.dataIndex,
        fieldType = _child$props.fieldType,
        config = _child$props.config;

    switch (fieldType) {
      case 'string':
        return _react["default"].createElement(_form["default"].Item, {
          label: title
        }, getFieldDecorator(dataIndex, {
          initialValue: '',
          rules: [{
            required: config.required,
            message: title + ' field is required'
          }]
        })(_react["default"].createElement(_input["default"], null)));

      case 'boolean':
        return _react["default"].createElement(_form["default"].Item, {
          label: title
        }, getFieldDecorator(dataIndex, {
          valuePropName: 'checked',
          initialValue: false,
          rules: [{
            required: config.required,
            message: title + ' field is required'
          }]
        })(_react["default"].createElement(_switch["default"], null)));

      case 'image':
        return _react["default"].createElement(_form["default"].Item, {
          label: title
        }, getFieldDecorator(dataIndex, {
          valuePropName: 'fileList',
          rules: [{
            required: config.required,
            message: title + ' field is required'
          }]
        })(_react["default"].createElement(_.Upload, config)));

      case 'html':
        return _react["default"].createElement(_form["default"].Item, {
          label: title
        }, getFieldDecorator(dataIndex, {
          initialValue: '',
          rules: [{
            required: config.required,
            message: title + ' field is required'
          }]
        })(_react["default"].createElement(_.Editor, null)));

      case 'object':
        return _react["default"].createElement(_form["default"].Item, {
          label: title
        }, getFieldDecorator(dataIndex, {
          initialValue: '',
          rules: [{
            required: config.required,
            message: title + ' field is required'
          }]
        })(_react["default"].createElement(_.CodeMirror, null)));

      case 'list':
        return _react["default"].createElement(_form["default"].Item, {
          label: title
        }, getFieldDecorator(dataIndex, {
          initialValue: [],
          rules: [{
            required: config.required,
            message: title + ' field is required'
          }]
        })(_react["default"].createElement(_.ListField, null)));

      default:
        return _react["default"].createElement(_form["default"].Item, {
          label: title
        }, getFieldDecorator(dataIndex, {
          initialValue: '',
          rules: [{
            required: config.required,
            message: title + ' field is required'
          }]
        })(_react["default"].createElement(_input["default"], null)));
    }
  });
};

exports.renderForm = renderForm;