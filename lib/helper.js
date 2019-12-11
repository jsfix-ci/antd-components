"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReactChildren = exports.prettifyJson = exports.truncateText = exports.emptyFn = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var emptyFn = function emptyFn() {};

exports.emptyFn = emptyFn;

var truncateText = function truncateText() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var maxLength = arguments.length > 1 ? arguments[1] : undefined;
  if (!maxLength) return text;

  if (text.length > maxLength) {
    var index = maxLength;

    while (text.charAt(index) !== ' ') {
      index--;
    }

    return text.substring(0, index) + ' ...';
  }

  return text;
};

exports.truncateText = truncateText;

var prettifyJson = function prettifyJson(json) {
  var space = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
  return _typeof(json) === 'object' ? JSON.stringify(json, undefined, space) : json;
};

exports.prettifyJson = prettifyJson;

var recursiveMap = function recursiveMap(children, fn) {
  if (_react["default"].Children.count(children) <= 1) {
    return children;
  }

  return _react["default"].Children.map(children, function (child) {
    if (!_react["default"].isValidElement(child)) {
      return child;
    }

    if (child.props.children) {
      child = _react["default"].cloneElement(child, {
        children: recursiveMap(child.props.children, fn)
      });
    }

    return fn(child);
  });
};

var ReactChildren = {
  recursiveMap: recursiveMap
};
exports.ReactChildren = ReactChildren;