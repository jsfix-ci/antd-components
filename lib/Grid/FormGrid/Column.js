"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Column = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _renderer = require("../renderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @return {React.Component}
 *
 * @constructor
 */
var Column = function Column(props) {
  var dataIndex = props.dataIndex,
      fieldType = props.fieldType,
      children = props.children,
      maxLength = props.maxLength,
      record = props.record,
      restProps = _objectWithoutProperties(props, ["dataIndex", "fieldType", "children", "maxLength", "record"]);

  if (!dataIndex) {
    return _react["default"].createElement("td", null, children);
  }

  return _react["default"].createElement("td", restProps, (0, _renderer.getDisplay)(fieldType, record[dataIndex], dataIndex, children, maxLength));
};

exports.Column = Column;
Column.defaultProps = {
  type: 'text'
};
Column.propTypes = {
  dataIndex: _propTypes["default"].string,
  fieldType: _propTypes["default"].oneOf(['string', 'object', 'boolean', 'image', 'html'])
};