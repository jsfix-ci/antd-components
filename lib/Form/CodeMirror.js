"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CodeMirror = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("codemirror/mode/javascript/javascript");

var _reactCodemirror = require("react-codemirror2");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var isJsonString = function isJsonString(value) {
  try {
    var json = JSON.parse(value);
    return _typeof(json) === 'object';
  } catch (e) {
    return false;
  }
};

var prettifyJson = function prettifyJson(json) {
  return _typeof(json) === 'object' ? JSON.stringify(json, undefined, 4) : json;
};

var CodeMirror = (0, _react.forwardRef)(function (props, ref) {
  var onChange = props.onChange,
      lineNumbers = props.lineNumbers,
      indentUnit = props.indentUnit,
      lineSeparator = props.lineSeparator,
      value = props.value;
  return _react["default"].createElement(_reactCodemirror.Controlled, {
    ref: ref,
    onBeforeChange: function onBeforeChange(editor, data, v) {
      onChange(v);
    },
    options: {
      mode: {
        name: 'javascript',
        json: true
      },
      theme: 'idea',
      lineNumbers: lineNumbers,
      indentUnit: indentUnit,
      lineSeparator: lineSeparator
    },
    className: 'hangar-codemirror-form',
    value: prettifyJson(value)
  });
});
exports.CodeMirror = CodeMirror;
CodeMirror.defaultProps = {
  onChange: function onChange() {},
  lineNumbers: true,
  indentUnit: 4,
  lineSeparator: '\n'
};
CodeMirror.propTypes = {
  onChange: _propTypes["default"].func,
  lineNumbers: _propTypes["default"].bool,
  indentUnit: _propTypes["default"].number,
  lineSeparator: _propTypes["default"].string
};