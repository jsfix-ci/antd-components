"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFound = void 0;

var _react = _interopRequireDefault(require("react"));

var _Display = require("../Display");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @return {React.Component}
 */
var NotFound = function NotFound() {
  return _react["default"].createElement(_Display.Display2, {
    className: 'hangar-text-center'
  }, "404 Not Found");
};

exports.NotFound = NotFound;