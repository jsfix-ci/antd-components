"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _inputNumber = _interopRequireDefault(require("antd/lib/input-number"));

var _input = _interopRequireDefault(require("antd/lib/input"));

var _form = _interopRequireDefault(require("antd/lib/form"));

var _DataGrid = require("./DataGrid");

var _switch = _interopRequireDefault(require("antd/lib/switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @return {React.Component}
 *
 * @constructor
 */
var Column = function Column(props) {
  var renderCell = function renderCell(_ref) {
    var getFieldDecorator = _ref.getFieldDecorator;

    var editable = props.editable,
        editing = props.editing,
        dataIndex = props.dataIndex,
        title = props.title,
        inputType = props.inputType,
        record = props.record,
        index = props.index,
        children = props.children,
        restProps = _objectWithoutProperties(props, ["editable", "editing", "dataIndex", "title", "inputType", "record", "index", "children"]);

    var getInput = function getInput() {
      if (inputType === 'switch') {
        return _react["default"].createElement(_switch["default"], null);
      }

      if (inputType === 'number') {
        return _react["default"].createElement(_inputNumber["default"], null);
      }

      return _react["default"].createElement(_input["default"], null);
    };

    if (editable && editing) {
      var options = {
        initialValue: record[dataIndex],
        valuePropName: inputType === 'switch' ? 'checked' : 'value'
      };
      return _react["default"].createElement("td", restProps, _react["default"].createElement(_form["default"].Item, {
        style: {
          margin: 0
        }
      }, getFieldDecorator(dataIndex, options)(getInput())));
    }

    var getDisplay = function getDisplay() {
      if (inputType === 'switch') {
        return _react["default"].createElement(_switch["default"], {
          disabled: true,
          checked: props.record[dataIndex]
        });
      }

      return children;
    };

    return _react["default"].createElement("td", restProps, getDisplay());
  };

  return _react["default"].createElement(_DataGrid.EditableContext.Consumer, null, renderCell);
};

exports.Column = Column;
Column.defaultProps = {
  editable: true,
  inputType: 'text'
};
Column.propTypes = {
  title: _propTypes["default"].string,
  dataIndex: _propTypes["default"].string,
  editable: _propTypes["default"].bool,
  inputType: _propTypes["default"].oneOf(['text', 'number', 'checkbox', 'selectbox', 'textarea', 'switch'])
};