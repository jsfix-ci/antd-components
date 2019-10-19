"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderForm = exports.getDisplay = void 0;

var _react = _interopRequireDefault(require("react"));

var _switch = _interopRequireDefault(require("antd/lib/switch"));

var _popover = _interopRequireDefault(require("antd/lib/popover"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _src = require("../../src");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

  if (fieldType === 'string') {
    if (record.length > maxLength) {
      return record.substring(0, maxLength) + '...';
    }
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
        fieldType = _child$props.fieldType;

    switch (fieldType) {
      case 'string':
        return _react["default"].createElement(_form["default"].Item, {
          label: title
        }, getFieldDecorator(dataIndex)(_react["default"].createElement(_input["default"], null)));

      case 'boolean':
        return _react["default"].createElement(_form["default"].Item, {
          label: title
        }, getFieldDecorator(dataIndex, {
          valuePropName: 'checked'
        })(_react["default"].createElement(_switch["default"], null)));

      case 'html':
        return _react["default"].createElement(_form["default"].Item, {
          label: title
        }, getFieldDecorator(dataIndex)(_react["default"].createElement(_src.Editor, null)));

      default:
        return _react["default"].createElement(_form["default"].Item, {
          label: title
        }, getFieldDecorator(dataIndex)(_react["default"].createElement(_input["default"], null)));
    }
  });
};

exports.renderForm = renderForm;