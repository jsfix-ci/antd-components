"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _row = _interopRequireDefault(require("antd/lib/grid/row"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Toolbar = function Toolbar(props) {
  return _react["default"].createElement(_row["default"], {
    style: {
      width: '100%'
    },
    type: "flex"
  }, props.children);
};

var _default = Toolbar;
exports["default"] = _default;